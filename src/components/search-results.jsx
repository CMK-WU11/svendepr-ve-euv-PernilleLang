"use client"

import { useContext } from "react"
import { SearchContext } from "./search-container"
import ClassCard from "./class-card"


export default function SearchResults({ classes }) {
	const { searchText } = useContext(SearchContext)

	const results = classes.filter(function (element) {
		if (element.name.toLowerCase().includes(searchText.toLowerCase())) return element
	})

	return (
		<>
			{results.length > 0 ? results.map(classes => (
				<span key={classes.createdAt}>
					<ClassCard classes={classes} />
				</span>
			)) : <li>Der blev ikke fundet nogle aktiviteter. Prøv at søge efter noget andet.</li>}
		</>
	)
}