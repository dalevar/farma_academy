/* eslint-disable no-unused-vars */
import Latex from "react-latex";
import katex from "katex";
import { IconDropdown } from "../../components/Icons";
import { useState } from "react";
import CardYoung from "../../components/card_kalkulator/CardYoung";
const HitungDetail = () => {
  const [young, setYoung] = useState(true);
  const [dilling, setDilling] = useState(false);
  const [fried, setFried] = useState(false);
  const [thermich, setThermich] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [rumusDipakai, setRumusDipakai] = useState("young");
  let html;
  let catatan;
  function rumusDilling(n, dm) {
    const mathExpression = `\\frac{${n}}{{20}} \\times ${dm}g`;
    html = katex.renderToString(mathExpression);
    catatan = {
      umur: [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
      tipe: "Tahun",
      n: "umur anak 8 - 20 tahun",
      dm: "dosis maksimal",
    };
  }
  function rumusFried(n, dm) {
    const mathExpression = `\\frac{${n}}{{150}} \\times ${dm}g`;
    html = katex.renderToString(mathExpression);
    catatan = {
      umur: [12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
      tipe: "Bulan",
      n: "umur bayi < 1 tahun (dalam bulan)",
      dm: "dosis maksimal",
    };
  }
  function rumusThermich(n, dm) {
    const mathExpression = `\\frac{${n}}{{70}} \\times ${dm}g`;
    html = katex.renderToString(mathExpression);
    catatan = {
      n: "berat badan dalam satuan kilo (KG)",
      dm: "dosis maksimal",
    };
  }

  const submitForm = (e) => {
    e.preventDefault();
  };
  return (
    <section className="w-full">
      <div className="w-full">
        <div className="w-full bg-farma-50 px-36 py-20">
          <span className="['Jakarta-sans'] text-6xl text-farma-950 font-bold">
            Menghitung dosis
          </span>
          <span className="['Jakarta-sans'] block text-3xl font-thin mt-3">
            Masukkan angka yang anda inginkan dan pilih rumusnya
          </span>
        </div>

        <div className="w-11/12 mx-auto flex items-center justify-between border px-10 p-5 rounded-full mt-5">
          <span className="font-['Jakarta-sans'] text-3xl text-farma-900">
            Rumus {rumusDipakai.toUpperCase()}
          </span>
          <div>
            <button
              className="bg-violet-50 flex w-auto justify-between gap-4 px-10 py-3 rounded-[50px]"
              onClick={() => setShowButton(~showButton)}
            >
              <p className="mx-auto">{!rumusDipakai ? "Pilih Rumus" : rumusDipakai}</p>
              <div className="w-5 my-auto">
                <IconDropdown />
              </div>
            </button>
            <div
              className={`relative w-2/12 top-2 -right-8 z-50 ${
                !showButton ? "hidden" : ""
              }`}
            >
              <div className="absolute flex flex-wrap gap-2 bg-violet-50 rounded-xl px-4 py-2">
                <button
                  className="border-b-2 border-b-slate-400 ml-4"
                  onClick={() => setRumusDipakai("young")}
                >
                  YOUNG
                </button>
                <button
                  className="border-b-2 border-b-slate-400 ml-3"
                  onClick={() => setRumusDipakai("dilling")}
                >
                  DILLING
                </button>
                <button
                  className="border-b-2 border-b-slate-400 ml-5"
                  onClick={() => setRumusDipakai("fried")}
                >
                  FRIED
                </button>
                <button
                  className="border-b-2 border-b-slate-400 ml-1"
                  onClick={() => setRumusDipakai("thermich")}
                >
                  THERMICH
                </button>
              </div>
            </div>
          </div>
        </div>
        {
          rumusDipakai === "young" && (
            <CardYoung  />
          )
        }
      </div>
    </section>
    // <div dangerouslySetInnerHTML={{ __html: html }} />
  );
};

export default HitungDetail;
