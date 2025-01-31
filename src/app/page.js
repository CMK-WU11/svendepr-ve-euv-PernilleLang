import Link from "next/link";

export default function Home() {

  return (
    <div className="relative bg-[url('/splash-image.jpg')] bg-cover bg-center h-screen w-screen">
      <section className="flex items-end h-[65%]">
        <div className="absolute ml-[2em]">
          <h1 className="roboto">LANDRUP</h1>
          <h2 className="racingsansone">DANS</h2>
        </div>
        <div className="bg-[gradient-to-l from-fuchsia-900 via-fuchsia-700 to-fuchsia-900 h-[1em] w-[17em]]"></div>
      </section>
      <div className="h-[35%] flex justify-center items-end pb-[3em]">
        <Link
          href="/activities"
          className="welcome-button bg-[#5E2E53] text-white text-[18px] rounded-md w-[50%] h-[20%] shadow-[2px_19px_17px_-5px_rgba(0,_0,_0,_0.15)] flex justify-center items-center">
          Kom i gang
        </Link>
      </div>
    </div>
  )
}
