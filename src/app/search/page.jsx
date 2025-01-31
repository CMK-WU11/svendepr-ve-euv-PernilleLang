import Navigation from "@/components/navigation";
import SearchContainer from "@/components/search-container";

export default async function Search() {

    {/* Fetch og map funktion er kopieret fra din mægler og min terminsprøve opgave og tilpasset */ }

    const responseClasses = await fetch(
        "http://localhost:4000/api/v1/activities",
    )
    const classes = await responseClasses.json();

    return (
        <>
            <section className="h-screen w-screen bg-[#5E2E53] overflow-x-scroll text-black">
                <h1 className="text-white text-[36px] pl-[1em] pt-[0.5em]">Søg</h1>
                <SearchContainer classes={classes} />
            </section>
            <Navigation />
        </>
    )
}