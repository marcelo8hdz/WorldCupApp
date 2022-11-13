




// 
// 
//DONT RUN THIS SCRIPT IT FILLS THE DATABASE WITH ALL GAMES AND GROUPS FROM THE CUP
// 
// 
// 



// //FALTAN LAS FECHAS EXACTAS

// //CREATE ALL GROUPS (as matches) AND TEAMS

// //Group A
// const Qatar = await Teams.create({name: "Qatar", pic: "./teamsCrest/Qatar"});
// const Ecuador = await Teams.create({name: "Ecuador", pic: "./teamsCrest/Ecuador"});
// const Senegal = await Teams.create({name: "Senegal", pic: "./teamsCrest/Senegal"});
// const Netherlands = await Teams.create({name: "Netherlands", pic: "./teamsCrest/Netherlands"});

// const groupA = await Games.create({
//     gameId: "GroupA", 
//     teams: [
//         Qatar._id,
//         Ecuador._id,
//         Senegal._id,
//         Netherlands._id       
//     ], 
//     date: Date.now()
// });

// //Group B
// const England = await Teams.create({name: "England", pic: "./teamsCrest/England"});
// const Iran = await Teams.create({name: "Iran", pic: "./teamsCrest/Iran"});
// const USA = await Teams.create({name: "USA", pic: "./teamsCrest/USA"});
// const Wales = await Teams.create({name: "Wales", pic: "./teamsCrest/Wales"});

// const groupB = await Games.create({
//     gameId: "GroupB", 
//     teams: [
//         England._id,
//         Iran._id,
//         USA._id,
//         Wales._id        
//     ],
//     date: Date.now()
// });

// //Group C
// const Argentina = await Teams.create({name: "Argentina", pic: "./teamsCrest/Argentina"});
// const SaudiArabia = await Teams.create({name: "Saudi Arabia", pic: "./teamsCrest/SaudiArabia"});
// const Mexico = await Teams.create({name: "México", pic: "./teamsCrest/Mexico"});
// const Poland = await Teams.create({name: "Poland", pic: "./teamsCrest/Poland"});

// const groupC = await Games.create({
//     gameId: "GroupC", 
//     teams: [
//         Argentina._id,
//         SaudiArabia._id,
//         Poland._id,       
//         Mexico._id,
//     ],
//     date: Date.now()
// });

// //Group D
// const France = await Teams.create({name: "France", pic: "./teamsCrest/France"});
// const Australia = await Teams.create({name: "Australia", pic: "./teamsCrest/Australia"});
// const Denmark = await Teams.create({name: "Denmark", pic: "./teamsCrest/Denmark"});
// const Tunisia = await Teams.create({name: "Tunisia", pic: "./teamsCrest/Tunisia"});

// const groupD = await Games.create({
//     gameId: "GroupD", 
//     teams: [
//         France._id,
//         Australia._id,
//         Denmark._id,
//         Tunisia._id
//     ],
//     date: Date.now()
// });

// //Group E
// const Spain = await Teams.create({name: "Spain", pic: "./teamsCrest/Spain"});
// const CostaRica = await Teams.create({name: "Costa Rica", pic: "./teamsCrest/CostaRica"});
// const Germany = await Teams.create({name: "Germany", pic: "./teamsCrest/Germany"});
// const Japan = await Teams.create({name: "Japan", pic: "./teamsCrest/Japan"});

// const groupE = await Games.create({
//     gameId: "GroupE", 
//     teams: [
//         Spain._id,
//         CostaRica._id,
//         Germany._id,
//         Japan._id
//     ],
//     date: Date.now()
// });

// //Group F
// const Belguim = await Teams.create({name: "Belguim", pic: "./teamsCrest/Belguim"});
// const Canada = await Teams.create({name: "Canada", pic: "./teamsCrest/Canada"});
// const Morocco = await Teams.create({name: "Morocco", pic: "./teamsCrest/Morocco"});
// const Coratia = await Teams.create({name: "Croatia", pic: "./teamsCrest/Croatia"});

// const groupF = await Games.create({
//     gameId: "GroupF", 
//     teams: [
//         Belguim._id,
//         Canada._id,
//         Morocco._id,
//         Coratia._id
//     ],
//     date: Date.now()
// });

// // Group G
// const Brazil = await Teams.create({name: "Brazil", pic: "./teamsCrest/Brazil"});
// const Serbia = await Teams.create({name: "Serbia", pic: "./teamsCrest/Serbia"});
// const Switzerland = await Teams.create({name: "Switzerland", pic: "./teamsCrest/Switzerland"});
// const Cameroon = await Teams.create({name: "Cameroon", pic: "./teamsCrest/Cameroon"})

// const groupG = await Games.create({
//     gameId: "GroupG", 
//     teams: [
//         Brazil._id,
//         Serbia._id,
//         Switzerland._id,
//         Cameroon._id
//     ],
//     date: Date.now()
// });

// //Group H
// const Portugal = await Teams.create({name: "Portugal", pic: "./teamsCrest/Portugal"});
// const Ghana = await Teams.create({name: "Ghana", pic: "./teamsCrest/Ghana"});
// const Uruguay = await Teams.create({name: "Uruguay", pic: "./teamsCrest/Uruguay"});
// const SouthKorea = await Teams.create({name: "South Korea", pic: "./teamsCrest/SouthKorea"});

// const groupH = await Games.create({
//     gameId: "GroupH", 
//     teams: [
//         Portugal._id,
//         Ghana._id,
//         Uruguay._id,
//         SouthKorea._id,
//     ],
//     date: Date.now()
// });


// //CREATE ALL INDIVIDUAL GROUP MATCHES
// for (let i = 0; i < groupArr.length; i++) {
    
//     for (let j = 0; j < groupArr[i].teams.length; j++){
//         for(let k = j + 1; k < groupArr[i].teams.length; k++){
//             Games.create({
//                 gameId: (groupArr[i].gameId + groupArr[i].teams[j].name + groupArr[i].teams[k].name),
//                 teams: [groupArr[i].teams[j], groupArr[i].teams[k]],
//                 date: Date.now()
//             });
//         }
//     }    
// }

