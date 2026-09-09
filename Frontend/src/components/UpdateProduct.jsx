import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios"; // Note: production mein 'axios' hi use karein agar typo ho

const UpdateProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "", 
    price: "", 
    currencyCode: "", 
    numberOfSales: "", 
    rating: "", 
    freeShipping: "false", 
    shopName: ""
  });

  // FIXED: Aap ka sahi aur complete live Render URL ab lag gaya hai
// Vite automatic is variable ko .env file se utha lega
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;


  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`${BACKEND_URL}/api/getProduct/${id}`);
        if (res.data.success) {
          const product = res.data.result;
          setFormData({
            name: product.name, 
            price: product.price, 
            currencyCode: product.currencyCode,
            numberOfSales: product.numberOfSales, 
            rating: product.rating,
            freeShipping: String(product.freeShipping), 
            shopName: product.shopName
          });
        }
      } catch (err) { 
        console.error("Error targeting memory stream:", err); 
      }
    };
    fetchProduct();
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(`${BACKEND_URL}/api/update/${id}`, formData);
      if (res.data.success) {
        navigate("/");
      }
    } catch (err) { 
      console.error("Error processing override script:", err); 
    }
  };

  return (
    <div className="max-w-xl mx-auto w-full bg-slate-950/40 border border-white/[0.05] p-6 md:p-10 rounded-3xl shadow-2xl backdrop-blur-3xl">
      <div className="mb-8">
        <h3 className="text-xl font-black tracking-tight text-white">Overwrite Instance Meta</h3>
        <p className="text-slate-500 text-xs mt-1">Recalibrate properties and internal configurations dynamically inside memory stack.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5 text-xs font-bold text-slate-400 uppercase tracking-wider">
        
        {/* Name and Shop Name Update Input Fields */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block mb-2">Designation Target</label>
            <input 
              type="text" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              required 
              className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-purple-500/50 normal-case transition-all" 
            />
          </div>
          <div>
            <label className="block mb-2">Vendor Label</label>
            <input 
              type="text" 
              name="shopName" 
              value={formData.shopName} 
              onChange={handleChange} 
              required 
              className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-purple-500/50 normal-case transition-all" 
            />
          </div>
        </div>

        {/* Price, Currency, and Delivery Matrix */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="block mb-2">Price Value</label>
            <input 
              type="number" 
              name="price" 
              value={formData.price} 
              onChange={handleChange} 
              required 
              className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-purple-500/50 transition-all" 
            />
          </div>
          <div>
            <label className="block mb-2">Currency Type</label>
            <select 
              name="currencyCode" 
              value={formData.currencyCode} 
              onChange={handleChange} 
              className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-purple-500/50 transition-all"
            >
              <option value="USD">USD ($)</option>
              <option value="EUR">EUR (€)</option>
              <option value="PKR">PKR (Rs)</option>
            </select>
          </div>
          <div>
            <label className="block mb-2">Freight Waiver</label>
            <select 
              name="freeShipping" 
              value={formData.freeShipping} 
              onChange={handleChange} 
              className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-purple-500/50 transition-all"
            >
              <option value="false">Standard No</option>
              <option value="true">Exempt Yes</option>
            </select>
          </div>
        </div>

        {/* Rating and Sales Volume Adjustments */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block mb-2">System Evaluation (0-5)</label>
            <input 
              type="number" 
              step="0.1" 
              min="0" 
              max="5" 
              name="rating" 
              value={formData.rating} 
              onChange={handleChange} 
              required 
              className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-purple-500/50 transition-all" 
            />
          </div>
          <div>
            <label className="block mb-2">Distribution Count</label>
            <input 
              type="number" 
              name="numberOfSales" 
              value={formData.numberOfSales} 
              onChange={handleChange} 
              required 
              className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-purple-500/50 transition-all" 
            />
          </div>
        </div>

        {/* Form Overwrite Operations Buttons */}
        <div className="flex gap-3 pt-4 border-t border-white/[0.04]">
          <button 
            type="submit" 
            className="flex-1 bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-400 hover:to-indigo-500 text-white py-3.5 rounded-xl font-bold text-xs uppercase tracking-widest shadow-lg transition-all active:scale-95 cursor-pointer"
          >
            Commit Changes
          </button>
          <button 
            type="button" 
            onClick={() => navigate("/")} 
            className="px-5 bg-white/5 border border-white/5 hover:bg-white/10 text-slate-300 rounded-xl font-bold text-xs uppercase transition-all cursor-pointer"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateProduct;
