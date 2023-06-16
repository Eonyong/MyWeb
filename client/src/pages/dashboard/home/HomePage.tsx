import * as React from 'react';
import { auth } from '../../../configs/firebase-config';

const HomePage = () => {
  const User = auth.currentUser;
  return <div>{User?.displayName}</div>;
};

export default HomePage;
