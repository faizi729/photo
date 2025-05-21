import mongoose,{Schema} from "mongoose"

const invitationSchema = new mongoose.Schema({
  initials: String,
  coupleName: String,
  venue: String,
  date: String,
  time: String,
  price: Number,
  templateId: Number,
  timestamp: String
});

Invitation = mongoose.model('Invitation', invitationSchema);
export default Invitation