import { IconNote, IconStar } from "../../../../components/Icons";
import { useState } from "react";
export default function BodyAccesses() {
  const [showInformation, setShowInformation] = useState(true);
  const [showComment, setShowComment] = useState(false);
  return (
    <section className="px-3 py-12 bg-white">
      <div className="w-8/12 mx-auto">
        <span className="text-2xl font-medium">Benefit belajar : </span>
        <div className="flex justify-between">
          <div className="flex bg-farma-50 px-3 p-5 rounded-xl mt-3 h-40 border border-farma-200">
            <span className="inline w-11 mb-auto">
              <IconNote />
            </span>
            <div className="mx-2">
              <p className="text-farma-950 text-2xl font-semibold">
                Ujian & Ulangan
              </p>
              <p className="text-farma-900 text-sm font-thin w-9/12 mt-2">
                Sediaan ini terdiri dari dua jenis
              </p>
            </div>
          </div>
          <div className="flex bg-farma-50 px-3 p-5 rounded-xl mt-3 border border-farma-200">
            <span className="inline w-11 mb-auto">
              <IconNote />
            </span>
            <div className="mx-2">
              <p className="text-farma-950 text-2xl font-semibold">
                Ujian & Ulangan
              </p>
              <p className="text-farma-900 text-sm font-thin w-9/12 mt-2">
                Sediaan ini terdiri dari dua jenis
              </p>
            </div>
          </div>
          <div className="flex bg-farma-50 px-3 p-5 rounded-xl mt-3 border border-farma-200">
            <span className="inline w-11 mb-auto">
              <IconNote />
            </span>
            <div className="mx-2">
              <p className="text-farma-950 text-2xl font-semibold">
                Ujian & Ulangan
              </p>
              <p className="text-farma-900 text-sm font-thin w-9/12 mt-2">
                Sediaan ini terdiri dari dua jenis
              </p>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <div className="p-4  w-4/12">
            <span
              className={`text-xl ${showInformation === true ? "font-semibold" : "font-thin"
                } me-12 cursor-pointer`}
              onClick={() => {
                setShowInformation(true);
                setShowComment(false);
              }}
            >
              Informasi materi
            </span>
            <span
              className={`text-xl text-farma-950 ${showComment === true ? "font-semibold" : "font-thin"
                } cursor-pointer`}
              onClick={() => {
                setShowComment(true);
                setShowInformation(false);
              }}
            >
              Testimoni
            </span>
            {/* Tolong bang edo buatin animasi underline nya */}
            <hr className="w-full" />
          </div>
          <div className="p-4">
            <div className={`${showInformation === true ? "" : "hidden"}`}>
              <span className="text-xl font-semibold block text-farma-950">
                Informasi Daftar Materi
              </span>
              <p className="text-lg font-extralight text-farma-950 w-10/12 mt-8">
                Sediaan solid farmasi adalah sediaan farmasi yang berbentuk
                padat, terdiri dari satu atau lebih bahan obat yang dihaluskan
                dan dicampur dengan bahan tambahan tertentu. Sediaan solid
                farmasi dapat digolongkan menjadi beberapa jenis, antara lain
                serbuk, kapsul, tablet, dan granulat.
              </p>
            </div>
            <div className={`${showInformation ? "hidden" : ""}`}>
              <div className="flex w-auto mb-12 border-b-2 border-farma-300 py-5">
                <div>
                  <img
                    src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-2-800x800.jpg"
                    alt="..."
                    className="w-20 shadow rounded-full max-w-full h-auto align-middle border-none"
                  />
                </div>
                <div className="ml-3">
                  <span className="text-lg m-0">Saidil mifdal</span>
                  <span className="block m-0">
                    <IconStar />
                    <IconStar />
                    <IconStar />
                    <IconStar />
                    <IconStar />
                  </span>
                  <span className="font-thin">
                    Metode evaluasi pulvis dan pulveres, seperti evaluasi
                    organoleptik, evaluasi fisika, dan evaluasi kimia
                  </span>
                </div>
              </div>
              <div className="flex w-auto mb-12 border-b-2 border-farma-300 py-5">
                <div>
                  <img
                    src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-2-800x800.jpg"
                    alt="..."
                    className="w-20 shadow rounded-full max-w-full h-auto align-middle border-none"
                  />
                </div>
                <div className="ml-3">
                  <span className="text-lg m-0 leading-0 ">Saidil mifdal</span>
                  <span className="block m-0 leading-0">
                    <IconStar />
                    <IconStar />
                    <IconStar />
                    <IconStar />
                    <IconStar />
                  </span>
                  <span className="font-thin">
                    Metode evaluasi pulvis dan pulveres, seperti evaluasi
                    organoleptik, evaluasi fisika, dan evaluasi kimia
                  </span>
                </div>
              </div>
              <p className="text-2xl font-extralight underline text-farma-500 flex items-center justify-end">
                <a href="">Lihat semua testimoni</a>&nbsp;
                <span className="text-farma-600 font-bold">{">"}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
