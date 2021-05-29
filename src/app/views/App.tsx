import { useRecoilState } from "recoil";
import { auth } from "../utility/FirebaseConfiguration";
import { Redirect } from "react-router";
import { userState } from "../utility/UserManager";
import { Button } from '../components/Buttons';

const App = (props: any) => {
  const [user] = useRecoilState(userState);

  if(!user) {
    return <Redirect to={"/login"} />;
  }
  else return (
    <div className="form-container" id="app">
      <h2 className="stretch">Hello fellow user! Thank you for logging in. This is your private data:</h2>
      <h3>Username: {(user as any).username}</h3>
      <h3>Email: {(user as any).email}</h3>
      <h3>Name and surname: {(user as any).firstName} {(user as any).lastName}</h3>
      <h3>Birth date: {(user as any).birthDate}</h3>

      {/* Log Out button */}
      <Button
          label="Log Out"
          className="button-primary stretch bottom-margin"
          onClick={function () {
            auth.signOut()
          }}
      />
    </div>
  );
};

export default App;