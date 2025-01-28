import ClassCard from "@/components/class-card";
import Navigation from "@/components/navigation";
import Image from "next/image";
import Link from "next/link";
// import Swiper from "swiper";
// import "swiper/css"
// import "swiper/css/bundle"

export default async function Aktiviteter() {

    {/* Fetch og map funktion er kopieret fra min terminsprøve opgave og tilpasset */ }

    const responseClasses = await fetch(
        "http://localhost:4000/api/v1/activities",
    )
    const classes = await responseClasses.json();
    console.log(classes);

    return (
        <>
        <section className="h-screen w-screen bg-[#5E2E53] overflow-x-scroll">
            <h2 className="text-white text-[36px] pl-[1.3em] pt-[0.5em]">Aktiviteter</h2>
            <ClassCard classes={classes}/>
        </section>
        <Navigation />
        </>
    )
}