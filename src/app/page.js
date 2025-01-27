import Link from "next/link";

export default function Home() {
  return (
    <section className="relative bg-[url('/splash-image.jpg')] bg-cover bg-center h-screen w-screen">
      <div className="h-[100vh] flex justify-center items-end pb-[3em]">
        <Link href="/aktiviteter" className="bg-[#5E2E53] text-white text-[18px] rounded-md w-[50%] h-[6%] flex justify-center">
          <button>Kom i gang</button>
        </Link>
      </div>
    </section>
  )
}
