const bodyParser = require('body-parser')
const path = require('path');
const express = require('express');
const router = express.Router();
const app = express();

app.use(express.static(path.join(__dirname,"../build")));
app.use("/",router);

// app.use(express.json()) 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())


app.use(express.static('dist'));

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "https://qzhu-sps-summer22.ue.r.appspot.com");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

router.get("/",(req, res) => {
    res.sendfile("index.html");
    });

    
router.post("/form",(request,response) => {
    //code to perform particular action.
    //To access POST variable use req.body()methods.
    console.log(request.body);
    response.sendStatus(200);
    });
    
// const {Datastore} = require('@google-cloud/datastore');

// // Instantiate a datastore client
// const datastore = new Datastore({
//     projectId: 'form_store_1',
// });

/**
 * Insert a record into the database.
 *
 * @param {object} visit The visit record to insert.
 */
// const insertVisit = form => {
//     return datastore.save({
//     key: datastore.key('form'),
//     data: form1,
//     });
// };

/**
 * Retrieve the latest 10 visit records from the database.
 */
// const getVisits = () => {
//     const query = datastore
//     .createQuery('form')
//     .order('title', {descending: true})
//     .limit(10);

//     return datastore.runQuery(query);
// };

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
