import mongoose from "mongoose"

const userSchema = new mongoose.Schema(
	{
	name: {type: String}, // gooogle auth te la regresa como un string??
	mail: {
		type: String, 
		lowercase: true,
		unique: true
	},
	pictureURL: {type: String},
	predictions: {//Funcionaria crear un arreglo para cada tipo de prediccion?
		//un arreglo con tipo y referencia es asi??
		type: [mongoose.SchemaTypes.ObjectId], 
		ref: "Predictions",
		required: false
	}, 
	points: {type: Number, default: 0},
	admin: {type: Boolean, default: 0}
	},
	{timestamps: true}
);

// //Statics
userSchema.statics.getRanked = function(){
	return this.find({}).sort('-points');
}

export default mongoose.model("Users", userSchema)



