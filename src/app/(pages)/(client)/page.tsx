"use client";

import React from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';
import ProductList from '../../shared/components/ProductList';
import Cart from '../../shared/components/Cart';

const Page = () => {
  const { data: session } = useSession();

  const handleSignIn = () => {
    signIn('google', { callbackUrl: window.location.href });
  };

  if (session) {
    console.log('session', session)
  }
  if (!session) {
    return (
      <div className='max-w-7xl mx-auto p-4'>
        <div className="flex flex-col items-center justify-center h-screen">
          <h1 className='text-3xl mb-4'>Please sign in to access the page</h1>
          <button onClick={handleSignIn} className='bg-blue-500 text-white p-2 rounded-lg'>
            Sign In
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className='max-w-7xl mx-auto p-4 '>
      <div className='w-full'>
        <div className="flex justify-between items-center  mb-4">
          <div className='flex items-center bg-white p-2 rounded-lg'>
            {session.user?.image && (
              <img src={session.user.image} alt={session.user.name || 'User'} className='w-10 h-10 rounded-full mr-2' />
            )}
            <span className='mr-4'>{session.user?.name}</span>
          </div>
          <button onClick={() => signOut()} className='bg-red-500 text-white p-2 rounded-lg'>
            Sign Out
          </button>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-3">
          <div className='lg:col-span-3 h-full bg-white rounded-[10px] p-3'>
            <ProductList />
          </div>
          <div className='lg:col-span-1 h-full bg-white rounded-[10px] p-3'>
            <Cart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;