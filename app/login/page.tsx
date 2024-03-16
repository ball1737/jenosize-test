"use client";

import { initializeApp } from "firebase/app";
import {
  FacebookAuthProvider,
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { useRouter } from "next/navigation";
import type { FormEvent } from "react";
import { useState } from "react";

import { useAuthStore } from "@/store/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB0E5t0uZnz6R0PXQuOR7DVx7we2Gb-Gqg",
  authDomain: "jenosize-bc15f.firebaseapp.com",
  projectId: "jenosize-bc15f",
  storageBucket: "jenosize-bc15f.appspot.com",
  messagingSenderId: "77726164123",
  appId: "1:77726164123:web:0a68835f35d4c9fd69523e",
};
// const app = initializeApp(firebaseConfig);
initializeApp(firebaseConfig);

export default function Login() {
  const auth = getAuth();
  const { setLogin, setUser } = useAuthStore();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [errorText, setErrorText] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const router = useRouter();

  const logedIn = async (data: any) => {
    const user = {
      token: data.token,
      accessToken: data.user.stsTokenManager.accessToken,
      displayName: data.user.displayName,
      email: data.user.email,
      photoURL: data.user.photoURL,
      expirationTime: data.user.stsTokenManager.expirationTime,
      providerId: data.user.providerData[0].providerId,
      uid: data.user.uid,
    };
    setUser(user);
    setLogin(user);
    router.push("/");
  };

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    console.log(email);
    console.log(password);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const { user } = userCredential;
        const token = user.accessToken;
        console.log(userCredential);

        setIsLoading(false);
        logedIn({ token, user });
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorText(`${errorCode}${errorMessage}`);
        setIsLoading(false);
      });
  }

  const loginWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        const { user } = result;
        console.log({ token, user });
        logedIn({ token, user });
      })
      .catch((error: any) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const { email: emailFromFirebase } = error.customData;
        const credential = GoogleAuthProvider.credentialFromError(error);
        setErrorText(`${errorCode}${errorMessage}${emailFromFirebase}${credential}`);
      });
  };
  const loginWithFacebook = async () => {
    const provider = new FacebookAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = FacebookAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        const { user } = result;
        console.log({ token, user });
        logedIn({ token, user });
      })
      .catch((error: any) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const { email: emailFromFirebase } = error.customData;
        const credential = FacebookAuthProvider.credentialFromError(error);
        setErrorText(`${errorCode}${errorMessage}${emailFromFirebase}${credential}`);
      });
  };

  return (
    <>
      <div className="flex flex-col h-screen items-center w-full justify-center">
        <div>Login</div>
        <form onSubmit={onSubmit}>
          <div className="">
            <label>Email</label>
            <input
              type="text"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="text-black p-3 m-1"
            />
          </div>
          <div className="">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="text-black p-3 m-1"
            />
          </div>
          <div className=" flex items-center justify-center mt-5">
            <button
              type="submit"
              disabled={isLoading}
              className="bg-transparent border-spacing-1 border-2 border-green-500 text-green-500 p-1 rounded-md hover:bg-green-500 active:bg-green-700 hover:text-white"
            >
              {isLoading ? "Loading..." : "LOGIN"}
            </button>
          </div>
        </form>
        <div></div>
        <div></div>
        <div></div>
        <div>
          <button onClick={() => loginWithGoogle()} className="bg-white text-black p-2 m-2 rounded-md">
            LOGIN WITH GOOGLE
          </button>
        </div>
        <div>
          <button onClick={() => loginWithFacebook()} className="bg-blue-500 text-black p-2 m-2 rounded-md">
            LOGIN WITH FACEBOOK
          </button>
        </div>

        {errorText !== "" && <label>{errorText}</label>}
      </div>
    </>
  );
}
