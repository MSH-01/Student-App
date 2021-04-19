import firebase from "firebase";
import db from "../config/firebase";
import { orderBy, groupBy, values } from "lodash";
const PUSH_ENDPOINT = "https://exp.host/--/api/v2/push/send";

export const updateEmail = email => {
  return { type: "UPDATE_EMAIL", payload: email };
};

export const updatePassword = password => {
  return { type: "UPDATE_PASSWORD", payload: password };
};

export const updateUsername = username => {
  return { type: "UPDATE_USERNAME", payload: username };
};

export const updateBio = bio => {
  return { type: "UPDATE_BIO", payload: bio };
};

export const updatePhoto = photo => {
  return { type: "UPDATE_PHOTO", payload: photo };
};

// login function
export const login = () => {
  return async (dispatch, getState) => {
    try {
      // assign variables
      const { email, password } = getState().user;
      // firebase function with given variables
      const response = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
      dispatch(getUser(response.user.uid));
    } catch (e) {
      alert(e);
    }
  };
};

// get user data function
export const getUser = (uid, type) => {
  return async (dispatch, getState) => {
    try {
      // query firebase where document name equals uid
      const userQuery = await db
        .collection("users")
        .doc(uid)
        .get();
      let user = userQuery.data();

      // dependant on route set payload for different paths
      if (type === "LOGIN") {
        dispatch({ type: "LOGIN", payload: user });
      } else {
        dispatch({ type: "GET_PROFILE", payload: user });
      }
    } catch (e) {
      alert(e);
    }
  };
};

// update user function
export const updateUser = () => {
  return async (dispatch, getState) => {
    // set variables
    const { uid, username, bio, photo } = getState().user;
    try {
      // update the user document with new data
      db.collection("users")
        .doc(uid)
        .update({
          username: username,
          bio: bio,
          photo: photo
        });
    } catch (e) {
      alert(e);
    }
  };
};

export const signup = () => {
  return async (dispatch, getState) => {
    try {
      const { email, password, username, bio } = getState().user;
      const response = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
      if (response.user.uid) {
        const user = {
          uid: response.user.uid,
          email: email,
          username: username,
          bio: bio,
          photo: ""
        };
        // add the user to the database (not firebase auth)
        db.collection("users")
          .doc(response.user.uid)
          .set(user);
        dispatch({ type: "LOGIN", payload: user });
      }
    } catch (e) {
      alert(e);
    }
  };
};
