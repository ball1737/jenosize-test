"use client";

import { initializeApp } from "firebase/app";
import {
  FacebookAuthProvider,
  getAuth,
  GoogleAuthProvider,
  isSignInWithEmailLink,
  sendSignInLinkToEmail,
  signInWithEmailLink,
  signInWithPopup,
} from "firebase/auth";
import { useRouter } from "next/navigation";

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
  const dataFromLogin = undefined as { token: any; user: any } | undefined;
  const { setLogin, setUser } = useAuthStore();
  const router = useRouter();

  let errorText = "";

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
        const { email } = error.customData;
        const credential = GoogleAuthProvider.credentialFromError(error);
        errorText = `${errorCode}${errorMessage}${email}${credential}`;
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
        const { email } = error.customData;
        const credential = FacebookAuthProvider.credentialFromError(error);
        errorText = `${errorCode}${errorMessage}${email}${credential}`;
      });
  };
  const loginWithEmail = async () => {
    const actionCodeSettings = {
      url: "http://localhost:3000/login",
      handleCodeInApp: true,
      iOS: { bundleId: "com.example.ios" },
      android: {
        packageName: "com.example.android",
        installApp: true,
        minimumVersion: "12",
      },
      dynamicLinkDomain: "https://kkatana.dev/6RQi",
    };
    sendSignInLinkToEmail(auth, "Thanachai_Kuroh@hotmail.com", actionCodeSettings)
      .then(() => {
        window.localStorage.setItem("emailForSignIn", "Thanachai_Kuroh@hotmail.com");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        errorText = `${errorCode}${errorMessage}`;
      });
  };

  if (isSignInWithEmailLink(auth, "https://hotmail.com.com")) {
    let email = window.localStorage.getItem("emailForSignIn");
    if (!email) {
      email = window.prompt("Please provide your email for confirmation");
    }
    signInWithEmailLink(auth, "Thanachai_Kuroh@hotmail.com", window.location.href)
      .then((result) => {
        console.log(result);
        const { token, user } = result;
        logedIn({ token, user });
        window.localStorage.removeItem("emailForSignIn");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <>
      <div className="flex h-screen items-center w-full justify-center">
        <div className="flex">{dataFromLogin && <label>welcome {dataFromLogin.user.displayName}</label>}</div>

        <button onClick={() => loginWithGoogle()} className="bg-white text-black p-2 m-2 rounded-md">
          LOGIN WITH GOOGLE
        </button>
        <button onClick={() => loginWithFacebook()} className="bg-blue-500 text-black p-2 m-2 rounded-md">
          LOGIN WITH FACEBOOK
        </button>

        <button onClick={() => loginWithEmail()} className="bg-red-300 text-black p-2 m-2 rounded-md">
          LOGIN WITH Email
        </button>

        {errorText !== "" && <label>{errorText}</label>}
      </div>
    </>
  );
}
