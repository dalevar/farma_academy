import { useState } from "react"
import { Link } from "react-router-dom"

export default function QuizPage() {
    const [tabs, setTabs] = useState(1)

    return (
        <main className="flex-auto">
            <div className="bg-sky-800 flex flex-col pl-8 pr-20 max-md:px-5">

                {/* close icon */}
                <div className="flex max-w-full items-stretch gap-4 mt-10 self-start">
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/71bf61c8-78d7-4a0d-ac9a-42858939ff26?apiKey=7bdd35b7bdaf466890fa5ec9ff0372cb&"
                        className="aspect-square object-contain object-center w-[39px] overflow-hidden shrink-0 max-w-full"
                    />
                    <div className="text-white text-justify text-sm font-bold leading-[176%] my-auto">
                        Akhiti Latihan Soal
                    </div>
                </div>


                <div className="self-center w-full max-w-[1269px] mt-1.5 max-md:max-w-full">
                    {/* timer */}
                    <div className="text-sky-700 text-justify text-sm leading-[150%] border border-[color:var(--Seagull---800,#02628A)] bg-white w-[104px] max-w-full items-center mt-20 px-5 py-4 rounded-xl border-solid self-start max-md:mt-10">
                        15m:00s
                    </div>


                    <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                        {/* nab quiz box */}
                        <div className="flex flex-col items-stretch w-[19%] max-md:w-full max-md:ml-0">
                            <div className="flex flex-col items-stretch max-md:mt-10">
                                <div className="border border-[color:var(--Seagull---800,#02628A)] bg-white flex w-full flex-col items-stretch pl-3.5 pr-16 pt-4 pb-20 rounded-xl border-solid max-md:pr-5">
                                    <div className="flex items-stretch justify-between gap-2">
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/cecf5ef5-d2ac-4585-86b8-6e896bf4909a?apiKey=7bdd35b7bdaf466890fa5ec9ff0372cb&"
                                            className="aspect-[1.13] object-contain object-center w-[18px] fill-sky-950 overflow-hidden shrink-0 max-w-full"
                                        />
                                        <div className="text-sky-950 text-justify text-sm leading-[150%] self-center my-auto">
                                            5 Soal
                                        </div>

                                    </div>
                                    <div className="flex items-stretch justify-between gap-0 mt-4 max-md:justify-center">
                                        <div className="bg-gray-200 w-px shrink-0 h-[237px]" />
                                        <div className="flex grow basis-[0%] flex-col justify-around">
                                            <div onClick={() => setTabs(1)} className={"pl-2 h-full text-justify text-sm font-bold leading-[176%]" + (tabs == 1 ? ' border-l-2 border-primary-darkest' : ' text-gray-300')}>
                                                Kuis 1
                                            </div>

                                            <div onClick={() => setTabs(2)} className={"pl-2 h-full text-justify text-sm font-bold leading-[176%]" + (tabs == 2 ? ' border-l-2 border-primary-darkest' : ' text-gray-300')}>
                                                Kuis 2
                                            </div>

                                            <div onClick={() => setTabs(3)} className={"pl-2 h-full text-justify text-sm font-bold leading-[176%]" + (tabs == 3 ? ' border-l-2 border-primary-darkest' : ' text-gray-300')}>
                                                Kuis 3
                                            </div>

                                            <div onClick={() => setTabs(4)} className={"pl-2 h-full text-justify text-sm font-bold leading-[176%]" + (tabs == 4 ? ' border-l-2 border-primary-darkest' : ' text-gray-300')}>
                                                Kuis 4
                                            </div>

                                            <div onClick={() => setTabs(5)} className={"pl-2 h-full text-justify text-sm font-bold leading-[176%]" + (tabs == 5 ? ' border-l-2 border-primary-darkest' : ' text-gray-300')}>
                                                Kuis 5
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col items-stretch w-[81%] ml-5 max-md:w-full max-md:ml-0">



                            {/* soal*/}
                            {tabs == 1 &&
                                <div className="bg-sky-900 flex grow flex-col w-full mx-auto pl-7 pr-20 pt-8 pb-14 rounded-xl max-md:max-w-full max-md:mt-10 max-md:px-5">
                                    <div className="text-white text-justify text-base font-semibold leading-[176%] max-w-[922px] max-md:max-w-full">
                                        Apa yang dimaksud dengan dosis minimum?
                                    </div>
                                    <div className="flex w-[759px] max-w-full items-stretch gap-4 mt-7 max-md:flex-wrap">
                                        <div className="text-sky-900 text-justify text-base font-bold border border-[color:var(--Pale-grey,#3CF)] bg-sky-50 aspect-[1.048780487804878] p-4 rounded-md border-solid">
                                            A
                                        </div>
                                        <div className="text-white text-justify text-base leading-[176%] self-center grow shrink basis-auto my-auto max-md:max-w-full">
                                            dosis (takaran) yang diberikan dalam keadaan biasa dan dapat
                                            menyembuhkan si sakit.
                                        </div>
                                    </div>
                                    <div className="flex w-[759px] max-w-full items-stretch gap-3.5 mt-5 max-md:flex-wrap">
                                        <div className="text-sky-900 text-justify text-base font-bold border border-[color:var(--Pale-grey,#3CF)] bg-sky-50 aspect-[1.048780487804878] items-stretch px-4 py-4 rounded-md border-solid">
                                            B
                                        </div>
                                        <div className="text-white text-justify text-base leading-[176%] self-center grow shrink basis-auto my-auto max-md:max-w-full">
                                            takaran obat dalam keadaan biasa yang dapat menyebabkan
                                            keracunan pada penderita
                                        </div>
                                    </div>
                                    <div className="flex w-[759px] max-w-full gap-3.5 mt-5 max-md:flex-wrap">
                                        <div className="text-white text-justify text-base font-bold border border-[color:var(--Pale-grey,#3CF)] bg-sky-900 aspect-[1.048780487804878] items-stretch px-4 py-4 rounded-md border-solid">
                                            C
                                        </div>
                                        <div className="text-white text-justify text-base leading-[176%] grow shrink basis-auto mt-1.5 max-md:max-w-full">
                                            takaran obat terkecil yang dapat diberikan pada penderita yang
                                            masih dapat menyembuhkan, untuk pemakaian sekali dan sehari,
                                            dan tidak menimbulkan resistensi pada penderita.
                                        </div>
                                    </div>
                                    <div className="flex w-[524px] max-w-full items-stretch gap-4 mt-4 max-md:flex-wrap">
                                        <div className="text-sky-900 text-justify text-base font-bold border border-[color:var(--Pale-grey,#3CF)] bg-sky-50 aspect-[1.048780487804878] items-stretch px-4 py-4 rounded-md border-solid max-md:pr-0">
                                            D
                                        </div>
                                        <div className="text-white text-justify text-base leading-[176%] self-center grow shrink basis-auto my-auto max-md:max-w-full">
                                            dosis yang menyebabkan kematian 100% pada hewan percobaan.
                                        </div>
                                    </div>
                                </div>
                            }
                            {tabs == 2 &&
                                <div className="bg-sky-900 flex flex-col w-full mx-auto pl-7 pr-20 pt-8 pb-14 rounded-xl max-md:max-w-full max-md:mt-10 max-md:px-5">
                                    <h1 className="text-white text-justify text-base font-semibold leading-[176%] max-w-[922px] max-md:max-w-full">
                                        Apa yang dimaksud dengan LD 50?
                                    </h1>
                                    <section className="flex w-[685px] max-w-full items-stretch gap-4 mt-7 max-md:flex-wrap">
                                        <div className="text-sky-900 text-justify text-base font-bold border border-[color:var(--Pale-grey,#3CF)] bg-sky-50 aspect-[1.048780487804878] p-4 rounded-md border-solid">
                                            A
                                        </div>
                                        <p className="text-white text-justify text-base leading-[176%] self-center grow shrink basis-auto my-auto max-md:max-w-full">
                                            dosis (takaran) yang diberikan dalam keadaan biasa dan dapat menyembuhkan si sakit.
                                        </p>
                                    </section>
                                    <section className="flex w-[685px] max-w-full items-stretch gap-4 mt-5 max-md:flex-wrap">
                                        <div className="text-sky-900 text-justify text-base font-bold border border-[color:var(--Pale-grey,#3CF)] bg-sky-50 aspect-[1.048780487804878] items-stretch px-4 py-4 rounded-md border-solid">
                                            B
                                        </div>
                                        <p className="text-white text-justify text-base leading-[176%] grow shrink basis-auto max-md:max-w-full">
                                            dosis terbesar yang dapat diberikan kepada orang dewasa untuk pemakaian sekali dan sehari tanpa membahayakan.
                                        </p>
                                    </section>
                                    <section className="flex w-[685px] max-w-full items-stretch gap-4 mt-5 max-md:flex-wrap">
                                        <div className="text-white text-justify text-base font-bold border border-[color:var(--Pale-grey,#3CF)] bg-sky-900 aspect-[1.048780487804878] items-stretch px-4 py-4 rounded-md border-solid">
                                            C
                                        </div>
                                        <p className="text-white text-justify text-base leading-[176%] self-center my-auto max-md:max-w-full">
                                            dosis yang menyebabkan kematian 50% pada hewan percobaan.
                                        </p>
                                    </section>
                                    <section className="flex w-[685px] max-w-full items-stretch gap-4 mt-5 max-md:flex-wrap">
                                        <div className="text-sky-900 text-justify text-base font-bold border border-[color:var(--Pale-grey,#3CF)] bg-sky-50 aspect-[1.048780487804878] items-stretch px-4 py-4 rounded-md border-solid max-md:pr-0">
                                            D
                                        </div>
                                        <p className="text-white text-justify text-base leading-[176%] self-center grow shrink basis-auto my-auto max-md:max-w-full">
                                            dosis yang menyebabkan kematian pada 100% hewan coba.
                                        </p>
                                    </section>
                                </div>
                            }
                            {tabs == 3 &&
                                <div className="bg-sky-900 flex grow flex-col w-full mx-auto pl-7 pr-20 pt-8 pb-14 rounded-xl max-md:max-w-full max-md:mt-10 max-md:px-5">
                                    <p className="text-white text-justify text-base font-semibold leading-[176%] max-w-[922px]">
                                        Dosis maksimum berlaku untuk pemakaian ...
                                    </p>
                                    <div className="flex w-80 max-w-full items-stretch gap-4 mt-7">
                                        <a
                                            href="#"
                                            className="text-gray-200 text-justify text-base font-bold border border-[color:var(--Pale-grey,#3CF)] bg-sky-900 aspect-[1.048780487804878] items-stretch px-4 py-4 rounded-md border-solid"
                                        >
                                            A
                                        </a>
                                        <p className="text-white text-justify text-base leading-[176%] self-center my-auto">
                                            Sekali sehari (24 jam)
                                        </p>
                                    </div>
                                    <div className="flex w-80 max-w-full items-stretch gap-3.5 mt-6">
                                        <a
                                            href="#"
                                            className="text-sky-900 text-justify text-base font-bold border border-[color:var(--Pale-grey,#3CF)] bg-white aspect-[1.048780487804878] px-4 py-4 rounded-md border-solid"
                                        >
                                            B
                                        </a>
                                        <p className="text-white text-justify text-base leading-[176%] self-center my-auto">
                                            Beberapa kali sehari
                                        </p>
                                    </div>
                                    <div className="flex w-80 max-w-full items-stretch gap-3.5 mt-5">
                                        <a
                                            href="#"
                                            className="text-sky-900 text-justify text-base font-bold border border-[color:var(--Pale-grey,#3CF)] bg-white aspect-[1.048780487804878] items-stretch px-4 py-4 rounded-md border-solid"
                                        >
                                            C
                                        </a>
                                        <p className="text-white text-justify text-base leading-[176%] self-center my-auto">
                                            Sekali sehari
                                        </p>
                                    </div>
                                    <div className="flex w-80 max-w-full items-stretch gap-4 mt-5">
                                        <a
                                            href="#"
                                            className="text-sky-900 text-justify text-base font-bold border border-[color:var(--Pale-grey,#3CF)] bg-sky-50 aspect-[1.048780487804878] items-stretch px-4 py-4 rounded-md border-solid max-md:pr-0"
                                        >
                                            D
                                        </a>
                                        <p className="text-white text-justify text-base leading-[176%] self-center my-auto">
                                            setiap sekali
                                        </p>
                                    </div>
                                </div>
                            }
                            {tabs == 4 &&
                                <div className="bg-sky-900 flex grow flex-col w-full mx-auto pl-7 pr-20 pt-8 pb-14 rounded-xl max-md:max-w-full max-md:mt-10 max-md:px-5">
                                    <p className="text-white text-justify text-base font-semibold leading-[176%] max-w-[922px]">
                                        Kenapa dosis maksimum harus dihindari?
                                    </p>
                                    <div className="flex max-w-full items-stretch gap-4 mt-7">
                                        <a
                                            href="#"
                                            className="text-gray-200 text-justify text-base font-bold border border-[color:var(--Pale-grey,#3CF)] bg-sky-900 aspect-[1.048780487804878] items-stretch px-4 py-4 rounded-md border-solid"
                                        >
                                            A
                                        </a>
                                        <p className="text-white text-justify text-base leading-[176%] self-center my-auto">
                                            Berpotensi menyebabkan keracunan
                                        </p>
                                    </div>
                                    <div className="flex max-w-full items-stretch gap-3.5 mt-6">
                                        <a
                                            href="#"
                                            className="text-sky-900 text-justify text-base font-bold border border-[color:var(--Pale-grey,#3CF)] bg-white aspect-[1.048780487804878] px-4 py-4 rounded-md border-solid"
                                        >
                                            B
                                        </a>
                                        <p className="text-white text-justify text-base leading-[176%] self-center my-auto">
                                            sangat efektif dalam penyembuhan
                                        </p>
                                    </div>
                                    <div className="flex w-80 max-w-full items-stretch gap-3.5 mt-5">
                                        <a
                                            href="#"
                                            className="text-sky-900 text-justify text-base font-bold border border-[color:var(--Pale-grey,#3CF)] bg-white aspect-[1.048780487804878] items-stretch px-4 py-4 rounded-md border-solid"
                                        >
                                            C
                                        </a>
                                        <p className="text-white text-justify text-base leading-[176%] self-center my-auto">
                                            menyembuhkan penderita
                                        </p>
                                    </div>
                                    <div className="flex w-80 max-w-full items-stretch gap-4 mt-5">
                                        <a
                                            href="#"
                                            className="text-sky-900 text-justify text-base font-bold border border-[color:var(--Pale-grey,#3CF)] bg-sky-50 aspect-[1.048780487804878] items-stretch px-4 py-4 rounded-md border-solid max-md:pr-0"
                                        >
                                            D
                                        </a>
                                        <p className="text-white text-justify text-base leading-[176%] self-center my-auto">
                                            tidak memiliki efek samping
                                        </p>
                                    </div>
                                </div>
                            }
                            {tabs == 5 &&
                                <div className="bg-sky-900 flex grow flex-col w-full mx-auto pl-7 pr-20 pt-8 pb-14 rounded-xl max-md:max-w-full max-md:mt-10 max-md:px-5">
                                    <h2 className="text-white text-justify text-base font-semibold leading-[176%] max-w-[922px] max-md:max-w-full">
                                        Apa pengertian dari dosis?
                                    </h2>
                                    <section className="flex w-[467px] max-w-full items-stretch gap-3.5 mt-7 max-md:flex-wrap">
                                        <div className="text-sky-900 text-justify text-base font-bold border border-[color:var(--Pale-grey,#3CF)] bg-white aspect-[1.048780487804878] p-4 rounded-md border-solid">
                                            A
                                        </div>
                                        <p className="text-white text-justify text-base leading-[176%] self-center my-auto">
                                            Dosis terkecil yang masih dapat menyembuhkan penderita
                                        </p>
                                    </section>
                                    <section className="flex w-[389px] max-w-full items-stretch gap-3.5 mt-6">
                                        <div className="text-sky-900 text-justify text-base font-bold border border-[color:var(--Pale-grey,#3CF)] bg-white aspect-[1.048780487804878] px-4 py-4 rounded-md border-solid">
                                            B
                                        </div>
                                        <p className="text-white text-justify text-base leading-[176%] self-center my-auto">
                                            Dosis yang dapat menyebabkan kematian pasti
                                        </p>
                                    </section>
                                    <section className="flex w-[759px] max-w-full items-stretch gap-4 mt-6 max-md:flex-wrap">
                                        <div className="text-gray-200 text-justify text-base font-bold border border-[color:var(--Pale-grey,#3CF)] bg-sky-900 aspect-[1.048780487804878] px-4 py-4 rounded-md border-solid">
                                            C
                                        </div>
                                        <p className="text-white text-justify text-base leading-[176%] grow shrink basis-auto max-md:max-w-full">
                                            seberapa banyak atau seberapa sedikit dari suatu zat atau obat yang diberikan kepada seseorang pada satu waktu.
                                        </p>
                                    </section>
                                    <section className="flex w-[759px] max-w-full gap-4 mt-4 max-md:flex-wrap">
                                        <div className="text-sky-900 text-justify text-base font-bold border border-[color:var(--Pale-grey,#3CF)] bg-sky-50 aspect-[1.048780487804878] items-stretch px-4 py-4 rounded-md border-solid max-md:pr-0">
                                            D
                                        </div>
                                        <p className="text-white text-justify text-base leading-[176%] grow shrink basis-auto max-md:max-w-full">
                                            saran umum tentang seberapa banyak obat atau zat yang seharusnya digunakan.
                                        </p>
                                    </section>
                                </div>
                            }





                            {/* line */}
                            <div className="bg-white w-[972px] shrink-0 h-px mr-14 mt-7 self-end max-md:max-w-full max-md:mr-2.5" />
                            {/* sebelumnya */}
                            <div className="flex w-[972px] max-w-full items-stretch justify-between gap-5 mr-14 mt-3 self-end max-md:flex-wrap max-md:mr-2.5">
                                {tabs != 1 &&
                                    <div onClick={() => setTabs(value => value--)} className="flex items-stretch justify-between gap-4">
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ef55c300-ed81-4483-a12a-d1242403b595?apiKey=7bdd35b7bdaf466890fa5ec9ff0372cb&"
                                            className="aspect-square object-contain object-center w-[31px] overflow-hidden shrink-0 max-w-full"
                                        />
                                        <div className="text-white text-justify text-sm leading-[150%] self-center my-auto">
                                            Sebelumnya
                                        </div>
                                    </div>
                                }
                                {tabs !== 5 &&
                                    <div onClick={() => setTabs(value => value++)} className="flex items-center justify-between gap-3">
                                        <div className="text-white text-justify text-sm leading-[150%] my-auto">
                                            Selanjutnya
                                        </div>
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2d1e36b5-baee-4142-a604-8c324398910e?apiKey=7bdd35b7bdaf466890fa5ec9ff0372cb&"
                                            className="aspect-square object-contain object-center w-[31px] overflow-hidden self-stretch shrink-0 max-w-full"
                                        />
                                    </div>
                                }
                            </div>

                            {/* lanjut */}

                            <Link to={'/module/materi/access/learning/quiz/confirm'} className="inline-block text-white text-sm leading-[150%] items-stretch border border-[color:var(--Pure-White,#FFF)] bg-sky-700 w-[104px] max-w-full mr-14 mt-3 mb-64 px-4 py-2.5 rounded-md border-solid self-end max-md:mr-2.5 max-md:mb-10">
                                Selesaikan
                            </Link>

                        </div>
                    </div>
                </div>

            </div>
        </main>
    )
}