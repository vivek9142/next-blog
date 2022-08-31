import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid Input." });
      return;
    }

    const newMessage = {
      email,
      name,
      message,
    };
    let client;
    try {
      client = await MongoClient.connect(
        `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.gnmor.mongodb.net/${process.env.DB}?retryWrites=true&w=majority`
      );
    } catch (error) {
      res.status(500).json({ message: "Could not connect to database" });
      client.close();
      return;
    }

    const db = client.db();
    let result;
    try {
      result = await db.collection("contact").insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (error) {
      client.close();
      res.status(500).json({ message: "Storing message failed!" });
      return;
    }

    client.close();
    console.log(newMessage);

    res
      .status(201)
      .json({ message: "Successfully stored message!", message: newMessage });
  }
}
