const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const app = express();

const Recep = require("./model/reception");
const Docrecep = require("./model/docreg");
const Secret = "jwtsecret";

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cors());

app.use(bodyParser.json());

mongoose
  .connect(
    "mongodb+srv://Pradeep:coder7976@cluster0.zs3kf.mongodb.net/Receptionist?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("connected to mongo");
  })
  .catch(() => {
    console.log("Error connecting to Database");
  });

const verifyJwt = (req, res, next) => {
  const token = req.headers["x-access-token"];
  if (!token) {
    res.send("Sorry bro no token");
  } else {
    jwt.verify(token, Secret, (err, decoded) => {
      if (err) {
        res.json({ auth: false, message: "U fail to auth bro " });
        console.log("notauthorised");
      } else {
        console.log("authorsed");
        req.userId = decoded.id;
        next();
      }
    });
  }
};
app.get("/", (req, res) => {
  res.send("Server is not crashed");
});
app.get("/isUserAuth", verifyJwt, (req, res) => {
  res.json({ auth: true });
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  // console.log(username);
  // console.log("received");
  const User = await Recep.findOne({ username });
  const Passwordcorrect =
    User === null ? false : await bcrypt.compare(password, User.password);
  if (!(User && Passwordcorrect)) {
    return res.status(401).json({
      error: "invalid Username or Password",
    });
  } else {
    const username = User.username;
    const token = jwt.sign({ username }, Secret, { expiresIn: 10000 });
    res.json({ auth: true, token: token, user: User });
  }
});

app.post("/regesterr", async (req, res) => {
  const saltRounds = 10;
  const username = req.body.username;
  const password = req.body.password;
  const passwordHash = await bcrypt.hash(password, saltRounds);

  const User = await Recep.findOne({ username });
  const Passwordcorrect =
    User === null ? false : await bcrypt.compare(password, User.password);
  if (User.length == 0) {
    console.log("Not found biro");
    console.log("Request received");
    const Recep1 = new Recep({
      username: username,
      password: passwordHash,
    });
    console.log(Recep1);
    console.log("SERVER END");
    Recep1.save();
    const token = jwt.sign({ email }, Secret, { expiresIn: 800 });
    // console.log(token);
    res.json({ auth: true, token: token });
  } else {
    res.send(false);
  }
});

app.post("/docreg", async (req, res) => {
  const saltRounds = 10;
  const username = req.body.username;
  const password = req.body.password;
  const email = req.body.email;
  const Specializationd = req.body.specialization;
  const description = req.body.description;
  const date = req.body.date;
  const rating = req.body.rating;
  const passwordHash = await bcrypt.hash(password, saltRounds);
  console.log(username);
  console.log(email);
  console.log(Specializationd);

  await Docrecep.find({ email: email }, async (err, result) => {
    console.log("Result from the DB" + result);
    if (err) {
      console.log(err);
    } else {
      if (result.length == 0) {
        const dat = new Docrecep({
          username: username,
          password: passwordHash,
          email: email,
          specialization: Specializationd,
          description: description,
          date: date,
          rating: rating,
        });
        console.log(dat);
        dat.save();
        res.send(true);
      } else {
        res.send(false);
      }
    }
  })
    .clone()
    .catch(function (err) {
      console.log(err);
    });
  // console.log(req.body);
});

app.get("/doctors", (req, res) => {
  Docrecep.find({}).then((dat) => {
    res.send(dat);
  });
});

app.post("/doctors/search", (req, res) => {
  const user = req.body.username;

  Docrecep.find({ username: req.body.username }, (err, data) => {
    if (data.length == 0) {
      res.send(false);
    } else {
      res.send(data);
    }
  });
});

app.get("/deletedoc", (req, res) => {
  const email = req.body.username;
  console.log(email);
  Docrecep.deleteMany({ username: email }).then((result) => {
    res.send("done");
  });
});
app.get("/android", (req, res) => {
  res.send("Congo Bro");
});
app.listen(7000 || process.env.PORT, function () {
  console.log(`Server started on port 7000 `);
});
