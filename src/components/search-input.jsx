"use client"

import { LuSearch } from "react-icons/lu"

export default function SearchInput () {

    return(
        <label className="flex justify-center items-center w-[100%] has-[:focus]:outline">
			<LuSearch className="absolute left-80 text-white" />
			<input type="search" className="bg-gray-400 outline-none opacity-25 w-[81%] h-[2em]"/>
		</label>
    )
}