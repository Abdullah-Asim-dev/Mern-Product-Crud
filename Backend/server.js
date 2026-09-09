import dns from "dns";
dns.setServers(["8.8.8.8", "8.8.4.4"]);
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";

dotenv.config();

const app = express();

// Port updated to 5000 to perfectly match frontend requests
const port = process.env.PORT || 5000;

// Middleware
app.use(express.json());

app.use("/uploads", express.static("uploads"));

// CORS FIXED: Aap ka exact frontend link yahan add kar diya hai
app.use(
  cors({
    origin: [
      "https://mern-product-crud.vercel.app",
      "https://vercel.app"
    ],
    credentials: true
  }),
);

// Database Connection
connectDB();

// Routes Middleware mapping
app.use("/api", productRoutes);

// Server Initialize Listener (Only runs when not deployed as a Vercel function)
if (process.env.NODE_ENV !== "production") {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}

// Export for Vercel Serverless Architecture
export default app;
