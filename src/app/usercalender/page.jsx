import Navigation from "@/components/navigation";
import { cookies } from "next/headers"

export default async function UserCalender () {
    const cookiestorage = await cookies()

    const token = cookiestorage.get("ld_token")
    const uid = cookiestorage.get("ld_uid")

    // console.log("hej", uid)

    const userCalender = await fetch(
        `http://localhost:4000/api/v1/users/${uid.value}`, {

        headers: {
            Authorization: `Bearer ${token.value}`,
            "Content-Type": "application/json",
        },
    }
    )
    const calenderDetails =  await userCalender.json();

    console.log(calenderDetails);

     {/* usercalender er lavet med stor inspiration fra din mægler, min terminsprøve samt gennemngang af terminsprøve med Brian */ }

  return(
        <>
        <section className="h-screen w-screen bg-[#5E2E53]">
            <h1 className="text-white text-[36px] pl-[0.5em] pt-[0.5em]">Kalender</h1>
            {/* <div className="bg-white m-[1em] h-[10%] rounded-lg pl-[1em] ">
                <p className="text-[24px]">{calenderDetails.activities[0].name}</p>
                <p className="text-[18px] pb-[1em]">{calenderDetails.activities[0].weekday}{calenderDetails.activities[0].time}</p>
            </div> */}
            {calenderDetails.map((yourCalender) => (  
                <div key={yourCalender.id}  className="bg-white m-[1em] h-[10%] rounded-lg pl-[1em] pt-[0.5em]">
                    <p className="text-[24px]">{calenderDetails.activities.name}</p>
                    <p className="text-[24px]">{calenderDetails.activities.weekday}{calenderDetails.activities.time}</p>
                </div>
            ))}
        </section>
        <Navigation/>
        </>
  )
}