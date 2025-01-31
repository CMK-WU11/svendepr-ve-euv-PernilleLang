"use client"

import { useContext } from "react"
import { LuSearch } from "react-icons/lu"
import { SearchContext } from "./search-container"

export default function SearchInput() {

    const { searchText, setSearchText } = useContext(SearchContext)

    return (
        <label className="flex justify-center items-center w-[100%] has-[:focus]:outline text-white">
            <LuSearch className="absolute left-80" />
            <input
                type="search"
                aria-label="søge felt"
                defaultValue={searchText}
                onChange={event => setSearchText(event.target.value)}
                className="bg-gray-400 outline-none opacity-25 w-[81%] h-[2em]"
            />
        </label>
    )
}