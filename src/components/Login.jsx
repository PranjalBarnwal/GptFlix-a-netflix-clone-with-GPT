import React, { useState, useRef } from "react";
import Header from "./Header";
import { isValid } from "./../utils/validate";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { updateProfile } from "firebase/auth"; 
import { auth } from "./../firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/UserSlice";

const Login = () => {

  const dispatch=useDispatch();
  const navigate=useNavigate();
  const [isNewUser, setIsNewUser] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  
  const img =
    "https://assets.nflxext.com/ffe/siteui/vlv3/9134db96-10d6-4a64-a619-a21da22f8999/a449fabb-05e4-4c8a-b062-b0bec7d03085/IN-en-20240115-trifectadaily-perspective_alpha_website_medium.jpg";

  const handleInput = () => {
    const error = isValid(email.current.value, password.current.value);
    setErrorMessage(error);

    if (error) return;

    if (isNewUser) {
      
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value
          }).then(() => {
            const {uid,email,displayName} = auth.currentUser;
            dispatch(addUser({uid:uid,email:email,name:displayName}));
            console.log("success logged-",displayName);
          }).catch((error) => {
            console.log(error);
            navigate("/error")
          });
          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          
          if(errorCode=="auth/email-already-in-use")
          setErrorMessage("Email already in use. SignIn instead");
        });
    } else {
      
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
         
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage);
          if(errorCode=="auth/invalid-credential")
          setErrorMessage("Invalid Username or Password");
        });
    }
  };
  return (
    <div
      className="bg-cover bg-center h-screen"
      style={{ backgroundImage: `url(${img})` }}
    >
      <Header />
      <div className="h-full w-full  flex items-center justify-center  text-white ">
        <form
          onSubmit={(e) => e.preventDefault()}
          action=""
          className="text-black absolute w-[25vw] min-w-80 p-12 flex flex-col bg-black bg-opacity-80"
        >
          <h1 className="text-3xl font-semibold p-2 text-white">
            {isNewUser ? "Sign Up" : "Log In"}
          </h1>

          {isNewUser && (
            <input
              ref={name}
              type="text"
              className="p-2 m-2 rounded-sm"
              placeholder="Name"
            />
          )}
          <input
            ref={email}
            type="text"
            className="p-2 m-2 rounded-sm"
            placeholder="E-mail"
          />

          <input
            ref={password}
            type="password"
            className="p-2 m-2 rounded-sm"
            placeholder="Password"
          />
          {errorMessage && <p className="text-red-600">{errorMessage}</p>}
          <button
            className="p-2 m-2 bg-red-600 rounded-md"
            onClick={handleInput}
          >
            {isNewUser ? "Sign Up" : "Log In"}
          </button>

          <p className="p-2 m-2 text-white">
            {!isNewUser ? "New to NetfLix?" : "Already a User?"}{" "}
            <strong
              className="cursor-pointer"
              onClick={() => {
                setIsNewUser(!isNewUser);
                setErrorMessage("");
              }}
            >
              {!isNewUser ? "Sign Up" : "Log In"}
            </strong>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
