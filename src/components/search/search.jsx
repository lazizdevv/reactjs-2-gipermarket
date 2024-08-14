import React from 'react'
import { Input } from '../../ui/input/input'
import { SearchIcon } from '../../assets/svg/SearchIcon'

export const Search = () => {
  return (
    <>
    <div className="border-2 bg-red-400 relative flex w-full lg:w-[673px] items-center ">
    <Input className={"w-full h-12 p-4 pr-12 text-base font-normal border"} placeholder={"Поиск"} />
    <div className="w-fit absolute right-5"><SearchIcon/></div>
    </div>
    </>
  )
}
