const express = require("express");
const Order = require("./db");

const app = express();

app.use(express.json());
app.use(express.static(__dirname));

app.post("/order", async (req, res) => {
    const items = req.body;

    for (let item of items) {
        const newOrder = new Order(item);
        await newOrder.save();
    }

    res.json({ message: "Order saved successfully" });
});

app.get("/history", async (req, res) => {
    const orders = await Order.find();
    res.json(orders);
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});