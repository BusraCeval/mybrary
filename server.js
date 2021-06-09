const express = require("express"); //import express
const app = express(); //app express functionu çağıracak
const expressLayouts = require("express-ejs-layouts"); //package içerisine girer.

const indexRouter = require("./routes/index");
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.set("layout", "layouts/layout");
app.use(expressLayouts);
app.use(express.static("public")); //genel olarak express file nerede saklandığını söyler

app.use("/", indexRouter);

app.listen(process.env.PORT || 3000); //ortam bağlantı pointi ama geliştirme için 3000 ayarladık.
