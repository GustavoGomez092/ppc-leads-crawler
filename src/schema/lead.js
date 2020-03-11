import mongoose, { Schema } from 'mongoose'

const leadModel = new Schema({
  adName: {
    type: String,
    required: true
  },
  adLink: {
    type: String,
    required: true,
    unique: true,
    index: true
  },
  adPhones: [{
    type: String,
    required: false
  }],
  adEmails: [{
    type: String,
    required: false
  }],
  keyword: {
    type: String,
    required: false
  },
  crawledBy: {
    type: String,
    required: false
  },
  createdAt: {
    type: Date,
    required: true
  }
}, {
  timestamps: true
})

export default mongoose.model('LeadModel', leadModel)
