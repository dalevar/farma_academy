import React, { useEffect, useState, useRef } from "react";
import { IconCheckedV2 } from "../../../components/Icons";

const DefinisiDosis = () => {
  return (
    <>
      <div className="text-sky-800 text-justify text-2xl font-bold mt-9 max-md:max-w-full">
        Pendahuluan
      </div>
      <div className="text-zinc-600 text-justify text-lg leading-7 grow shrink basis-auto justify-between gap-5 mt-7 pt-2 max-md:max-w-full max-md:flex-wrap">
        Halo! kita akan membicarakan tentang suatu konsep yang sangat penting
        dalam penggunaan obat atau zat-zat kimia, yaitu dosis. Dosis adalah
        seberapa banyak atau seberapa sedikit dari suatu zat atau obat yang
        diberikan kepada seseorang pada satu waktu. Untuk memahami dengan lebih
        baik mengapa dosis begitu penting, mari kita jelajahi bersama definisi,
        prinsip, dan pentingnya mengikuti dosis yang direkomendasikan oleh
        dokter atau ahli kesehatan. Mari kita mulai!
      </div>
      <div className="text-sky-800 text-justify text-2xl font-bold mt-14 max-md:max-w-full max-md:mt-10">
        Definisi
      </div>
      <div className="text-zinc-600 text-justify text-lg leading-7 mt-9 mb-16 max-md:max-w-full max-md:mb-10">
        Dosis adalah seberapa banyak atau seberapa sedikit dari suatu zat atau
        obat yang diberikan kepada seseorang pada satu waktu. Ini mirip dengan
        memberikan porsi makanan kepada tubuh, tetapi dalam hal ini, kita
        memberikan &quot;porsi&quot; dari zat atau obat tertentu.
        <br />
        <br />
        Contohnya, bayangkan Anda memiliki sebotol sirup untuk batuk. Dokter
        mungkin akan memberi tahu Anda untuk mengambil satu sendok teh dari
        sirup itu setiap enam jam. Ini adalah dosis yang direkomendasikan. Ini
        seperti resep dari dokter untuk tubuh Anda.
        <br />
        <br />
        Dosis sangat penting karena jika Anda mengambil terlalu sedikit, obat
        mungkin tidak bekerja dengan baik. Di sisi lain, jika Anda mengambil
        terlalu banyak, itu bisa berbahaya. Dosis diukur dalam satuan khusus
        seperti miligram, gram, atau mililiter, tergantung pada jenis obatnya.
        Ini seperti cara kita mengukur berat atau volume suatu benda.
        <br />
        <br />
        Ingatlah selalu untuk mengikuti dosis yang dianjurkan oleh dokter atau
        ahli kesehatan. Mereka telah mempelajari dan memahami bagaimana obat
        bekerja di dalam tubuh dan akan memberi tahu Anda dosis yang tepat untuk
        membantu atau menyembuhkan tanpa menimbulkan masalah kesehatan yang
        lain.
      </div>
    </>
  );
};

const MacamDosis = () => {
  const videoRef = useRef(null);
  const [showButton, setShowButton] = useState(false);

  const handlePlayClick = () => {
    videoRef.current.play();
    setShowButton(false);
  };

  const handleTimeUpdate = () => {
    if (videoRef.current.currentTime >= 10 && !showButton) {
      videoRef.current.pause();
      setShowButton(true);
    }
  };

  const handleFullScreenChange = () => {
    if (!document.fullscreenElement) {
      setShowButton(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener("fullscreenchange", handleFullScreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullScreenChange);
    };
  }, []);

  return (
    <>
      <div className="[Jakarta Sans'] flex-shrink-0 w-[537px] h-[1.375rem] text-[#02628a] text-justify font-['Plus text-2xl font-bold leading-[normal] mt-8">
        Macam-macam Dosis :
      </div>
      <div className="[Jakarta Sans'] flex-shrink-0 w-[1012px] text-[#5c5c5c] text-justify font-['Plus text-lg leading-[150%] mt-7 font-thin">
        Terdapat beberapa jenis dosis yang digunakan dalam penggunaan obat atau
        zat lainnya, tergantung pada penggunaannya. Berikut adalah beberapa
        macam dosis yang umum :
      </div>
      <div className="[Jakarta Sans'] flex-shrink-0 w-[1012px] text-[#5c5c5c] text-justify font-['Plus text-lg leading-[150%] ml-5 mt-10 font-thin">
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
      </div>
      <div className="[Jakarta Sans'] flex-shrink-0 w-[1012px] text-[#5c5c5c] text-justify font-['Plus text-lg leading-[150%] mt-10 font-thin">
        <p>
          Mari kita lanjutkan untuk mentonton penjelasan dari video berikut :
        </p>
      </div>

      <div className="bg-red-300 rounded-xl">
        
        <div className="">
          <video
            ref={videoRef}
            src="/videos/blank.mp4"
            onTimeUpdate={handleTimeUpdate}
            controls={showButton}
            onClick={showButton ? handlePlayClick : null}
          />
          {showButton && <button onClick={handlePlayClick}>Play</button>}
        </div>
      </div>
    </>
  );
};
const LearingModule = () => {
  const [open, setOpen] = useState(false);
  const [openDefinisiDosis, setOpenDefinisiDosis] = useState(true);
  const [openMacamDiDosis, setOpenMacamDosis] = useState(false);
  const [openFaktorDosis, setOpenFaktorDosis] = useState(false);
  const [openKuisDosis, setOpenKuisDosis] = useState(false);

  const [iconDefinisiDosis, setIconDefinisiDosis] = useState(true);
  const [iconMacamDiDosis, setIconMacamDosis] = useState(false);
  const [iconFaktorDosis, setIconFaktorDosis] = useState(false);
  const [iconKuisDosis, setIconKuisDosis] = useState(false);
  const handleDefinisiDosis = () => {
    setOpenDefinisiDosis(true);
    setOpenMacamDosis(false);
    setOpenFaktorDosis(false);
    setOpenKuisDosis(false);
    setIconDefinisiDosis(true);
  };
  const handleClickMacamDosis = () => {
    setOpenMacamDosis(true);
    setOpenDefinisiDosis(false);
    setOpenFaktorDosis(false);
    setOpenKuisDosis(false);
    setIconMacamDosis(true);
  };
  const handleFaktorDosis = () => {
    setOpenFaktorDosis(true);
    setOpenMacamDosis(false);
    setOpenDefinisiDosis(false);
    setOpenKuisDosis(false);
    setIconFaktorDosis(true);
  };
  const handleKuisDosis = () => {
    setOpenKuisDosis(true);
    setOpenFaktorDosis(false);
    setOpenMacamDosis(false);
    setOpenDefinisiDosis(false);
    setIconKuisDosis(true);
  };
  return (
    <div className="flex m-5">
      <div>
        <div className="border overflow-y-scroll rounded-lg p-0 h-[32rem] w-80">
          <div>
            <div className="">
              <button className="p-6" onClick={() => setOpen(!open)}>
                Module 1
              </button>
              <hr />
              <div
                className={`${
                  open === false && "hidden"
                } overflow-y-scroll h-80`}
              >
                <div className="flex items-center justify-between">
                  <button
                    className="p-5 px-8 flex items-center justify-between"
                    onClick={() => handleDefinisiDosis()}
                  >
                    Definisi dosis
                  </button>
                  <span className={`${!iconDefinisiDosis && "me-4 hidden"}`}>
                    <IconCheckedV2 />
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <button
                    className="p-5 px-8 flex items-center justify-between"
                    onClick={() => handleClickMacamDosis()}
                  >
                    Macam-macam dosis
                  </button>
                  <span className={`${!iconMacamDiDosis && "me-4 hidden"}`}>
                    <IconCheckedV2 />
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <button
                    className="p-5 px-8 flex text-left justify-between"
                    onClick={() => handleFaktorDosis()}
                  >
                    Faktor faktor yang mempengaruhi dosis obat
                  </button>
                  <span className={`${!iconFaktorDosis && "me-4 hidden"}`}>
                    <IconCheckedV2 />
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <button
                    className="p-5 px-8 flex items-center justify-betwee"
                    onClick={() => handleKuisDosis()}
                  >
                    Kuis Dosis
                  </button>
                  <span className={`${!iconKuisDosis && "me-4 hidden"}`}>
                    <IconCheckedV2 />
                  </span>
                </div>
              </div>
            </div>
            <div className="">
              <div className="p-5">Module 2</div>

              <hr />
            </div>
            <div className="">
              <div className="p-5">Module 3</div>
              <hr />
            </div>
            <div className="">
              <div className="p-5">Module 4</div>
              <hr />
            </div>
            <div className="">
              <div className="p-5">Module 5</div>
              <hr />
            </div>
            <div className="">
              <div className="p-5">Module 5</div>
              <hr />
            </div>
            <div className="">
              <div className="p-5">Module 6</div>
              <hr />
            </div>
            <div className="">
              <div className="p-5">Module 7</div>
              <hr />
            </div>
            <div className="">
              <div className="p-5">Module 8</div>
              <hr />
            </div>
            <div className="">
              <div className="p-5">Module 9</div>
              <hr />
            </div>
            <div className="">
              <div className="p-5">Module 10</div>
              <hr />
            </div>
            <div className="">
              <div className="p-5">Module 11</div>
              <hr />
            </div>
            <div className="">
              <div className="p-5">Module 12</div>
              <hr />
            </div>
          </div>
          <div></div>
        </div>
        <div className="border rounded-lg mt-3">
          <div className="flex w-[145px] py-2 max-w-full items-stretch gap-1.5 ml-4 mt-3.5 px-5 self-start max-md:ml-2.5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/dbcbd311-ff66-4978-abf5-ed8a7e6977d8?apiKey=6f0257302a85476b9d26590be3d78938&"
              className="aspect-square object-contain object-center w-7 overflow-hidden shrink-0 max-w-full"
            />
            <div className="text-sky-900 text-base font-bold whitespace-nowrap mt-1.5 self-start">
              Forum Duskusi
            </div>
          </div>
          <div className="bg-neutral-300 min-h-[1px] w-full mt-3" />
          <div className="flex w-[114px] py-2 max-w-full items-stretch gap-2 ml-3.5 mt-3 mb-2 px-5 self-start max-md:ml-2.5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/8581ec61-37a1-48c5-a046-b7daf66fb2d8?apiKey=6f0257302a85476b9d26590be3d78938&"
              className="aspect-square object-contain object-center w-7 overflow-hidden shrink-0 max-w-full"
            />
            <div className="text-sky-900 text-base font-bold self-center whitespace-nowrap my-auto">
              Konsultasi
            </div>
          </div>
        </div>
      </div>

      <div className="w-full border rounded-xl mx-3  p-5">
        <div className={`${openDefinisiDosis === false ? "hidden" : ""}`}>
          <DefinisiDosis />
        </div>
        <div className={`${openMacamDiDosis === false ? "hidden" : ""}`}>
          <MacamDosis />
        </div>
      </div>
    </div>
  );
};

export default LearingModule;
