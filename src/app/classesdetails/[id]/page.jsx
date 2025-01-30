import Navigation from "@/components/navigation";
import Image from "next/image";

export default async function ClassesDetails ({ params }){

    const { id } = await params;

    const classDetails = await fetch(
        `http://localhost:4000/api/v1/activities/${id}`
    );

    const details = await classDetails.json(); 

    {/* Fetch og map funktion er kopieret fra min terminsprøve opgave og tilpasset */ }

    // nedenstående, til log in / log ud knappen er lavet efter Brians terminsprøves gennemgang med klassen

    return (
        <>
        <section className="h-screen w-screen  bg-[#5E2E53] text-white relative">
            <article className="h-[100%]">
                <Image 
                    priority 
                    src={details.asset.url} 
                    width="4992" 
                    height="3328" 
                    alt="class photo" 
                    className="h-[50%] bg-cover relative"
                />
                <div className="p-[1em]">
                    <h2 className="text-[24px]">{details.name}</h2>
                    <p>{details.weekday} {details.time}</p>
                    <p></p>
                    <p>{details.minAge} - {details.maxAge}år</p>
                    <p className="pt-[2em]">{details.description}</p>
                </div>
            </article>
        </section>
        <Navigation/>
        </>
    )
}