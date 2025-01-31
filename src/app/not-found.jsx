import Link from "next/link";



export default function NotFound() {
    return (
        <section className="flex flex-col justify-center items-center text-[36px]">
            <h1>UPS!</h1>
            <p className="w-[80%]">Det ser ud som om siden du leder efter ikke eksisterer! <Link href="/">Prøv igen!</Link></p>
        </section>

    )
}