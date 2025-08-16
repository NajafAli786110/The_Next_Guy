const app = require("./app");
const dotenv = require("dotenv");
const connectDatabase = require("./config/database");

// config
dotenv.config({ path: "backend/config/config.env"});

//  Connect Database
connectDatabase();

const myPORT = process.env.PORT;

//  Start Server
app.listen(myPORT, () => {
  console.log(`Server started at Port: ${myPORT}`);
});
