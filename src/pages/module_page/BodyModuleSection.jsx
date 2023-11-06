import CardModule from "../../components/cards/Card.Module";

export default function ModuleBody() {
  return (
    <section className="container flex flex-col gap-5 px-3 py-32 mx-auto bg-farma-50">
      {/* CARD MODULE   */}
      <div className="flex justify-center w-full my-8">
        <div className="px-2 w-96">
          <div>
            <div className="w-[301px] h-[501px] shrink-0 border border-farma-800 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] rounded-[10px] border-solid">
              <div className="px-4 my-2">
                <div className="flex">
                  <p className="flex-1 pb-1 text-base font-semibold">
                    Category Module
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full px-2">
          <div className="w-full px-2">
            <div className="mb-2">
              <p>Pilih module dan mulai belajar!</p>
            </div>
            <div className="mx-2 my-6">
              <CardModule moduleTitle="ILMU RESEP & PRAKTEK RESEP" href="" />
            </div>

            {/* CARD MATERI (BELUM JADI) */}
            <div className="flex w-[434px] h-[196px] border border-farma-800 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] rounded-[10px] border-solid">
              <div className="relative w-1/4">
                <img src="/images/logos/Logo.png" className="w-full h-full" />
              </div>
              <div className="flex flex-col justify-center w-3/4 p-4">
                <p className="text-xl font-semibold text-center text-farma-950">
                  FARMASI DAN FARMAKOPE INDONESIA
                </p>
                <p className="text-xs text-center text-farma-950">
                  Farmasi dan Farmakope Indonesia adalah mata pelajaran yang
                  mempelajari tentang ilmu farmasi, termasuk di dalamnya tentang
                  obat, bahan obat, dan standar mutu obat.
                </p>
                <div className="flex flex-col ">
                  <p>5 Bab</p>
                  <p>4.92</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
