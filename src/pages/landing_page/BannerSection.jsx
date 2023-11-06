import { IconSubwayBook } from "../../components/Icons";

export default function BannerSection() {
  return (
    <section className="container flex items-center min-h-screen px-4 mx-auto">
      <div className="flex flex-col gap-4 px-3 md:basis-2/3 lg:px-0">
        <div>
          <p className="text-2xl font-bold leading-tight tracking-tight break-words text-farma-950 xl:text-5xl sm:text-3xl">
            Daftar sekarang dan jadilah apoteker dan tenaga kesehatan lainnya di
            bidang farmasi yang andal!
          </p>
        </div>
        <div>
          <p className="text-xs leading-tight break-words tracking-wide text-farma-800 sm:text-sm xl:text-xl">
            Wujudkan impianmu menjadi apoteker atau tenaga kesehatan lainnya di
            bidang farmasi
          </p>
        </div>
        <div className="flex gap-2 pl-4 mt-4 md:gap-5">
          <a
            href=""
            className="flex items-center px-4 py-2 rounded-md bg-farma-500 whitespace-nowrap"
          >
            <span className="inline-block w-6 h-6">
              <IconSubwayBook />
            </span>{" "}
            Mulai Belajar
          </a>
          <span className="border-l-2 border-black"></span>
          <a
            href=""
            className="px-4 py-2 rounded-md bg-farma-700 text-farma-100"
          >
            Telusuri
          </a>
        </div>
      </div>
      <div className="hidden lg:block">
        <img src="/images/landingPages/landingPage1.png" alt="" />
      </div>
    </section>
  );
}
