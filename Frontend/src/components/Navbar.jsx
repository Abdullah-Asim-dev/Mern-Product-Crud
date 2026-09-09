import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-slate-950/70 shadow-2xl backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
        
        {/* Logo Section */}
        <NavLink to="/" className="group flex items-center gap-3.5 self-center sm:self-auto">
          <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-purple-600 shadow-[0_0_20px_rgba(6,182,212,0.25)] transition-transform duration-500 group-hover:scale-105 group-hover:rotate-6">
            <span className="text-xl">📦</span>
          </div>

          <div>
            <h1 className="text-xl font-black tracking-tight text-white">
              CORE<span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">HUB</span>
            </h1>
            <p className="text-[10px] font-bold tracking-widest text-slate-500 uppercase">MERN Console Stack</p>
          </div>
        </NavLink>

        {/* Navigation Tabs */}
        <ul className="flex justify-center gap-2 bg-white/[0.02] border border-white/[0.05] p-1.5 rounded-xl w-full sm:w-auto">
          <li className="flex-1 sm:flex-none">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-5 py-2.5 rounded-lg text-xs font-black uppercase tracking-wider transition-all block text-center ${
                  isActive
                    ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 shadow-[0_0_15px_rgba(6,182,212,0.15)]"
                    : "text-slate-400 hover:text-white hover:bg-white/[0.03] border border-transparent"
                }`
              }
            >
              Inventory
            </NavLink>
          </li>

          <li className="flex-1 sm:flex-none">
            <NavLink
              to="/addProduct"
              className={({ isActive }) =>
                `px-5 py-2.5 rounded-lg text-xs font-black uppercase tracking-wider transition-all block text-center ${
                  isActive
                    ? "bg-purple-500/10 text-purple-400 border border-purple-500/30 shadow-[0_0_15px_rgba(168,85,247,0.15)]"
                    : "text-slate-400 hover:text-white hover:bg-white/[0.03] border border-transparent"
                }`
              }
            >
              + Deploy Node
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
