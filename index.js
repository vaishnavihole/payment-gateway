import express from "express";
import Razorpay from "razorpay";


const app = express();
app.use(express.json())

const PORT = 5000;


app.get("/", (req, res) => {
    res.sendFile("Hello World!");
});

app.post("/payment", async(req, res) => {
      var instance = new Razorpay({key_id: '',key_secret: '',})
      instance.orders.create[{
        amount: 50000,
        currency: "receipt#1",
        notes: {
            key1: "value3",
            key2: "value2"
        }
      }]
})
app.listen(PORT, () => {
    console.log(`Server started on Port ${PORT}`)
})
