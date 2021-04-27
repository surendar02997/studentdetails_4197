import * as mongoose from 'mongoose';
import StudentInfoModel from '../models/StudentInfo';
import { CustomLogger } from '../config/Logger'


export class StudentInfoDao {
    private StudentInfo = StudentInfoModel;
    constructor() { }
public GpDelete(StudentInfoId, callback){
new CustomLogger().showLogger('info', 'Enter into StudentInfoDao.ts: GpDelete')

this.StudentInfo.findByIdAndRemove(StudentInfoId).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from StudentInfoDao.ts: GpDelete');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpSearch(StudentInfoData, callback){
new CustomLogger().showLogger('info', 'Enter into StudentInfoDao.ts: GpSearch')
let andkey ;let and_obj = {} ;let orkey ;let or_obj = {} ;;Object.entries(StudentInfoData).forEach(
                        ([key,value]) => {
                            if(value !== ''){
                                andkey = key;
                                and_obj[andkey] = value;
                            }
                            else{
                                orkey = key;
                                or_obj[orkey] = { $ne: '' }
                            }
                        }
                    );;
;
this.StudentInfo.find({$and: [
                        {
                            $or: [
                               or_obj
                            ]
                        },
                        and_obj
                    ]}).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from StudentInfoDao.ts: GpSearch');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpUpdate(StudentInfoData, callback){
new CustomLogger().showLogger('info', 'Enter into StudentInfoDao.ts: GpUpdate')

this.StudentInfo.findOneAndUpdate({ _id: StudentInfoData._id }, StudentInfoData, { new: true }).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from StudentInfoDao.ts: GpUpdate');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpGetAllValues(callback){
new CustomLogger().showLogger('info', 'Enter into StudentInfoDao.ts: GpGetAllValues')

this.StudentInfo.find().then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from StudentInfoDao.ts: GpGetAllValues');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpGetNounById(StudentInfoId, callback){
new CustomLogger().showLogger('info', 'Enter into StudentInfoDao.ts: GpGetNounById')

this.StudentInfo.findById(StudentInfoId).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from StudentInfoDao.ts: GpGetNounById');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpCreate(StudentInfoData, callback){
new CustomLogger().showLogger('info', 'Enter into StudentInfoDao.ts: GpCreate')
let temp = new StudentInfoModel(StudentInfoData);
;
temp.save().then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from StudentInfoDao.ts: GpCreate');
callback(result);
}).catch((error)=>{
callback(error);
});}


}