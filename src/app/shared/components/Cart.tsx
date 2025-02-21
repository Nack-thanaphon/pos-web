"use client"

import { useCartStore } from '@/app/store/cart.store';
import Image from 'next/image';
import React from 'react';

interface CartItem {
    id: number;
    name: string;
    image: string;
    price: number;
    quantity: number;
}

export default function Cart() {
    const { cart, removeFromCart, addToCart, clearCart } = useCartStore();

    const handleIncrement = (item: CartItem) => {
        addToCart({ ...item, quantity: item.quantity + 1 });
    };

    const handleDecrement = (id: number) => {
        const item = cart.find((product) => product.id === id);

        if (item) {
            if (item.quantity > 1) {
                addToCart({ ...item, quantity: item.quantity - 1 });
            } else {
                removeFromCart(id);
            }
        }
    };

    const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div className='relative h-full'>
            <h2 className='text-3xl'>ตระกร้าสินค้า</h2>
            <hr />
            <div className='mt-3 space-y-3'>
                {cart.map((item) => (
                    <div className='flex gap-4 mb-3' key={item.id}>
                        <div className="relative h-[100px] w-[100px]">
                            <Image src={item.image} width={100} height={100} alt='' className='absolute w-fit rounded-[10px] object-cover' />
                            <div className="absolute bottom-0 right-3">
                                <p className='text-white'>ราคา {item.price}</p>
                            </div>
                        </div>
                        <div>
                            <div className="mb-3">
                                <p>{item.name}</p>
                                <p className='text-xs'>จำนวน {item.quantity} </p>
                            </div>
                            <div className="flex justify-between gap-2">
                                <div className='flex items-center justify-center bg-red-400 rounded-sm w-8 h-8 text-center cursor-pointer' onClick={() => handleDecrement(item.id)}>-</div>
                                <div className='flex items-center justify-center bg-green-400 rounded-sm w-8 h-8 text-center cursor-pointer' onClick={() => handleIncrement(item)}>+</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {cart.length > 0 && (
                <div className="mt-3">
                    <h1 className='text-2xl font-bold'>ราคาทั้งหมด : {totalPrice}</h1>
                    <hr />
                    <button onClick={clearCart} className='bg-blue-400 text-white rounded-[10px] p-3 w-full my-3'>ชำระเงิน</button>
                </div>
            )}
            {
                cart.length === 0 && <p className='text-slate-300'>ไม่มีสินค้าในตะกร้า ....</p>
            }
        </div>
    );
}