import { Schema, model, Document } from 'mongoose';

const HospitalSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  active: {
    type: Number,
    required: true,
    unique: true,
  },
  max: {
    type: Number,
    required: true,
  },
  personal: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

interface IHospitalSchema extends Document {
  name: string;
  active: number;
  max: number;
  personal: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export default model<IHospitalSchema>('Hospital', HospitalSchema);
