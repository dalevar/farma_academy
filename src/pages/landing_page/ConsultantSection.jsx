import { Link } from "react-router-dom";
import { IconChat } from "../../components/Icons";
const ConsultantSection = () => {
  return (
    <div className="bg-white flex flex-col px-20 max-md:px-5">
      <div className="self-center flex w-full max-w-[1106px] flex-col mt-28 mb-24 max-md:max-w-full max-md:my-10">
        <div className="text-sky-950 text-center text-4xl font-bold self-center whitespace-nowrap max-md:max-w-full">
          Konsultasi dengan pengajar profesional{" "}
        </div>
        <div className="text-sky-950 text-center text-base leading-6 self-center max-w-[495px] mt-4 max-md:max-w-full">
          Pengajar yang kompeten dan berpengalaman memberikan bimbingan dan
          arahan yang tepat untuk membantumu mengatasi masalah belajar.
        </div>
        <div className="self-stretch mt-20 max-md:max-w-full max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-3/12 max-md:w-full max-md:ml-0">
              <div className="border border-[color:var(--Seagull---200,#B8EBFF)] bg-white flex w-full max-w-[242px] grow flex-col mx-auto pl-7 pr-5 pt-8 pb-3.5 rounded-2xl border-solid max-md:mt-10 max-md:pl-5">
                <div className="fill-[linear-gradient(315deg,rgba(0,0,0,0.60)_0%,rgba(255,255,255,0.00)_100%),var(--Seagull---800,#02628A)] shadow-sm self-center flex w-[157px] max-w-full flex-col pl-5 pr-5 py-0.5">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/8e607425-7afd-489e-aeca-b339c596eac7?apiKey=6f0257302a85476b9d26590be3d78938&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/8e607425-7afd-489e-aeca-b339c596eac7?apiKey=6f0257302a85476b9d26590be3d78938&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8e607425-7afd-489e-aeca-b339c596eac7?apiKey=6f0257302a85476b9d26590be3d78938&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/8e607425-7afd-489e-aeca-b339c596eac7?apiKey=6f0257302a85476b9d26590be3d78938&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/8e607425-7afd-489e-aeca-b339c596eac7?apiKey=6f0257302a85476b9d26590be3d78938&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8e607425-7afd-489e-aeca-b339c596eac7?apiKey=6f0257302a85476b9d26590be3d78938&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/8e607425-7afd-489e-aeca-b339c596eac7?apiKey=6f0257302a85476b9d26590be3d78938&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/8e607425-7afd-489e-aeca-b339c596eac7?apiKey=6f0257302a85476b9d26590be3d78938&"
                    className="aspect-[1.04] object-contain object-center w-full overflow-hidden self-stretch grow"
                  />
                </div>
                <div className="text-emerald-950 text-xs font-bold self-stretch whitespace-nowrap mt-6">
                  Apt. Saidil Mifdal S.Kom, S.Farm
                </div>
                <div className="text-teal-900 text-xs leading-4 self-stretch whitespace-nowrap mt-3">
                  Sertifikat Asesor
                </div>
                <span className="aspect-square object-contain object-center overflow-hidden max-w-full mt-4 self-end">
                  <IconChat />
                </span>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
              <div className="border border-[color:var(--Seagull---200,#B8EBFF)] bg-white flex w-full max-w-[242px] grow flex-col mx-auto pl-7 pr-5 pt-9 pb-3.5 rounded-2xl border-solid max-md:mt-10 max-md:pl-5">
                <div className="fill-[linear-gradient(315deg,rgba(0,0,0,0.60)_0%,rgba(255,255,255,0.00)_100%),var(--Seagull---800,#02628A)] shadow-sm self-center flex w-[158px] max-w-full flex-col px-5 py-1">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/fac26381-4551-48ca-b07c-b4be30ad4b91?apiKey=6f0257302a85476b9d26590be3d78938&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/fac26381-4551-48ca-b07c-b4be30ad4b91?apiKey=6f0257302a85476b9d26590be3d78938&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/fac26381-4551-48ca-b07c-b4be30ad4b91?apiKey=6f0257302a85476b9d26590be3d78938&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/fac26381-4551-48ca-b07c-b4be30ad4b91?apiKey=6f0257302a85476b9d26590be3d78938&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/fac26381-4551-48ca-b07c-b4be30ad4b91?apiKey=6f0257302a85476b9d26590be3d78938&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/fac26381-4551-48ca-b07c-b4be30ad4b91?apiKey=6f0257302a85476b9d26590be3d78938&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/fac26381-4551-48ca-b07c-b4be30ad4b91?apiKey=6f0257302a85476b9d26590be3d78938&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/fac26381-4551-48ca-b07c-b4be30ad4b91?apiKey=6f0257302a85476b9d26590be3d78938&"
                    className="aspect-[1.04] object-contain object-center w-full overflow-hidden self-stretch grow"
                  />
                </div>
                <div className="text-emerald-950 text-xs font-bold self-stretch whitespace-nowrap mt-5">
                  Apt. Saidil Mifdal S.Kom, S.Farm
                </div>
                <div className="text-teal-900 text-xs leading-4 self-stretch whitespace-nowrap mt-3">
                  Sertifikat Asesor
                </div>
                <span className="aspect-square object-contain object-center overflow-hidden max-w-full mt-4 self-end">
                  <IconChat />
                </span>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
              <div className="border border-[color:var(--Seagull---200,#B8EBFF)] bg-white flex w-full max-w-[242px] grow flex-col mx-auto pl-7 pr-6 pt-8 pb-4 rounded-2xl border-solid max-md:mt-10 max-md:px-5">
                <div className="fill-[linear-gradient(315deg,rgba(0,0,0,0.60)_0%,rgba(255,255,255,0.00)_100%),var(--Seagull---800,#02628A)] shadow-sm self-center flex w-[158px] max-w-full flex-col pl-7 pr-6 py-px max-md:px-5">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d0d64b6b-5b72-48b1-8328-83e65f901840?apiKey=6f0257302a85476b9d26590be3d78938&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d0d64b6b-5b72-48b1-8328-83e65f901840?apiKey=6f0257302a85476b9d26590be3d78938&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d0d64b6b-5b72-48b1-8328-83e65f901840?apiKey=6f0257302a85476b9d26590be3d78938&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d0d64b6b-5b72-48b1-8328-83e65f901840?apiKey=6f0257302a85476b9d26590be3d78938&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d0d64b6b-5b72-48b1-8328-83e65f901840?apiKey=6f0257302a85476b9d26590be3d78938&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d0d64b6b-5b72-48b1-8328-83e65f901840?apiKey=6f0257302a85476b9d26590be3d78938&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d0d64b6b-5b72-48b1-8328-83e65f901840?apiKey=6f0257302a85476b9d26590be3d78938&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d0d64b6b-5b72-48b1-8328-83e65f901840?apiKey=6f0257302a85476b9d26590be3d78938&"
                    className="aspect-[0.91] object-contain object-center w-full overflow-hidden self-stretch grow"
                  />
                </div>
                <div className="text-emerald-950 text-xs font-bold self-stretch whitespace-nowrap mt-6">
                  Apt. Saidil Mifdal S.Kom, S.Farm
                </div>
                <div className="text-teal-900 text-xs leading-4 self-stretch whitespace-nowrap mt-3">
                  Sertifikat Asesor
                </div>
                <span className="aspect-square object-contain object-center overflow-hidden max-w-full mt-4 self-end"><IconChat /></span>

              </div>
            </div>
            <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
              <div className="border border-[color:var(--Seagull---200,#B8EBFF)] bg-white flex w-full max-w-[242px] grow flex-col mx-auto pl-7 pr-6 pt-8 pb-3.5 rounded-2xl border-solid max-md:mt-10 max-md:px-5">
                <div className="fill-[linear-gradient(315deg,rgba(0,0,0,0.60)_0%,rgba(255,255,255,0.00)_100%),var(--Seagull---800,#02628A)] shadow-sm self-center flex w-[158px] max-w-full flex-col pl-7 pr-6 py-px max-md:px-5">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/3b96db59-76b2-4391-b5eb-f5496d5df7a5?apiKey=6f0257302a85476b9d26590be3d78938&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3b96db59-76b2-4391-b5eb-f5496d5df7a5?apiKey=6f0257302a85476b9d26590be3d78938&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3b96db59-76b2-4391-b5eb-f5496d5df7a5?apiKey=6f0257302a85476b9d26590be3d78938&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3b96db59-76b2-4391-b5eb-f5496d5df7a5?apiKey=6f0257302a85476b9d26590be3d78938&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3b96db59-76b2-4391-b5eb-f5496d5df7a5?apiKey=6f0257302a85476b9d26590be3d78938&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3b96db59-76b2-4391-b5eb-f5496d5df7a5?apiKey=6f0257302a85476b9d26590be3d78938&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3b96db59-76b2-4391-b5eb-f5496d5df7a5?apiKey=6f0257302a85476b9d26590be3d78938&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/3b96db59-76b2-4391-b5eb-f5496d5df7a5?apiKey=6f0257302a85476b9d26590be3d78938&"
                    className="aspect-[0.91] object-contain object-center w-full overflow-hidden self-stretch grow"
                  />
                </div>
                <div className="text-emerald-950 text-xs font-bold self-stretch whitespace-nowrap mt-6">
                  Apt. Saidil Mifdal S.Kom, S.Farm
                </div>
                <div className="text-teal-900 text-xs leading-4 self-stretch whitespace-nowrap mt-3">
                  Sertifikat Asesor
                </div>
                <span className="aspect-square object-contain object-center overflow-hidden max-w-full mt-4 self-end"><IconChat /></span>

              </div>
            </div>
          </div>
        </div>
        <a href="./consultant" className="flex w-[210px] max-w-full items-start gap-1.5 mt-20 self-end max-md:mt-10">
          <div className="text-sky-700 text-lg leading-7 underline">
            Lihat Semua Konsultan
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9bffda43-f717-48a9-a7c7-e6b79e71b22f?apiKey=6f0257302a85476b9d26590be3d78938&"
            className="aspect-[1.27] object-contain object-center w-3.5 fill-sky-700 overflow-hidden self-center max-w-full my-auto"
          />
        </a>
      </div>
    </div>
  );
};

export default ConsultantSection;
