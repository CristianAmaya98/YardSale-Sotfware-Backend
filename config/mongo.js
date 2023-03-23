const mongoose = require("mongoose");

const dbConnect = () => {
  const DB_URI_MONGO = process.env.DB_URI_MONGO;

  mongoose.connect(
    DB_URI_MONGO,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    },
    (err, res) => {
      if (err) {
        console.log("****  ERROR DE CONEXION ****");
        return;
      }

      console.log("****  CONEXION CORRECTA  ****");
    }
  );
};

module.exports = dbConnect;
