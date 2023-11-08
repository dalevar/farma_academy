// import ModuleHeader from "./HeaderModuleSection";
// import ModuleBody from "./BodyModuleSection";

import SearchSection from "./SearchSection";
import BannerSection from "./BannerSection";
import CardModule from "../../components/cards/CardModule";

const ModulePage = () => {
  return (
    <div>
      {/* banner */}
      <BannerSection />

      {/* search */}
      <SearchSection />


      {/* card module */}
      <div className="self-center flex w-[942px] max-w-full flex-col mt-10 px-5 mx-auto">
        <header className="text-teal-900 text-center text-base font-light self-start max-md:max-w-full">
          <span className="text-sky-400">Beranda</span>
          <span className="text-teal-900"> / Module</span>
        </header>
        <h1 className="text-teal-900 text-center text-base font-bold mt-3.5 self-start max-md:max-w-full">
          Pilih Module dan mulai belajar!
        </h1>

        <div className="grid grid-cols-4 gap-8 mt-8">
          <CardModule moduleTitle="ilmu Resep" to="" />
          <CardModule moduleTitle="ilmu Resep" to="" />
          <CardModule moduleTitle="ilmu Resep" to="" />
          <CardModule moduleTitle="ilmu Resep" to="" />
          <CardModule moduleTitle="ilmu Resep" to="" />
          <CardModule moduleTitle="ilmu Resep" to="" />
          <CardModule moduleTitle="ilmu Resep" to="" />
          <CardModule moduleTitle="ilmu Resep" to="" />
          <CardModule moduleTitle="ilmu Resep" to="" />
        </div>

      </div>

    </div>
  );
};
export default ModulePage;
