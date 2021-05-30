import { useRecoilState } from "recoil";
import { useEffect, useState } from "react";
import { auth, db } from "../utility/FirebaseConfiguration";
import { UIDstate } from "../utility/UserManager";
import { Button } from '../components/Buttons';
import { Loader } from "../components/Loader";


const App = () => {
  const [UID] = useRecoilState(UIDstate);
  const [userData, setUserData] = useState();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    db.collection("users")
      .doc(UID as any)
      .onSnapshot((doc) => {
        setUserData(doc.data() as any);
        setLoading(false);
      });
  });

  if (!loading) {
    return (
        <div className="form-container" id="app">
            {/* Welcome message */}
            <h2 className="stretch">Hello fellow user! Thank you for logging in. This is your private data:</h2>

            {/* User data */}
            <h3>Username: {(userData as any).username}</h3>
            <h3>Email: {(userData as any).email}</h3>
            <h3>Name and surname: {(userData as any).firstName} {(userData as any).lastName}</h3>
            <h3>Birth date: {(userData as any).birthDate}</h3>

            {/* Log Out button */}
            <Button
                label="Log Out"
                className="button-primary stretch"
                onClick={function () {
                  auth.signOut()
                }}
                style={{ marginTop: 60 }}
            />
        </div>
    );
  } else return <Loader />;
};

export default App;