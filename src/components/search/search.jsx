import React, { useState } from 'react'
import { Input } from '../../ui/input/input'
import { SearchIcon } from '../../assets/svg/SearchIcon'
import { useDebounce } from '../../hooks/useDebounce';
import { useSearch } from './service/useSearch';
import { Card } from '../../pages/catalog-single/components/card/card';

export const Search = () => {
  const [inputValue, setInputValue] = useState("");
  const debounceValue = useDebounce(inputValue);
  const { data } = useSearch(debounceValue);
  return (
    <>
    <div className="border-2 bg-red-400 relative flex w-full lg:w-[673px] items-center ">
    <Input onChange={(e) => setInputValue(e.target.value)} className={"w-full h-12 p-4 pr-12 text-base font-normal border"} placeholder={"Поиск"} />
    <div className="w-fit absolute right-5"><SearchIcon/></div>
    </div>

    <div className="absolute flex justify-center w-full z-20 left-0 top-32">
    {inputValue.length >= 3 && (
          <div className="bg-white z-2 grid grid-cols-7 gap-5 p-3 md:p-5 w-full border rounded-lg shadow-md shadow-primary bg-special max-w-screen-xl">
            {data?.map((item) => (
              <Card key={item.id} {...item} />
            ))}
          </div>
        )}
    </div>
    </>
  )
}
