import AllClassesUser from "../components/AllClassesUser";
import { useEffect, useState } from "react";

function AllClasses() {
  // const NavbarHeight = useRecoilValue(navbarHeight);
  const [deviceHeight, setDeviceHeight] = useState<number | null>(null);
  useEffect(() => {
    setDeviceHeight(window.innerHeight);
  }, []);
  return (
    <div
      style={{
        // height: `calc(100vh - ${NavbarHeight}px - 16px - 16px)`,
        height: "100vh",
        overflowY: `${deviceHeight! < 800 ? "scroll" : "auto"}`,
      }}
      className={`w-full col-span-5 relative overflow-y-auto scrollbar-thin scrollbar-track-zinc-950 scrollbar-thumb-zinc-500`}
    >
      {/* <div className="flex items-end gap-1 text-zinc-900 justify-center p-4 border-b border-zinc-200 bg-rose-400">
        <LiaSchoolSolid className="text-3xl md:text-3xl" />
        <span className="text-xl md:text-xl font-light">Mahei</span>
      </div> */}
      <div>
        <h1 className="text-sm md:text-xl text-zinc-900 font-light border-b border-zinc-200 p-4 pl-8">
          Classes
        </h1>
        <AllClassesUser />
      </div>
    </div>
  );
}

export default AllClasses;
