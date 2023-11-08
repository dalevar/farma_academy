const ExperienceSection = () => {
  return (
    <div className="bg-sky-50 flex flex-col px-20 max-md:px-5">
      <div className="self-center w-full max-w-[1210px] mt-40 mb-24 max-md:max-w-full max-md:my-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b4fd2502-ea39-4a6a-9e9e-a6b65ed0cbc0?apiKey=6f0257302a85476b9d26590be3d78938&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b4fd2502-ea39-4a6a-9e9e-a6b65ed0cbc0?apiKey=6f0257302a85476b9d26590be3d78938&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b4fd2502-ea39-4a6a-9e9e-a6b65ed0cbc0?apiKey=6f0257302a85476b9d26590be3d78938&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b4fd2502-ea39-4a6a-9e9e-a6b65ed0cbc0?apiKey=6f0257302a85476b9d26590be3d78938&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b4fd2502-ea39-4a6a-9e9e-a6b65ed0cbc0?apiKey=6f0257302a85476b9d26590be3d78938&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b4fd2502-ea39-4a6a-9e9e-a6b65ed0cbc0?apiKey=6f0257302a85476b9d26590be3d78938&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b4fd2502-ea39-4a6a-9e9e-a6b65ed0cbc0?apiKey=6f0257302a85476b9d26590be3d78938&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b4fd2502-ea39-4a6a-9e9e-a6b65ed0cbc0?apiKey=6f0257302a85476b9d26590be3d78938&"
              className="aspect-[1.07] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-10"
            />
          </div>
          <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
            <div className="flex flex-col my-auto max-md:max-w-full max-md:mt-10">
              <div className="text-teal-900 text-base font-bold whitespace-nowrap self-start max-md:max-w-full">
                Magang dengan mudah
              </div>
              <div className="text-emerald-950 text-5xl font-bold leading-[57.6px] mt-6 self-start max-md:max-w-full max-md:text-4xl">
                Dapatkan pengalaman
                <br />
                Magangmu disini
              </div>
              <div className="text-emerald-950 text-lg font-light leading-7 mt-6 self-start max-md:max-w-full">
                Dengan adanya kerjasama ini, Farma Academy memberikan peluang
                magang langsung di perusahaan farmasi ternama. Magang ini akan
                memberikan pengalaman kerja nyata kepada pelajar farmasi, serta
                meningkatkan peluang karier mereka.
              </div>
              <div className="flex w-[217px] max-w-full items-start gap-1.5 mt-14 self-start max-md:mt-10">
                <div className="text-sky-700 text-lg leading-7 underline w-full self-start">
                  Lihat Semua Lowongan
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/223bb271-3503-47b3-a5f6-89a1e5592f5c?apiKey=6f0257302a85476b9d26590be3d78938&"
                  className="aspect-square object-contain object-center w-[15px] overflow-hidden max-w-full self-start"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
