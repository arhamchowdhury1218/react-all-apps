import { Link, NavLink } from "react-router";
import logoImg from "../../assets/logo.png";
import { FaGithub } from "react-icons/fa";
import { VscGithubAlt } from "react-icons/vsc";

const Navbar = () => {
  // const [active, setActive] = useState("home");
  const activeClass = "text-violet-700 underline";
  const inactiveClass = "hover:text-violet-700";
  const navLinks = (
    <>
      <NavLink
        to="/"
        end
        className={({ isActive }) =>
          `mr-5 font-medium ${isActive ? activeClass : inactiveClass}`
        }
      >
        <li>Home</li>
      </NavLink>

      <NavLink
        to="/apps"
        className={({ isActive }) =>
          `mr-5 font-medium ${isActive ? activeClass : inactiveClass}`
        }
      >
        <li>Apps</li>
      </NavLink>

      <NavLink
        to="/installation-apps"
        className={({ isActive }) =>
          `mr-5 font-medium ${isActive ? activeClass : inactiveClass}`
        }
      >
        <li>Installation</li>
      </NavLink>
    </>
  );
  return (
    <div className="max-w-11/12 mx-auto">
      {" "}
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {navLinks}{" "}
            </ul>
          </div>
          <Link
            // onClick={() => setActive("home")}
            to="/"
            className="flex items-center"
          >
            <img className="w-12 h-12 " src={logoImg} alt="" />
            <div
              to="/"
              className="btn btn-ghost text-violet-700 text-xl lg:text-2xl font-bold"
            >
              AppStoreX
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          <Link
            to="https://github.com/arhamchowdhury1218"
            className="btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] flex items-center text-white font-medium"
          >
            <div className="text-xl">
              <VscGithubAlt />
            </div>
            Contribute
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
