const HitungDetail = () => {
  return (
    <section
      id="calculator"
      className="container flex flex-col gap-5 px-3 py-32 mx-auto bg-farma-50 pt-24"
    >
      <div className="bg-sky-50 flex w-full flex-col pt-20 pb-14 px-5 max-md:max-w-full">
        <div className="flex w-[617px] max-w-full flex-col items-stretch ml-56">
          <div className="text-sky-950 text-5xl font-bold leading-[60px] whitespace-nowrap max-md:max-w-full max-md:text-4xl">
            Menghitung dosis
          </div>
          <div className="text-sky-950 text-2xl leading-9 whitespace-nowrap max-md:max-w-full">
            Masukkan angka yang Anda inginkan dan pilih rumusnya
          </div>
        </div>
      </div>
    </section>
  );
};

export default HitungDetail;
