'use client';
import { useState } from "react"
import { Product } from "../product-data";
import Link from "next/link";
export default function ShoppingCartList({initialCartProducts}:{initialCartProducts:Product[]}){
    const[cartProducts,setCartProducts]=useState(initialCartProducts);
    async function removeFromCart(productId:string){
        const response=await fetch(process.env.NEXT_PUBLIC_SITE_URL+'/api/users/2/cart',{
            method:'DELETE',
            body:JSON.stringify({
                productId,
            }),
            headers:{
                'Content-Type':'application/json'
            }
        });
        const updatedCart=await response.json();
        setCartProducts(updatedCart);
    }
    return(
        <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold mb-8">Shopping Cart</h1>
        {cartProducts.map(product => (
          <li key={product.id} className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition duration-300 mb-2 marker:text-black">
            <Link href={`/products/${product.id}`}>
              <h3 className="text-xl text-black font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600">${product.price}</p>
              <div className="flex justify-end">
                <button
                className="bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded"
                onClick={(e) => {
                  e.preventDefault();
                  removeFromCart(product.id);
                }}>Remove from Cart</button>
              </div>
            </Link>
          </li>
        ))}
        </div>
    )
}