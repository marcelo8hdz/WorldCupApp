import app from "./app.js";

const PORT = process.env.PORT || 5000
app.listen(PORT, 
    console.log(`Successfully served on port: ${PORT}.`)
);



//
// import Users from "./models/userModel.js"
// import Predictions from "./models/predictionModel.js"
// async function updateUsersPoints(){
//     let users = await Users.find({})
//     let count = 0
    
//     for (let i = 0; i < users.length; i++){
//         console.log("ora")
//         count = 0
//         for (let j = 0; j < users[i].predictions.length; j++){
//             let prediction = await Predictions.findById(users[i].predictions[j].toString())
//             count += prediction.points
//         }
//         users[i].points = count
//         users[i].save()
//     }
    
// }
// updateUsersPoints()
// setTimeout(updateUsersPoints, 99999);


// import Teams from "./models/teamModel.js";
// import Games from "./models/gameModel.js";


// //FALTAN LAS FECHAS EXACTAS

// //CREATE ALL GROUPS (as matches) AND TEAMS

// //Group A
// const Qatar = await Teams.findOne({name: "Qatar", pic: "./teamsCrest/Qatar"});
// const Ecuador = await Teams.findOne({name: "Ecuador", pic: "./teamsCrest/Ecuador"});
// const Senegal = await Teams.findOne({name: "Senegal", pic: "./teamsCrest/Senegal"});
// const Netherlands = await Teams.findOne({name: "Netherlands", pic: "./teamsCrest/Netherlands"});

// const groupA = await Games.findOne({
//     gameId: "GroupA", 
//     teams: [
//         Qatar._id,
//         Ecuador._id,
//         Senegal._id,
//         Netherlands._id       
//     ]
// });

// const groupAObj = {
//     gameId: "GroupA", 
//     teams: [
//         Qatar,
//         Ecuador,
//         Senegal,
//         Netherlands       
//     ]
// };

// //Group B
// const England = await Teams.findOne({name: "England", pic: "./teamsCrest/England"});
// const Iran = await Teams.findOne({name: "Iran", pic: "./teamsCrest/Iran"});
// const USA = await Teams.findOne({name: "USA", pic: "./teamsCrest/USA"});
// const Wales = await Teams.findOne({name: "Wales", pic: "./teamsCrest/Wales"});

// const groupB = await Games.findOne({
//     gameId: "GroupB", 
//     teams: [
//         England._id,
//         Iran._id,
//         USA._id,
//         Wales._id        
//     ]
// });

// const groupBObj = {
//     gameId: "GroupB", 
//     teams: [
//         England,
//         Iran,
//         USA,
//         Wales        
//     ]
// };

// //Group C 
// const Argentina = await Teams.findOne({name: "Argentina", pic: "./teamsCrest/Argentina"});
// const SaudiArabia = await Teams.findOne({name: "Saudi Arabia", pic: "./teamsCrest/SaudiArabia"});
// const Mexico = await Teams.findOne({name: "México", pic: "./teamsCrest/Mexico"});
// const Poland = await Teams.findOne({name: "Poland", pic: "./teamsCrest/Poland"});

// const groupC = await Games.findOne({
//     gameId: "GroupC", 
//     teams: [
//         Argentina._id,
//         SaudiArabia._id,
//         Poland._id,       
//         Mexico._id,
//     ]
// });

// const groupCObj = {
//     gameId: "GroupC", 
//     teams: [
//         Argentina,
//         SaudiArabia,
//         Poland,       
//         Mexico,
//     ]
// };

// //Group D
// const France = await Teams.findOne({name: "France", pic: "./teamsCrest/France"});
// const Australia = await Teams.findOne({name: "Australia", pic: "./teamsCrest/Australia"});
// const Denmark = await Teams.findOne({name: "Denmark", pic: "./teamsCrest/Denmark"});
// const Tunisia = await Teams.findOne({name: "Tunisia", pic: "./teamsCrest/Tunisia"});

// const groupD = await Games.findOne({
//     gameId: "GroupD", 
//     teams: [
//         France._id,
//         Australia._id,
//         Denmark._id,
//         Tunisia._id
//     ]
// });

// const groupDObj = {
//     gameId: "GroupD", 
//     teams: [
//         France,
//         Australia,
//         Denmark,
//         Tunisia
//     ]
// };

// //Group E
// const Spain = await Teams.findOne({name: "Spain", pic: "./teamsCrest/Spain"});
// const CostaRica = await Teams.findOne({name: "Costa Rica", pic: "./teamsCrest/CostaRica"});
// const Germany = await Teams.findOne({name: "Germany", pic: "./teamsCrest/Germany"});
// const Japan = await Teams.findOne({name: "Japan", pic: "./teamsCrest/Japan"});

// const groupE = await Games.findOne({
//     gameId: "GroupE", 
//     teams: [
//         Spain._id,
//         CostaRica._id,
//         Germany._id,
//         Japan._id
//     ]
// });

// const groupEObj = {
//     gameId: "GroupE", 
//     teams: [
//         Spain,
//         CostaRica,
//         Germany,
//         Japan
//     ]
// };

// //Group F
// const Belguim = await Teams.findOne({name: "Belguim", pic: "./teamsCrest/Belguim"});
// const Canada = await Teams.findOne({name: "Canada", pic: "./teamsCrest/Canada"});
// const Morocco = await Teams.findOne({name: "Morocco", pic: "./teamsCrest/Morocco"});
// const Coratia = await Teams.findOne({name: "Croatia", pic: "./teamsCrest/Croatia"});

// const groupF = await Games.findOne({
//     gameId: "GroupF", 
//     teams: [
//         Belguim._id,
//         Canada._id,
//         Morocco._id,
//         Coratia._id
//     ]
// });

// const groupFObj = {
//     gameId: "GroupF", 
//     teams: [
//         Belguim,
//         Canada,
//         Morocco,
//         Coratia
//     ]
// };

// // Group G
// const Brazil = await Teams.findOne({name: "Brazil", pic: "./teamsCrest/Brazil"});
// const Serbia = await Teams.findOne({name: "Serbia", pic: "./teamsCrest/Serbia"});
// const Switzerland = await Teams.findOne({name: "Switzerland", pic: "./teamsCrest/Switzerland"});
// const Cameroon = await Teams.findOne({name: "Cameroon", pic: "./teamsCrest/Cameroon"})

// const groupG = await Games.findOne({
//     gameId: "GroupG", 
//     teams: [
//         Brazil._id,
//         Serbia._id,
//         Switzerland._id,
//         Cameroon._id
//     ]
// });

// const groupGObj = {
//     gameId: "GroupG", 
//     teams: [
//         Brazil,
//         Serbia,
//         Switzerland,
//         Cameroon
//     ]
// };

// //Group H
// const Portugal = await Teams.findOne({name: "Portugal", pic: "./teamsCrest/Portugal"});
// const Ghana = await Teams.findOne({name: "Ghana", pic: "./teamsCrest/Ghana"});
// const Uruguay = await Teams.findOne({name: "Uruguay", pic: "./teamsCrest/Uruguay"});
// const SouthKorea = await Teams.findOne({name: "South Korea", pic: "./teamsCrest/SouthKorea"});

// const groupH = await Games.findOne({
//     gameId: "GroupH", 
//     teams: [
//         Portugal._id,
//         Ghana._id,
//         Uruguay._id,
//         SouthKorea._id,
//     ]
// });

// const groupHObj = {
//     gameId: "GroupH", 
//     teams: [
//         Portugal,
//         Ghana,
//         Uruguay,
//         SouthKorea,
//     ]
// };


// //findOne ALL INDIVIDUAL GROUP MATCHES
// const groupArr = [groupAObj, groupBObj, groupCObj, groupDObj, groupEObj, groupFObj, groupGObj, groupHObj];
