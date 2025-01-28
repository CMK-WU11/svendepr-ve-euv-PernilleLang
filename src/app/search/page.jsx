import ClassCard from "@/components/class-card";
import Navigation from "@/components/navigation";
import SearchInput from "@/components/search-input";

export default async function Search () {

     {/* Fetch og map funktion er kopieret fra min terminsprøve opgave og tilpasset */ }

     const responseClasses = await fetch(
        "http://localhost:4000/api/v1/activities",
    )
    const classes = await responseClasses.json();
    console.log(classes);

    return(
        <>
        <section className="h-screen w-screen bg-[#5E2E53] overflow-x-scroll">
            <h1 className="text-white text-[36px] pl-[1em] pt-[0.5em]">Søg</h1>
            <SearchInput/>
            <ClassCard classes={classes}/>
        </section>
        <Navigation/>
        </>
    )
}