require('dotenv').config();
const { Client } = require('pg');

const client = new Client(`${process.env.DATABASE_URL}`);

const seedDatabase = async () => {
  try{
    await client.connect()
    console.log("Connected to Database successfully");

    await client.query(`
      DROP TABLE IF EXISTS "Desserts";
      DROP TABLE IF EXISTS "Users";
      DROP TABLE IF EXISTS "Orders";
      DROP TABLE IF EXISTS "Order_Dessert";
      DROP TABLE IF EXISTS "Receipts";
      `);

    console.log("tables dropped");

    await client.query(`

      CREATE TABLE Users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(100) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
      
      CREATE TABLE Categories (
        id SERIAL PRIMARY KEY,
        name VARCHAR(50) UNIQUE NOT NULL
      );

      CREATE TABLE Desserts (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        description TEXT NOT NULL,
        price NUMERIC(10, 2) NOT NULL,
        category VARCHAR(50),
        image_url TEXT,
        stock INT DEFAULT 0,
        category_id INT REFERENCES Categories(id)
      );

      CREATE TABLE Orders (
        id SERIAL PRIMARY KEY,
        user_id INT REFERENCES Users(id) ON DELETE SET NULL,
        status VARCHAR(20) DEFAULT 'Pending',
        total_amount NUMERIC(10, 2),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );

      CREATE TABLE Order_Desserts (
        id SERIAL PRIMARY KEY,
        order_id INT REFERENCES Orders(id) ON DELETE CASCADE,
        dessert_id INT REFERENCES Desserts(id) ON DELETE SET NULL,
        quantity INT NOT NULL DEFAULT 1
      );

      CREATE TABLE Receipts (
        id SERIAL PRIMARY KEY,
        order_id INT REFERENCES Orders(id) ON DELETE CASCADE,
        user_id INT REFERENCES Users(id) ON DELETE SET NULL,
        receipt_url TEXT,
        issued_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );


      CREATE INDEX idx_user_id ON Orders(user_id);
      CREATE INDEX idx_order_id ON Order_Desserts(order_id);
      CREATE INDEX idx_dessert_id ON Order_Desserts(dessert_id);
    `);
    console.log("Tables Created");
    await client.end();
    console.log("Seed complete!")
  } catch(error){
    console.log('Encountered an Error', error)
  }
}

seedDatabase();
