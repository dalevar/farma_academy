// import { Link } from "react-router-dom";
import CardLangganan from "../../components/cards/CardLangganan";
export default function LanggananPage() {
  return (
    <main className="flex-auto">
      <div className="w-11/12 p-6 mt-5 mx-auto">
        <div className="text-center">
          <div className="">
            <p className="font-bold text-2xl">Biaya & Benefit berlangganan</p>
            <p className="text-center mt-1">
              Dapatkan akses ke materi pembelajaran yang lengkap dan
              komprehensif, serta fitur-fitur yang mendukung proses belajar.
            </p>
          </div>
        </div>
        <div className="flex justify-center mt-6 gap-8 w-auto">
          <CardLangganan
            paket={"3 Bulan"}
            harga={"400, 000"}
            benefit={[
              "Akses semua module",
              "Forum diskusi",
              "Ujian & Quiz",
              "30 Kali Akses Hitung cepat",
              "Sertifikat",
            ]}
          />
          <CardLangganan
            paket={"6 Bulan"}
            harga={"750, 000"}
            benefit={[
              "Akses semua module",
              "Forum diskusi",
              "Ujian & Quiz",
              "30 Kali Akses Hitung cepat",
              "Bebas Konsultasi Dengan Mentor",
              "Sertifikat",
            ]}
          />
          <CardLangganan
            paket={"12 Bulan"}
            harga={"1,400, 000"}
            benefit={[
              "Akses semua module",
              "Forum diskusi",
              "Ujian & Quiz",
              "30 Kali Akses Hitung cepat",
              "Bebas Konsultasi Dengan Mentor",
              "Sertifikat",
            ]}
          />
          <CardLangganan
            paket={"1 Bulan"}
            harga={"1,400, 000"}
            benefit={[
              "Akses semua module",
              "Forum diskusi",
              "Ujian & Quiz",
              "30 Kali Akses Hitung cepat",
              "Sertifikat",
            ]}
          />
        </div>
      </div>
      <div className="w-full justify-center flex mt-5">
        <div className="w-auto">
          <p className="text-xl">
            Punya pertanyaan seputar langganan dan promo menarik lainnya?
          </p>
          <p className="text-farma-400 underline text-center text-lg">
            <a href={"/forum"}>Tanyakan kami disini</a>
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex w-9/12 border border-black rounded-xl p-5 mt-10 py-8">
          <div className="p-5">
            <p className="text-3xl text-farma-950 font-semibold">
              Paket Kerja sama
            </p>
            <p className="mt-5 mb-5">
              Paket kerja sama dengan pihak sekolah untuk fitur langganan di
              aplikasi Farma Academy. Paket ini bertujuan untuk memberikan akses
              eksklusif kepada siswa dan guru sekolah untuk menggunakan
              fitur-fitur premium di aplikasi Farma Academy.
            </p>
            <button className="bg-farma-900 font-thin text-center rounded-md text-white px-5 py-3">
              Hubungi kami
            </button>
          </div>
          <div className="w-11/12  rounded-xl">
            {" "}
            <img
              src="../../public/images/langganan/LanggananImage.png"
              alt="..."
              className="w-full align-middle border-none rounded-xl"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
