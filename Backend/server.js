import dns from "dns";
dns.setServers(["8.8.8.8", "8.8.4.4"]);
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";

dotenv.config();

const app = express();

// Render dynamically assigns a port via process.env.PORT, fallback to 5000 for local development
const port = process.env.PORT || 5000;

// Middleware
app.use(express.json());

app.use("/uploads", express.static("uploads"));

// CORS Configuration


// Database Connection
connectDB();

// Routes Middleware mapping
app.use("/api", productRoutes);

// Server Initialize Listener - Always listen on '0.0.0.0' for Render compatibility
app.listen(port, "0.0.0.0", () => {
  console.log(`Server is running on port ${port}`);
});

// Export for Vercel Serverless Architecture (if still used)
export default app;
