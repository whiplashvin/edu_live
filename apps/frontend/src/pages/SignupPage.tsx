import Signup from "../components/Signup";

function SignupPage() {
  return (
    <div className="h-screen bg-zinc-50 flex flex-col items-center">
      <div className="flex items-center gap-3 mt-48 mb-12">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="44"
          height="44"
          viewBox="0 0 24 24"
          fill="none"
          // stroke="#00a6f4"
          stroke="#7c86ff"
          strokeWidth="1.1"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="icon icon-tabler icons-tabler-outline icon-tabler-cube-3d-sphere"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M6 17.6l-2 -1.1v-2.5" />
          <path d="M4 10v-2.5l2 -1.1" />
          <path d="M10 4.1l2 -1.1l2 1.1" />
          <path d="M18 6.4l2 1.1v2.5" />
          <path d="M20 14v2.5l-2 1.12" />
          <path d="M14 19.9l-2 1.1l-2 -1.1" />
          <path d="M12 12l2 -1.1" />
          <path d="M18 8.6l2 -1.1" />
          <path d="M12 12l0 2.5" />
          <path d="M12 18.5l0 2.5" />
          <path d="M12 12l-2 -1.12" />
          <path d="M6 8.6l-2 -1.1" />
        </svg>
        <span className="text-xl md:text-3xl font-extralight text-zinc-700 tracking-widest">
          EDUNET
        </span>
      </div>
      <Signup />
    </div>
  );
}

export default SignupPage;
