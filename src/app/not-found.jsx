import Link from "next/link";

export default function NotFound() {
    return (
        <section className=" relative bg-[url('/splash-image.jpg')] bg-cover bg-center h-screen w-screen flex flex-col justify-center items-center text-[36px]">
            <h1>UPS!</h1>
            <p className="w-[80%] text-center">Det ser ud som om siden du leder efter ikke eksisterer!</p>
            <p><Link href="/">Prøv igen!</Link></p>
        </section>

    )
}