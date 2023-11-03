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
    <nav className="fixed top-0 w-full flex justify-between items-center p-5 h-28">
      <div className="w-44">
        <img
          src="/images/BIG LOGO.png"
          alt="none"
          className="object-cover w-full"
        />
      </div>
      <div className="search flex items-center w-3/12">
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
              <button
                type="submit"
                className="text-farma-500 absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-4 py-2"
              >
                Search
              </button>
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
        <div className="nav-list flex items-center me-16 ">
          <ul className="flex text-farma-950 font-medium">
            <li
              className={`me-5 text-xl ${
                paramsSlug === "materi" && "underline decoration-farma-700"
              }`}
            >
              <Link to={"./module"}>Materi belajar</Link>
            </li>
            <li
              className={`me-5 text-xl ${
                paramsSlug === "materi" && "underline decoration-farma-700"
              }`}
            >
              <Link to={"./hitung-cepat"}>Hitung cepat</Link>
            </li>
            <li
              className={`me-5 text-xl ${
                paramsSlug === "materi" && "underline decoration-farma-700"
              }`}
            >
              <Link to={"./community"}>Community</Link>
            </li>
            <li
              className={`me-5 text-xl ${
                paramsSlug === "materi" && "underline decoration-farma-700"
              }`}
            >
              <Link to={"./langganan"}>Langganan</Link>
            </li>
          </ul>
        </div>
        <div className="nav-action flex items-center">
          <ul className="flex items-center">
            <li className="py-2 px-5 bg-farma-200 text-farma-900 text-2xl rounded-md hover:bg-opacity-80 me-5">
              <Link>Masuk</Link>
            </li>
            <li>
              <Link className="py-2 px-5 bg-farma-800 text-farma-50 text-2xl rounded-md hover:bg-opacity-80">
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
