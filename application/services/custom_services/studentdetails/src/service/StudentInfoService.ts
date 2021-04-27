import { Request, Response } from 'express';
import {StudentInfoDao} from '../dao/StudentInfoDao';
import { CustomLogger } from '../config/Logger'
let StudentInfo = new StudentInfoDao();

export class StudentInfoService {
    
    constructor() { }
    
    public GpDelete(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into StudentInfoService.ts: GpDelete')
     const  StudentInfoId = req.params.id;
     StudentInfo.GpDelete(StudentInfoId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from StudentInfoService.ts: GpDelete')
         callback(response);
         });
    }
public GpSearch(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into StudentInfoService.ts: GpSearch')
     const  StudentInfoData = req.query;
     StudentInfo.GpSearch(StudentInfoData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from StudentInfoService.ts: GpSearch')
         callback(response);
         });
    }
public GpUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into StudentInfoService.ts: GpUpdate')
     const  StudentInfoData = req.body;
     StudentInfo.GpUpdate(StudentInfoData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from StudentInfoService.ts: GpUpdate')
         callback(response);
         });
    }
public GpGetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into StudentInfoService.ts: GpGetAllValues')
     
     StudentInfo.GpGetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from StudentInfoService.ts: GpGetAllValues')
         callback(response);
         });
    }
public GpGetNounById(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into StudentInfoService.ts: GpGetNounById')
     const  StudentInfoId = req.params.id;
     StudentInfo.GpGetNounById(StudentInfoId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from StudentInfoService.ts: GpGetNounById')
         callback(response);
         });
    }
public GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into StudentInfoService.ts: GpCreate')
     const  StudentInfoData = req.body;
     StudentInfo.GpCreate(StudentInfoData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from StudentInfoService.ts: GpCreate')
         callback(response);
         });
    }


}