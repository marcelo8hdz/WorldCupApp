import mongoose from "mongoose";

const teamSchema = new mongoose.Schema(
	{
	name: {
		type: String,
		unique: true
	},
	pic: {type: String},
	
	},
	{timestamps: true}
);

export default mongoose.model("Teams", teamSchema);