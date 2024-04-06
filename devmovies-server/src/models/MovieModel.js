import mongoose, { Schema } from 'mongoose';

const movieSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  imageSmall: {
    type: String,
    required: true,
  },
  imageBanner: {
    type: String,
    required: true,
  },
  linkVideo: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

export default mongoose.model('Movie', movieSchema);
