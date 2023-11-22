var admin = require("firebase-admin");
var serviceAccount = require("./db.json");
admin.initializeApp({ credential: admin.credential.cert(serviceAccount), databaseURL: "https://onwords-master-api-db-default-rtdb.asia-southeast1.firebasedatabase.app/" });
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express();
const port = 8888;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(cookieParser());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/authentication.html');
});

app.post('/signup', (req, res) => {
  const { email, password, name, phone, team } = req.body;

  admin.auth().createUser({
    email: email,
    password: password,
    phoneNumber: phone
  })
  .then((userRecord) => {
    admin.database().ref(`employees/${userRecord.uid}`).set({
      name: name,
      email: email,
      phoneNumber: phone,
      team: team
    });

    admin.database().ref(`teams/${team}/${userRecord.uid}`).set(name);
    res.sendFile(__dirname + '/public/authentication.html');
  })
  .catch((error) => {
    console.log('Error creating new user:', error);

    res.render('authentication.html', { accountCreationError: error.message });
  });
});

app.post('/signin', (req, res) => {
  const { email, password } = req.body;

  admin.auth().signInWithEmailAndPassword(email, password)
    .then(() => {
      res.redirect('/home.html');
    })
  .catch((error) => {
    console.log('Error signing in:', error);
    res.status(401).send('Authentication failed');
  });
});


app.listen(port, '0.0.0.0', () => { console.log(`Server listening at http://localhost:${port}`); });