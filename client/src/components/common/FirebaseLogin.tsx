import { GithubAuthProvider, GoogleAuthProvider, UserCredential, createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
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
    .catch(err => {
      console.log(err.code);
      // switch (err.code) {
      //   case 'auth/weak-password':
      //     break;
      //   case 'auth/invalid-email':
      //     break;
      //   case 'auth/email-already-in-use':
      //     break;
      // }
    });
};

const GithubLogin = (): void => {
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
    .catch(err => {
      console.log(err.code);

      // switch (err.code) {
      //   case 'auth/weak-password':
      //     break;
      //     case 'auth/invalid-email':
      //     break;
      //     case 'auth/email-already-in-use':
      //     break;
      // }
    });
};

const EmailSignUp = (email: string, password: string): void => {

  createUserWithEmailAndPassword(auth, email, password)
  .then((result: UserCredential): void => {
    console.log(result);
  })
  .catch(err => {
    console.log(err.code);
    // switch (err.code) {

      // case 'auth/weak-password':
      //   break;
      // case 'auth/invalid-email':
      //   break;
      // case 'auth/email-already-in-use':
      //   break;
      // }
  });
}

export { GithubLogin, GoogleLogin, EmailSignUp };
