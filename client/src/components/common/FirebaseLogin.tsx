import { GithubAuthProvider, GoogleAuthProvider, UserCredential, signInWithPopup } from 'firebase/auth';
import { auth } from '../../configs/firebase-config';

const GoogleLogin = (): void => {
  const GoogleProvider = new GoogleAuthProvider();
  signInWithPopup(auth, GoogleProvider)
    .then((result: UserCredential): void => {
      // const credential = GoogleAuthProvider.credentialFromResult(result);
      // const token = credential?.accessToken;
      // const user = result.user;
      console.log('Success!!!');
      console.log(result.providerId);
      // console.log(credential, token, user);
      // setUserData(data);
    })
    .catch((err) => {
      // const errorCode = err.code;
      // const errorMessage = err.message;
      // The email of the user's account used.
      // const email = err.customData.email;
      // The AuthCredential type that was used.
      // const credential = GoogleAuthProvider.credentialFromError(err);
      // console.log('Fail!!!');
      // console.log(errorCode, errorMessage, email, credential);
      console.log(err);
    });
};

const GithubLogin = () => {
  const GithubProvider = new GithubAuthProvider();
  signInWithPopup(auth, GithubProvider)
    .then((result: UserCredential): void => {
      // const credential = GoogleAuthProvider.credentialFromResult(result);
      // const token = credential?.accessToken;
      // const user = result.user;
      console.log('Success!!!');
      console.log(result.providerId);
      // console.log(credential, token, user);
    })
    .catch((err) => {
      // const errorCode = err.code;
      // const errorMessage = err.message;
      // The email of the user's account used.
      // const email = err.customData.email;
      // The AuthCredential type that was used.
      // const credential = GoogleAuthProvider.credentialFromError(err);
      console.log('Fail!!!');
      console.log(err);
      // console.log(errorCode, errorMessage, email, credential);
    });
};

export { GithubLogin, GoogleLogin };
