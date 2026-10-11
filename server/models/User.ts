import mongoose, { Document, Schema } from 'mongoose';

export interface IUser extends Document {
  username: string;
  password: string;
  name: string;
  operatorNodeId: string;
  role: string;
  phone: string;
  dob: string;
  nationalId: string;
  ckyc: string;
  nominee: string;
  address: string;
  activeTier: string;
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema = new Schema<IUser>(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      default: 'Milan Biswas',
    },
    operatorNodeId: {
      type: String,
      default: 'Indus@Milan@2026',
    },
    role: {
      type: String,
      default: 'operator',
    },
    phone: {
      type: String,
      default: '9339492781',
    },
    dob: {
      type: String,
      default: '02/01/1984',
    },
    nationalId: {
      type: String,
      default: 'Aadhaar / Passport (**** 1162)',
    },
    ckyc: {
      type: String,
      default: '7998643-233976',
    },
    nominee: {
      type: String,
      default: 'Usha Rani Biswas (Mother)',
    },
    address: {
      type: String,
      default: 'Bagangram North 24 Parganas, West Bengal, PIN: 743251',
    },
    activeTier: {
      type: String,
      default: 'tier3',
    },
  },
  {
    timestamps: true,
  }
);

export const User = (mongoose.models.User as mongoose.Model<IUser>) || mongoose.model<IUser>('User', UserSchema);
