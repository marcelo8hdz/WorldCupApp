import mongoose from "mongoose"

const predictionSchema = new mongoose.Schema(
	{
	game: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Games"
    },
	winner: {
        type: mongoose.SchemaTypes.ObjectId, 
        ref: "Teams"
    },
	looser: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Teams"
    },
	date: {
        type: Date, 
        default: () => Date.now(),
        // immutable: true  //Funciona como hash pero se tendria que crear otra instancia si el usuario cambia de prediccion
    },
	userId: {type: mongoose.SchemaTypes.ObjectId},
	madness: {type: Boolean},
    points: {type: Number, default: 0}
	  
	},
	{timestamps: true}
);




export default mongoose.model("Predictions", predictionSchema);