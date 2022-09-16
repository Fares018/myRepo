/**
 * Include ExpressJs
 * Include body-parser to get the information from client requests and if they not in a json format then change them to json
 * Create an ExpressJs app
 */
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);
/**
 * @function post
 * get whatever the client send and resend it back
 */
let globalVar;
let 

app.post("/", (req, res) => {
    globalVar = req.body;
    res.send(globalVar);
});
/**
 * @function get
 * get client name and resend it back
 * if there no body throw Error other send client name back
 */
app.get("/", (req, res) => {
    if (typeof globalVar === "undefined") {
        res.send("name is undefined, please call Post request first to assign a value to name!");
    } else {
        res.send(`${globalVar.name} Submitted Successfully!`);
    }
});
/**
 * @function listen
 * tell server to listen on port 3000
 */

app.listen(3000, () => console.log("Example app is listening on port 3000."));
