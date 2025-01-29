import Link from "next/link";

export default function Home() {
  return (
    <section className="relative bg-[url('/splash-image.jpg')] bg-cover bg-center h-screen w-screen">
      <div className="h-[100vh] flex justify-center items-end pb-[3em]">
        <Link
          href="/aktiviteter"
          className="bg-[#5E2E53] text-white text-[18px] rounded-md w-[50%] h-[6%] flex justify-center shadow-[2px_19px_17px_-5px_rgba(0,_0,_0,_0.15)] animate-bounce">
          <button>Kom i gang</button>
          <p>hej</p>
        </Link>
      </div>
    </section>
  )
}
