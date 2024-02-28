import React, { useEffect, useState } from 'react'
import {getProducts, getProductsByCategory, } from '../../assets/asyncMock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = ({greetingMessage}) => {

  const [loading, setLoading] = useState(true)
  const [products, setProducts] = useState([])


const {category} = useParams()


useEffect(() => {
  const fetchProducts = async()=>{
    try{
      setLoading(true);
      const result = category
      ? await getProductsByCategory(category)
      : await getProducts();
      setProducts(result);}

      catch(error){
        console.error
        ('Fetch fallido.', error);
      } finally{
        setLoading(false);
      }
    };

    fetchProducts();
  }, [category])

  
  return (
    <div>
      {loading? <div>Cargando...</div>:
      <ItemList products={products}/>
      }
      
    </div>
    
   )
}

export default ItemListContainer