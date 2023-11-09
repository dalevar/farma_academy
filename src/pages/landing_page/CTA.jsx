import { Link } from "react-router-dom";

export default function CTASection() {
  return (
    <section className="py-[4rem] bg-[#ecf0fd]/0 text-farma-950">
      <div className="text-center">
        <h2 className="text-5xl font-bold leading-tight tracking-tight text-center break-words text-farma-950 md:text-4xl">
          Raih Peluang Karier dan
          <br className="hidden md:block" /> impianmu di Bidang Farmasi
        </h2>
        <p className="px-3 mt-[2rem] text-xs leading-tight break-words text-farma-950 md:text-xl">
          Dapatkan kesempatan untuk bertemu dengan perusahaan farmasi terkemuka
          <br className="hidden md:block" />
          dan dapatkan informasi tentang lowongan kerja di bidang farmasi.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center mx-2 mt-7 md:flex-row gap-8">
        <Link preventScrollReset
          to={"/register"}
          className="inline-flex items-start gap-2.5 pb-[0.9375rem] pt-4 px-9 rounded-lg bg-[#0075a7] Jakarta Sans'] text-white font-['Plus text-lg leading-[150%]"
        >
          Daftar Sekarang
        </Link>

        <Link preventScrollReset
          to={"/register"}
          className="inline-flex items-start gap-2.5 pb-[0.9375rem] pt-4 px-9 rounded-lg bg-[#0075a7] Jakarta Sans'] text-white font-['Plus text-lg leading-[150%]"
        >
          Cari Lowongan
          <svg
            width={11}
            height={11}
            viewBox="0 0 11 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 0.868359V8.39414C11 8.62444 10.9085 8.84531 10.7457 9.00816C10.5829 9.17101 10.362 9.2625 10.1318 9.2625C9.90148 9.2625 9.68064 9.17101 9.51781 9.00816C9.35499 8.84531 9.26351 8.62444 9.26351 8.39414V2.96689L1.48476 10.7452C1.32165 10.9084 1.10042 11 0.869751 11C0.639079 11 0.417854 10.9084 0.254744 10.7452C0.0916343 10.5821 0 10.3608 0 10.1301C0 9.89943 0.0916343 9.67818 0.254744 9.51505L8.0335 1.73672H2.60696C2.37669 1.73672 2.15585 1.64523 1.99302 1.48238C1.8302 1.31953 1.73872 1.09866 1.73872 0.868359C1.73872 0.638056 1.8302 0.417185 1.99302 0.254336C2.15585 0.0914875 2.37669 0 2.60696 0H10.1318C10.362 0 10.5829 0.0914875 10.7457 0.254336C10.9085 0.417185 11 0.638056 11 0.868359Z"
              fill="white"
            />
          </svg>
        </Link>
      </div>
    </section>
  );
}
