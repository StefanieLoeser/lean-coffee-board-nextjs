import dbConnect from "../dbConnect";
import Card from "../models/Card";

export async function getAllCards() {
  await dbConnect(); // Connect to database

  const cards = await Card.find(); 

  const cardsArray = cards.map(
    ({ id, name, text }) => {
      return {id, name, text };
    }
  );

  return cardsArray;
}

