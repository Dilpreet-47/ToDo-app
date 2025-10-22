import { apiError } from "../utils/apiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { User } from "../models/user.model.js";
import { apiRes } from "../utils/apiRes.js";

const registerUser = asyncHandler(async (req) => {
  const { username, email, password } = req.body;
  console.log("username: ", username);
  console.log("email: ", email);
  // console.log("password: ", password);

  // res.status(200).json({ message: "User data received" });

  if ([username, email, password].some((field) => field?.trim() === "")) {
    throw new apiError(400, "All fields are required compulsary!!");
  }

  const existedUser = await User.findOne({
    $or: [{ username }, { email }],
  });

  if (existedUser) {
    throw new apiError(400, "User already exists");
  }

  const user = await User.create({
    username,
    email,
    password,
  });

  const createdUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );

  if (!createdUser) {
    throw new apiError(
      500,
      "Something went wrong while registering the user!!"
    );
  }

  return res
    .status(201)
    .json(new apiRes(200, createdUser, "User registered succesfully"));
});

export { registerUser };
