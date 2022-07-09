import express from "express";
import morgan from "morgan";
import cors from "cors";
import productsRoutes from "./routes/products.routes";
import clientsRoutes from "./routes/clients.routes";
import invoicesRoutes from "./routes/invoices.routes";
import usersRoutes from "./routes/users.routes";
import providersRoutes from "./routes/providers.routes";

//declaration app
const app = express();

//middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.get("/", (req, res) => {
  res.json({ message: "Welcome to API EuroByte" });
});
app.use("/api/products", productsRoutes);
app.use("/api/clients", clientsRoutes);
app.use("/api/invoices", invoicesRoutes);
app.use("/api/users", usersRoutes);
app.use("/api/providers", providersRoutes);

export default app;
