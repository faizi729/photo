import mongoose, { Schema } from "mongoose";

const invitationSchema = new Schema({
  initials: String,
  coupleName: String,
  venue: String,
  date: String,
  time: String,
  price: Number,
  templateId: Number,
  timestamp: String
});

const Invitation = mongoose.model("Invitation", invitationSchema);
export default Invitation;
