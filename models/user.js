const mongooseModel = require("../lib/utils/db").get();
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    userName: String,
    email: String,
    userType: {
      type: String,
      enum: ["default", "admin"],
      default: "default",
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongooseModel.model("users", UserSchema);
