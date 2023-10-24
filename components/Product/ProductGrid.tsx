"use client"

import { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import { getProducts } from '@/service/products'
import { ShortProduct } from '@/lib/types'
import NoResults from '../ui/NoResults'
import ProductGridSkeleton from './ProductGridSkeleton'

export interface ProductGridProps {
  location: string
  category: string
  initialDate: string
  finalDate: string
}

const ProductGrid: React.FC<ProductGridProps> = ({ location, category, initialDate, finalDate }) => {
  const [products, setProducts] = useState<ShortProduct[] | null>(null)

  useEffect(() => {
    const filterProducts = async () => {
      const newProducts = await getProducts({ location, category, initialDate, finalDate })
      setProducts(newProducts)
    }

    filterProducts()
  }, [location, category, initialDate, finalDate])

  return (
    <section className='mx-auto w-[90vw] sm:w-full px-0 sm:px-8 py-4 flex justify-center'>
      {
        !products ? (
          <ProductGridSkeleton />
        ) : (
          products.length > 0 ? (
            <div className='grid min-[700px]:grid-cols-2 min-[1020px]:grid-cols-3 xl:grid-cols-4 gap-4 w-full place-items-center'>
              {products?.map(product => (
                <ProductCard 
                  key={product.id} 
                  identifier={product.id}
                  image={product.images.find(image => image.title.includes("first")) || product.images[0]} 
                  title={product.title} 
                  location={`${product.location.city.city}, ${product.location.city.country}`} 
                  rating={product.rating} 
                />
              ))}
            </div>
          ) : (
            <div className='my-10'>
              <NoResults title="We couldn't find any products that match your current filters. Please try adjusting your search criteria or removing some filters to broaden your search."/>
            </div>
          )
        )
      }
    </section>
  )
}

export default ProductGrid