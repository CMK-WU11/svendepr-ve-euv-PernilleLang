import Navigation from "@/components/navigation";
import SignUpButton from "@/components/sign-up-button";
import { cookies } from "next/headers";
import Image from "next/image";

export default async function ClassesDetails ({ params }){

    const { id } = await params;
    console.log("params id", id);


    const classDetails = await fetch(
        `http://localhost:4000/api/v1/activities/${id}`
    );

    const details = await classDetails.json(); 

    console.log(details);

    {/* Fetch og map funktion er kopieret fra min terminsprøve opgave og tilpasset */ }

    const cookieStore = await cookies()
	const token = cookieStore.get("ld_token")
	const uid = cookieStore.get("ld_uid")

    // nedenstående, til log in / log ud knappen er lavet efter Brians terminsprøves gennemgang med klassen

    // const isSignedUp = details.users.some(user => user.id == uid.value)

    // async function handleLeave() {
	// 	"use server"
	// 	const response = await fetch(`http://localhost:4000/api/v1/users/${uid.value}/activities/${details.id}`, {
	// 		method: "DELETE",
	// 		headers: {
	// 			Authorization: `Bearer ${token.value}`
	// 		}
	// 	})
	// }

	// async function handleSignup() {
	// 	"use server"
	// 	const response = await fetch(`http://localhost:4000/api/v1/users/${uid.value}/activities/${details.id}`, {
	// 		method: "POST",
	// 		headers: {
	// 			Authorization: `Bearer ${token.value}`
	// 		}
	// 	})
	// }


    return (
        <>
        <section className="h-screen w-screen  bg-[#5E2E53] text-white relative">
            <article className="h-[100%]">
                <Image priority src={details.asset.url} width="4992" height="3328" alt="class photo" className="h-[50%] relative"/>
                {/* <SignUpButton/> */}
                {/* <Link href="/" className="bg-[#5E2E53] text-white text-[18px] rounded-md w-[50%] h-[6%] flex justify-center absolute">
                        <button>Tilmeld</button>
                    </Link> */}
                <div className="p-[1em]">
                    <h2 className="text-[24px]">{details.name}</h2>
                    <p>{details.weekday} {details.time}</p>
                    <p></p>
                    <p>{details.minAge} - {details.maxAge}år</p>
                    <p className="pt-[2em]">{details.description}</p>
                </div>
            </article>
            {/* {(token && uid) && <SignUpButton
					handleLeave={handleLeave}
					handleSignup={handleSignup}
					isSignedUp={isSignedUp}
				/>} */}
        </section>
         <Navigation/>
        </>
    )
}