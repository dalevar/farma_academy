import { Link, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
const Navbar = () => {
  let [search, setSearch] = useState("");
  const navigation = useNavigate();

  const { slug: paramsSlug } = useParams();

  const materiSearch = (e) => {
    e.preventDefault();
    const search = e.target[0].value;
    navigation(`/materi/${search.toLowerCase()}`);
  };
  return (
    <nav className="fixed top-0 w-full flex justify-between items-center p-5 h-28 bg-white">
      <div className="w-40 2xl:w-44 xl:w-44 lg:w-28 md:w-32 sm:w-28">
        <img
          src="/images/BIG LOGO.png"
          alt="none"
          className="object-cover w-full"
        />
      </div>
      <div className="search flex items-center 2xl:w-3/12 lg:w-3/12 md:w-4/12 sm:w-4/12">
        <div className="w-full">
          <form className="w-full" onSubmit={materiSearch}>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-farma-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="default-search"
                className="block w-full p-4 pl-10 text-lg text-farma-700 border border-farma-100 rounded-2xl focus:border-farma-500 active:border-farma-500 outline-none"
                placeholder="Halo! mau belajar apa harini?"
                onChange={(e) => setSearch(e.target.value)}
                required
              />
            </div>
          </form>
          {search !== "" && (
            <div id="searchResult" className="relative w-full">
              <div className="absolute w-full">
                <div className="border border-farma-200 w-full mt-2 rounded-t-xl p-4">
                  <div className="border rounded-md p-2">{search}</div>
                </div>
                <Link to={"/module"}>
                  <div className="flex justify-between bg-farma-200 rounded-b-xl p-4">
                    <div>Lihat semua materi</div>
                    <div>{">"}</div>
                  </div>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="nav-menu flex">
        <div className="nav-list hidden items-center 2xl:me-16 xl:me-8 me-14 2xl:flex xl:flex lg:flex md:flex sm:hidden flex-wrap justify-between">
          <ul className="flex items-center text-farma-950 font-medium">
            <li
              className={`me-6 2xl:text-xl lg:text-md ${
                paramsSlug === "materi" && "underline decoration-farma-700"
              }`}
            >
              <Link to={"./module"}>Materi belajar</Link>
            </li>
            <li
              className={`me-5 2xl:text-xl lg:text-md ${
                paramsSlug === "materi" && "underline decoration-farma-700"
              }`}
            >
              <Link to={"./hitung-cepat"}>Hitung cepat</Link>
            </li>
            <li
              className={`me-5 2xl:text-xl lg:text-md ${
                paramsSlug === "materi" && "underline decoration-farma-700"
              }`}
            >
              <Link to={"./community"}>Community</Link>
            </li>
            <li
              className={`me-5 2xl:text-xl lg:text-md ${
                paramsSlug === "materi" && "underline decoration-farma-700"
              }`}
            >
              <Link to={"./langganan"}>Langganan</Link>
            </li>
          </ul>
        </div>
        <div className="nav-action 2xl:flex xl:flex lg:flex items-center hidden">
          <ul className="flex items-center">
            <li className="py-2 px-5 xl:py-1 xl:px-4 lg:px-3 bg-farma-200 text-farma-900 text-2xl rounded-md hover:bg-opacity-80 me-5">
              <Link to={"./login"}>Masuk</Link>
            </li>
            <li className="py-2 px-5 xl:py-1 xl:px-4 lg:px-3 bg-farma-800 text-farma-50 text-2xl rounded-md hover:bg-opacity-80">
              <Link to={"./register"}>
                Daftar
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
