import CardProccessLesson from "../../components/cards/CardProccessLesson";
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
            <a href="#" className="text-farma-500 underline text-xl me-5">
              Selengkapnya
            </a>
          </p>
        </div>
        <div className="flex gap-5 mt-5">
          <div className="w-8/12 shadow-md border rounded-2xl px-5 py-10 ">
            <span className="font-thin text-xl ml-9">Aktivitas lain</span>
            <div className="flex mt-14 gap-5 justify-center">
              <div className="border shadow-lg p-5 rounded-xl">
                <div className="w-8">
                  <IconCalendar />
                </div>
                <div className="w-8/12 mt-5">Telusuri event terbaru</div>
              </div>
              <div className="border shadow-lg p-5 rounded-xl">
                <div className="w-8">
                  <IconBag />
                </div>
                <div className="w-8/12 mt-5">Telusuri daftar pekerjaan</div>
              </div>
              <div className="border shadow-lg p-5 rounded-xl">
                <div className="w-8">
                  <IconSMS />
                </div>
                <div className="w-8/12 mt-5">Telusuri Komunitas</div>
              </div>
            </div>
          </div>
          <div className="w-4/12 shadow-md border rounded-2xl p-9 px-8 [Jakarta Sans']">
            <div className="flex justify-between items-center">
              <span className="text-xl">Riwayat terkini</span>
              <span className="text-md text-gray-500">November</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DashboardPage;
