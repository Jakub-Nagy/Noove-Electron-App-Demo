import { auth, db } from "../utility/Firebase";
import { Fragment, useEffect } from "react";
import { atom, useRecoilState } from "recoil";

export const userState = atom({
  key: "user",
  default: null,
});

export const loadedState = atom({
  key: "loaded",
  default: false
});

let unsubscribe: (() => void) | null = null;

export const Firebase = (props: any) => {
  const [loaded, setLoaded] = useRecoilState(loadedState);
  const [_, setUser] = useRecoilState(userState);

  useEffect(() => auth.onAuthStateChanged(authUser => {
    console.log(!!authUser);
    if(authUser) {
      unsubscribe = db.collection("users").doc(authUser.uid).onSnapshot(doc => {
        setLoaded(true);
        setUser(doc.data() as any);
      });
    }
    else {
      if(unsubscribe) unsubscribe();

      setUser(null);
      setLoaded(true);
    }
  }), []);

  if(loaded) return <Fragment>{props.children}</Fragment>;
  else return <Fragment>{props.loading}</Fragment>;
};