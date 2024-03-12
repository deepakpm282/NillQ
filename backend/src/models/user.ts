import mongoose from "mongoose";
import bcrypt from "bcryptjs";

export type user = {
  _id: string;
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  confirm_password: string;
};

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  password: { type: String, required: true },
});

userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 8);
  }
  next();
});

const User = mongoose.model("User", userSchema);

export default User;
