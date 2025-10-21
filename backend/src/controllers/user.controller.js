import { asyncHandler } from "../utils/asyncHandler";
import { User } from "../models/user.model";

const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;
  console.log("username: ", username);
  console.log("emial: ", emial);
  console.log("password: ", password);
});

export { registerUser };
