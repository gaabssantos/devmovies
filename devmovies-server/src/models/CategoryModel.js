import mongoose, { Schema } from 'mongoose';

const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

export default mongoose.model('Categories', categorySchema);
