import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import Home from "../Home/Home";
import { useDispatch } from 'react-redux';
import {setUserInfo} from '../../Slices/userInfoSlice';
const LoginContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
`;
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: "redirect",
  // We will display Google and Facebook as auth providers.
  signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
  callbacks: {
    // Avoid redirects after sign-in.
    signInSuccessWithAuthResult: () => false,
  },
};
const LoginPage = () => {
  const dispatch = useDispatch(null);
  const [isSignedIn, setIsSignedIn] = useState(false); // Local signed-in state.
  // Listen to the Firebase Auth state and set the local state.
  useEffect(() => {
    const unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged((user) => {
        dispatch(setUserInfo(user));
        setIsSignedIn(!!user);
      });
    return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
  }, []);
  if (!isSignedIn) {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Login</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <LoginContainer>
            <div className="pa3 shadow-1 br2">
              <p>Please sign-in:</p>
              <StyledFirebaseAuth
                uiConfig={uiConfig}
                firebaseAuth={firebase.auth()}
              />
            </div>
          </LoginContainer>
        </IonContent>
      </IonPage>
    );
  }
  return (
    <div>
      <Home />
    </div>
  );
};

export default LoginPage;
