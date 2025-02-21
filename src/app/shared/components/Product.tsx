import { useCartStore } from '@/app/store/cart.store'
import Image from 'next/image'
import React from 'react'

const Product = ({ product }: {
    product: {
        id: number,
        name: string,
        image: string,
        price: number
        quantity: number
    }
}) => {

    const { addToCart } = useCartStore()
    return (
        <div className='bg-white rounded-[10px] overflow-hidden shadow-lg h-full'>
            <Image src={product.image} width={100} height={100} alt='' className='w-full ' />
            <div className='p-3'>
                <h3 className='text-lg font-semibold'>{product.name}</h3>
                <p className='text-sm text-gray-500'>${product.price}</p>
            </div>
            <div className='p-3'>
                <button
                    onClick={() => addToCart(product)}
                    className='bg-blue-400 text-white rounded-lg px-3 py-1'
                >เพิ่มในตะกร้า</button>
            </div>
        </div>
    )
}

export default Product