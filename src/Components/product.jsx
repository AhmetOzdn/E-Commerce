/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */

import '../Css/Product.css'
import {useNavigate} from 'react-router-dom'

function product({product}) {
    const {category,description,id,image,price,title} = product;
    const navigate = useNavigate();
    console.log(product);
  return (
    <div className='cards-container'>
        <div className='card'>
            <div onClick={() => navigate(`/product-details/${id}`)}  className='card-img-container'>
            <img src={image} alt="" className='card-img'/>
            </div>
            <div className='card-body'>
            <h4 onClick={() => navigate(`/product-details/${id}`)} >{title}</h4>
            <span style={{height:'30px'}}>Kategori : {category}</span>
            <div style={{marginTop:'10px'}}>
            <span >Fiyat : {price} ₺</span>
            </div>
            
            <button  onClick={() => navigate(`/product-details/${id}`)} className='card-button'>Urun Detayi</button>
            </div>
           
        </div>
    </div>
  )
}

export default product