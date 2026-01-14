import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { getGoogleOAuthURL } from "@/lib/action";
import { useMutation } from "@tanstack/react-query";
import { signin } from "@/actions";

function Signin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const { mutate, isPending, isError } = useMutation({
    mutationFn: signin,
    onSuccess: () => {
      navigate("/dashboard/all-classes");
    },
    onError: (err) => {
      setErrorMessage(String(err.message));
    },
  });

  return (
    <div className="flex flex-col gap-10 p-4 w-60 md:min-w-96">
      <h2 className="text-lg md:text-3xl font-thin text-zinc-500 text-center">
        Welcome back
      </h2>
      <div className="flex flex-col gap-6">
        <input
          placeholder="username"
          type="text"
          className="px-4 py-2 rounded-md bg-zinc-100 border border-zinc-400 text-zinc-900 font-thin text-xs md:text-base focus:outline-none"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          placeholder="password"
          type="password"
          className="px-4 py-2 rounded-md bg-zinc-100 border border-zinc-400 text-zinc-900 font-thin text-xs md:text-base focus:outline-none"
          onChange={(e) => setPassword(e.target.value)}
        />
        {isError && (
          <p className="text-red-500 font-thin text-xs md:text-base text-center">
            {errorMessage}
          </p>
        )}
        <button
          className="bg-indigo-400/30 border-[0.5px] border-indigo-500 text-zinc-950 px-4 py-2 rounded-lg flex items-center justify-center text-xs md:text-base font-thin hover:bg-indigo-600/30"
          onClick={() => mutate({ username, password })}
        >
          {isPending ? "Signing in..." : "Sign In"}
        </button>
        <div className="flex gap-2 font-thin  justify-center">
          <p className="text-zinc-500 text-xs md:text-base">
            Don't have an account?
          </p>
          <Link
            className="text-indigo-500 cursor-pointer text-xs md:text-base"
            to="/signup"
          >
            Sign Up
          </Link>
        </div>
        <div className="flex items-center justify-center space-x-2">
          <div className="flex-1 h-[1px] bg-zinc-500"></div>
          <span className="text-zinc-500 font-thin text-[10px] md:text-xs">
            OR
          </span>
          <div className="flex-1 h-[1px] bg-zinc-500"></div>
        </div>
        <div
          // className="px-6 py-4 rounded-md bg-zinc-900 border border-zinc-600 flex items-center justify-start gap-3"
          className="bg-indigo-400/30 border-[0.5px] border-indigo-500 px-4 py-2 rounded-lg flex items-center justify-center text-xs md:text-base font-thin hover:bg-indigo-600/30 gap-3"
        >
          <FcGoogle className="text-xl" />
          <a
            className="text-zinc-900 font-thin text-xs md:text-base"
            href={getGoogleOAuthURL()}
          >
            Continue with Google
          </a>
        </div>
      </div>
    </div>
  );
}

export default Signin;
