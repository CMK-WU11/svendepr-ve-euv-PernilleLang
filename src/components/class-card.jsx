import Image from "next/image";
import Link from "next/link";
// import { Swiper, SwiperSlide } from "swiper/react"
// import "swiper/css"
// import "swiper/css/bundle"


export default function ClassCard ( {classes} ) {

    return(
        <>
       {/* <Swiper slidesPerView={1.6}> */}
       {classes.map((allClasses) => (
        <article key={allClasses.key}>
            {/* <SwiperSlide key={allClasses.key}> */}
            <Link href={`/classesdetails/${allClasses.id}`}>
            <div className="relative flex justify-center">
                <Image
                    priority
                    src={allClasses.asset.url} 
                    width={250} height={250} 
                    alt="allclasses image" 
                    className="relative pt-[2em] w-[80%] h-[20em] bg-cover bg-center rounded-xl"
                />
                <div className="bg-[#E1A1E9] absolute bg-opacity-50 bottom-0 h-[25%] w-[80%] pl-[0.5em]">
                    <h3 className="pt-[0.5em] text-xl bg-opacity-50">{allClasses.name}</h3>
                    <p className="text-xl bg-opacity-50">{allClasses.minAge} - {allClasses.maxAge}år</p>
                </div>
            </div>
            </Link>
            
            {/* </SwiperSlide> */}
        </article>
    ))}
    {/* </Swiper> */}
    </>
    )
}