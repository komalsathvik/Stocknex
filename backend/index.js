const express=require("express");
const mongoose=require("mongoose");
const {HoldingsModel}=require("./models/HoldingsModel");
const jwt = require("jsonwebtoken");
const {PositionsModel}=require("./models/PositionsModel");
const {OrdersModel}=require("./models/OrdersModel");
const cookieParser=require("cookie-parser");
const AuthRoute=require("./Routes/AuthRoute");
require("dotenv").config();

const app=express();
const url=process.env.MONGO_URL;
const port=process.env.PORT || 3000;
const cors=require("cors");
const bodyParser=require("body-parser");
app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:5174"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(bodyParser.json());
app.use("/", AuthRoute);

app.get('/allHoldings',async(req,res)=>{
    let allHoldings=await HoldingsModel.find({});
    res.json(allHoldings);
})


app.get("/user", (req, res) => {
  const token = req.cookies.token;
  if (!token) return res.status(401).json({ message: "Unauthorized" });

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(403).json({ message: "Invalid token" });
    res.json({ username: decoded.username });
  });
});

app.get('/allPositions',async(req,res)=>{
    let allPositions=await PositionsModel.find({});
    res.json(allPositions);
})

app.post("/newOrder", async (req, res) => {
  let newOrder = new OrdersModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });

  newOrder.save();

  res.send("Order saved!");
});
app.get("/allOrders", async (req, res) => {
  try {
    const orders = await OrdersModel.find({});
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch orders" });
  }
});

app.listen(port,()=>{
    console.log("server is started");
    mongoose.connect(url).then(()=>{
        console.log("db connected");
    }).catch((err)=>{
        console.log(err);
    })
})