import { asyncHandler } from "../utils/asyncHandler.js";
import { User } from "../models/user.model.js";

const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;
  console.log("username: ", username);
  console.log("email: ", email);
  console.log("password: ", password);
});

export { registerUser };
