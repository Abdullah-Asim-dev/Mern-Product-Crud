import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // FIXED: Aap ka exact live backend Render URL yahan update kar diya hai
 // Vite automatic is variable ko .env file se utha lega
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;


  const fetchProducts = async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/api/getProducts`);
      if (response.data.success) {
        setProducts(response.data.result);
      }
    } catch (error) {
      console.error("Error pulling database collection modules:", error);
    } finally {
      setLoading(false);
    }
  };

  const deleteProduct = async (id) => {
    if (window.confirm("Confirm deletion pipeline for this entity instance?")) {
      try {
        const response = await axios.delete(`${BACKEND_URL}/api/delete/${id}`);
        if (response.data.success) {
          fetchProducts();
        }
      } catch (error) {
        console.error("Error purging element container:", error);
      }
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center h-96 gap-4">
        <div className="w-10 h-10 border-2 border-cyan-500/20 border-t-cyan-400 rounded-full animate-spin" />
        <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 animate-pulse">Syncing cluster node network...</span>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Header Controller */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 pb-6 border-b border-white/[0.05] gap-4">
        <div>
          <h2 className="text-3xl font-black tracking-tight text-white">System Node <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Repository</span></h2>
          <p className="text-slate-500 text-xs mt-1 font-medium">Monitoring and adjusting deployed commercial structural models inside cluster nodes.</p>
        </div>
        <Link to="/addProduct" className="bg-white hover:bg-slate-200 text-slate-950 font-black px-6 py-3.5 rounded-xl text-xs uppercase tracking-widest shadow-[0_4px_20px_rgba(255,255,255,0.15)] hover:-translate-y-0.5 active:translate-y-0 active:scale-95 transition-all">
          Deploy New Item
        </Link>
      </div>

      {products.length === 0 ? (
        <div className="glow-shimmer relative bg-slate-950/40 border border-white/[0.05] p-16 rounded-3xl text-center max-w-lg mx-auto shadow-2xl overflow-hidden backdrop-blur-3xl">
          <span className="text-4xl block mb-4 animate-bounce">📦</span>
          <p className="text-slate-300 text-sm font-bold mb-5">No active deployments linked inside cluster architecture grid.</p>
          <Link to="/addProduct" className="bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-black text-xs uppercase tracking-widest px-6 py-3 rounded-xl hover:bg-cyan-500/20 hover:-translate-y-0.5 active:translate-y-0 transition-all inline-block shadow-lg">
            Initialize Base Stack
          </Link>
        </div>
      ) : (
        /* The Advanced Responsive Fluid Grid System */
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product._id} className="group relative bg-slate-950/40 border border-white/[0.04] rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-500 hover:border-cyan-500/40 hover:shadow-[0_20px_50px_rgba(0,0,0,0.8)] hover:-translate-y-2">
              
              {/* Media Segment with Filter Transitions */}
              <div className="relative aspect-square bg-slate-900 overflow-hidden border-b border-white/[0.04]">
                {/* Image source updated to live Render URL */}
                <img src={`${BACKEND_URL}/uploads/${product.image}`} alt={product.name} className="w-full h-full object-cover grayscale opacity-75 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
                
                {/* Micro Float Badges */}
                <div className="absolute top-3 left-3 right-3 flex justify-between items-center pointer-events-none">
                  {String(product.freeShipping) === "true" ? (
                    <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 px-2.5 py-0.5 rounded-md font-black text-[9px] uppercase tracking-wider backdrop-blur-md shadow-2xl">FREE_SHIP</span>
                  ) : <div/>}
                  <span className="bg-slate-900/90 text-cyan-400 border border-white/10 px-2.5 py-0.5 rounded-md font-black text-[10px] tracking-wide ml-auto backdrop-blur-md shadow-2xl">
                    {product.currencyCode} {product.price}
                  </span>
                </div>
              </div>

              {/* Specifications Block */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[9px] font-black tracking-widest text-purple-400 uppercase">{product.shopName}</span>
                  <h4 className="text-sm font-bold text-slate-100 mt-0.5 truncate group-hover:text-cyan-400 transition-colors">{product.name}</h4>
                  
                  {/* Internal Metrics Badge */}
                  <div className="flex items-center gap-4 mt-4 bg-white/[0.01] border border-white/[0.03] p-2.5 rounded-xl text-[11px] text-slate-400">
                    <div className="flex items-center gap-1"><span className="text-amber-400">★</span><span className="font-bold text-slate-200">{product.rating}</span></div>
                    <div className="w-[1px] h-3 bg-white/10" />
                    <div><span className="font-bold text-slate-200">{product.numberOfSales}</span> units processed</div>
                  </div>
                </div>

                {/* Operations Deck: Edit and Delete Buttons mapped perfectly */}
                <div className="grid grid-cols-2 gap-2 mt-5 pt-4 border-t border-white/[0.04]">
                  <Link to={`/updateProduct/${product._id}`} className="py-2.5 text-center font-bold text-xs bg-white/[0.02] border border-white/5 rounded-xl text-slate-400 hover:text-cyan-400 hover:border-cyan-500/30 hover:bg-cyan-500/[0.02] transition-all hover:scale-[1.02] active:scale-95 cursor-pointer">
                    Configure
                  </Link>
                  <button onClick={() => deleteProduct(product._id)} className="py-2.5 font-bold text-xs bg-white/[0.02] border border-white/5 rounded-xl text-slate-400 hover:text-rose-400 hover:border-rose-500/30 hover:bg-rose-500/[0.02] transition-all hover:scale-[1.02] active:scale-95 cursor-pointer">
                    Purge
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
