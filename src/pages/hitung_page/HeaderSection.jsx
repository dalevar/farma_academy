export default function HeaderSection() {
  return (
    <section
      id="calculator"
      className="container flex flex-col gap-5 px-3 py-32 mx-auto bg-farma-50 pt-24"
    >
      <div className="bg-sky-50 flex w-full pb-0 flex-col items-center  px-5 max-md:max-w-full">
        <div className="z-[1] flex w-full max-w-[1060px] flex-col items-stretch max-md:max-w-full">
          <div className="max-md:max-w-full">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-[22%] max-md:w-full max-md:ml-0">
                <img
                  loading="lazy"
                  srcSet="..."
                  className="aspect-[0.99] object-contain object-center w-full overflow-hidden max-md:mt-6"
                />
              </div>
              <div className="flex flex-col items-stretch w-[78%] ml-5 max-md:w-full max-md:ml-0">
                <div className="text-black text-2xl leading-9 my-auto max-md:max-w-full max-md:mt-10">
                  hitung cepat yang dapat membantu Anda menghitung berbagai
                  sediaan farmasi dengan mudah dan cepat. Fitur ini dilengkapi
                  dengan berbagai rumus dan cara perhitungan yang lengkap dan
                  akurat.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
