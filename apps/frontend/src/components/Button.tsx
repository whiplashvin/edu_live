function Button({
  children,
  onClick,
}: {
  children: string;
  onClick: () => void;
}) {
  return (
    <div
      className="bg-indigo-500/90 border-[0.5px] border-indigo-700 text-white px-4 py-1.5 rounded-lg flex items-center text-xs font-light tracking-wide hover:bg-indigo-600 gap-2 shadow-md cursor-pointer transition-all ease-in-out duration-200"
      onClick={onClick}
    >
      {children}
    </div>
  );
}

export default Button;
