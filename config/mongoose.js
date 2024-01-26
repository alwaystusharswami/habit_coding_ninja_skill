const mongoose = require("mongoose");
main().catch((err) => console.error(`ERROR IN MONGO CONNECTED`));
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/habitApp");
  console.log("MONGODB CONNECTED");
}
module.exports=mongoose;