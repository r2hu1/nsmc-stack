import { model, models } from "mongoose";
import { userSchema } from "../schema/user";

const User = models.User || model("User", userSchema);
export default User;