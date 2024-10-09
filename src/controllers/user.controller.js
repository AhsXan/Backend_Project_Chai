import asyncHandler from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.model.js";
//import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";
const registerUser = asyncHandler(async (req, res) => {
  //todo      get user details from frontend
  //todo      validation - not empty
  //todo      check if user already exists: username, email
  //todo      check for images and avatar
  //todo      upload them to cloudinary,avatar check
  //todo      create user object - create in db

  //todo      remove password and refresh token field from response
  //todo      check for user creation
  //todo      return res

  const { fullname, email, username, password } = req.body;

  console.log("Email: ", email);
  console.log("F_N: ", fullname);


  //    if(fullname===""){
  //     throw new ApiError(400,"")
  //    }                                 use conditon for evry field or

  if (
    [fullname, email, username, password].some((field) => {
      field?.trim() === "";
    })
  ) {
    throw new ApiError(403, "All Fields Are Required");
  }

  const existedUser = await User.findOne({
    $or: [{ username }, { email }],
  });

  if (existedUser) {
    throw new ApiError(477, "User or Email Already Exists");
  }

  //! multer hame  req k sath files ki option deta ha
  // const avatarLocalPath = req.files?.avatar[0]?.path; //path k liye
  // const coverImageLocalPath = req.files?.coverImage[0]?.path;

  // if (!avatarLocalPath) {
  //   throw new ApiError(493, "Avatar Not Found");
  // }

  // //! now upload on cloudinary

  // const avatar = await uploadOnCloudinary(avatarLocalPath);
  // const coverImage = await uploadOnCloudinary(coverImageLocalPath);



  const avatar= "C:\Users\Raja\Postman\files\my.png"
  const coverImage="C:\Users\Raja\Postman\files\my.png"
  
  // User.create({
  //   f
  // })
  await User.create({
    fullname,
    avatar: avatar,
    coverImage: coverImage,
    email,
    password,
    username: username.toLowerCase(),
  });

  const createdUser = await User.findById(username).select(
    "-password -refreshToken"
  );

  if (!createdUser) {
    throw new ApiError(432, "User Not Created");
    // res.status(200).son({
    //     message:"ok"
    // })
  }

  return res.status(201).json(new ApiResponse(createdUser, "User Created OK"));
});

export { registerUser };
