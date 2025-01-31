"use client"

import SearchInput from "@/components/search-input"
import SearchResults from "@/components/search-results"
import { createContext, useState } from "react"

export const SearchContext = createContext("")

export default function SearchContainer({ classes }) {

	const [searchText, setSearchText] = useState("")

	return (
		<SearchContext.Provider value={{ searchText, setSearchText }}>
			<SearchInput />
			<SearchResults classes={classes} />
		</SearchContext.Provider>
	)
}

{/* søge containeren, og context, er taget med stor inspiration fra gennemgangen af terminsprøven med Brian*/ }