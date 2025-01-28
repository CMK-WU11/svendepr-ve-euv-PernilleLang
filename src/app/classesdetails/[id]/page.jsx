import Navigation from "@/components/navigation";
import Image from "next/image";

export default async function ClassesDetails ({ params }){

    const { id } = await params;

    console.log("params id", id);

    const classDetails = await fetch(
        `http://localhost:4000/api/v1/activities/${id}`
    );

    const details = await classDetails.json(); 

    console.log(details);


    return (
        <>
        <section className="h-screen w-screen  bg-[#5E2E53] text-white relative">
            <article className="h-[50%]">
                <Image priority src={details.asset.url} width="4992" height="3328" alt="class photo"/>
                {/* <Link href="/" className="bg-[#5E2E53] text-white text-[18px] rounded-md w-[50%] h-[6%] flex justify-center absolute">
                        <button>Tilmeld</button>
                    </Link> */}
                <div className="p-[1em]">
                    <h2 className="text-[24px]">{details.name}</h2>
                    <p>{details.minAge} - {details.maxAge}år</p>
                    <p className="pt-[2em]">{details.description}</p>
                </div>
            </article>
        </section>
         <Navigation/>
        </>
    )
}