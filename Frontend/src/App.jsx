import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import AddProduct from "./components/AddProduct";
import UpdateProduct from "./components/UpdateProduct";

function App() {
  return (
    <div className="h-screen overflow-y-auto bg-[#020205] relative font-sans antialiased text-slate-200">
      
      {/* Dynamic Cyber Grid Moving Pattern Background Layer */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:40px_40px] animate-grid pointer-events-none" />
      
      {/* High Fidelity Premium Ambient Glow Blurs */}
      <div className="absolute top-[-10%] left-[-5%] w-[700px] h-[700px] rounded-full bg-cyan-500/5 blur-[160px] animate-pulse-glow pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[800px] h-[800px] rounded-full bg-purple-600/5 blur-[200px] animate-pulse-glow pointer-events-none [animation-delay:4s]" />
      
      {/* Global Vignette Radial Shadow Mask */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,#020205_95%)] pointer-events-none" />

      {/* Floating Glass Engine Navigation Header */}
      <Navbar />

      {/* Main Framework Frame Viewport */}
      <main className="container mx-auto px-6 pt-36 pb-20 relative z-10 max-w-7xl">
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/addProduct" element={<AddProduct />} />
          <Route path="/updateProduct/:id" element={<UpdateProduct />} />
        </Routes>
      </main>

    </div>
  );
}

export default App;

