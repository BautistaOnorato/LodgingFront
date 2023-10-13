"use client"

import { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import { getProducts } from '@/service/products'

export interface ProductGridProps {
  location: string
  category: string
  initialDate: string
  finalDate: string
}

const ProductGrid: React.FC<ProductGridProps> = ({ location, category, initialDate, finalDate }) => {
  const [products, setProducts] = useState([])

  

  useEffect(() => {
    const filterProducts = async () => {
      const newProducts = await getProducts({ location, category, initialDate, finalDate })
      console.log(newProducts);
    }

    filterProducts()
  }, [location, category, initialDate, finalDate])

  return (
    <section className='mx-auto w-[90vw] sm:w-full px-0 sm:px-8 py-4 flex justify-center'>
      <div className='grid min-[700px]:grid-cols-2 min-[1020px]:grid-cols-3 xl:grid-cols-4 gap-4 w-full place-items-center'>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </section>
  )
}

export default ProductGrid