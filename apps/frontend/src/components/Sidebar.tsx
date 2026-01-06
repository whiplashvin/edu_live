import { useRecoilValue } from "recoil";
import { currUser, userRole } from "../recoil";
import { Link, useNavigate } from "react-router-dom";
import { CiLogout } from "react-icons/ci";
import axios from "axios";
// import { LiaSchoolSolid } from "react-icons/lia";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu.tsx";
function Sidebar() {
  const Role = useRecoilValue(userRole);
  const CurrUser = useRecoilValue(currUser);
  const navigate = useNavigate();
  async function logout() {
    await axios.post(
      `${import.meta.env.VITE_PRIMARY_BACKEND_URL}/logout`,
      {},
      { withCredentials: true }
    );
    navigate("/signin");
  }
  return (
    <div className="hidden xl:block relative h-full bg-zinc-50 col-span-1 min-w-44 border-r border-zinc-200">
      <div className="flex items-end gap-1 text-zinc-900 justify-center p-4 border-b border-zinc-200">
        {/* <LiaSchoolSolid className="text-3xl md:text-3xl" /> */}
        <span className="text-xl md:text-xl font-light">EduLive</span>
      </div>
      <div className="flex flex-col text-zinc-700 mt-10 font-light text-sm">
        <Link
          to="/dashboard/all-classes"
          className="flex items-center gap-2 hover:text-zinc-950 hover:translate-x-2 transition-all ease-in-out duration-300 delay-100 p-5"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-chalkboard"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M8 19h-3a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v11a1 1 0 0 1 -1 1" />
            <path d="M11 17a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v1a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1l0 -1" />
          </svg>
          All Classes
        </Link>
        {Role === "admin" && (
          <Link
            to="/dashboard/admin"
            className="flex items-center gap-2 hover:text-zinc-950 hover:translate-x-2 transition-all ease-in-out duration-300 delay-100 p-5"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-user"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
              <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
            </svg>
            Admin
          </Link>
        )}
        <Link
          to="/dashboard/profile"
          className="flex items-center gap-2 hover:text-zinc-950 hover:translate-x-2 transition-all ease-in-out duration-300 delay-100 p-5"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-settings"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065" />
            <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
          </svg>
          Profile
        </Link>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-2">
        <DropdownMenu>
          <DropdownMenuContent
            side="top"
            sideOffset={8}
            // className="bg-blue-100 border-0"
          >
            <DropdownMenuItem
              onClick={logout}
              className="cursor-pointer bg-zinc-100 text-xs text-zinc-950 focus:bg-zinc-200 flex justify-center"
            >
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
          <DropdownMenuTrigger>
            <CiLogout className="text-zinc-900 text-xl cursor-pointer hover:scale-110" />
          </DropdownMenuTrigger>
        </DropdownMenu>
        <span className="text-zinc-900 font-thin text-sm">{CurrUser}</span>
      </div>
    </div>
  );
}

export default Sidebar;
