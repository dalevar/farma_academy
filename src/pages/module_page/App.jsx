import ModuleHeader from "./HeaderModuleSection";
import ModuleBody from "./BodyModuleSection";

const ModulePage = () => {
  return (
    <div>
      {/* banner */}
      <main className="items-center bg-sky-50 self-stretch z-[1] flex w-full flex-col pt-36 pb-48 px-20 max-md:max-w-full max-md:px-5 max-md:py-24">
        <section className="self-center flex mb-0 w-[778px] max-w-full flex-col max-md:mb-2.5">
          <h1 className="text-emerald-950 text-center text-4xl font-bold leading-[120%] self-stretch max-md:max-w-full">
            Kenali Apa itu Farmasi, Lalu Kuasai Materinya!
          </h1>
          <p className="text-teal-900 text-center text-base font-bold max-w-[571px] self-center mt-10 max-md:max-w-full">
            Pelajari materinya dengan pembelajaran yang menarik dan menyenangkan
          </p>
        </section>
      </main>

      {/* search */}
      <section className="mx-auto -mt-10 shadow-sm bg-sky-900 self-center z-[1] flex mt-0 w-[938px] max-w-full items-start justify-between gap-5 pl-7 pr-7 py-5 rounded-3xl max-md:flex-wrap max-md:px-5">
        <div className="items-start border border-[color:var(--neutral-100,#E7EAEE)] bg-white self-stretch flex justify-between gap-2 pl-2 py-2.5 rounded-2xl border-solid max-md:max-w-full max-md:flex-wrap">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/dc3ec4d9-fc94-454a-9e10-e2f186ff82c9?apiKey=7bdd35b7bdaf466890fa5ec9ff0372cb&"
            className="aspect-square object-contain object-center w-4 overflow-hidden self-center max-w-full my-auto"
            alt="Logo"
          />
          <div className="text-slate-500 text-base self-stretch grow shrink basis-auto">
            Search by bab, materi, module ....
          </div>
        </div>
        <div className="self-stretch flex w-72 max-w-full items-start justify-between gap-5">
          <div className="justify-between items-start bg-white self-stretch flex w-[97px] max-w-full gap-2.5 px-4 py-2.5 rounded-[3.125rem]">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/5964eb89-7a86-4eb9-aeca-b89cde55a0e8?apiKey=7bdd35b7bdaf466890fa5ec9ff0372cb&"
              className="aspect-square object-contain object-center w-4 overflow-hidden self-center max-w-full my-auto"
              alt="Filter Icon"
            />
            <div className="text-slate-500 text-base font-semibold self-stretch">
              Filter
            </div>
          </div>
          <div className="bg-violet-50 self-stretch flex w-[143px] max-w-full items-start justify-between gap-5 pl-5 pr-5 pt-4 pb-2.5 rounded-[3.125rem] max-md:pl-5">
            <div className="text-blue-950 text-sm font-medium self-start">
              Category
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/8dc9d981-b8c4-4c64-99eb-5ab556e9cfae?apiKey=7bdd35b7bdaf466890fa5ec9ff0372cb&"
              className="aspect-[1.57] object-contain object-center w-[11px] stroke-[2px] stroke-blue-950 overflow-hidden max-w-full self-start"
              alt="Category Icon"
            />
          </div>
        </div>
      </section>


      {/* card module */}
      <div className="self-center flex w-[942px] max-w-full flex-col mt-10 px-5 mx-auto">
        <header className="text-teal-900 text-center text-base font-light self-start max-md:max-w-full">
          <span className="text-sky-400">Beranda</span>
          <span className="text-teal-900"> / Module</span>
        </header>
        <h1 className="text-teal-900 text-center text-base font-bold mt-3.5 self-start max-md:max-w-full">
          Pilih Module dan mulai belajar!
        </h1>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/b87ab962-1241-4028-b69c-5d89d1968e76?apiKey=7bdd35b7bdaf466890fa5ec9ff0372cb&"
          className="aspect-[4.11] object-contain object-center w-full overflow-hidden mt-10 self-start max-md:max-w-full"
          alt="Module Image 1"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/0f1c97c5-360e-413a-9933-121b3580d154?apiKey=7bdd35b7bdaf466890fa5ec9ff0372cb&"
          className="aspect-[4.11] object-contain object-center w-full overflow-hidden mt-10 self-start max-md:max-w-full"
          alt="Module Image 2"
        />
        <form className="border border-[color:var(--Pale-grey,#3CF)] bg-white flex w-[209px] max-w-full grow flex-col mt-10 pb-20 px-px rounded-3xl border-solid self-start">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/6fd9b867-1dd7-4c79-a82f-7b38b4f8b069?apiKey=7bdd35b7bdaf466890fa5ec9ff0372cb&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/6fd9b867-1dd7-4c79-a82f-7b38b4f8b069?apiKey=7bdd35b7bdaf466890fa5ec9ff0372cb&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6fd9b867-1dd7-4c79-a82f-7b38b4f8b069?apiKey=7bdd35b7bdaf466890fa5ec9ff0372cb&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/6fd9b867-1dd7-4c79-a82f-7b38b4f8b069?apiKey=7bdd35b7bdaf466890fa5ec9ff0372cb&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/6fd9b867-1dd7-4c79-a82f-7b38b4f8b069?apiKey=7bdd35b7bdaf466890fa5ec9ff0372cb&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6fd9b867-1dd7-4c79-a82f-7b38b4f8b069?apiKey=7bdd35b7bdaf466890fa5ec9ff0372cb&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/6fd9b867-1dd7-4c79-a82f-7b38b4f8b069?apiKey=7bdd35b7bdaf466890fa5ec9ff0372cb&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/6fd9b867-1dd7-4c79-a82f-7b38b4f8b069?apiKey=7bdd35b7bdaf466890fa5ec9ff0372cb&" className="aspect-[1.35] object-contain object-center w-full rotate-[165deg] overflow-hidden self-stretch"
            alt="Module Image 3"
          />
        </form>
      </div>

    </div>
  );
};
export default ModulePage;
