import mongoose from "mongoose";


const groupSchema = new mongoose.Schema(
	{
	gameID: {
		type: String, 
		required: true
	}, 
	teams: {
		type: [mongoose.SchemaTypes.ObjectId],
		ref: "Teams"
	},
	winner: {
		type: mongoose.SchemaTypes.ObjectId, 
		ref: "Teams",
		default: null, 
		required: false
	},
	looser: {
		type: mongoose.SchemaTypes.ObjectId, 
		ref: "Teams",
		default: null, 
		required: false
	},
	date: {
		type: Date,
		required: true
	}
	},
	{timestamps: true}
);

// module.exports = mongoose.model("Groups", groupSchema)

export default mongoose.model("Groups", groupSchema);

//se vuelve redundante por la clase partido???