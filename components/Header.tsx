'use client';

import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  useUser,
} from '@clerk/nextjs';
import React from 'react';

const Header = () => {
  const { user } = useUser();

  return (
    <div className='flex items-center justify-between p-5'>
      {user && (
        <div>
          <h1 className='text-2xl'>
            {user?.firstName}
            {`'s`} Space
          </h1>
        </div>
      )}
      {/* Breadcrumbs */}
      <div>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
};

export default Header;
