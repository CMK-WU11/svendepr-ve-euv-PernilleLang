import Image from "next/image";
import Link from "next/link";

export default function ClassCard({ classes }) {

    return (
        <>
            <article>
                <Link href={`/classesdetails/${classes.id}`}>
                    <div className="relative flex justify-center">
                        <Image
                            priority
                            src={classes.asset.url}
                            width={640}
                            height={960}
                            alt={`Photo of class &{classes.name}`}
                            className="pt-[2em] w-[80%] h-[20em] bg-cover bg-center rounded-bl-3xl rounded-t-3xl"
                        />
                        <div className="bg-[#E1A1E9] absolute bg-opacity-50 bottom-0 h-[25%] w-[80%] pl-[0.5em] rounded-tr-3xl rounded-bl-3xl">
                            <h2 className="pt-[0.5em] text-xl bg-opacity-50">{classes.name}</h2>
                            <p className="text-xl bg-opacity-50">{classes.minAge} - {classes.maxAge}år</p>
                        </div>
                    </div>
                </Link>
            </article>
        </>
    )
}

// class-card refererer til aktiviteter med en key, og dette er lavet med inspiration fra gennemgang af terminsprøven med Brian