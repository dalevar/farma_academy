import CardCalculator from "../../components/cards/CardCalculator";
import HeaderSection from "./HeaderSection";
import SearchSection from "./searchSection";
const HitungPage = () => {
  return (
    <div className="">
      {/* HeaderSection */}
      <HeaderSection />

      {/* Search Section */}
      <SearchSection />

      <div className="self-center flex w-[942px] max-w-full flex-col mt-10 px-5 mx-auto">
        <div className="grid grid-cols-4 gap-8 mt-8">
          <CardCalculator
            calculatorTitle="Kalkulator perhitungan dosis"
            href="/hitung-cepat/hitungId"
          />
          <CardCalculator
            calculatorTitle="Kalkulator perhitungan dosis"
            href="/hitung-cepat/hitungId"
          />
          <CardCalculator
            calculatorTitle="Kalkulator perhitungan dosis"
            href="/hitung-cepat/hitungId"
          />
          <CardCalculator
            calculatorTitle="Kalkulator perhitungan dosis"
            href="/hitung-cepat/hitungId"
          />
          <CardCalculator
            calculatorTitle="Kalkulator perhitungan dosis"
            href="/hitung-cepat/hitungId"
          />
          <CardCalculator
            calculatorTitle="Kalkulator perhitungan dosis"
            href="/hitung-cepat/hitungId"
          />
          <CardCalculator
            calculatorTitle="Kalkulator perhitungan dosis"
            href="/hitung-cepat/hitungId"
          />
          <CardCalculator
            calculatorTitle="Kalkulator perhitungan dosis"
            href="/hitung-cepat/hitungId"
          />
        </div>
      </div>
    </div>
  );
};
export default HitungPage;
