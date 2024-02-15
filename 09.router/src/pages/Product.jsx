import React from 'react'
import { useNavigate } from 'react-router-dom'

const Product = () => {

    const navigate = useNavigate()

    const goToProductDetail = () => {
        navigate('/product/1')
    }

    const goToProductDetail2 = () => {
        navigate('/productDetail2?pro_no=1')
    }

  return (
    <div>
      <h1>Product</h1>
      <button onClick={goToProductDetail}>상품상세페이지로 이동</button>
      <button onClick={goToProductDetail2}>상품상세페이지2로 이동</button>
    </div>
  )
}

export default Product