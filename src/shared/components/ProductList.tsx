"use client"

import React, { useState } from 'react'
import Product from './Product'

interface Products {
    id: number;
    name: string;
    image: string;
    price: number;
    quantity: number;
}

interface ProductListProps {
    onProductClick: (image: string) => void;
}

const ProductList: React.FC<ProductListProps> = ({ onProductClick }) => {
    const [filter, setFilter] = useState('')
    const products: Products[] = [
        {
            id: 1,
            name: 'Product 1',
            image: "https://www.jmthaifood.com/wp-content/uploads/2020/01/%E0%B8%95%E0%B9%89%E0%B8%A1%E0%B8%A2%E0%B8%B3%E0%B8%81%E0%B8%B8%E0%B9%89%E0%B8%87-1.jpg",
            price: 10.0,
            quantity: 1
        },
        {
            id: 2,
            name: 'Product 2',
            image: "https://www.jmthaifood.com/wp-content/uploads/2020/01/%E0%B8%95%E0%B9%89%E0%B8%A1%E0%B8%A2%E0%B8%B3%E0%B8%81%E0%B8%B8%E0%B9%89%E0%B8%87-1.jpg",
            price: 20.0,
            quantity: 1
        },
        {
            id: 3,
            name: 'Product 3',
            image: "https://www.jmthaifood.com/wp-content/uploads/2020/01/%E0%B8%95%E0%B9%89%E0%B8%A1%E0%B8%A2%E0%B8%B3%E0%B8%81%E0%B8%B8%E0%B9%89%E0%B8%87-1.jpg",
            price: 30.0,
            quantity: 1
        },
    ]

    const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFilter(event.target.value)
    }

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(filter.toLowerCase())
    )

    return (
        <div>
            <h2 className='text-3xl'>รายการสินค้า</h2>
            <div className="flex items-center">
                <h2 className='text-1xl text-slate-500'>ลูกค้ากำลังออนไลน์ 70 คน </h2>
                <div className='rounded-[50%] w-[10px] h-[10px] bg-green-300 p-1 mx-2'></div>
            </div>
            <div className="my-3">
                <input
                    type="text"
                    onChange={handleFilterChange}
                    placeholder='ค้นหาสินค้า'
                    className='p-2 w-full rounded-[10px] border-2'
                />
            </div>
            <div className='grid lg:grid-cols-4 gap-4 mt-5'>
                {filteredProducts.map((product, i) => (
                    <Product key={i} product={product} onProductClick={() => onProductClick(product.image)} />
                ))}
                {filteredProducts.length === 0 && <p className='text-slate-300'>ไม่พบสินค้า ....</p>}
            </div>
        </div>
    )
}

export default ProductList