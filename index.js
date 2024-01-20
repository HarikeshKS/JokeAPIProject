import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
    try {
        const response = await axios.get("https://v2.jokeapi.dev/joke/Programming,Dark?blacklistFlags=religious&type=single");
        const result = response.data["joke"];
        console.log(result);
        res.render("index.ejs", { content: result });
    } catch (error) {
        console.log(error.message);
    }

});

app.listen(port, () => {
    console.log("Listening to port: ", port);
})