import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    fullName: {
      type: String,
      required: true,
      trim: true,
    },
    avatar: {
      type: String, //cloudinary url
      required: true,
    },
    coverImage: {
      type: String,
    },
    password: {
      type: String,
      required: [true, "Password is Required"],
    },
    refreshToken: {
      type: String,
      required: true,
    },
    watchHistory: [
      {
        type: Schema.Types.ObjectId,
        ref: "Video",
      },
    ],
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next(); // If the password hasn't been modified, skip this middleware.. isModidied

  this.password = await  bcrypt.hash(this.password, 10); // Hash the password using bcrypt with a salt round of 10

  // Continue to the next middleware or save operation
  next();
});

userSchema.method.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password);
};

userSchema.method.generateAccessToken = function () {
  jwt.sign(
    {
      //payloadv
      _id: this._id,
      email: this.email,
      username: this.username,
      fullName: this.fullName,
    },
    
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
    }

  );
};

userSchema.method.generateRefreshToken = function () {
  jwt.sign(
    {
      //payload
      _id: this._id,
      email: this.email,
      username: this.username,
      
      fullName: this.fullName,
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
      expiresIn: process.env.REFRESH_TOKEN_SECRET,
    }
    
  );
};

export const User = mongoose.model("User", userSchema);
