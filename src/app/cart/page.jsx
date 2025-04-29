"use client";
import React from 'react'
import { useCart } from '../context/CartProvider';
import Link from 'next/link';
import CartProducts from './CartProducts';

export default function ShoppingCart() {

  const {cartItems, getCartTotalAmount} = useCart();

  return (
    <div className='flex flex-col justify-center items-center px-[10px] pb-10'>
      <h2 className='heading'>Сагс</h2>
      <div className='max-w-[1000px] border-b-2 border-b-gray-500 pt-10'>
        {cartItems.length > 0 ? (
          <div className='max-[655px]:hidden flex justify-between  w-full py-3 max-w-[1000px]'>
            <div className='font-medium w-full'>
              <p>
                Бүтээгдэхүүнүүд
              </p>
            </div>
            <div className='font-medium w-full flex justify-between'>
              <p>
                Тоо
              </p>
              <p>
                Үнэ
              </p>
            </div>
          </div>
        ): (
          ""
        )}

        {cartItems.length === 0 ? (
          <div className='pb-8'>
            <h3 className='empty-page'>
              Таны сав хоосон байна
            </h3>
            <Link
              className='quick-link' 
              href={"/shop"}
            >
              Дэлгүүр рүү очих
            </Link>
          </div>
        ):(
          <ul className='cart-list'>
            {cartItems.map(item => (
              <li key={item.id}>
                <CartProducts product={item}/>
              </li>
            ))}
          </ul>
        )}
      </div>
      {cartItems.length > 0 ? (
        <div className='flex flex-col justify-between min-[500px]:w-1/2 max-[500px]:w-full self-end pt-5'>
          <div className='pb-5'>
            <form>
              <input className='accent-red-900 w-[20px] h-[20px]' type="checkbox" required />
              <em className='font-medium'>
                Бүтээгдэхүүний тоог шалгасан, зөв бүтээгдэхүүнийг захиалахаа баталгаажуулсан. Мөн та манай үйлчилгээг, тээвэрлэлтийн болон буцаах бодлогыг уншиж, ойлгосон гэдгээ баталгаажуулсан.
              </em>
              <p className='font-black text-red-500 pt-3'>
                НИЙТ ДҮН: KES {getCartTotalAmount()}
              </p>
              <div className='flex justify-between items-center pt-2 xl:pr-48'>
                <Link className='quick-link font-medium' href={"/shop"}>
                  Дэлгүүр рүү буцах
                </Link>
                <button className='block bg-red-900 py-2 px-5 text-white'>
                  Төлбөр хийх
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  )
}