import mongoose from "mongoose";


const gameSchema = new mongoose.Schema(
	{
	gameId: {
		type: String, 
		required: true
	}, 
	teams: [{
		type: mongoose.SchemaTypes.ObjectId, ref: "Teams"
	}],
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


// //Statics

gameSchema.statics.getFinished = function(){
	return this.find({}).where('date').lt(Date.now());
}

gameSchema.statics.getNextGames = function(){
	return this.find({}).where('date').gt(Date.now()).sort('date').limit(8);
}


export default mongoose.model("Games", gameSchema);