import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between bg-farma-700 p-5 h-28">
      <div className="">
        <img src="" alt="nonne" className="object-cover w-48" />
      </div>
      <div className="search flex items-center bg-farma-500 w-3/12">
        <input type="text" name="" id="" className="w-11/12" />
      </div>
      <div className="nav-menu flex">
        <div className="nav-list flex items-center me-16 ">
          <ul className="flex text-farma-950">
            <li className="me-5 text-2xl">
              <Link>Materi belajar</Link>
            </li>
            <li className="me-5 text-2xl">
              <Link>Hitung cepat</Link>
            </li>
            <li className="me-5 text-2xl">
              <Link>Community</Link>
            </li>
            <li className="me-5 text-2xl">
              <Link>Langganan</Link>
            </li>
          </ul>
        </div>
        <div className="nav-action flex items-center">
          <ul className="flex items-center">
            <li className="py-3 px-5 bg-farma-200 text-farma-900 text-2xl rounded-md hover:bg-opacity-80 me-5">
              <Link>Masuk</Link>
            </li>
            <li>
              <Link className="py-3 px-5 bg-farma-800 text-farma-50 text-2xl rounded-md hover:bg-opacity-80">
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
