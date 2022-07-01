import mongoose from "mongoose";
import colors from "colors";
import entries from "./data/entryys.js";
import users from "./data/users.js";
import Entry from "./models/entriesModel.js";
import User from "./models/userModel.js";
import connectDB from "./config/db.js";

connectDB();

const importData = async () => {
  try {
    await Entry.deleteMany();
    await User.deleteMany();

    const createdUsers = await User.insertMany(users);

    const adminUser = createdUsers[0]._id;

    const sampleEntries = entries.map((product) => {
      return { ...product, user: adminUser };
    });

    await Entry.insertMany(sampleEntries);

    console.log("data imprted".green.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Entry.deleteMany();
    await User.deleteMany();
    process.exit();
  } catch (error) {
    console.error(`${error}`.red);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
