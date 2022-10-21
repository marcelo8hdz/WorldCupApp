import mongoose from  "mongoose";
import {config} from 'dotenv';

connectDB().catch(err => console.log(err));

export async function connectDB() {
	
    await mongoose.connect('mongodb+srv://MarceloHernandez:Chiquiro10@qatar2022.axfzezr.mongodb.net/test');
	console.log("__Conected");

	// const source = 'mongodb+srv://MarceloHernandez:Chiquiro10@qatar2022.axfzezr.mongodb.net/test'
	
	config()
	const source = process.env.ATLAS_CONNECTION

	await mongoose.connect(source, {
		useNewUrlParser: true,
		useCreateIndex: true,
		useUnifiedTopology: true

	});

	const connection = mongoose.connection;
	connection.once('open', () => {
		console.log("Data Base Connected");
	});
}



// mongodb+srv://MarceloHernandez:Chiquiro10@qatar2022.axfzezr.mongodb.net/test


