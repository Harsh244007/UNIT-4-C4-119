const app = require("./index");
const connect = require("./config/db");
const port=5024;
app.listen(port, async()=>{
    try {
        await connect();
    } catch (error) {
        console.log(error.message);
    }
    console.log("listening on"+port+"c4")
});