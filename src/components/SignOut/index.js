import React from 'react';
import { withFirebase } from '../Firebase';


const SignOutButton = ({ firebase }) => (
  <button className='inline-block text-sm px-4 py-2 leading-none border rounded-full text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0' type='button' onClick={firebase.doSignOut}>
    Sign Out
  </button>
);
export default withFirebase(SignOutButton);