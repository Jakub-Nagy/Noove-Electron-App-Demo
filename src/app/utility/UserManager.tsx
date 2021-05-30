// Firebase and state management
import { auth } from "./FirebaseConfiguration";
import { Fragment, useEffect, useState } from "react";
import { atom, useRecoilState } from "recoil";
import { Loader } from "../components/Loader";

export const UIDstate = atom({
  key: "UID",
  default: null,
});
export const UDstate = atom({
  key: "UD",
  default: null,
});

export const UserManager = (props: { children: any }) => {
  const [, setUID] = useRecoilState(UIDstate);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUID(user?.uid as any);
      setLoading(false);
    });
  });

  if (loading) {
    return <Loader />;
  } else return <Fragment>{props.children}</Fragment>;
};