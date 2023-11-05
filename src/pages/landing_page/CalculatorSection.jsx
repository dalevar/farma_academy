import CardCalculator from "../../components/cards/CardCalculator";

export default function CalculatorSection() {
    return (
        <section id="calculator" className="container mx-auto flex flex-col px-3 gap-5">
            <div>
                <p className="text-center break-words text-farma-950 md:text-4xl text-2xl font-semibold leading-tight tracking-tight">Ingin menghitung timbangan obat dengan mudah dan cepat? </p>
            </div>
            <div>
                <p className="text-center break-words text-farma-950 md:text-xl text-xs px-3 leading-tight">Gunakan perhitungan timbangan obat dari Farma Academy! <br className="hidden md:block" />
                    Alat ini dilengkapi dengan berbagai fitur yang dapat memudahkan Anda <br className="hidden md:block" /> dalam menghitung timbangan obat</p>
            </div>
            <div className="flex gap-5 md:gap-16 flex-wrap justify-center mt-5">
                <CardCalculator calculatorTitle="Kalkulator timbangan obat" href="" />
                <CardCalculator calculatorTitle="Tabel konversi satuan" href="" />
                <CardCalculator calculatorTitle="Kalkulator perhitungan dosis" href="" />
                <CardCalculator calculatorTitle="Kalkulator perhitungan ekivalensi" href="" />
            </div>
        </section>
    )
}