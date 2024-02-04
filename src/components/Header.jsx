import React, { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { addUser, removeUser } from "../utils/UserSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { NETFLIX_IMG } from "../utils/constants";
import Error from "./Error";
const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSignOut = () => {
    
    signOut(auth)
    .then(() => {
      navigate("/");
    })
    .catch((error) => {
      navigate("/error");
    });
  };
  useEffect(() => {
    const unsubscribe=onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, name: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
    
      }
    });
  return ()=>unsubscribe();
  }, []);
  const name= useSelector(store=>store?.user?.name);
  console.log(name);
  
  return (
    <div className="z-10 absolute text-white flex bg-gradient-to-b from-transparent from-black h-[8vh] w-[100vw] justify-between">
      <div className="w-[10rem]">
        <img
          src={NETFLIX_IMG}
          alt=""
        />
      </div> 
    {( <div className="m-2">
     <p className="inline"> {name} </p>
     <button className="mr-6 bg-red-500 p-2 rounded text-white" onClick={handleSignOut}>
        SignOut
      </button>
     </div>)}
    </div>
  );
};

export default Header;
