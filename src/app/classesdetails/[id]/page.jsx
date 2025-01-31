import Navigation from "@/components/navigation";
import Image from "next/image";

export default async function ClassesDetails({ params }) {

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
                        width="697"
                        height="646"
                        alt={`Photo of &{details.name}`}
                        className="h-[50%] bg-cover relative"
                    />
                    <div className="p-[1em]">
                        <h1 className="text-[24px]">{details.name}</h1>
                        <p>{details.weekday} {details.time}</p>
                        <p></p>
                        <p>{details.minAge} - {details.maxAge}år</p>
                        <p className="pt-[2em]">{details.description}</p>
                    </div>
                </article>
            </section>
            <Navigation />
        </>
    )
}