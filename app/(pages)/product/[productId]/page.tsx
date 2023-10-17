import Availability from '@/components/Product/ProductDetail/Availability'
import Gallery from '@/components/Product/ProductDetail/Gallery'
import ProductMap from '@/components/Product/ProductDetail/ProductMap'
import ProductHeader from '@/components/Product/ProductDetail/ProductHeader'
import ProductTags from '@/components/Product/ProductDetail/ProductTags'
import ShareSection from '@/components/Product/ProductDetail/ShareSection'
import { getProductById } from '@/service/products'
import React from 'react'
import ProductRules from '@/components/Product/ProductDetail/ProductRules'

interface ProductPageProps {
  params: {
    productId: string
  }
}

const ProductPage: React.FC<ProductPageProps> = async ({ params }) => {
  const product = await getProductById(params.productId)

  return (
    <div className='space-y-6 pb-6'>
      <ProductHeader title={product.title} location={product.location} rating={product.rating} />
      <ShareSection />
      <Gallery images={product.images} />
      <ProductTags characteristics={product.characteristics} />
      <section className='w-[90%] sm:w-full py-4 sm:px-8 mx-auto text-sm'>
        <p>{product.description}</p>
      </section>
      <ProductMap latitude={product.location.latitude} longitude={product.location.longitude} />
      <Availability reservations={product.reservations} />
      <ProductRules rules={product.rules} securities={product.securities} cancellationPolicy={product.cancellationPolicy} />
    </div>
  )
}

export default ProductPage