import CalculatorCard from "../../components/cards/Calculator";
import { IconSubwayBook } from "../../components/Icons";

const LandingPage = () => {

  return (
    <div>
      {/* banner */}
      <section className="min-h-screen flex items-center container mx-auto px-4">
        <div className="md:basis-2/3 flex flex-col gap-4 px-3 lg:px-0">
          <div>
            <p className="break-words text-farma-950 font-bold md:text-5xl text-2xl leading-tight tracking-tight">Daftar sekarang dan jadilah apoteker
              dan tenaga kesehatan lainnya  di bidang farmasi yang andal!</p>
          </div>
          <div>
            <p className="break-words text-farma-800 md:text-xl text-sm pl-4 leading-tight">Wujudkan impianmu menjadi apoteker atau tenaga kesehatan lainnya di bidang farmasi</p>
          </div>
          <div className="flex md:gap-5 gap-2 pl-4 mt-4">
            <a href="" className="rounded-md flex items-center px-4 py-2 bg-farma-500"><span className="inline-block w-6 h-6"><IconSubwayBook /></span> Mulai Belajar</a>
            <span className="border-l-2 border-black"></span>
            <a href="" className="rounded-md px-4 py-2 bg-farma-700 text-farma-100">Telusuri</a>
          </div>
        </div>
        <div></div>
      </section>

      {/* calculator */}
      <section id="calculator" className="container mx-auto flex flex-col px-3 gap-5">
        <div>
          <p className="text-center break-words text-farma-950 md:text-4xl text-2xl font-semibold leading-tight tracking-tight">Ingin menghitung timbangan obat dengan mudah dan cepat? </p>
        </div>
        <div>
          <p className="text-center break-words text-farma-950 md:text-xl text-xs px-3 leading-tight">Gunakan perhitungan timbangan obat dari Farma Academy! <br className="hidden md:block" />
            Alat ini dilengkapi dengan berbagai fitur yang dapat memudahkan Anda <br className="hidden md:block" /> dalam menghitung timbangan obat</p>
        </div>
        <div className="flex gap-5 md:gap-16 flex-wrap justify-center mt-5">
          <CalculatorCard calculatorTitle="Kalkulator timbangan obat" href="" />
          <CalculatorCard calculatorTitle="Tabel konversi satuan" href="" />
          <CalculatorCard calculatorTitle="Kalkulator perhitungan dosis" href="" />
          <CalculatorCard calculatorTitle="Kalkulator perhitungan ekivalensi" href="" />
        </div>
      </section>

      {/* dipercayai oleh */}
      <section>

      </section>


      <section className="bg-farma-100 mt-20 text-farma-950 px-4">
        <div className="container mx-auto flex items-center min-h-screen">
          <div className="flex-auto">
            <p className="break-words text-3xl leading-tight font-semibold">Solusi belajar farmasi yang terjangkau dan efektif</p>
            <p className="text-farma-800 leading-tight break-words">Kami menawarkan berbagai program pembelajaran farmasi online yang bisa kamu pilih sesuai kebutuhanmu.</p>


          </div>
          <div className="basis-1/2">

          </div>
        </div>
      </section>

    </div>
  );
};
export default LandingPage;