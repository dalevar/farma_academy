import {
  IconMedic,
  IconBook,
  IconStar,
  IconCalendar,
  IconBag,
  IconSMS,
} from "../../components/Icons";
const DashboardPage = () => {
  return (
    <div className="w-full">
      <div className="bg-farma-100 w-full py-44 px-36">
        <div>
          <span className="text-3xl font-thin">
            Selamat Datang, Barry Gordon
          </span>
          <p className="w-4/12 leading-5 mt-4">
            Disini, kamu bisa menemukan semua yang kamu butuhkan untuk belajar,
            berkembang, dan terhubung dengan orang-orang di bidang farmasi.{" "}
          </p>
        </div>
        <div className="relative top-[135px] ml-[18rem]">
          <div className="absolute bg-farma-900 rounded-full py-3 px-10 text-white flex">
            <div className="">
              <span className="text-sm font-thin">Status langganan</span>
              <p className="font-semibold">Paket Master - 11 Bulan 2 Hari</p>
            </div>

            <button
              className="ml-80 bg-white text-farma-500 p-2 px-5 rounded-full hover:opacity-90"
              onClick={() => (window.location.href = "./langganan")}
            >
              Lihat paket
            </button>
          </div>
        </div>
      </div>
      <div className="w-9/12 mx-auto mt-28">
        <div className="w-full shadow-md border rounded-2xl py-10 px-24">
          <span className="font-thin text-lg">
            Lanjutkan progress belajar kamu
          </span>
          <div className="flex gap-8 py-10">
            <div className="border border-farma-400 rounded-2xl w-6/12 px-8 py-7 flex gap-5">
              <div className="bg-farma-400 py-3 px-6 h-full rounded-xl">
                <div className="w-16 mx-auto mt-2">
                  <IconMedic />
                </div>
              </div>
              <div>
                <span className="font-semibold">PULVIS DAN PULVERES</span>
                <p className="text-sm text-farma-900 font-thin">
                  On the most popular sites
                </p>
                <div className="flex justify-between mt-10">
                  <div className="flex gap-2 items-center">
                    <IconBook />
                    <span className="text-md">5 Bab</span>
                  </div>
                  <div className="flex gap-2 items-center">
                    <IconStar />
                    <span className="text-md">4.84</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="border border-farma-400 rounded-2xl w-6/12 px-8 py-7 flex gap-5">
              <div className="bg-farma-400 py-3 px-6 h-full rounded-xl">
                <div className="w-16 mx-auto mt-2">
                  <IconMedic />
                </div>
              </div>
              <div>
                <span className="font-semibold">PULVIS DAN PULVERES</span>
                <p className="text-sm text-farma-900 font-thin">
                  On the most popular sites
                </p>
                <div className="flex justify-between mt-10">
                  <div className="flex gap-2 items-center">
                    <IconBook />
                    <span className="text-md">5 Bab</span>
                  </div>
                  <div className="flex gap-2 items-center">
                    <IconStar />
                    <span className="text-md">4.84</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="text-end">
            <a href="/module" className="text-farma-500 underline text-xl me-5">
              Selengkapnya
            </a>
          </p>
        </div>
        <div className="flex gap-5 mt-5">
          <div className="w-8/12 shadow-md border rounded-2xl px-5 py-10 ">
            <span className="font-thin text-xl ml-9">Aktivitas lain</span>
            <div className="flex mt-14 gap-5 justify-center">
              <div className="border shadow-lg p-5 rounded-xl hover:scale-110 transition-transform">
                <div className="w-8">
                  <IconCalendar />
                </div>
                <div className="w-8/12 mt-5">Telusuri event terbaru</div>
              </div>
              <div className="border shadow-lg p-5 rounded-xl hover:scale-110 transition-transform">
                <div className="w-8">
                  <IconBag />
                </div>
                <div className="w-8/12 mt-5">Telusuri daftar pekerjaan</div>
              </div>
              <div className="border shadow-lg p-5 rounded-xl hover:scale-110 transition-transform">
                <div className="w-8">
                  <IconSMS />
                </div>
                <div className="w-8/12 mt-5">Telusuri Komunitas</div>
              </div>
            </div>
          </div>
          <div className="w-4/12 shadow-md border rounded-2xl py-3 px-8 [Jakarta Sans']">
            <div className="self-stretch flex justify-between mx-auto gap-5 mt-8">
              <div className="flex grow basis-[0%] flex-col items-stretch">
                <div className="text-sky-950 text-lg leading-7 whitespace-nowrap">
                  Riwayat Terkini{" "}
                </div>
                <div className="flex items-stretch justify-between gap-5 mt-2 max-md:justify-center">
                  <div className="text-gray-300 text-sm leading-5">Sn</div>
                  <div className="text-gray-300 text-sm leading-5">Sl</div>
                  <div className="text-gray-300 text-sm leading-5">Rb</div>
                  <div className="text-gray-300 text-sm leading-5 whitespace-nowrap">
                    Km
                  </div>
                </div>
              </div>
              <div className="flex grow basis-[0%] flex-col">
                <div className="text-gray-300 text-sm text-end leading-5 my-auto whitespace-nowrap">
                  November
                </div>
                <div className="self-stretch flex items-stretch justify-between gap-5 mt-3 pr-3 max-md:justify-center">
                  <div className="text-gray-300 text-sm leading-5 self-start">
                    Jm
                  </div>
                  <div className="text-gray-300 text-sm leading-5 self-start">
                    Sb
                  </div>
                  <div className="text-gray-300 text-sm leading-5 whitespace-nowrap">
                    Mg
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex items-stretch justify-center gap-3 mt-2.5 max-md:justify-center">
              <div className="bg-sky-100 flex w-[37px] shrink-0 h-[37px] flex-col rounded-md" />
              <div className="bg-sky-100 flex w-[37px] shrink-0 h-[37px] flex-col rounded-md" />
              <div className="bg-sky-100 flex w-[37px] shrink-0 h-[37px] flex-col rounded-md" />
              <div className="bg-sky-100 flex w-[37px] shrink-0 h-[37px] flex-col rounded-md" />
              <div className="bg-gray-200 flex w-[37px] shrink-0 h-[37px] flex-col rounded-md" />
              <div className="bg-sky-600 flex w-[37px] shrink-0 h-[37px] flex-col rounded-md" />
              <div className="bg-sky-600 flex w-[37px] shrink-0 h-[37px] flex-col rounded-md" />
            </div>
            <div className="self-stretch flex items-stretch justify-center gap-3 mt-2.5 max-md:justify-center">
              <div className="bg-gray-200 flex w-[37px] shrink-0 h-[37px] flex-col rounded-md" />
              <div className="bg-gray-200 flex w-[37px] shrink-0 h-[37px] flex-col rounded-md" />
              <div className="bg-gray-200 flex w-[37px] shrink-0 h-[37px] flex-col rounded-md" />
              <div className="bg-sky-300 flex w-[37px] shrink-0 h-[37px] flex-col rounded-md" />
              <div className="bg-sky-300 flex w-[37px] shrink-0 h-[37px] flex-col rounded-md" />
              <div className="bg-gray-200 flex w-[37px] shrink-0 h-[37px] flex-col rounded-md" />
              <div className="bg-gray-200 flex w-[37px] shrink-0 h-[37px] flex-col rounded-md" />
            </div>
            <div className="self-stretch flex items-stretch justify-center gap-3 mt-2.5 max-md:justify-center">
              <div className="bg-gray-200 flex w-[37px] shrink-0 h-[37px] flex-col rounded-md" />
              <div className="bg-gray-200 flex w-[37px] shrink-0 h-[37px] flex-col rounded-md" />
              <div className="bg-gray-200 flex w-[37px] shrink-0 h-[37px] flex-col rounded-md" />
              <div className="bg-sky-300 flex w-[37px] shrink-0 h-[37px] flex-col rounded-md" />
              <div className="bg-sky-300 flex w-[37px] shrink-0 h-[37px] flex-col rounded-md" />
              <div className="bg-gray-200 flex w-[37px] shrink-0 h-[37px] flex-col rounded-md" />
              <div className="bg-gray-200 flex w-[37px] shrink-0 h-[37px] flex-col rounded-md" />
            </div>
            <div className="self-stretch flex items-stretch justify-center gap-3 mt-3 max-md:justify-center">
              <div className="bg-gray-200 flex w-[37px] shrink-0 h-[37px] flex-col rounded-md" />
              <div className="bg-gray-200 flex w-[37px] shrink-0 h-[37px] flex-col rounded-md" />
              <div className="bg-gray-200 flex w-[37px] shrink-0 h-[37px] flex-col rounded-md" />
              <div className="bg-sky-300 flex w-[37px] shrink-0 h-[37px] flex-col rounded-md" />
              <div className="bg-sky-300 flex w-[37px] shrink-0 h-[37px] flex-col rounded-md" />
              <div className="bg-gray-200 flex w-[37px] shrink-0 h-[37px] flex-col rounded-md" />
              <div className="bg-gray-200 flex w-[37px] shrink-0 h-[37px] flex-col rounded-md" />
            </div>
            <div className="self-stretch flex items-stretch justify-start -ml-3 gap-3 mt-3 max-md:justify-center">
              <div className="bg-gray-200 flex w-[37px] shrink-0 h-[37px] flex-col rounded-md" />
              <div className="bg-gray-200 flex w-[37px] shrink-0 h-[37px] flex-col rounded-md" />
            </div>

            <div className="self-center justify-center mx-auto flex w-[173px] max-w-full items-end mt-4 gap-2.5">
              <div className="text-black text-xs leading-5 my-auto">
                Sedikit
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/bb658aab-59fd-4940-812b-f6733c86a731?apiKey=6f0257302a85476b9d26590be3d78938&"
                className="aspect-[6.33] object-contain object-center w-[76px] overflow-hidden shrink-0 max-w-full self-start my-auto"
              />
              <div className="text-black text-xs leading-5 whitespace-nowrap self-start">
                Banyak
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DashboardPage;
