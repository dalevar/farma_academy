import { IconSubwayBook } from "../../components/Icons";

export default function BannerSection() {
  return (
    <div className="bg-white flex flex-col">
    <div className="rotate-[-0.22deg] self-stretch w-full pl-52 pr-20 pb-8 max-md:max-w-full max-md:px-5">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        <div className="flex flex-col items-stretch w-[52%] max-md:w-full max-md:ml-0">
          <div className="flex mr-0 flex-col my-auto max-md:max-w-full max-md:mt-10">
            <div className="text-sky-950 text-3xl font-bold self-start max-md:max-w-full">
              Daftar sekarang dan jadilah apoteker <br />
              dan tenaga kesehatan lainnya di bidang farmasi yang andal!
            </div>
            <div className="text-sky-900 text-xl font-light mt-6 self-start max-md:max-w-full">
              Wujudkan impianmu menjadi apoteker atau tenaga kesehatan lainnya
              di bidang farmasi
            </div>
            <div className="flex w-[222px] max-w-full items-start justify-between gap-5 mt-8 self-start">
              <button className="text-white text-sm leading-5 self-stretch whitespace-nowrap items-start bg-sky-700 w-[113px] max-w-full pl-4 pr-4 py-2.5 rounded-lg hover:opacity-80">
                Mulai Belajar
              </button>
              <button className="text-teal-900 text-sm leading-5 self-stretch whitespace-nowrap items-start bg-sky-200 w-[81px] max-w-full pl-4 pr-4 py-2.5 rounded-lg hover:opacity-80">
                Telusuri
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-stretch w-[48%] ml-5 max-md:w-full max-md:ml-0">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/92c373a9-a111-4eab-b39c-23972bdfbb7b?apiKey=6f0257302a85476b9d26590be3d78938&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/92c373a9-a111-4eab-b39c-23972bdfbb7b?apiKey=6f0257302a85476b9d26590be3d78938&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/92c373a9-a111-4eab-b39c-23972bdfbb7b?apiKey=6f0257302a85476b9d26590be3d78938&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/92c373a9-a111-4eab-b39c-23972bdfbb7b?apiKey=6f0257302a85476b9d26590be3d78938&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/92c373a9-a111-4eab-b39c-23972bdfbb7b?apiKey=6f0257302a85476b9d26590be3d78938&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/92c373a9-a111-4eab-b39c-23972bdfbb7b?apiKey=6f0257302a85476b9d26590be3d78938&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/92c373a9-a111-4eab-b39c-23972bdfbb7b?apiKey=6f0257302a85476b9d26590be3d78938&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/92c373a9-a111-4eab-b39c-23972bdfbb7b?apiKey=6f0257302a85476b9d26590be3d78938&"
            className="aspect-[1.12] object-contain object-center w-[571px] overflow-hidden max-w-full"
          />
        </div>
      </div>
    </div>
  </div>
  );
}
