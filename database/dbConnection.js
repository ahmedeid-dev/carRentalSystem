import { MongoClient } from "mongodb";

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
// Database Name
const dbName = 'carRentalSystem';


  // Use connect method to connect to the server
client.connect()
  .then(() => {
    console.log('Connected successfully to server ...');
}).catch((error) => {
    console.log('cannot Connect to server !!!!',error);
  })
const db = client.db(dbName);
  db.createCollection("cars")
  db.createCollection("users")
  db.createCollection("rentals")
  const carCollection = db.collection('cars');
  const usercollection = db.collection('users');
  const rentalcollection = db.collection('rentals');

  // the following code examples can be pasted here...

export {
    db,
    carCollection,
    usercollection,
    rentalcollection
}