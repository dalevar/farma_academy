import { useState } from "react";
import { IconComment, IconLike } from "../../components/Icons.jsx";
const DetailForum = () => {
  const [fillStatus, setFillStatus] = useState(false);
  const [countLike, setCountLike] = useState(12);

  const [fillStatusComment, setFillStatusComment] = useState(false);
  const [countLikeComment, setCountComment] = useState(5);
  return (
    <div className="bg-white w-10/12 mx-auto">
      <div className="flex items-center gap-3">
        <img
          src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-2-800x800.jpg"
          alt="..."
          className="w-12 shadow rounded-full max-w-full h-auto align-middle border-none me-3"
        />
        <span>Ahmad Ridho Ramadhan</span>
        <span>|</span>
        <span className="text-farma-500">28 October 2019</span>
      </div>
      <div className="mt-7">
        <span className="text-2xl font-bold">
          Apa perbedaan antara tablet dan kapsul?
        </span>
      </div>
      <div className="w-8/12 mt-10 border border-gray-400 rounded-md p-3">
        <span className="text-gray-800 text-md">
          Saya sedang belajar tentang sediaan obat padat. Saya ingin tahu, apa
          perbedaan antara tablet dan kapsul?
        </span>
      </div>
      <div className="flex items-center mt-10 gap-5">
        <div className="flex items-center">
          <div className="w-6 h-6 me-2">
            <IconComment />
          </div>
          <span className="text-gray-800">1 Pembahasan</span>
        </div>
        <div className="flex items-center">
          <button
            className="w-6 h-6 me-2 cursor-pointer"
            onClick={() => {
              setFillStatus(!fillStatus);
              setCountLike(fillStatus === true ? countLike - 1 : countLike + 1);
            }}
          >
            <IconLike fill={fillStatus ? "blue" : "black"} />
          </button>
          <span className="text-gray-800 mt-0.5">{countLike} Menyukai</span>
        </div>
      </div>
      <hr className="border-black mt-5" />
      <div className="w-full m-5 mt-10">
        <div className="flex gap-3 items-center">
          <img
            src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-2-800x800.jpg"
            alt="..."
            className="w-12 shadow rounded-full max-w-full h-auto align-middle border-none me-3"
          />
          <span>Ahmad Ridho Ramadhan</span>
        </div>
        <form
          action="
        "
        >
          <div className="h-48 mt-4">
            <textarea
              className="w-full h-full py-4 px-10 rounded-xl border border-farma-200 outline-none  active:border-farma-200 active:outline-farma-200"
              placeholder="Tulis pesan ..."
            ></textarea>
          </div>
          <div className="flex justify-end mt-5">
            <button className="bg-farma-700 rounded-xl py-2 text-white px-10 text-2xl hover:opacity-80">
              Balas
            </button>
          </div>
        </form>

        <hr className="border-black mt-6 rounded-full" />
        <div className="w-full border border-farma-800 rounded-2xl px-9 p-5 mt-14">
          <div className="">
            <div className="flex items-center gap-5">
              <img
                src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-2-800x800.jpg"
                alt="..."
                className="w-12 shadow rounded-full max-w-full h-auto align-middle border-none me-3"
              />
              <div>
                <span>Ahmad Ridho Ramadhan</span>
                <div className="flex items-center gap-2">
                  <div className="bg-farma-800 p-1 rounded-full w-2 h-2"></div>
                  <span className="text-farma-900 font-medium text-md">
                    2 jam yang lalu
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-5 ml-20 text-black">
              <span>
                Tablet dan kapsul adalah dua jenis sediaan obat padat. Perbedaan
                antara keduanya adalah:
              </span>
              <ol className="list-disc w-11/12 ml-5 mt-2">
                <li>
                  Tablet adalah sediaan obat yang berbentuk padat dan pipih.
                  Tablet dibuat dengan cara menekan bahan obat dan bahan pengisi
                  menjadi bentuk yang diinginkan.
                </li>
                <li>
                  Kapsul adalah sediaan obat yang berbentuk padat dan bulat.
                  Kapsul terdiri dari dua bagian, yaitu cangkang dan isi.
                  Cangkang kapsul terbuat dari gelatin atau bahan lain yang
                  dapat larut dalam air. Isi kapsul terdiri dari bahan obat dan
                  bahan tambahan, seperti zat pengisi, zat pelincir, dan zat
                  warna.
                </li>
              </ol>
              <div className="flex items-center mt-10 gap-5">
                <div className="flex items-center">
                  <div className="w-6 h-6 me-2">
                    <IconComment />
                  </div>
                  <span className="text-gray-800">8 Balas</span>
                </div>
                <div className="flex items-center">
                  <button
                    className="w-6 h-6 me-2 cursor-pointer"
                    onClick={() => {
                      setFillStatusComment(!fillStatusComment);
                      setCountComment(
                        fillStatusComment === true
                          ? countLikeComment - 1
                          : countLikeComment + 1
                      );
                    }}
                  >
                    <IconLike fill={fillStatusComment ? "blue" : "black"} />
                  </button>
                  <span className="text-gray-800 mt-0.5">
                    {countLikeComment} Menyukai
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailForum;
