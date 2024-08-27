import React from 'react'
import { useGetBrands } from '../../pages/home/service/query/useGetBrands'
import { Loading } from '../loading'
import { Link } from 'react-router-dom'

export const Brands = () => {
    const {data,isLoading} = useGetBrands()

    if (isLoading) return <Loading/>
  return (
    <>
    <h1 className='my-5'>Популярные бренды</h1>
    <div className="grid flex-wrap grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4 mb-28">
        {data?.map((item)=> (
            <Link key={item.id} to={`single-brand/${item.brand}`}>
            <div key={item.id} className="flex justify-center items-center w-[181px] h-[90px] bg-accent  p-9 hover:scale-110 hover:shadow-lg">
                <img className='object-center' src={item.img} alt="" />
            </div>
            </Link>
        ))}
    </div>
    </>
  )
}
