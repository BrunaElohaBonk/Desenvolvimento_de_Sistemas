import mongoose, { Schema, Document } from 'mongoose';

interface IPerson extends Document {
name: string;
lastname: string;
}

const personSchema: Schema = new Schema({
name: { type: String, required: true },
lastname: { type: String, required: true },
});

const Person = mongoose.model<IPerson>('Person', personSchema, 'usuario');

export default Person;