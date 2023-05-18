import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import dotenv from "dotenv";
import helmet from "helmet";
import mongoose from "mongoose";
import cors from "cors";

//Importing the routes
import clientRoutes from "./routes/client.js";
import generalRoutes from "./routes/general.js";
import managementRoutes from "./routes/management.js";
import salesRoutes from "./routes/sales.js";

//importing models for seeding purpose
// import User from "./models/User.js";
// import Product from "./models/Product.js";
// import ProductStat from "./models/ProductStat.js";
// import Transaction from "./models/Transaction.js";
// import OverallStat from "./models/OverallStat.js";
// import AffiliateStat from "./models/AffiliateStat.js";
//importing data
// import { dataUser } from "./data/index.js";
// import { dataProduct, dataProductStat } from "./data/index.js";
// import { dataTransaction } from "./data/index.js";
// import { dataOverallStat } from "./data/index.js";
// import { dataAffiliateStat } from "./data/index.js";

/* CONFIGURATION OF THE SERVER */
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

/*SET UP Routes*/
app.use("/client", clientRoutes);
app.use("/general", generalRoutes);
app.use("/management", managementRoutes);
app.use("/sales", salesRoutes);

/* SET UP MONGOOSE AND EXPRESS SERVER */
const PORT = process.env.PORT;
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server listen on port: ${PORT}`);

      // i injected the data first time here
      // User.insertMany(dataUser);
      // console.log("data injected successfully!");
      // Product.insertMany(dataProduct);
      // ProductStat.insertMany(dataProductStat);
      // Transaction.insertMany(dataTransaction);
      // OverallStat.insertMany(dataOverallStat);
      // AffiliateStat.insertMany(dataAffiliateStat);
    });
  })
  .catch((error) => {
    console.log(`server starting error: ${error}`);
  });
