import { useRecoilState } from "recoil";
import { auth } from "../utility/FirebaseConfiguration";
import { Redirect } from "react-router";
import { userState } from "../utility/UserManager";

const App = (props: any) => {
  const [user] = useRecoilState(userState);

  if(!user) {
    return <Redirect to={"/login"} />;
  }
  else return (
    <div>
      <h1>User data:</h1>
      <h2>Username: {(user as any).username}</h2>
      <h2>Email: {(user as any).email}</h2>
      <h2>First name: {(user as any).firstName}</h2>
      <h2>Last name: {(user as any).lastName}</h2>
      <h2>Birth date: {(user as any).birthDate}</h2>
      <button onClick={() => auth.signOut()}>Logout</button>
    </div>
  );
};

export default App;