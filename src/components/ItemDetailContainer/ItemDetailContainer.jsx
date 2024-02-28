import React, { useEffect, useState } from 'react'
import { getProductsById } from '../../assets/asyncMock'
import { useNavigate, useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {
    const {id} = useParams()
    const [product, setProduct] = useState(null)
     useEffect(() => {
     id ?
     getProductsById(id).then(res=> setProduct(res))
     :useNavigate('/')
    }, [id])
  
    return (
    <>
    { id &&
     <ItemDetail product={product}/>
    }   
    </>
  )
}

export default ItemDetailContainer