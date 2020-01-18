const mongoose = require('mongoose');

const candidateSchema = new mongoose.Schema({
//   _id: Number,
  aadharNumber: String,
  name: String,
  phone1: Number,
  DOB: String,
  phone2: Number,
  mailId: String,
  addressLine1: String,
  addressLine2: String,
  city: String,
  district: String,
  state: String,
  country: String,
  gender: String,
  source: String,
  sourceType: String,
  employmentStatus: String,
  occupation: String,
  currentAnnualIncome: Number,
  educationalQualification: String,
  noOfSuccessfulEnterprises: Number,
  noOfFailedEnterprises: Number,
  hasBankAccount: String,
  hasCreditHistory: String,
  hasAssessets: String,
  needsTraining: String,
  status: String,
});

const Candidate = mongoose.model('Candidate', candidateSchema);

module.exports = Candidate;

/**
 *  Candidate Object: Aadhar number * (validation),
 * Name *,
 * Phone number *,
 * DOB *,
 * Alternate Phone number *,
 *  Email ID,
 *  [Address Line 1 *,
 *  Address Line 2 *,
 *  City *,
 *  District *,
 *  State *,
 *  Country *]
 *  - Integrate Google Maps API,
 *  Gender *,
 *  Source * (Dropdown - Event, Roadshow, Referral, Word of mouth, Press),
 * Source Type * (Inbound / Outbound),
 *  Employment Status * (Self - employed, Unemployed, Employed),
 *  Occupation * (Farmer, Mason, Poultry Farmer, Shopkeeper, Mechanic, Teacher, Housewife),
 *  Current annual income * (Range: < 2 lacs / annum, 2 - 5 lacs / annum, 5 - 10 lacs / annum, 10 - 20 lacs / annum, > 20 lacs / annum),
 *  Educational Qualification *: (Never went to school, 5th pass, 8th pass, 10th pass, 12th pass, Diploma, Graduate, Post - graduate),
 * Number of successful enterprises * (Any number >= 0),
 * Number of failed enterprises * (Any number >= 0),
 *  Has bank account * (Y / N),
 * Has a credit history * (Y / N),
 *  Has assests * (Select all that apply - None, Land, House, Shop, Vehicles, Cattle, Others),
 * Needs training * (Y / N),
 *  Status * (Dropdown: Interested in exploring, Undergoing Training, Training Complete, Stream identified, Resume made, Resume submitted, Resume sent for processing, Resume declined, Resume accepted, Due diligence, Background check, Job offer received, No longer interested, Deceased)
 */
