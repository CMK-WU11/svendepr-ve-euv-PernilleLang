"use client"

import { useContext } from "react"
import { SearchContext } from "./search-container"
import ClassCard from "./class-card"


export default function SearchResults({ classes }) {
	const { searchText } = useContext(SearchContext)

	const results = classes.filter(function (element) {
		if (element.name.toLowerCase().includes(searchText.toLowerCase())) return element
		if (element.description.toLowerCase().includes(searchText.toLowerCase())) return element
		if (element.weekday.toLowerCase().includes(searchText.toLowerCase())) return element
	})

	return (
		<>
			<h2>Søge resultat</h2>
				{results.length > 0 ? results.map(element => (
						<ClassCard element={element} />
				)) : <li>Der blev ikke fundet nogle aktiviteter. Prøv at søge efter noget andet.</li>}
		</>
	)
}