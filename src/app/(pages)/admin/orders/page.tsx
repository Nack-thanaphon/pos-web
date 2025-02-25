"use client"
import React from 'react';
import Navbar from '@/shared/components/Navbar';
import OrdersTable from './order.table';

const Page = () => {

  return (
    <div className='max-w-7xl mx-auto p-4 gap-3 flex'>
      <Navbar />
      <div className='h-full bg-white rounded-[10px] p-3 flex-1'>
        <div className="my-3">
          <p className='w-fit px-3 '>รายการสั่งซื้อ</p>
        </div>
        <OrdersTable />
      </div>
    </div>
  );
};

export default Page;