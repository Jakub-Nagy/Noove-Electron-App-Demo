// React Dependencies
import { Fragment } from "react";
import { Redirect } from "react-router-dom";
import { atom, useRecoilState } from "recoil";

// Firebase and state management
import { auth, db, functions } from "../utility/FirebaseConfiguration";
import { useState } from "react";
import { userState } from "../utility/UserManager";

// Components
import { Button } from '../components/Buttons';
import {
  DateInput,
  SelectInput,
  EmailInput,
  PasswordInput,
  PasswordVerify,
  TextArea,
  TextInput,
  UsernameInput,
} from '../components/Inputs';
import SkillPicker from '../components/SkillPicker';
import { InstructionSet } from '../components/TextElements';

const formPage = atom({
  key: "formPage",
  default: 1,
});

export const selectedTags = atom({
  key: "selectedTags",
  default: Array<String>(),
});

const formData = atom({
  key: "formData",
  default: {
    username: "",
    usernameValid: Boolean(),

    email: "",
    emailValid: Boolean(),

    password: "",
    passwordValid: Boolean(),

    firstName: "",
    lastName: "",

    birthDate: "",

    occupation: "",
    bio: "",
    edu: "",
  },
});

const PageOne = () => {
  const [page, setPage] = useRecoilState(formPage);
  const [formD, setFormD] = useRecoilState(formData);

  if (page === 1) {
    return (
      <Fragment>
        {/* Step instructions */}
        <InstructionSet
          title="Set up your account"
          subtitle="Sign Up"
          currentSteps={page}
          totalSteps={4}
        />

        {/* Username */}
        <UsernameInput
          className="stretch"
          topLabel="Username"
          valueIn={formD.username}
          valueOut={(value: string) => {
            setFormD({ ...formD, username: value });
          }}
          valid={(value: boolean) => {
            setFormD({ ...formD, usernameValid: value });
            console.log(value);
          }}
          bottomLabel="This will be your unique handle on Noove.com"
        />

        {/* Email */}
        <EmailInput
          className="stretch"
          topLabel="Email address"
          valueIn={formD.email}
          valueOut={(object: any) => {
            setFormD({
              ...formD,
              email: object.value,
              emailValid: object.valid,
            });
          }}
        />

        {/* Password */}
        <PasswordInput
          topLabel="Password"
          valueIn={formD.password}
          valueOut={(value: string) => {
            setFormD({ ...formD, password: value });
          }}
          className="stretch"
        />

        {/* Password Verify*/}
        <PasswordVerify
          valueIn={formD.password}
          valid={(value: any) => {
            setFormD({ ...formD, passwordValid: value });
          }}
        />

        {/* Continue button */}
        <Button
          label="Continue"
          className="button-primary right bottom-margin"
          disabled={
            !(formD.emailValid && formD.passwordValid && formD.usernameValid)
          }
          onClick={function () {
            setPage(page + 1);
          }}
        />
      </Fragment>
    );
  } else return null;
};

const PageTwo = () => {
  const [page, setPage] = useRecoilState(formPage);
  const [formD, setFormD] = useRecoilState(formData);

  if (page === 2) {
    return (
      <Fragment>
        {/* Step instructions */}
        <InstructionSet
          title="Fill in your details"
          subtitle="Sign Up"
          currentSteps={page}
          totalSteps={4}
        />

        {/* First name */}
        <TextInput
          className="left"
          topLabel="First name"
          placeholder="John"
          valueIn={formD.firstName}
          valueOut={(value: string) => {
            setFormD({ ...formD, firstName: value });
          }}
        />

        {/* Last Name */}
        <TextInput
          className="right"
          topLabel="Last name"
          placeholder="Cena"
          valueIn={formD.lastName}
          valueOut={(value: string) => {
            setFormD({ ...formD, lastName: value });
          }}
        />

        {/* Date of birth */}
        <DateInput
          topLabel="Birth Date"
          valueIn={formD.birthDate}
          valueOut={(value: string) => {
            setFormD({ ...formD, birthDate: value });
          }}
        />

        {/* Occupation */}
        <SelectInput
          className="right"
          topLabel="Occupation"
          placeholder="Select your occupation"
          dropdownItems={["Student", "Teacher", "Professional"]}
          valueIn={formD.occupation}
          valueOut={(value: string) => {
            setFormD({ ...formD, occupation: value });
          }}
        />

        {/* Name of educational institution */}
        <TextInput
          className="stretch"
          topLabel="Name of educational institution"
          placeholder="Example School"
          valueIn={formD.edu}
          valueOut={(value: string) => {
            setFormD({ ...formD, edu: value });
          }}
        />

        {/* Back button */}
        <Button
          label="Back"
          className="button-secondary left bottom-margin"
          onClick={function () {
            setPage(page - 1);
          }}
        />

        {/* Continue button */}
        <Button
          label="Continue"
          className="button-primary right bottom-margin"
          disabled={
            formD.firstName === "" ||
            formD.lastName === "" ||
            formD.birthDate === "" ||
            formD.occupation === "" ||
            formD.edu === ""
          }
          onClick={function () {
            setPage(page + 1);
          }}
        />
      </Fragment>
    );
  } else return null;
};

const PageThree = () => {
  const [page, setPage] = useRecoilState(formPage);
  const [formD, setFormD] = useRecoilState(formData);

  if (page === 3) {
    return (
      <Fragment>
        {/* Step instructions */}
        <InstructionSet
          title="Describe yourself"
          subtitle="Sign Up"
          currentSteps={page}
          totalSteps={4}
        />

        {/* Your Bio */}
        <TextArea
          topLabel="Your bio"
          valueIn={formD.bio}
          className="stretch"
          placeholder="Hello I'm a Noove student..."
          valueOut={(value: string) => {
            setFormD({ ...formD, bio: value });
          }}
        />

        {/* Back button */}
        <Button
          label="Back"
          className="button-secondary left bottom-margin"
          onClick={function () {
            setPage(page - 1);
          }}
        />

        {/* Continue button */}
        <Button
          label="Continue"
          className="button-primary right bottom-margin"
          disabled={formD.bio === ""}
          onClick={function () {
            setPage(page + 1);
          }}
        />
      </Fragment>
    );
  } else return null;
};

const PageFour = () => {
  const [page, setPage] = useRecoilState(formPage);
  const [formD] = useRecoilState(formData);
  const [history, setHistory] = useState(false);

  const register = functions.httpsCallable("register");

  const RegisterUser = async () => {
    const docs = await db
      .collection("users")
      .where("username", "==", formD.username)
      .get();
    if (docs.size !== 0) throw new Error("Username no longer available");

    await register({
      email: formD.email,
      password: formD.password,

      username: formD.username,
      firstName: formD.firstName,
      lastName: formD.lastName,
      birthDate: formD.birthDate,

      bio: formD.bio,
      edu: formD.edu,
    });

    console.log("Registered");

    await auth.signInWithEmailAndPassword(formD.email, formD.password);
    console.log("Logged in");
    setHistory(true);
  };
  if(history) return <Redirect to={"/"} />

  if (page === 4) {
    return (
      <Fragment>
        {/* Step instructions */}
        <InstructionSet
          title="Pick your skills"
          subtitle="Sign Up"
          currentSteps={page}
          totalSteps={4}
        />

        {/* Skill picker */}
        <SkillPicker />

        {/* Back button */}
        <Button
          label="Back"
          className="button-secondary left bottom-margin"
          onClick={function () {
            setPage(page - 1);
            console.log("4 going back");
          }}
        />

        {/* Continue button */}
        <Button
          label="Finish Up"
          className="button-primary right bottom-margin"
          onClick={function () {
            RegisterUser();
          }}
        />

        {/* TOS agreement */}
        <p className="TOS right">
          By clicking this button you agree to our
          <a href="https://noove.org/tos"> Terms of Service</a>
        </p>
      </Fragment>
    );
  } else return null;
};

const Register = () => {
  const [user] = useRecoilState(userState);
  if(user) return <Redirect to={"/"} />;

  return (
    <div className="form-container">
      <PageOne />
      <PageTwo />
      <PageThree />
      <PageFour />
    </div>
  );
};

export default Register;