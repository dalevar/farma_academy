/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import katex from "katex";
import { useState } from "react";
const CardYoung = () => {
  const [result, setResult] = useState();
  const [resultSatuObat, setResultSatuObat] = useState();
  const [rumus, setRumus] = useState();
  const [mathExpression, setMathExpression] = useState();
  const [umur, setUmur] = useState();
  const catatan = {
    umurTahun: [1, 2, 3, 4, 5, 6, 7, 8],
    n: "umur anak harus lebih dari 1 tahun dan tidak boleh kurang dari 8 tahun",
    dm: "dosis maksimal",
  };
  const html = rumus && katex.renderToString(rumus);
  const mathRumus = mathExpression && katex.renderToString(mathExpression);
  function rumusYoung(e) {
    e.preventDefault();
    const n = Number(e.target[1].value);
    let dm = e.target[0].value.toString();
    dm = dm.replace(",", ".");
    dm = dm.replace(/[^0-9.]/g, "");
    dm = Number(dm);

    if (e.target[1].value === "Umur anak") {
      return alert("Masukkan umur!");
    }
    if (e.target[2].value) {
      let dmSatuObat = e.target[2].value.toString();
      dmSatuObat = dmSatuObat.replace(",", ".");
      dmSatuObat = dmSatuObat.replace(/[^0-9.]/g, "");
      dmSatuObat = Number(dmSatuObat);
      const resultsSatu = ((n / (n + 12)) * dmSatuObat).toFixed(3);
      setResultSatuObat(resultsSatu);
    } else {
      setResultSatuObat(null);
    }
    setUmur(n);
    setRumus(`\\frac{n}{{n+12}} \\times dm`);
    setMathExpression(`\\frac{${n}}{{${n}+12}} \\times ${dm}mg`);
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
                  <option selected disabled>
                    Umur anak
                  </option>
                  {catatan.umurTahun.map((v, i) => {
                    return (
                      <option value={v} key={i}>
                        {v} Tahun
                      </option>
                    );
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
              <button
                type="submit"
                className="font-['Jakarta-sans'] py-2 px-4 text-lg bg-farma-600 text-white rounded-xl"
              >
                Hitung
              </button>
              {result && (
                <span className="text-2xl font-bold">Hasil : {result}g</span>
              )}
            </div>
          </form>
        </div>
      </div>
      <div className="w-5/12 bg-white rounded-2xl p-5 shadow-xl border-2 border-black">
        <div className="relative ml-[20rem]">
          <div className="absolute border border-black rounded-xl p-5">
            <p>Catatan : </p>
            <span className="block">n = {catatan.n}</span>
            <br />
            <span className="block">dm = {catatan.dm}</span>
          </div>
        </div>
        {result && (
          <div className="p-7">
            <span className="font-bold text-lg">Hasil : {result}g</span>
            <p className="text-lg mt-5">Penyelesaian : </p>
            <div className="flex items-center gap-5 mt-5">
              <span className="text-lg font-semibold">Rumus</span>
              <span>:</span>
              <span
                className="text-lg"
                dangerouslySetInnerHTML={{ __html: html }}
              />
            </div>
            <div className="flex items-center gap-5 mt-5">
              <span className="text-lg font-semibold">Jawaban</span>
              <span>:</span>
              <span
                className="text-lg"
                dangerouslySetInnerHTML={{ __html: mathRumus }}
              />
            </div>
            <div className="mt-5">
              <span className="text-lg font-semibold">Hasil : </span>
              <span className="text-lg">{result} g</span>
              <span className="text-sm block">
                DM 1 Hari yang harus diberikan kepada anak usia {umur} tahun
                adalah <span className="font-bold">{result} mg </span>
              </span>
              {resultSatuObat && (
                <span className="text-sm block">
                  DM 1x yang harus diberikan kepada anak usia {umur} tahun
                  adalah <span className="font-bold">{resultSatuObat} mg </span>
                </span>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CardYoung;
