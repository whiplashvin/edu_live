import CreateSess from "../components/CreateSess";
import AllClassAdmin from "../components/AllClassAdmin";
// import { useRecoilValue } from "recoil";
// import { navbarHeight } from "@/recoil";
import { useEffect, useState } from "react";

function Admin() {
  // const NavbarHeight = useRecoilValue(navbarHeight);
  const [deviceHeight, setDeviceHeight] = useState<number | null>(null);
  useEffect(() => {
    setDeviceHeight(window.innerHeight);
  }, []);
  return (
    <div
      className={`w-full col-span-5 bg-zinc-95 relative overflow-y-auto scrollbar-thin scrollbar-track-zinc-950 scrollbar-thumb-zinc-500`}
      style={{
        // height: `calc(100vh - ${NavbarHeight}px - 16px - 16px)`,
        height: "100vh",
        overflowY: `${deviceHeight! < 800 ? "scroll" : "auto"}`,
      }}
    >
      <h1 className="text-sm md:text-xl text-zinc-900 font-light border-b border-zinc-200 p-4">
        Manage Sessions
      </h1>
      <div className="p-3 flex justify-end">
        <CreateSess />
      </div>
      <AllClassAdmin />
    </div>
  );
}

export default Admin;
