import React from 'react';
import { Link } from 'react-router-dom';
import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';
import { AuthUserContext } from '../Session';

const Navigation = () => (
  <div>
    <AuthUserContext.Consumer>
      {authUser =>
        authUser ? <NavigationAuth /> : <NavigationNonAuth />
      }
    </AuthUserContext.Consumer>
  </div>
);
const NavigationAuth = () => (
  <React.Fragment>
    <nav className='flex items-center justify-between flex-wrap bg-gray-900 p-6'>
    <div className='flex items-center flex-shrink-0 text-white mr-6'>
    <svg className='fill-current h-8 w-8 mr-2' width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M31.7272727,13 L22.8636364,24.6666667 L29.6,33.5333333 L25.8181818,36.3333333 C21.8236364,31.0833333 15.1818182,22.3333333 15.1818182,22.3333333 L1,41 L53,41 L31.7272727,13 L31.7272727,13 Z" id="Icon"></path>
</svg>
    <span className='font-semibold text-xl tracking-tight'>LocalKnow</span>
  </div>
  <div className='block lg:hidden'>
    <button className='flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white'>
      <svg className='fill-current h-3 w-3' viewBox='0 0 20 20'><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div>
  <div className='w-full block lg:flex lg:items-center lg:w-auto'>
    <div className='text-sm lg:flex-grow'>
    <Link className='block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4' to={ROUTES.LANDING}>Landing
    </Link>
    <Link className='block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4' to={ROUTES.HOME}>
      Home
    </Link>
    <Link className='block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4' to={ROUTES.ACCOUNT}>
      Account
    </Link>
    <Link className='block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4' to={ROUTES.ADMIN}>
      Admin
    </Link>
    <SignOutButton />
    </div>
    </div>
    </nav>
  </React.Fragment>
);

const NavigationNonAuth = () => (
  <React.Fragment>
    <nav className='flex items-center justify-between flex-wrap bg-teal-500 p-6'>
    <div className='flex items-center flex-shrink-0 text-white mr-6'>
    <svg className='fill-current h-8 w-8 mr-2' width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
    <span className='font-semibold text-xl tracking-tight'>Tailwind CSS</span>
  </div>
  <div className='block lg:hidden'>
    <button className='flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white'>
      <svg className='fill-current h-3 w-3' viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div>
  <div className='w-full block lg:flex lg:items-center lg:w-auto'>
    <div className='text-sm lg:flex-grow'>
    <Link className='block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4' to={ROUTES.LANDING}>
      Landing
    </Link>
    <Link className='block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4' to={ROUTES.SIGN_IN}>
      Sign In
    </Link>
    </div>
    </div>
    </nav>
  </React.Fragment>
);

export default Navigation;