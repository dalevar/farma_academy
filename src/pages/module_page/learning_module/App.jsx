// import React, { useEffect, useState, useRef } from "react";
// import { IconCheckedV2 } from "../../../components/Icons";

import { useEffect, useState } from "react";
import { IconCheckedV2, IconChevron } from "../../../components/Icons";
import { Link } from "react-router-dom";

// const DefinisiDosis = () => {
//   return (
//     <>
//       <div className="text-sky-800 text-justify text-2xl font-bold mt-9 max-md:max-w-full">
//         Pendahuluan
//       </div>
//       <div className="text-zinc-600 text-justify text-lg leading-7 grow shrink basis-auto justify-between gap-5 mt-7 pt-2 max-md:max-w-full max-md:flex-wrap">
//         Halo! kita akan membicarakan tentang suatu konsep yang sangat penting
//         dalam penggunaan obat atau zat-zat kimia, yaitu dosis. Dosis adalah
//         seberapa banyak atau seberapa sedikit dari suatu zat atau obat yang
//         diberikan kepada seseorang pada satu waktu. Untuk memahami dengan lebih
//         baik mengapa dosis begitu penting, mari kita jelajahi bersama definisi,
//         prinsip, dan pentingnya mengikuti dosis yang direkomendasikan oleh
//         dokter atau ahli kesehatan. Mari kita mulai!
//       </div>
//       <div className="text-sky-800 text-justify text-2xl font-bold mt-14 max-md:max-w-full max-md:mt-10">
//         Definisi
//       </div>
//       <div className="text-zinc-600 text-justify text-lg leading-7 mt-9 mb-16 max-md:max-w-full max-md:mb-10">
//         Dosis adalah seberapa banyak atau seberapa sedikit dari suatu zat atau
//         obat yang diberikan kepada seseorang pada satu waktu. Ini mirip dengan
//         memberikan porsi makanan kepada tubuh, tetapi dalam hal ini, kita
//         memberikan &quot;porsi&quot; dari zat atau obat tertentu.
//         <br />
//         <br />
//         Contohnya, bayangkan Anda memiliki sebotol sirup untuk batuk. Dokter
//         mungkin akan memberi tahu Anda untuk mengambil satu sendok teh dari
//         sirup itu setiap enam jam. Ini adalah dosis yang direkomendasikan. Ini
//         seperti resep dari dokter untuk tubuh Anda.
//         <br />
//         <br />
//         Dosis sangat penting karena jika Anda mengambil terlalu sedikit, obat
//         mungkin tidak bekerja dengan baik. Di sisi lain, jika Anda mengambil
//         terlalu banyak, itu bisa berbahaya. Dosis diukur dalam satuan khusus
//         seperti miligram, gram, atau mililiter, tergantung pada jenis obatnya.
//         Ini seperti cara kita mengukur berat atau volume suatu benda.
//         <br />
//         <br />
//         Ingatlah selalu untuk mengikuti dosis yang dianjurkan oleh dokter atau
//         ahli kesehatan. Mereka telah mempelajari dan memahami bagaimana obat
//         bekerja di dalam tubuh dan akan memberi tahu Anda dosis yang tepat untuk
//         membantu atau menyembuhkan tanpa menimbulkan masalah kesehatan yang
//         lain.
//       </div>
//     </>
//   );
// };

// const MacamDosis = () => {
//   const videoRef = useRef(null);
//   const [showButton, setShowButton] = useState(false);

//   const handlePlayClick = () => {
//     videoRef.current.play();
//     setShowButton(false);
//   };

//   const handleTimeUpdate = () => {
//     if (videoRef.current.currentTime >= 10 && !showButton) {
//       videoRef.current.pause();
//       setShowButton(true);
//     }
//   };

//   const handleFullScreenChange = () => {
//     if (!document.fullscreenElement) {
//       setShowButton(false);
//     }
//   };

//   React.useEffect(() => {
//     document.addEventListener("fullscreenchange", handleFullScreenChange);
//     return () => {
//       document.removeEventListener("fullscreenchange", handleFullScreenChange);
//     };
//   }, []);

//   return (
//     <>
//       <div className="[Jakarta Sans'] flex-shrink-0 w-[537px] h-[1.375rem] text-[#02628a] text-justify font-['Plus text-2xl font-bold leading-[normal] mt-8">
//         Macam-macam Dosis :
//       </div>
//       <div className="[Jakarta Sans'] flex-shrink-0 w-[1012px] text-[#5c5c5c] text-justify font-['Plus text-lg leading-[150%] mt-7 font-thin">
//         Terdapat beberapa jenis dosis yang digunakan dalam penggunaan obat atau
//         zat lainnya, tergantung pada penggunaannya. Berikut adalah beberapa
//         macam dosis yang umum :
//       </div>
//       <div className="[Jakarta Sans'] flex-shrink-0 w-[1012px] text-[#5c5c5c] text-justify font-['Plus text-lg leading-[150%] ml-5 mt-10 font-thin">
//         <ol className="list-decimal">
//           <li>
//             <span className="font-bold me-1">Dosis lazim:</span>
//             Dosis ini seperti saran umum tentang seberapa banyak obat atau zat
//             yang seharusnya digunakan. Tidak mengikat, tetapi memberikan pedoman
//             umum.
//           </li>
//           <li className="mt-5">
//             <span className="font-bold me-1">Dosis terapi:</span>
//             Ini adalah takaran obat yang diberikan dalam keadaan biasa dan dapat
//             menyembuhkan penderita. Ini seperti resep dokter untuk membantu
//             pemulihan.{" "}
//           </li>
//           <li className="mt-5">
//             <span className="font-bold me-1">Dosis minimum:</span>
//             Ini adalah takaran obat terkecil yang masih dapat menyembuhkan.
//             Biasanya digunakan sekali sehari dan tidak menimbulkan resistensi
//             pada penderita.{" "}
//           </li>
//           <li className="mt-5">
//             <span className="font-bold me-1">Dosis maksimum:</span>
//             takaran obat terbesar yang dapat diberikan pada penderita yang masih
//             dapat menyembuhkan, untuk pemakaian sekali dan sehari, tanpa
//             menimbulkan keracunan atau membahayakan penderita. Dosis maksimum
//             ini berlaku untuk pemakaian sekali dan sehari (24 jam).{" "}
//             <p className="mt-5">
//               Penyerahan obat yang melebihi dosis maksimum dapat dilakukan jika
//               :
//             </p>
//             <ol className="list-disc ml-7">
//               <li>Ada paraf dan tanda seru dokter penulis resep</li>
//               <li>Nama obat diberi garis bawah</li>
//               <li>
//                 Banyaknya obat hendaknya ditulis dengan huruf yang lengkap
//               </li>
//             </ol>
//           </li>
//           <li className="mt-5">
//             <span className="font-bold me-1">Dosis Toksik :</span>
//             takaran obat dalam keadaan biasa yang dapat menyebabkan keracunan
//             pada penderita. Harus di hindari karena dapat membayakan kesehatan
//           </li>
//           <li className="mt-5">
//             <span className="font-bold me-1">Dosis Letalis :</span>
//             dosis yang dalam keadaan biasa dapat menyebabkan kematian pada
//             penderita, Dosis letalis terdiri atas: <br />
//             <p>
//               {" "}
//               - LD 50 : dosis yang menyebabkan kematian pada 50% hewan
//               percobaan. Sebuah ukuran yang sangat serius dari tingkat
//               toksisitas suatu zat.
//             </p>
//             <p>
//               - LD 100 : dosis yang menyebabkan kematian pada 100% hewan
//               percobaan. Sangat penting untuk menghindari dosis ini, karena itu
//               berarti kematian pasti.
//             </p>
//           </li>
//         </ol>
//       </div>
//       <div className="[Jakarta Sans'] flex-shrink-0 w-[1012px] text-[#5c5c5c] text-justify font-['Plus text-lg leading-[150%] mt-10 font-thin">
//         <p>
//           Mari kita lanjutkan untuk mentonton penjelasan dari video berikut :
//         </p>
//       </div>

//       <div className="bg-red-300 rounded-xl">

//         <div className="">
//           <video
//             ref={videoRef}
//             src="/videos/blank.mp4"
//             onTimeUpdate={handleTimeUpdate}
//             controls={showButton}
//             onClick={showButton ? handlePlayClick : null}
//           />
//           {showButton && <button onClick={handlePlayClick}>Play</button>}
//         </div>
//       </div>
//     </>
//   );
// };
// const LearingModule = () => {
//   const [open, setOpen] = useState(false);
//   const [openDefinisiDosis, setOpenDefinisiDosis] = useState(true);
//   const [openMacamDiDosis, setOpenMacamDosis] = useState(false);
//   const [openFaktorDosis, setOpenFaktorDosis] = useState(false);
//   const [openKuisDosis, setOpenKuisDosis] = useState(false);

//   const [iconDefinisiDosis, setIconDefinisiDosis] = useState(true);
//   const [iconMacamDiDosis, setIconMacamDosis] = useState(false);
//   const [iconFaktorDosis, setIconFaktorDosis] = useState(false);
//   const [iconKuisDosis, setIconKuisDosis] = useState(false);
//   const handleDefinisiDosis = () => {
//     setOpenDefinisiDosis(true);
//     setOpenMacamDosis(false);
//     setOpenFaktorDosis(false);
//     setOpenKuisDosis(false);
//     setIconDefinisiDosis(true);
//   };
//   const handleClickMacamDosis = () => {
//     setOpenMacamDosis(true);
//     setOpenDefinisiDosis(false);
//     setOpenFaktorDosis(false);
//     setOpenKuisDosis(false);
//     setIconMacamDosis(true);
//   };
//   const handleFaktorDosis = () => {
//     setOpenFaktorDosis(true);
//     setOpenMacamDosis(false);
//     setOpenDefinisiDosis(false);
//     setOpenKuisDosis(false);
//     setIconFaktorDosis(true);
//   };
//   const handleKuisDosis = () => {
//     setOpenKuisDosis(true);
//     setOpenFaktorDosis(false);
//     setOpenMacamDosis(false);
//     setOpenDefinisiDosis(false);
//     setIconKuisDosis(true);
//   };
//   return (
//     <div className="flex m-5">
//       <div>
//         <div className="border overflow-y-scroll rounded-lg p-0 h-[32rem] w-80">
//           <div>
//             <div className="">
//               <button className="p-6" onClick={() => setOpen(!open)}>
//                 Module 1
//               </button>
//               <hr />
//               <div
//                 className={`${
//                   open === false && "hidden"
//                 } overflow-y-scroll h-80`}
//               >
//                 <div className="flex items-center justify-between">
//                   <button
//                     className="p-5 px-8 flex items-center justify-between"
//                     onClick={() => handleDefinisiDosis()}
//                   >
//                     Definisi dosis
//                   </button>
//                   <span className={`${!iconDefinisiDosis && "me-4 hidden"}`}>
//                     <IconCheckedV2 />
//                   </span>
//                 </div>
//                 <div className="flex items-center justify-between">
//                   <button
//                     className="p-5 px-8 flex items-center justify-between"
//                     onClick={() => handleClickMacamDosis()}
//                   >
//                     Macam-macam dosis
//                   </button>
//                   <span className={`${!iconMacamDiDosis && "me-4 hidden"}`}>
//                     <IconCheckedV2 />
//                   </span>
//                 </div>
//                 <div className="flex items-center justify-between">
//                   <button
//                     className="p-5 px-8 flex text-left justify-between"
//                     onClick={() => handleFaktorDosis()}
//                   >
//                     Faktor faktor yang mempengaruhi dosis obat
//                   </button>
//                   <span className={`${!iconFaktorDosis && "me-4 hidden"}`}>
//                     <IconCheckedV2 />
//                   </span>
//                 </div>
//                 <div className="flex items-center justify-between">
//                   <button
//                     className="p-5 px-8 flex items-center justify-betwee"
//                     onClick={() => handleKuisDosis()}
//                   >
//                     Kuis Dosis
//                   </button>
//                   <span className={`${!iconKuisDosis && "me-4 hidden"}`}>
//                     <IconCheckedV2 />
//                   </span>
//                 </div>
//               </div>
//             </div>
//             <div className="">
//               <div className="p-5">Module 2</div>

//               <hr />
//             </div>
//             <div className="">
//               <div className="p-5">Module 3</div>
//               <hr />
//             </div>
//             <div className="">
//               <div className="p-5">Module 4</div>
//               <hr />
//             </div>
//             <div className="">
//               <div className="p-5">Module 5</div>
//               <hr />
//             </div>
//             <div className="">
//               <div className="p-5">Module 5</div>
//               <hr />
//             </div>
//             <div className="">
//               <div className="p-5">Module 6</div>
//               <hr />
//             </div>
//             <div className="">
//               <div className="p-5">Module 7</div>
//               <hr />
//             </div>
//             <div className="">
//               <div className="p-5">Module 8</div>
//               <hr />
//             </div>
//             <div className="">
//               <div className="p-5">Module 9</div>
//               <hr />
//             </div>
//             <div className="">
//               <div className="p-5">Module 10</div>
//               <hr />
//             </div>
//             <div className="">
//               <div className="p-5">Module 11</div>
//               <hr />
//             </div>
//             <div className="">
//               <div className="p-5">Module 12</div>
//               <hr />
//             </div>
//           </div>
//           <div></div>
//         </div>
//         <div className="border rounded-lg mt-3">
//           <div className="flex w-[145px] py-2 max-w-full items-stretch gap-1.5 ml-4 mt-3.5 px-5 self-start max-md:ml-2.5">
//             <img
//               loading="lazy"
//               src="https://cdn.builder.io/api/v1/image/assets/TEMP/dbcbd311-ff66-4978-abf5-ed8a7e6977d8?apiKey=6f0257302a85476b9d26590be3d78938&"
//               className="aspect-square object-contain object-center w-7 overflow-hidden shrink-0 max-w-full"
//             />
//             <div className="text-sky-900 text-base font-bold whitespace-nowrap mt-1.5 self-start">
//               Forum Duskusi
//             </div>
//           </div>
//           <div className="bg-neutral-300 min-h-[1px] w-full mt-3" />
//           <div className="flex w-[114px] py-2 max-w-full items-stretch gap-2 ml-3.5 mt-3 mb-2 px-5 self-start max-md:ml-2.5">
//             <img
//               loading="lazy"
//               src="https://cdn.builder.io/api/v1/image/assets/TEMP/8581ec61-37a1-48c5-a046-b7daf66fb2d8?apiKey=6f0257302a85476b9d26590be3d78938&"
//               className="aspect-square object-contain object-center w-7 overflow-hidden shrink-0 max-w-full"
//             />
//             <div className="text-sky-900 text-base font-bold self-center whitespace-nowrap my-auto">
//               Konsultasi
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="w-full border rounded-xl mx-3  p-5">
//         <div className={`${openDefinisiDosis === false ? "hidden" : ""}`}>
//           <DefinisiDosis />
//         </div>
//         <div className={`${openMacamDiDosis === false ? "hidden" : ""}`}>
//           <MacamDosis />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LearingModule;


export default function LearingModule() {
  const [navMateri, setNavMateri] = useState(1)
  const [subMateri, setSubMateri] = useState(1)
  const [history, setHistory] = useState(-2)
  useEffect(() => {
    setHistory(value => value + 1)
    console.log(history);
  }, [subMateri]);

  return (
    <main className="h-screen flex">
      <div className="basis-1/4 border-r-2 border-zinc-200 flex justify-center py-5">

        <div className="w-[90%] flex flex-col justify-between">
          {/* nav Materi */}
          <div className="w-full border border-zinc-200 rounded-md py-2">

            <button type="button" onClick={() => setNavMateri(1)} className="mx-2 flex justify-between w-full font-semibold py-2 text-xl pr-4">Pendahuluan <span className={"inline-block w-6 h-6" + (navMateri == 1 && ' rotate-180')}><IconChevron /></span></button>
            {
              navMateri == 1 &&

              <ul className="w-full pl-4 text-gray-700 flex flex-col gap-3 border-b border-zinc-200">
                <li onClick={() => setSubMateri(1)} className={subMateri == 1 ? 'font-bold' : ''}>Defisini Dosis {history >= 1 && <span className="inline-block w-6 h-6"><IconCheckedV2 /></span>}</li>
                <li onClick={() => setSubMateri(2)} className={subMateri == 2 ? 'font-bold' : ''}>Macam-Macam Dosis {history >= 2 && <span className="inline-block w-6 h-6"><IconCheckedV2 /></span>}</li>
                <li onClick={() => setSubMateri(3)} className={subMateri == 3 ? 'font-bold' : ''}>Faktor faktor yang mempengaruhi dosis obat {history >= 3 && <span className="inline-block w-6 h-6"><IconCheckedV2 /></span>}</li>
                <li onClick={() => setSubMateri(4)} className={subMateri == 4 ? 'font-bold' : ''}>Kuis Dosis {history >= 4 && <span className="inline-block w-6 h-6"><IconCheckedV2 /></span>}</li>
              </ul>
            }


            <button type="button" onClick={() => setNavMateri(2)} className="mx-2 flex justify-between font-semibold py-2 text-xl w-full pr-4">Pedoman Menentukan Dosis <span className={"inline-block w-6 h-6" + (navMateri == 2 && ' rotate-180')}><IconChevron /></span></button>
            {
              navMateri == 2 &&

              <ul className="w-full pl-4 text-gray-700 flex flex-col gap-3 border-b border-zinc-200">
                <li onClick={() => setSubMateri(5)} className={subMateri == 5 ? 'font-bold' : ''}>Pedoman Menentukan Dosis {history >= 5 && <span className="inline-block w-6 h-6"><IconCheckedV2 /></span>}</li>
                <li onClick={() => setSubMateri(6)} className={subMateri == 6 ? 'font-bold' : ''}>Rumus Dosis {history >= 6 && <span className="inline-block w-6 h-6"><IconCheckedV2 /></span>}</li>
                <li onClick={() => setSubMateri(7)} className={subMateri == 7 ? 'font-bold' : ''}>Kuis  Pedoman {history >= 7 && <span className="inline-block w-6 h-6"><IconCheckedV2 /></span>}</li>
              </ul>
            }

            <button type="button" onClick={() => setNavMateri(3)} className="mx-2 flex justify-between font-semibold py-2 text-xl w-full pr-4">Penutup <span className={"inline-block w-6 h-6" + (navMateri == 3 && ' rotate-180')}><IconChevron /></span></button>
            {
              navMateri == 3 &&

              <ul className="w-full pl-4 text-gray-700 flex flex-col gap-3">
                <li onClick={() => setSubMateri(8)} className={subMateri == 8 ? 'font-bold' : ''}>Ujian Akhir Materi {history >= 8 && <span className="inline-block w-6 h-6"><IconCheckedV2 /></span>}</li>
              </ul>
            }

          </div>


          {/* nav to forum and consultant */}
          <div className="border bg-white flex w-full flex-col items-stretch mt-2.5 pt-4 pb-2 px-5 rounded-xl border-solid border-zinc-200">
            <header>
              <div className="flex w-[146px] max-w-full items-stretch gap-1.5 self-start max-md:-ml-1">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/a57e6a9a-e92f-4d23-88de-94cc5b758c8b?apiKey=7bdd35b7bdaf466890fa5ec9ff0372cb&"
                  className="aspect-square object-contain object-center w-7 overflow-hidden shrink-0 max-w-full"
                  alt="Forum Logo"
                />
                <h1 className="text-sky-900 text-base font-bold mt-1.5">Forum Diskusi</h1>
              </div>
            </header>
            <hr className="bg-neutral-300 shrink-0 h-px -mr-5 mt-3" />
            <section>
              <div className="flex w-[115px] max-w-full items-stretch gap-2 mt-3 self-start max-md:-ml-1.5">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/50c3a5a1-ade8-4f15-be0f-d3557100761d?apiKey=7bdd35b7bdaf466890fa5ec9ff0372cb&"
                  className="aspect-square object-contain object-center w-7 overflow-hidden shrink-0 max-w-full"
                  alt="Konsultasi Logo"
                />
                <h2 className="text-sky-900 text-base font-bold self-center my-auto">Konsultasi</h2>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* materi */}
      <div className="basis-3/4 overflow-y-auto">
        <div className="w-[95%] mx-auto my-5">
          {
            subMateri == 1 &&
            <article className="border bg-white flex grow flex-col items-stretch w-full mx-auto pl-12 pr-3 pt-9 pb-16 rounded-xl border-solid border-zinc-200 max-md:max-w-full max-md:mt-4 max-md:pl-5">
              <h2 className="text-sky-800 text-justify text-2xl font-bold max-md:max-w-full">Pendahuluan</h2>
              <section className="flex justify-between gap-5 mt-7 max-md:max-w-full max-md:flex-wrap">
                <p className="break-words text-zinc-600 text-justify text-lg leading-[150%] grow shrink basis-auto max-md:max-w-full">
                  Halo! kita akan membicarakan tentang suatu konsep yang sangat penting dalam penggunaan obat atau zat-zat kimia, yaitu dosis. Dosis adalah seberapa banyak atau seberapa sedikit dari suatu zat atau obat yang diberikan kepada seseorang pada satu waktu. Untuk memahami dengan lebih baik mengapa dosis begitu penting, mari kita jelajahi bersama definisi, prinsip, dan pentingnya mengikuti dosis yang direkomendasikan oleh dokter atau ahli kesehatan. Mari kita mulai!
                </p>
              </section>
              <h2 className="text-sky-800 text-justify text-2xl font-bold mt-14 max-md:max-w-full max-md:mt-10">Definisi</h2>
              <p className="break-words text-zinc-600 text-justify text-lg leading-[150%] max-md:max-w-full">
                Dosis adalah seberapa banyak atau seberapa sedikit dari suatu zat atau obat yang diberikan kepada seseorang pada satu waktu. Ini mirip dengan memberikan porsi makanan kepada tubuh, tetapi dalam hal ini, kita memberikan "porsi" dari zat atau obat tertentu. <br /> <br />
                Contohnya, bayangkan Anda memiliki sebotol sirup untuk batuk. Dokter mungkin akan memberi tahu Anda untuk mengambil satu sendok teh dari sirup itu setiap enam jam. Ini adalah dosis yang direkomendasikan. Ini seperti resep dari dokter untuk tubuh Anda. <br /> <br />
                Dosis sangat penting karena jika Anda mengambil terlalu sedikit, obat mungkin tidak bekerja dengan baik. Di sisi lain, jika Anda mengambil terlalu banyak, itu bisa berbahaya. Dosis diukur dalam satuan khusus seperti miligram, gram, atau mililiter, tergantung pada jenis obatnya. Ini seperti cara kita mengukur berat atau volume suatu benda. <br /> <br />
                Ingatlah selalu untuk mengikuti dosis yang dianjurkan oleh dokter atau ahli kesehatan. Mereka telah mempelajari dan memahami bagaimana obat bekerja di dalam tubuh dan akan memberi tahu Anda dosis yang tepat untuk membantu atau menyembuhkan tanpa menimbulkan masalah kesehatan yang lain.
              </p>
            </article>
          }
          {
            subMateri == 2 &&
            <article className="border bg-white flex grow flex-col items-stretch w-full mx-auto pl-12 pr-3 pt-9 pb-16 rounded-xl border-solid border-zinc-200 max-md:max-w-full max-md:mt-4 max-md:pl-5">
              <div className="[Jakarta Sans'] flex-shrink-0 w-[537px] h-[1.375rem] text-[#02628a] text-justify font-['Plus text-2xl font-bold leading-[normal] mt-8">
                Macam-macam Dosis :
              </div>
              <div className="[Jakarta Sans'] flex-shrink-0 text-[#5c5c5c] text-justify font-['Plus text-lg leading-[150%] mt-7 font-thin break-words">
                Terdapat beberapa jenis dosis yang digunakan dalam penggunaan obat atau
                zat lainnya, tergantung pada penggunaannya. Berikut adalah beberapa
                macam dosis yang umum :
              </div>
              <div className="[Jakarta Sans'] flex-shrink-0  text-[#5c5c5c] text-justify font-['Plus text-lg leading-[150%] ml-5 mt-10 font-thin">
                <ol className="list-decimal">
                  <li>
                    <span className="font-bold me-1">Dosis lazim:</span>
                    Dosis ini seperti saran umum tentang seberapa banyak obat atau zat
                    yang seharusnya digunakan. Tidak mengikat, tetapi memberikan pedoman
                    umum.
                  </li>
                  <li className="mt-5">
                    <span className="font-bold me-1">Dosis terapi:</span>
                    Ini adalah takaran obat yang diberikan dalam keadaan biasa dan dapat
                    menyembuhkan penderita. Ini seperti resep dokter untuk membantu
                    pemulihan.{" "}
                  </li>
                  <li className="mt-5">
                    <span className="font-bold me-1">Dosis minimum:</span>
                    Ini adalah takaran obat terkecil yang masih dapat menyembuhkan.
                    Biasanya digunakan sekali sehari dan tidak menimbulkan resistensi
                    pada penderita.{" "}
                  </li>
                  <li className="mt-5">
                    <span className="font-bold me-1">Dosis maksimum:</span>
                    takaran obat terbesar yang dapat diberikan pada penderita yang masih
                    dapat menyembuhkan, untuk pemakaian sekali dan sehari, tanpa
                    menimbulkan keracunan atau membahayakan penderita. Dosis maksimum
                    ini berlaku untuk pemakaian sekali dan sehari (24 jam).{" "}
                    <p className="mt-5">
                      Penyerahan obat yang melebihi dosis maksimum dapat dilakukan jika
                      :
                    </p>
                    <ol className="list-disc ml-7">
                      <li>Ada paraf dan tanda seru dokter penulis resep</li>
                      <li>Nama obat diberi garis bawah</li>
                      <li>
                        Banyaknya obat hendaknya ditulis dengan huruf yang lengkap
                      </li>
                    </ol>
                  </li>
                  <li className="mt-5">
                    <span className="font-bold me-1">Dosis Toksik :</span>
                    takaran obat dalam keadaan biasa yang dapat menyebabkan keracunan
                    pada penderita. Harus di hindari karena dapat membayakan kesehatan
                  </li>
                  <li className="mt-5">
                    <span className="font-bold me-1">Dosis Letalis :</span>
                    dosis yang dalam keadaan biasa dapat menyebabkan kematian pada
                    penderita, Dosis letalis terdiri atas: <br />
                    <p>
                      {" "}
                      - LD 50 : dosis yang menyebabkan kematian pada 50% hewan
                      percobaan. Sebuah ukuran yang sangat serius dari tingkat
                      toksisitas suatu zat.
                    </p>
                    <p>
                      - LD 100 : dosis yang menyebabkan kematian pada 100% hewan
                      percobaan. Sangat penting untuk menghindari dosis ini, karena itu
                      berarti kematian pasti.
                    </p>
                  </li>
                </ol>
                <div>
                  <div className="bg-black bg-opacity-60 self-center flex w-full max-w-[1012px] flex-col items-center mt-2.5 pl-16 pr-14 pt-32 pb-7 rounded-3xl max-md:max-w-full max-md:pt-24 max-md:px-5">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/355e64c8-1fac-4e84-8e60-264d0cf7f110?apiKey=55676888902c42b78c264a311495e87c&"
                      className="aspect-square object-contain object-center w-24 overflow-hidden max-w-full"
                      alt=""
                    />
                    <section className="self-stretch flex items-start justify-between gap-1 mt-36 max-md:max-w-full max-md:flex-wrap max-md:justify-center max-md:mt-10">
                      <div className="text-white text-lg mt-2 self-start">0:35</div>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/0bad06f2-66bc-4e0e-8b73-e348f4849bc3?apiKey=55676888902c42b78c264a311495e87c&"
                        className="aspect-[73.2] object-contain object-center w-[732px] overflow-hidden self-center my-auto max-md:max-w-full"
                        alt=""
                      />
                      <div className="text-white text-lg self-center my-auto">2:03</div>
                      <button
                        className="aspect-square object-contain object-center w-6 overflow-hidden self-stretch shrink-0 max-w-full"
                        aria-label="Button 1"
                      >
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/6eb617ea-4617-4267-ace0-be2d2a109453?apiKey=55676888902c42b78c264a311495e87c&"
                          alt=""
                        />
                      </button>
                      <button
                        className="aspect-square object-contain object-center w-6 overflow-hidden self-stretch shrink-0 max-w-full"
                        aria-label="Button 2"
                      >
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/b153030d-abca-4d74-8206-233fa4582327?apiKey=55676888902c42b78c264a311495e87c&"
                          alt=""
                        />
                      </button>
                    </section>
                  </div>
                  <section className="shadow-lg bg-white self-stretch flex flex-col mt-9 pl-7 pr-20 pt-8 pb-10 rounded-3xl max-md:max-w-full max-md:px-5">
                    <header className="flex w-[275px] max-w-full items-stretch gap-0">
                      <div className="flex mr-0 grow basis-[0%] flex-col items-stretch">
                        <h2 className="text-teal-900 text-lg">Penjelasan</h2>
                        <hr className="bg-teal-900 bg-opacity-20 shrink-0 h-px mt-7" />
                      </div>
                      <div className="flex basis-[0%] flex-col items-stretch self-start">
                        <h2 className="text-teal-900 text-lg leading-[150%]">Latihan</h2>
                        <hr className="bg-teal-900 flex shrink-0 h-1 flex-col mt-7" />
                      </div>
                    </header>
                    <div className="text-zinc-600 text-justify text-sm leading-[176%] max-w-[1004px] max-md:max-w-full">
                      <p>
                        Tujuan Latihan soal dari materi yang telah disampai adalah :
                      </p>
                      <ul>
                        <li>Menguji pemahaman Anda tentang materi</li>
                        <li>Membantu Anda memperdalam pemahaman Anda tentang materi</li>
                        <li>Mengembangkan keterampilan berpikir kritis dan pemecahan masalah Anda</li>
                      </ul>
                      <p>Anda telah menyelesaikan latihan soal dengan baik</p>
                    </div>
                    <a
                      href="#"
                      className="text-white text-sm leading-[150%] items-stretch bg-sky-800 w-[129px] max-w-full ml-2.5 mt-24 px-4 py-2.5 rounded-lg max-md:mt-10"
                    >
                      Lihat Jawaban
                    </a>
                  </section>
                </div>
              </div>


            </article>

          }
          {
            subMateri == 3 &&
            <div className="text-zinc-600 text-lg font-bold leading-[150%] grow shrink basis-auto max-md:max-w-full">
              <div className="Jakarta Sans'] text-[#02628a] text-justify font-['Plus text-2xl font-bold leading-[normal] mb-5">Faktor faktor yang mempengaruhi dosis obat :</div>
              <p>
                <div>
                  Dosis suatu obat merupakan suatu jumlah yang “cukup tapi tidak
                  berlebihan” untuk mendapatkan manfaat obat yang optimum pada seorang
                  pasien tertentu.
                </div>
              </p>
              <p>
                <br />
              </p>
              <p>
                <div>
                  Faktor-faktor yang dapat mempengaruhi dosis obat yang tepat untuk
                  seorang pasien antara lain:
                </div>
              </p>
              <p>
                <div>
                  <strong>1. Faktor Obat:</strong>
                </div>
              </p>
              <ul className="ml-10 list-disc">
                <li>
                  <div>
                    <strong>Sifat Fisika: </strong>
                  </div>
                  <div>
                    Ini mencakup seberapa baik obat dapat larut dalam air. Obat yang
                    lebih larut cenderung dapat diserap lebih efisien oleh tubuh.
                  </div>
                </li>

                <li>
                  <div>
                    <strong>Sifat Kimia:</strong>
                  </div>
                  <div>

                    Sifat kimia obat juga mempengaruhi cara obat berinteraksi dengan
                    tubuh. Obat dapat berbentuk asam, basa, atau garam kompleks, yang
                    dapat memengaruhi penyerapan dan efeknya.
                  </div>
                </li>

                <li>
                  <div>
                    <strong>Toksisitas Obat:</strong>
                  </div>
                  <div>

                    Seberapa berbahaya atau beracun suatu obat dapat mempengaruhi dosis
                    yang dianjurkan. Obat yang lebih toksik biasanya membutuhkan dosis
                    yang lebih rendah.
                  </div>
                </li>

              </ul>
              <p>
                <br />
              </p>
              <p>
                <div>
                  <strong>2. Cara Pemberian Obat kepada Penderita:</strong>
                </div>
              </p>
              <ul className="list-disc ml-10">
                <li>
                  <div>
                    <strong>Oral (Dimakan/Diminum):</strong>
                  </div>
                  <div>

                    Obat diminum melalui mulut dan dicerna di dalam sistem pencernaan
                    sebelum diserap oleh tubuh.
                  </div>
                </li>

                <li>
                  <div>
                    <strong>Parenteral (Injeksi/Suntikan):</strong>
                  </div>
                  <div>

                    Obat disuntikkan langsung ke dalam tubuh, melewati sistem
                    pencernaan.
                  </div>
                </li>

                <li>
                  <div>
                    <strong>Rektal : </strong>
                    <div>
                      Obat dimasukkan melalui anus dan diserap oleh dinding usus besar.
                    </div>
                  </div>
                </li>

                <li>
                  <div>
                    <strong>Vaginal :</strong>
                  </div>
                  <div>

                    Obat dimasukkan ke dalam vagina dan diserap oleh jaringan di
                    sekitarnya.
                  </div>
                </li>

                <li>
                  <div>
                    <strong>Uretral :</strong>
                  </div>
                  <div>

                    Obat dimasukkan melalui saluran uretra pada pria atau wanita dan
                    diserap oleh dinding uretra.
                  </div>
                </li>

                <li>
                  <div>
                    <strong>Local (Lokal) :</strong>
                  </div>
                  <div>

                    Obat diterapkan langsung pada area tertentu dari tubuh, seperti
                    kulit atau mata.
                  </div>
                </li>

                <li>
                  <div>
                    <strong>Topikal :</strong>
                  </div>
                  <div>

                    Obat diterapkan pada permukaan kulit atau selaput lendir, seperti
                    salep atau krim.
                  </div>
                </li>

              </ul>
              <p>
                <br />
              </p>
              <p>
                <div>
                  <strong>3. Penderita / Pasien:</strong>
                </div>
              </p>
              <ul className="ml-10 list-disc">
                <li>
                  <div>
                    <strong>Umur:</strong>
                  </div>
                  <div>

                    Anak-anak, orang dewasa, dan lansia mungkin memerlukan dosis yang
                    berbeda karena metabolisme dan respons tubuh dapat berbeda pada
                    berbagai kelompok usia.
                  </div>
                </li>
                <li>
                  <div>
                    <strong>Berat Badan:</strong>
                  </div>
                  <div>

                    Dosis obat seringkali disesuaikan berdasarkan berat badan pasien
                    untuk memastikan efek yang optimal dan menghindari dosis berlebihan
                    atau kurang.
                  </div>
                </li>

                <li>
                  <div>
                    <strong>Jenis Kelamin:</strong>
                  </div>
                  <div>

                    Beberapa obat mungkin memiliki dosis yang berbeda untuk pria dan
                    wanita.
                  </div>
                </li>

                <li>
                  <div>
                    Kondisi Kesehatan: Penyakit atau kondisi medis tertentu dapat
                    mempengaruhi dosis obat yang dianjurkan untuk memastikan keamanan
                    dan efektivitas pengobatan.
                  </div>
                </li>
                <li>
                  <div>
                    <strong>Toleransi terhadap Obat:</strong>
                  </div>
                  <div>

                    Beberapa individu mungkin lebih atau kurang sensitif terhadap obat
                    tertentu, yang dapat mempengaruhi dosis yang dianjurkan.
                  </div>
                </li>

                <li>
                  <div>
                    Alergi: Alergi terhadap obat atau bahan tertentu dapat membatasi
                    pilihan obat dan mempengaruhi dosis yang aman.
                  </div>
                </li>
                <li>
                  <div>
                    <strong>Kehamilan:</strong>
                  </div>
                  <div>

                    Kehamilan dapat mempengaruhi dosis obat yang aman untuk ibu dan
                    janin, dan dosis harus disesuaikan dengan hati-hati.
                  </div>
                </li>

              </ul>
              <p>
                <br />
              </p>
              <p>
                <div>
                  <strong>4. Faktor Lingkungan dan Sosial:</strong>
                </div>
              </p>
              <ul className="ml-10 list-disc">
                <li>
                  <div>
                    <strong>Lingkungan:</strong>
                  </div>
                  <div>
                    {" "}
                    Faktor seperti iklim, kelembaban, atau eksposur terhadap polutan
                    dapat mempengaruhi cara tubuh menyerap dan memetabolisme obat.
                  </div>
                </li>

                <li>
                  <div>
                    <strong>Gaya Hidup:</strong>
                  </div>
                  <div>
                    {" "}
                    Kebiasaan seperti merokok atau minum alkohol dapat mempengaruhi cara
                    tubuh merespons obat.
                  </div>
                </li>

              </ul>
              <p>
                <br />
              </p>
              <p>
                <br />
              </p>
              <p>
                <div>
                  Selanjutnya mari kita Lihat gambaran dari penjelasan diatas :
                </div>
              </p>
            </div>
          }
          {
            subMateri == 4 &&
            <section className="flex grow basis-[0%] flex-col max-md:max-w-full">
              <h2 className="text-sky-800 text-justify text-2xl font-bold self-stretch max-md:max-w-full">
                Aturan Kuis
              </h2>
              <div>
                <div className="text-zinc-600 text-justify text-lg leading-[150%] self-stretch max-md:max-w-full">
                  <p>
                    <div>
                      Kuis di Farma Academy bertujuan untuk menguji pengetahuan pengguna tentang materi yang telah dipelajari. Terdapat beberapa ketentuan yang harus diperhatikan oleh pengguna saat mengerjakan kuis, yaitu:
                    </div>
                  </p>
                  <ul className="ml-10 list-disc my-10">
                    <li>
                      <div>Nilai kelulusan: Pengguna harus mendapatkan nilai minimal 80% untuk lulus kuis.</div>
                    </li>
                    <li>
                      <div>Durasi: Pengguna memiliki waktu 15 menit untuk mengerjakan kuis.</div>
                    </li>
                    <li>
                      <div>Pengulangan: Apabila pengguna tidak lulus kuis, maka pengguna dapat mengulang pengerjaan kuis dengan menunggu selama 1 menit.</div>
                    </li>

                  </ul>
                  <div>Jika Anda tidak mencapai ketentuan, maka Anda dapat memanfaatkan waktu tunggu tersebut untuk mempelajari kembali materi sebelumnya.</div>
                </div>
              </div>

              <Link to={"/module/materi/access/learning/quiz"} className="text-white text-sm leading-[150%] items-stretch bg-sky-800 w-[97px] max-w-full mt-12 px-4 py-2.5 rounded-lg max-md:mt-10">
                Mulai Kuis
              </Link>

            </section>
          }

        </div>
      </div>
    </main>
  )
}