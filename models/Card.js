import mongoose from "mongoose"; 

const { Schema } = mongoose; 


const cardSchema = new Schema({
	name: {type: String, required: true },
	text: {type: String, required: true}, 
}); 

const Card = mongoose.models.Card || mongoose.model("Card", cardSchema); 

export default Card;