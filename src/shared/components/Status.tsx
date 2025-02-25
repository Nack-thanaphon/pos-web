import Image from 'next/image'
import React from 'react'

const Status = () => {
    return (
        <div className='flex justify-between bg-gradient-to-r  from-pink-400 to-pink-700 rounded-md shadow-sm p-3  mb-3'>
            <div className='my-auto'>
                <p> สถานะ : กำลังจัดส่ง</p>
                <small className='text-white' >หมายเลขออเดอร์</small>
                <h2 className='font-bold text-white text-[3rem]'>765940</h2>
            </div>
            <Image src="/4.gif" alt="alt" width={120} height={90} />
        </div>
    )
}

export default Status