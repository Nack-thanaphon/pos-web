"use client"
import React from 'react';
import Navbar from '@/shared/components/Navbar';
import LogsTable from './logs.table';

const Page = () => {

  return (
    <div className='max-w-7xl mx-auto p-4 gap-3 lg:flex'>
      <Navbar />
      <div className='h-full bg-white rounded-[10px] p-3 flex-1'>
        <div className="my-3">
          <p className='w-fit px-3 '>บันทึกการใช้งาน</p>
        </div>
        <LogsTable />
      </div>
    </div>
  );
};

export default Page;