import { useEffect } from "react"
import {useDispatch , useSelector} from 'react-redux'
import { getAllProducts } from "../Redux/Slices/productSlice";
import Product from "./product"
function ProductList() {

// const selector = useSelector();
const dispatch = useDispatch();
const {products} = useSelector((store) => store.product)
console.log(products);
    useEffect(()=> {
        dispatch(getAllProducts())
    },[dispatch])

  return (
    <div className="flex-row" style={{flexWrap:'wrap',marginTop:'20px'}}>
      {
        products && products.map((product)=>(
          <Product key={product.id} product={product}></Product>
        ))
      }
    </div>
  )
}

export default ProductList