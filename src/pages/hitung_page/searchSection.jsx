export default function SearchSection() {
  return (
    <section className="mx-auto -mt-10 shadow-sm bg-sky-900 self-center z-[1] flex w-[938px] max-w-full items-start justify-between gap-5 pl-7 pr-7 py-5 rounded-3xl max-md:flex-wrap max-md:px-5">
      <div className="items-start border border-[color:var(--neutral-100,#E7EAEE)] bg-white self-stretch flex justify-between gap-2 pl-2 py-2.5 rounded-2xl border-solid max-md:max-w-full max-md:flex-wrap">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/dc3ec4d9-fc94-454a-9e10-e2f186ff82c9?apiKey=7bdd35b7bdaf466890fa5ec9ff0372cb&"
          className="aspect-square object-contain object-center w-4 overflow-hidden self-center max-w-full my-auto"
          alt="Logo"
        />
        <div className="text-slate-500 text-base self-stretch grow shrink basis-auto">
          Search by Dosis, ....
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
  );
}
