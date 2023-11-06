import { Link } from "react-router-dom";

export default function CTAsection() {
  return (
    <section className="py-[4rem] bg-farma-700 text-farma-50">
      <div className="text-center">
        <h2 className="text-5xl font-bold leading-tight tracking-tight text-center break-words text-farma-50 md:text-4xl">
          Raih Peluang Karier dan
          <br className="hidden md:block" /> impianmu di Bidang Farmasi
        </h2>
        <p className="px-3 mt-[2rem] text-xs leading-tight break-words text-farma-50 md:text-xl">
          Dapatkan kesempatan untuk bertemu dengan perusahaan farmasi terkemuka
          <br className="hidden md:block" />
          dan dapatkan informasi tentang lowongan kerja di bidang farmasi.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center mx-2 mt-1 md:flex-row">
        <Link
          to={"/register"}
          className="inline-block px-4 py-2 mt-8 rounded-md bg-farma-100 text-farma-950 hover:bg-farma-400 hover:text-farma-100 hover:-translate-y-0.5 focus:ring-farma-300 focus:ring-offset-2 md:ml-2"
        >
          Daftar Sekarang
        </Link>

        <Link
          to={"/register"}
          className="inline-block px-4 py-2 ml-0 mt-8 rounded-md bg-farma-600 text-farma-50 hover:bg-farma-800 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-farma-300 focus:ring-offset-2 md:ml-2"
        >
          Cari Lowongan
        </Link>
      </div>
    </section>
  );
}
