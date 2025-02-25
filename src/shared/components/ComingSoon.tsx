import { signIn } from 'next-auth/react';
import Image from 'next/image'
import React from 'react'

const ComingSoon = () => {


    return (
        <div className='max-w-7xl mx-auto p-4'>
            <div className="flex flex-col items-center justify-center h-screen">
                <div className="mb-5 text-center">
                    <h1 className='text-3xl font-bold'>Comming Soon !</h1>
                    <small className='text-slate-500'>Simply as Effective</small>
                </div>
                <Image
                    className='cursor-pointer roun-[10px]'
                    src="/image/coming.svg" alt="alt" width={450} height={450} />
            </div>
        </div>
    )
}

export default ComingSoon