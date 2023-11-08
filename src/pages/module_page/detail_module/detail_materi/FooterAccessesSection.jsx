import { IconBook, IconStar } from "../../../../components/Icons";
const FooterAccessesSection = () => {
  return (
    <section className="gap-5 w-full">
      <div className="">
        <div className="w-11/12 mx-auto">
          <span className="text-xl font-semibold block mb-5">
            Pilih materi lainnya
          </span>
          <div className="flex gap-10 justify-around">
            <div className="flex hover:scale-105 transition">
              <div className="border border-farma-500 rounded-3xl p-8 w-auto flex">
                <div className="bg-farma-400 w-6/12 h-32 rounded-xl"> </div>
                <div className="ml-8">
                  <p className="text-sm font-semibold w-10/12">
                    SEDIAAN SOLID FARMASI - PULVIS DAN PULVERES
                  </p>
                  <span className="font-thin text-sm">
                    On the most popular sites
                  </span>
                  <div className="mt-9 flex">
                    <div className="flex items-center me-5">
                      <span className="inline w-5 text-small me-5">
                        <IconBook />
                      </span>
                      <span className="text-small">5 Bab</span>
                    </div>
                    <div className="flex items-center">
                      <span className="inline w-5 me-2">
                        <IconStar />
                      </span>
                      <span className="text-small">4.84</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex hover:scale-105 transition">
              <div className="border border-farma-500 rounded-3xl p-8 w-auto flex">
                <div className="bg-farma-400 w-6/12 h-32 rounded-xl"> </div>
                <div className="ml-8">
                  <p className="text-sm font-semibold w-10/12">
                    SEDIAAN SOLID FARMASI - PULVIS DAN PULVERES
                  </p>
                  <span className="font-thin text-sm">
                    On the most popular sites
                  </span>
                  <div className="mt-9 flex ">
                    <div className="flex items-center me-5">
                      <span className="inline w-5 text-small me-4">
                        <IconBook />
                      </span>
                      <span className="text-small">5 Bab</span>
                    </div>
                    <div className="flex items-center">
                      <span className="inline w-5 me-2">
                        <IconStar />
                      </span>
                      <span className="text-small">4.84</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex hover:scale-105 transition">
              <div className="border border-farma-500 rounded-3xl p-8 w-auto flex">
                <div className="bg-farma-400 w-6/12 h-32 rounded-xl"> </div>
                <div className="ml-8">
                  <p className="text-sm font-semibold w-10/12">
                    SEDIAAN SOLID FARMASI - PULVIS DAN PULVERES
                  </p>
                  <span className="font-thin text-sm">
                    On the most popular sites
                  </span>
                  <div className="mt-9 flex">
                    <div className="flex items-center me-5">
                      <span className="inline w-5 text-small me-4">
                        <IconBook />
                      </span>
                      <span className="text-small">5 Bab</span>
                    </div>
                    <div className="flex items-center">
                      <span className="inline w-5 me-2">
                        <IconStar />
                      </span>
                      <span className="text-small">4.84</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterAccessesSection;
