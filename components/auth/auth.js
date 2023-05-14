import { useRouter } from "next/router";
import { auth } from "./firebase";
import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

const GoogleLogin = () => {
  const [user] = useAuthState(auth);
  const router = useRouter();
  const googleAuth = new GoogleAuthProvider();

  const login = async () => {
    const result = await signInWithPopup(auth, googleAuth);
    if (result.user) {
      router.push("/user");
    }
  };

  useEffect(() => {
    if (user) {
      console.log(user);
    }
  }, [user]);

  return (
    <div className="flex justify-center items-center flex-col gap-20 h-screen">
      <div className="flex justify-center items-center flex-col gap-20 h-screen">
        <h1 className="text-4xl">Sign Up & Start writing you own blogs ...</h1>
        <button
          onClick={login}
          className="text-xl text-white px-10 py-4 rounded-3xl bg-black"
        >
          Sign-Up
        </button>
        {/* <div className="text-xl flex flex-col gap-8">
          <div>
            <h2>{user ? "Welcome, " + user.displayName : ""}</h2>
            <h2>{user ? "E-Mail : " + user.email : ""}</h2>
          </div>
          <button
            onClick={() => auth.signOut()}
            className="text-xl text-white px-10 py-4 rounded-3xl bg-black"
          >
            Log out
          </button>
        </div> */}
      </div>
    </div>
  );
};

// export default GoogleLogin;

// import { auth } from "./firebase";
// import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
// import { useEffect } from "react";
// import { useAuthState } from "react-firebase-hooks/auth";

// const GoogleLogin = () => {
//   const [user, setuser] = useAuthState(auth);
//   const googleAuth = new GoogleAuthProvider();
//   const login = async () => {
//     const result = await signInWithPopup(auth, googleAuth);
//   };
//   useEffect(() => {
//     console.log(user);
//   }, [user]);
//   return (

//   );
// };
export default GoogleLogin;
