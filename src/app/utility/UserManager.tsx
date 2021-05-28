// Firebase and state management
import { auth, db } from "./FirebaseConfiguration";
import { Fragment, useEffect } from "react";
import { atom, useRecoilState } from "recoil";
import { Loader } from "../components/Loader";

export const userState = atom({
  key: "user",
  default: null,
});

export const loadedState = atom({
  key: "loaded",
  default: false
});

let unsubscribe: (() => void) | null = null;

export const UserManager = (props: any) => {
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
  else return <Loader />;
};