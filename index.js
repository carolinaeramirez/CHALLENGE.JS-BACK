const express = require ('express');
const cors = require ('cors');
const app = express();
require('./db'); 

const apiRouter= require('./routes/api')




app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api', apiRouter)

const PORT = process.env.PORT ? process.env.PORT : 3000;

const whitelist = ["http://localhost:3000/"]
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error("Not allowed by CORS"))
    }
  },
  credentials: true,
}
app.use(cors())

app.listen(PORT, () => {
    console.log("Esperando solicitudes ", PORT);
});