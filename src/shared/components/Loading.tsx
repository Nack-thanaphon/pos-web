import { cn } from '@/lib/utils';
import { signIn, useSession } from 'next-auth/react';
import Image from 'next/image'
import React from 'react'

const Loading = () => {
    const { status } = useSession();


    return (<></>
        // <div className={cn("max-w-7xl mx-auto p-4 hidden", {
        //     'block': status === "loading"
        // })}>
        //     <div className="flex flex-col items-center justify-center h-screen">
        //         <div className="mb-5 text-center">
        //             <small className='text-slate-500'>Loading.....</small>
        //         </div>
        //     </div>
        // </div>
    )
}

export default Loading