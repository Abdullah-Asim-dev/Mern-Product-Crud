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

// CORS updated to allow both Netlify production and your Localhost port
app.use(
  cors({
    origin: [ "http://localhost:5173"],
    credentials: true
  }),
);

// Database Connection
connectDB();

// Routes Middleware mapping
app.use("/api", productRoutes);

// Server Initialize Listener
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
