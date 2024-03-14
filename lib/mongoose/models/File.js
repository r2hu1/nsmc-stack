import { model, models } from "mongoose";
import { fileSchema } from "../schema/file";

const File = models.File || model("File", fileSchema);
export default File;