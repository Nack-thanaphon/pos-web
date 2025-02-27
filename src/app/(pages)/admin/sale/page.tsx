"use client"
import ExampleTable from '@/shared//components/Table';
import React from 'react';
import Navbar from '@/shared/components/Navbar';
import ComingSoon from '@/shared/components/ComingSoon';

const Page = () => {
  
  return (
    <div className='max-w-7xl mx-auto p-4 gap-3 lg:flex'>
      <Navbar />
      <div className='h-screen bg-white rounded-[10px] p-3 flex-1'>
        <ComingSoon />
      </div>
      {/* <ExampleTable /> */}
    </div>
  );
};

export default Page;