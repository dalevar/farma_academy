/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import katex from "katex";
import { useState } from "react";
const CardYoung = () => {
  const [result, setResult] = useState(0);
  let html;
  const catatan = {
    umurTahun: [1, 2, 3, 4, 5, 6, 7, 8],
    umurBulan: [12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
    n: "umur anak <= 8 tahun",
    dm: "dosis maksimal",
  };
  let mathExpression;
  let rumus;
  function rumusYoung(e) {
    const n = Number(e.target[0].value);
    const dm = Number(e.target[1].value);
    e.preventDefault();
    rumus = `\\frac{n}{{n+12}} \\times dm`;
    mathExpression = `\\frac{${n}}{{${n}+12}} \\times ${dm}g`;
    html = katex.renderToString(mathExpression);
    const results = ((n / (n + 12)) * dm).toFixed(3);  
    setResult(results);
  }
  return (
    <div className="flex justify-around mt-10">
      <div className="w-6/12 bg-white rounded-2xl p-10 shadow-lg mt-10 border-2 border-black">
        <div className="mt-5">
          <form onSubmit={rumusYoung}>
            <div className="flex gap-10">
              <div className="relative flex items-center select-none w-7/12">
                <input
                  type="text"
                  placeholder="DM Obat 1 hari"
                  className={
                    "peer border-2 border-gray-400 rounded-lg  w-full py-4  px-2 outline-none"
                  }
                />

              </div>

              <div className="relative flex items-center select-none w-7/12">
                <select
                  id="countries"
                  className="peer border-2 border-gray-400 rounded-lg w-full py-4 px-2
                    outline-none"
                >
                  <option selected >Umur anak</option>
                  {catatan.umurTahun.map((v, i) => {
                    return (
                      <option value={v} key={i}>
                        {v} Tahun
                      </option>
                    );
                  })}
                  {catatan.umurBulan.map((v, i) => {
                    return <option value={v} key={i}>{v} bulan</option>;
                  })}
                </select>
              </div>
            </div>
            <div className="relative flex flex-wrap items-center select-none w-[309px] mt-5">
              <input
                type="number"
                placeholder="DM Obat 1x"
                className={
                  "peer border-2 border-gray-400 rounded-lg  w-full py-4  px-2 outline-none"
                }
              />
              <a href="" className="text-farma-500 underline mt-3 ml-1">
                Cari dm obat
              </a>
            </div>
            <div className="flex justify-between mt-5 items-center">
              <button type="submit" className="font-['Jakarta-sans'] py-2 px-4 text-lg bg-farma-600 text-white rounded-xl">
                Hitung
              </button>
              <span className="text-2xl font-bold">Hasil {result}g</span>
              {console.log(result)}
            </div>
          </form>
        </div>
      </div>
      <div className="w-5/12 bg-white rounded-2xl p-5 shadow-xl border-2 border-black">
        {}
      </div>
    </div>
  );
};

export default CardYoung;
