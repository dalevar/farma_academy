// import CardCalculator from "../../components/cards/CardCalculator";
import {
  IconDecorationRight,
  IconDecorationLeft,
  IconArrowRight,
} from "../../components/Icons";
import CardCalculator from "../../components/cards/CardCalculator";
export default function CalculatorSection() {
  return (
    <section
      id="calculator"
      className="flex flex-col px-3 gap-5 w-full h-96 relative justify-center items-center"
    >
      <div className="absolute -left-3">
        <IconDecorationLeft />
      </div>

      <div className="">
        <div>
          <p className="break-words font-semibold text-4xl tracking-tight leading-tight text-center">
            Ingin menghitung timbangan obat dengan <br /> mudah dan cepat?{" "}
          </p>
          <p className="break-words text-center tracking-wide text-xl text-farma-900 mt-4 mb-8">
            Gunakan perhitungan timbangan obat dari Farma Academy! <br />
            Alat ini dilengkapi dengan berbagai fitur yang dapat memudahkan{" "}
            <br /> Anda dalam menghitung timbangan obat
          </p>
        </div>
        <div className="flex gap-5 items-center">
          <CardCalculator
            calculatorTitle="Kalkulator timbangan obat"
            href="/hitung-cepat/hitungId"
          />
          <CardCalculator
            calculatorTitle="Kalkulator timbangan obat"
            href="/hitung-cepat/hitungId"
          />
          <CardCalculator
            calculatorTitle="Kalkulator timbangan obat"
            href="/hitung-cepat/hitungId"
          />
          <CardCalculator
            calculatorTitle="Kalkulator timbangan obat"
            href="/hitung-cepat/hitungId"
          />
          <a
            href=""
            className="w-6 h-6 bg-primary-dark rounded-full flex justify-center items-center"
          >
            <span className="w-2 h-2 inline-block">
              <IconArrowRight />
            </span>
          </a>
        </div>
      </div>

      <div className="absolute -right-2">
        <IconDecorationRight />
      </div>
    </section>
  );
}
