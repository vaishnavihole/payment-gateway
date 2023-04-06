import express from "express";


const app = express();
app.use(express.json())

const PORT = 5000;


app.get("/", (req, res) => {
    res.sendFile("Hello World!");
})
app.listen(PORT, () => {
    console.log(`Server started on Port ${PORT}`)
})
