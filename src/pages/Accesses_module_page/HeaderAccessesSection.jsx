import {
  IconBook,
  IconStar,
  IconPeople,
  IconPath,
} from "../../components/Icons";
import { Link } from "react-router-dom";
export default function HeaderAccesses() {
  return (
    <section className=" gap-5 px-3 py-32 w-full bg-farma-50">
      <div className="flex px-52">
        <div>
          <div className="border-2 border-farma-300 rounded-3xl p-24 w-28 h-28"></div>
          <p className="flex justify-center text-farma-950 items-center text-xs my-auto mt-1">
            <span className="w-6 flex">
              <IconPeople />
            </span>
            1,200 Siswa
          </p>
        </div>
        <div className="ml-10">
          <p className="text-xl font-semibold text-farma-950 mb-2">
            PULVIS DAN PULVERES
          </p>
          <span className="text-xl font-thin mt-1 text-farma-950">
            Category :{" "}
          </span>
          <p className="text-xs bg-farma-200 py-0.5 px-2 rounded-md ml-2 inline-block">
            Dosis
          </p>
          <div className="mt-3">
            <span className="block text-xl font-semibold text-farma-950">
              Deskripsi Materi
            </span>
            <p className="w-6/12 leading-none">
              <span className="font-light text-xs text-farma-950 bg-opacity-75 my-0.5">
                mata pelajaran yang mempelajari tentang sediaan obat padat yang
                berupa serbuk. Sediaan ini terdiri dari dua jenis, yaitu pulvis
                dan pulveres.
              </span>
            </p>
            <div className="flex items-center mt-5">
              <span className="flex item-center">
                <IconBook />{" "}
                <span className="ml-1.5 text-farma-950 font-medium">5 Bab</span>
              </span>
              <span className="flex item-center ml-4">
                <span className="w-6">
                  <IconStar />
                </span>
                <span className="ml-1 my-auto text-farma-950 font-medium">
                  4,56
                </span>
              </span>
            </div>
            <div className="flex mt-2 gap-2">
              <span className="w-5">
                <IconPath />
              </span>
              <span className="text-farma-700 font-thin underline">
                <Link>Ilmu Resep & Farmakologi</Link>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="relative flex justify-end mx-14">
        <div className="absolute top-[-65px] bg-white shadow-xl rounded-3xl max-w-md w-80 p-5 py-8">
          <button className="bg-farma-900 text-white block rounded-lg py-3 px-11 text-xl font-normal w-full hover:opacity-90 transition">
            Mulai belajar
          </button>
          <hr className="my-5" />
          <button className="bg-white border border-farma-300 text-farma-950 block rounded-lg py-3 px-11 text-xl font-normal w-full">
            Informasi materi
          </button>
        </div>
      </div>
    </section>
  );
}
