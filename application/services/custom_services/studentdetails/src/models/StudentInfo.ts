
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const StudentInfoSchema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   Name: String,
   Email: String,
   Email_Pwd: String
})

const StudentInfoModel = mongoose.model('StudentInfo', StudentInfoSchema, 'StudentInfo');
export default StudentInfoModel;
