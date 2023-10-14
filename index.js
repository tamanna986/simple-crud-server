const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;


// middleware
app.use(cors());
app.use(express.json())

// tamanna986jahan
// ZMrbehKOgpHdxJ8T




const uri = "mongodb+srv://tamanna986jahan:ZMrbehKOgpHdxJ8T@cluster0.cuu4rc1.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    const usersCollection = client.db("practice").collection("users");
    app.post('/users', async(req,res) =>{
        const user = req.body;
        console.log('new user',user)
        const response = await usersColletion.insertOne(user);
        res.send(response)
    });



    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);



app.get('/', (req, res) =>{
    res.send('simple crud is running')
})

app.listen(port , ()=>{
    console.log(`crud is running in port:${port}`)
})