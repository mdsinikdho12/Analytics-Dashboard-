import React from "react";

interface HeaderProps {
  name: string;
  stats: {
    headcount: number;
    newHires: number;
    turnoverRing: number;
  };
}

const Header: React.FC<HeaderProps> = ({ name, stats }) => {
  return (
    <header className="flex items-center justify-between px-7   mt-10 ">
      <div>
        <h1 className="mt-6  text-xl md:text-3xl lg:text-5xl text-slate-800">
          Welcome Back,{" "}
          <span className="text-black font-semibold">{name || "user"}</span>
        </h1>
      </div>

      <div className="flex items-center gap-12 text-center">
        <div>
          <h2 className="font-semibold text-4xl text-slate-900">
            {stats.headcount.toLocaleString()}
          </h2>
          <p className="text-sm text-slate-500">Headcount</p>
        </div>

        <div>
          <h2 className="font-semibold text-4xl text-slate-900">
            {stats.newHires}
          </h2>
          <p className="text-sm text-slate-500">New hires</p>
        </div>

        <div>
          <h2 className="font-semibold text-4xl text-slate-900">
            {stats.turnoverRing}%
          </h2>
          <p className="text-sm text-slate-500">Turnover Rate</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
