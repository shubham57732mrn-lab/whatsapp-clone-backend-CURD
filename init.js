const mongoose = require("mongoose");
const Chat = require("./models/chats.js");

main()
    .then((res) => {
    console.log("connection established");
}) 
   .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatshap');
}
let allchats = [{
    from: "ram",
    to : "seeta",
    msg: "kaha ho prannath ",
    created_at: new Date(),
},
{
    from: "rohan",
    to : "sohan",
    msg: "katy reee!!! ",
    created_at: new Date(),
},
{
    from: "neelam",
    to : "urvashi",
    msg: "hyy kesi h, dolly! ",
    created_at: new Date(),
},
{
    from: "neha",
    to : "sheela",
    msg: "hyy kesi h ",
    created_at: new Date(),
},
{
    from: "hena",
    to : "shillaaa",
    msg: "kya haal caal",
    created_at: new Date(),
}]

Chat.insertMany(allchats);
