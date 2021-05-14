const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: "Name is Required!",
  },
  Designation: {
    type: String,
  },
  email: {
    type: String,
    required: "Email is Required!",
  },
  password: {
    type: String,
    required: "Admin Password is Required!",
  },
  number: {
    type: Number,
    required: "Phone Number is Required!",
  },
  dob: {
    type: String
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  type:{
    type:String
  },
  savedJobs: {
    type: [Object],
  },
  webinars: {
    type: [Object],
  },
  address: {
    type: String,
  },
  gender: {
    type: String,
  },
  about: {
    type: String,
  },
  linkdin: {
    type: String,
  },
  resume: {
    type: String,
  },
  videoResume: {
    type: String,
  },
  preferedWorkLocation: {
    type: Array,
  },
  skillSet: {
    type: Array,
  },
  languages: {
    type: Array,
  },
  maritalStatus: {
    type: String,
  },
  subscription: {
    type: String,
    default: "Free",
  },
  mockTest: {
    Test: {
      Data: {
        type: [Object],
      },
    },
  },
  lastLoggedIn: {
    type: Date,
  },
  banAccount: {
    type: Boolean,
    default: false,
  },
  banReason: {
    type: String,
  },
});

module.exports = User = mongoose.model("User", UserSchema);
