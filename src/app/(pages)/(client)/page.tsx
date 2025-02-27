"use client";

import React, { useEffect, useState } from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';
import ProductList from '@/shared/components/ProductList';
import Cart from '@/shared/components/Cart';
import Image from 'next/image';
import LogoutButton from '@/shared/components/Logout';


const Page = () => {
  const { data: session, status } = useSession();
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animatingImage, setAnimatingImage] = useState<string | null>(null);



  const toggleCartVisibility = () => {
    setIsCartVisible(!isCartVisible);
  };

  const handleProductClick = (image: string) => {
    setAnimatingImage(image);
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
      setAnimatingImage(null);
    }, 1000);
  };

  return (
    <div className='max-w-7xl mx-auto p-4 relative'>
      <div className='block lg:hidden fixed right-5 bottom-12'>
        <div className="bg-blue-300 rounded-[50%] h-[60px] w-[60px] px-3 cursor-pointer mx-auto flex items-center" onClick={toggleCartVisibility}>
          cart
        </div>
      </div>
      <div className='w-full'>
        <div className="flex justify-between mb-4">
          <div className='flex items-center bg-white p-2 rounded-lg'>
            {session?.user?.image && (
              <Image src={session?.user.image} alt={session?.user.name || 'User'}  width={550} height={550} className='w-10 h-10 rounded-full mr-2' />
            )}
            <span className='mr-4'>{session?.user?.name}</span>
          </div>
          <LogoutButton />
        </div>
        <div className="lg:grid grid-cols-1 lg:grid-cols-4 gap-3">
          <div className='lg:col-span-3 h-full bg-white rounded-[10px] p-3'>
            <ProductList onProductClick={handleProductClick} />
          </div>
          <div className='hidden lg:block lg:col-span-1 h-full bg-white rounded-[10px] p-3'>
            <Cart />
          </div>
        </div>
      </div>
      {isAnimating && animatingImage && (
        <div className="fixed top-0 left-0 w-full h-full pointer-events-none">
          <div className="animate-bounce-to-cart">
            <Image src={animatingImage} alt="Product" width={50} height={50} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;