/* eslint-disable no-undef */
/* eslint-disable react/no-unknown-property */
import ButtonForum from "../../components/buttons/ButtonForum.jsx";
import InputRadio from "../../components/inputs/InputRadio.jsx";
import CardForum from "../../components/cards/CardForum.jsx";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
export default function ForumPage() {
  const [show, setShow] = useState(false);


  return (
    <main className="flex-auto p-10 bg-red">
      <div className="flex justify-around gap-5 ">
        <div className="w-full">
          <form className="flex items-center gap-2 w-full">
            <ButtonForum onClick={() => alert("halo")}>
              Buat diskusi baru
            </ButtonForum>
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative w-full h-full">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-black me-12"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="default-search"
                className="block w-full py-5 pl-10 text-lg border-2 rounded-lg"
                placeholder="Cari judul diskusi"
                required
              />
              <button
                type="button"
                onClick={() => setShow((value) => !value)}
                className="absolute top-0 right-0 p-2.5  text-sm font-medium h-full text-white bg-farma-950 rounded-r-lg border border-farma-950 hover:opacity-95 focus:ring-4 focus:outline-none"
              >
                <span className="text-2xl px-7">Filter</span>
              </button>
            </div>
          </form>
          <AnimatePresence>
            {show && (
              <motion.div
                initial={{ opacity: 0 }}
                exit={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={`flex justify-end ${show ? "" : "hidden"}`}
              >
                <div className="relative w-3/12 ">
                  <div className="absolute mt-4 bg-white w-full border border-black rounded-lg p-3">
                    <div className="py-2">
                      <span className="text-2xl">Filter berdasarkan</span>
                      <div className="mt-5">
                        <InputRadio>Diskusi sudah selesai</InputRadio>
                        <InputRadio>Diskusi sudah selesai</InputRadio>
                      </div>
                      <hr className="my-5 border-spacing-4 h-1" />
                      <span className="text-2xl">Urutkan berdasarkan</span>
                      <div className="mt-5">
                        <InputRadio>Diskusi Terbaru</InputRadio>
                        <InputRadio>Diskusi Terlama</InputRadio>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <CardForum
            nama={"Ahmad Ridho Ramadhan"}
            title={"Lorem ipsum dolor sit amet consectur"}
            imgsrc={
              "https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-2-800x800.jpg"
            }
            tanggalUpload={"1 Tahun yang lalu"}
            deskripsi={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil eos ipsa non sapiente necessitatibus adipisci velit explicabo atque eum architecto. Exercitationem corrupti officia alias voluptate aliquid! Quia nisi minima in eum exercitationem sequi eaque quam distinctio corrupti accusantium fuga, ducimus corporis iure molestiae ab porro dolor labore itaque dolores voluptatum."
            }
            commentCount={10}
          />
          <CardForum
            nama={"Ahmad Ridho Ramadhan"}
            title={"Lorem ipsum dolor sit amet consectur"}
            imgsrc={
              "https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-2-800x800.jpg"
            }
            tanggalUpload={"1 Tahun yang lalu"}
            deskripsi={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil eos ipsa non sapiente necessitatibus adipisci velit explicabo atque eum architecto. Exercitationem corrupti officia alias voluptate aliquid! Quia nisi minima in eum exercitationem sequi eaque quam distinctio corrupti accusantium fuga, ducimus corporis iure molestiae ab porro dolor labore itaque dolores voluptatum."
            }
            commentCount={10}
          />
          <CardForum
            nama={"Ahmad Ridho Ramadhan"}
            title={"Lorem ipsum dolor sit amet consectur"}
            imgsrc={
              "https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-2-800x800.jpg"
            }
            tanggalUpload={"1 Tahun yang lalu"}
            deskripsi={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil eos ipsa non sapiente necessitatibus adipisci velit explicabo atque eum architecto. Exercitationem corrupti officia alias voluptate aliquid! Quia nisi minima in eum exercitationem sequi eaque quam distinctio corrupti accusantium fuga, ducimus corporis iure molestiae ab porro dolor labore itaque dolores voluptatum."
            }
            commentCount={10}
          />
          <CardForum
            nama={"Ahmad Ridho Ramadhan"}
            title={"Lorem ipsum dolor sit amet consectur"}
            imgsrc={
              "https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-2-800x800.jpg"
            }
            tanggalUpload={"1 Tahun yang lalu"}
            deskripsi={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil eos ipsa non sapiente necessitatibus adipisci velit explicabo atque eum architecto. Exercitationem corrupti officia alias voluptate aliquid! Quia nisi minima in eum exercitationem sequi eaque quam distinctio corrupti accusantium fuga, ducimus corporis iure molestiae ab porro dolor labore itaque dolores voluptatum."
            }
            commentCount={10}
          />
          <CardForum
            nama={"Ahmad Ridho Ramadhan"}
            title={"Lorem ipsum dolor sit amet consectur"}
            imgsrc={
              "https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-2-800x800.jpg"
            }
            tanggalUpload={"1 Tahun yang lalu"}
            deskripsi={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil eos ipsa non sapiente necessitatibus adipisci velit explicabo atque eum architecto. Exercitationem corrupti officia alias voluptate aliquid! Quia nisi minima in eum exercitationem sequi eaque quam distinctio corrupti accusantium fuga, ducimus corporis iure molestiae ab porro dolor labore itaque dolores voluptatum."
            }
            commentCount={10}
          />
          <CardForum
            nama={"Ahmad Ridho Ramadhan"}
            title={"Lorem ipsum dolor sit amet consectur"}
            imgsrc={
              "https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-2-800x800.jpg"
            }
            tanggalUpload={"1 Tahun yang lalu"}
            deskripsi={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil eos ipsa non sapiente necessitatibus adipisci velit explicabo atque eum architecto. Exercitationem corrupti officia alias voluptate aliquid! Quia nisi minima in eum exercitationem sequi eaque quam distinctio corrupti accusantium fuga, ducimus corporis iure molestiae ab porro dolor labore itaque dolores voluptatum."
            }
            commentCount={10}
          />
        </div>
      </div>
    </main>
  );
}
