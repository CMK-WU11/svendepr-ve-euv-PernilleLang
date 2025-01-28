import Navigation from "@/components/navigation";

export default async function UserCalender () {


    return(
        <>
        <section className="h-screen w-screen bg-[#5E2E53]">
            <h1 className="text-white text-[36px] pl-[0.5em] pt-[0.5em]">Kalender</h1>
            <div className="bg-white m-[1em] h-[10%] rounded-lg pl-[1em] pt-[0.5em]">
                <p className="text-[24px]">Junior Fitness</p>
                <p className="text-[18px]"> Mandag 15.45</p>
            </div>
        </section>
        <Navigation/>
        </>
    )
}