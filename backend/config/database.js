const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect(process.env.DB_URI)
    .then((data) => {
      console.log(
        `Mongo DB Connected with server ${data.connection.host}`
      );
    })
    .catch((error) => {
      console.log(`Error is: ${error}`);
    });
};

module.exports = connectDatabase;