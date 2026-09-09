import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddProduct = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "", price: "", currencyCode: "USD", numberOfSales: "", rating: "", freeShipping: "false", shopName: "", image: null
  });

  // Environment Variable se live Render URL uthayega
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "https://onrender.com";

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleFileChange = (e) => setFormData({ ...formData, image: e.target.files[0] });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    
    Object.keys(formData).forEach((key) => {
      if (key === "freeShipping") {
        // FIXED: String "true"/"false" ko asal Boolean true/false mein badal diya hai
        data.append(key, formData[key] === "true");
      } else {
        data.append(key, formData[key]);
      }
    });

    try {
      const res = await axios.post(`${BACKEND_URL}/api/addProduct`, data);
      if (res.data.success) navigate("/");
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Execution Aborted.");
    }
  };

  return (
    <div className="max-w-2xl mx-auto w-full transition-all duration-500 bg-gradient-to-br from-slate-900 via-slate-950 to-black p-[1px] rounded-3xl shadow-[0_0_40px_rgba(6,182,212,0.15)] hover:shadow-[0_0_50px_rgba(6,182,212,0.25)]">
      <div className="bg-slate-950/90 p-8 md:p-10 rounded-3xl space-y-6 backdrop-blur-2xl">
        <div>
          <h3 className="text-2xl font-black text-white tracking-tight">Provision System Container</h3>
          <p className="text-slate-400 text-xs mt-1 font-medium">Initialize micro-parameters to deploy your node inside cloud ledger.</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6 text-xs font-bold tracking-widest text-slate-400 uppercase">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2.5">Item Designation</label>
              <input type="text" name="name" onChange={handleChange} required className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-500/50 focus:bg-slate-900/50 transition-all placeholder-slate-600 normal-case" placeholder="Product name" />
            </div>
            <div>
              <label className="block mb-2.5">Vendor Platform</label>
              <input type="text" name="shopName" onChange={handleChange} required className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-500/50 focus:bg-slate-900/50 transition-all placeholder-slate-600 normal-case" placeholder="Shop name target" />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            <div>
              <label className="block mb-2.5">Price Value</label>
              <input type="number" name="price" onChange={handleChange} required className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-500/50 focus:bg-slate-900/50 transition-all placeholder-slate-600" placeholder="0.00" />
            </div>
            <div>
              <label className="block mb-2.5">Currency Unit</label>
              <select name="currencyCode" onChange={handleChange} className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-cyan-500/50 transition-all cursor-pointer">
                <option value="USD">USD ($)</option>
                <option value="EUR">EUR (€)</option>
                <option value="PKR">PKR (Rs)</option>
              </select>
            </div>
            <div>
              <label className="block mb-2.5">Freight Exception</label>
              <select name="freeShipping" onChange={handleChange} className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-cyan-500/50 transition-all cursor-pointer">
                <option value="false">No (Standard)</option>
                <option value="true">Yes (Waiver)</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2.5">System Evaluation (0-5)</label>
              <input type="number" step="0.1" min="0" max="5" name="rating" onChange={handleChange} required className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-500/50 focus:bg-slate-900/50 transition-all placeholder-slate-600" placeholder="e.g. 4.5" />
            </div>
            <div>
              <label className="block mb-2.5">Distribution Count</label>
              <input type="number" name="numberOfSales" onChange={handleChange} required className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-500/50 focus:bg-slate-900/50 transition-all placeholder-slate-600" placeholder="Units sold" />
            </div>
          </div>
          <div>
            <label className="block mb-2.5">Media Asset Storage</label>
            <div className="relative border border-dashed border-white/10 hover:border-cyan-500/40 rounded-2xl p-8 text-center bg-white/[0.01] hover:bg-cyan-500/[0.02] transition-all group cursor-pointer">
              <input type="file" accept="image/*" onChange={handleFileChange} required className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-30" />
              <div className="space-y-2">
                <span className="text-2xl block transition-transform group-hover:-translate-y-1 duration-300">📁</span>
                <p className="text-slate-400 text-xs normal-case">Click to browse or drop items asset source directory</p>
                {formData.image && <p className="text-cyan-400 font-mono text-xs lowercase mt-2 bg-cyan-950/30 inline-block px-3 py-1 rounded-lg border border-cyan-500/20">{formData.image.name}</p>}
              </div>
            </div>
          </div>
          <div className="flex gap-4 pt-4 border-t border-white/5">
            <button type="submit" className="flex-1 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:brightness-110 text-white font-black py-4 rounded-xl text-xs uppercase tracking-widest shadow-xl transition-all hover:-translate-y-0.5 active:translate-y-0 active:scale-95 cursor-pointer">Execute Deployment Pipeline</button>
            <button type="button" onClick={() => navigate("/")} className="px-6 py-4 bg-white/5 border border-white/5 hover:bg-white/10 text-slate-300 rounded-xl font-bold text-xs uppercase transition-all cursor-pointer">Abort</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
