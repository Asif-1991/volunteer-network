import React, { useContext } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import firebaseConfig from './firebaseConfig';

const Login = () => {
  const {state1, state2 } = useContext(UserContext);
  const [loggedInUser, setLoggedInUser] = state1;
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

  const handleGoogleSignIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
      .then(function (result) {
        const { displayName, email } = result.user;
        const signedInUser = { name: displayName, email }
        setLoggedInUser(signedInUser);
        storeAuthToken();
      }).catch(function (error) {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  }

  const storeAuthToken = () => {
    firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
      .then(function (idToken) {
        sessionStorage.setItem('token', idToken);
        history.replace(from);
      }).catch(function (error) {
        // Handle error
      });
  }

  return (
    <div>
      <div className="text-center">
        <img style={{ height: '60px' }} src="https://i.ibb.co/60VGHLd/Group-1329.png" alt="Volunteer network" />
      </div>

      <div class="w-50 shadow bg-white rounded mx-auto p-5 text-center mt-5">
      <div className="text-center pt-5">
      <h1 class="mb-5">Login With</h1>
        <br />
        <button className="btn btn-primary mt-5 d-block m-auto d-flex" onClick={handleGoogleSignIn}>
          <img style={{ height: '40px' }} src="https://i.imgur.com/qMCPtll.png" alt=""></img>
          <h4 className="m-2">Google Sign in</h4>
        </button>
        <p class="mt-4">Don't have an account  <a href="/">Create an account</a> </p>
      </div>
      </div>
    </div>
  );
};

export default Login;