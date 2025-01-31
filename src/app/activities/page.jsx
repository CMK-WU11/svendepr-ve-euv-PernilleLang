import ClassCard from "@/components/class-card";
import Navigation from "@/components/navigation";

export default async function Activities() {

    {/* Fetch og map funktion er kopieret fra min terminsprøve opgave og tilpasset */ }

    const responseClasses = await fetch(
        "http://localhost:4000/api/v1/activities",
    )
    const classes = await responseClasses.json();

    return (
        <>
        <section className="h-screen w-screen bg-[#5E2E53] overflow-x-scroll">
            <h2 className="text-white text-[36px] pl-[1.3em] pt-[0.5em]">Aktiviteter</h2>
            {classes.map(element => (  
                <ClassCard classes={element} key={element.name}/>
            ))}    
        </section>
        <h2>Godmorgen</h2>
        <Navigation />
        </>
    )
}