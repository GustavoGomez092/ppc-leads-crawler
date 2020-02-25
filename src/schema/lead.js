import mongoose, { Schema } from 'mongoose'

const leadModel = new Schema({
	adName: {
		type: String,
		required: true
	},
	adLink: {
		type: String,
		required: true
	},
	adPhones: [{
		type: String,
		required: false,
	}]
})

export default mongoose.model('LeadModel', leadModel)