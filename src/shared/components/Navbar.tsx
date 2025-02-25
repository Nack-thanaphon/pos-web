import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const Navbar = () => {
    const { data: session } = useSession();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const MenuItems = [
        {
            name: 'หน้าหลัก',
            location: "/admin"
        },
        {
            name: 'จัดการออเดอร์',
            location: "/admin/orders"
        },
        {
            name: 'จัดการ Sale',
            location: "/admin/sale"
        },
        {
            name: 'จัดการ Supplier',
            location: "/admin/suppliers"
        },
        {
            name: 'จัดการหมวดหมู่',
            location: "/admin/category"
        },
        {
            name: 'จัดการเจ้าหน้าที่',
            location: "/admin/user"
        },
        {
            name: 'Log ผู้ใช้งาน',
            location: "/admin/logs"
        }
    ];

    return (
        <div className={`h-full bg-blue-800 h-100 rounded-[10px] p-3 transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:w-1/4`}>
            <div className="flex flex-col items-center justify-center py-3">
                <div className="w-[80px] h-[80px] rounded-[50%] overflow-hidden flex items-center">
                    {
                        session?.user.image && (
                            <Image src={session?.user.image ?? ""} width={550} height={550} alt='' className='w-full h-full object-cover' />
                        )
                    }
                </div>
                <div className="py-3 my-auto text-center">
                    <p className='text-2xl text-white'>{session?.user.name}</p>
                    <p className='w-fit px-3 bg-blue-400 rounded-[20px] mx-auto mt-3'>{session?.user.role}</p>
                </div>
                <button onClick={toggleMenu} className='mt-3 bg-gray-200 p-2 rounded-lg lg:hidden'>
                    {isMenuOpen ? 'Hide Menu' : 'Show Menu'}
                </button>
            </div>
            <div className="mt-3">
                <ul className="space-y-4 text-center">
                    {
                        MenuItems.map((item, index) => (
                            <Link key={index} href={item.location} >
                                <li key={index} className={cn("cursor-pointer p-2 py-3 mb-3 text-white rounded-lg", {
                                    'bg-blue-700': pathname.startsWith(item.location) && index !== 0
                                })}>
                                    {item.name}
                                </li>
                            </Link>
                        ))
                    }
                    <hr />
                    <li
                        onClick={() => signOut()}
                        className="cursor-pointer hover:bg-blue-300 p-2 py-3 bg-blue-300 rounded-lg">
                        ออกจากระบบ
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;