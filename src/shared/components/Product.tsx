import { useCartStore } from '@/store/cart.store'
import Image from 'next/image'
import React from 'react'

interface Product {
    id: number;
    name: string;
    image: string;
    price: number;
    quantity: number;
}

interface ProductProps {
    product: Product;
    onProductClick: (image: string) => void;
}

const Product: React.FC<ProductProps> = ({ product, onProductClick }) => {
    const { addToCart } = useCartStore()

    return (
        <div className='bg-white rounded-[10px] overflow-hidden shadow-lg h-full cursor-pointer' onClick={() => onProductClick(product.image)}>
            <Image src={product.image} width={100} height={100} alt={product.name} className='w-full' />
            <div className='p-3'>
                <h3 className='text-lg font-semibold'>{product.name}</h3>
                <p className='text-sm text-gray-500'>${product.price}</p>
            </div>
            <div className='p-3'>
                <button
                    onClick={(e) => {
                        // e.stopPropagation(); // Prevent the click event from propagating to the parent div
                        addToCart(product);
                    }}
                    className='bg-blue-400 text-white rounded-lg px-3 py-1'
                >
                    เพิ่มในตะกร้า
                </button>
            </div>
        </div>
    )
}

export default Product