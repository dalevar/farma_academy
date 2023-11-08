import { Link } from "react-router-dom";

export default function TheSolutionOffered() {
  return (
    <div className="bg-white flex flex-col px-20 max-md:px-5">
      <div className="self-center flex w-full max-w-[1227px] items-start justify-between gap-5 mt-24 max-md:max-w-full max-md:flex-wrap max-md:mt-10">
        <div className="text-sky-950 text-4xl font-bold grow shrink basis-auto self-start max-md:max-w-full">
          Solusi belajar farmasi yang terjangkau dan efektif
        </div>
        <div className="text-white text-lg leading-7 whitespace-nowrap items-start bg-sky-700 w-[211px] max-w-full mt-10 px-9 py-4 rounded-lg self-end max-md:mt-10 max-md:px-5">
          Daftar Sekarang
        </div>
      </div>
      <div className="bg-teal-900 bg-opacity-10 w-[1227px] h-0.5 mr-3.5 mt-12 self-end max-md:max-w-full max-md:mr-2.5 max-md:mt-10" />
      <div className="self-center w-full max-w-[1227px] mt-12 mb-24 max-md:max-w-full max-md:my-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[36%] max-md:w-full max-md:ml-0">
            <div className="flex flex-col max-md:mt-10">
              <div className="text-white text-lg font-bold self-stretch justify-end items-center bg-sky-900 w-full pl-9 pr-5 pt-8 pb-10 rounded-xl max-md:px-5">
                Program pembelajaran yang lengkap dan komprehensif
              </div>
              <div className="text-sky-950 text-lg font-bold self-stretch justify-end items-center border border-[color:var(--Border,rgba(32,72,79,0.10))] bg-white w-full mt-3 pl-9 pr-16 pt-8 pb-10 rounded-xl border-solid max-md:px-5">
                Fitur pembelajaran yang interaktif dan biaya yang terjangkau
              </div>
              <div className="text-sky-950 text-lg font-bold self-stretch justify-end items-center border border-[color:var(--Border,rgba(32,72,79,0.10))] bg-white w-full mt-3 pl-9 pr-7 pt-8 pb-10 rounded-xl border-solid max-md:px-5">
                Konsultan pengajar yang kompeten dan profesional
              </div>
              <div className="text-sky-950 text-lg font-bold self-stretch justify-center items-center border border-[color:var(--Border,rgba(32,72,79,0.10))] bg-white w-full grow mt-3 pl-10 pr-20 py-7 rounded-xl border-solid max-md:px-5">
                Pelajari dan langsung coba experience ditempat kerja yang
                sesuungguhnya.
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[64%] ml-5 max-md:w-full max-md:ml-0">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ec09eada-7cab-4eeb-94be-870c2295c2c1?apiKey=6f0257302a85476b9d26590be3d78938&"
              className="aspect-[1.41] object-contain object-center w-full overflow-hidden grow mt-3 max-md:max-w-full max-md:mt-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
