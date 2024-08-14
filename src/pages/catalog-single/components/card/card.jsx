import React from 'react'

export const Card = ({img,title,id,price}) => {
  return (
    <>
    <div className="">
        <img className='w-40' src={img} alt="" />
        <h1 className='w-40'>{title}</h1>
        <p className='text-xl font-bold'>{price} sum</p>
    </div>
    </>
  )
}
