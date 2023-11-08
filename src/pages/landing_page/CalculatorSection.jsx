// import CardCalculator from "../../components/cards/CardCalculator";
import {
  IconDecorationRight,
  IconDecorationLeft,
} from "../../components/Icons";
export default function CalculatorSection() {
  return (
    <section id="calculator" className="flex flex-col px-3 gap-5 w-full h-96 ">
      <div className="relative">
        <div className="absolute -left-3">
          <IconDecorationLeft />
        </div>
      </div>
      <div className="flex justify-center relative">
        <div className="flex justify-center">
          <p className="text-3xl text-farma-950 font-bold w-5/12 text-center">
            Ingin menghitung timbangan obat dengan mudah dan cepat?
          </p>
        </div>
          <span>
            Gunakan perhitungan timbangan obat dari Farma Academy! Alat ini
            dilengkapi dengan berbagai fitur yang dapat memudahkan Anda dalam
            menghitung timbangan obat
          </span>
      </div>

      <div className="relative z-50">
        <div className="absolute -right-2 ">
          <IconDecorationRight />
        </div>
      </div>
    </section>
  );
}
