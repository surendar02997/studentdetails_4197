import { Request, Response } from 'express';
import { StudentInfoService } from '../service/StudentInfoService';
import { CustomLogger } from '../config/Logger'
let StudentInfo = new StudentInfoService();

export class StudentInfoController {
    
    constructor() { }
    
    public GpDelete(req: Request, res: Response) {
StudentInfo.GpDelete(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into StudentInfoController.ts: GpDelete');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from StudentInfoController.ts: GpDelete');
    })}
public GpSearch(req: Request, res: Response) {
StudentInfo.GpSearch(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into StudentInfoController.ts: GpSearch');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from StudentInfoController.ts: GpSearch');
    })}
public GpUpdate(req: Request, res: Response) {
StudentInfo.GpUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into StudentInfoController.ts: GpUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from StudentInfoController.ts: GpUpdate');
    })}
public GpGetAllValues(req: Request, res: Response) {
StudentInfo.GpGetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into StudentInfoController.ts: GpGetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from StudentInfoController.ts: GpGetAllValues');
    })}
public GpGetNounById(req: Request, res: Response) {
StudentInfo.GpGetNounById(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into StudentInfoController.ts: GpGetNounById');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from StudentInfoController.ts: GpGetNounById');
    })}
public GpCreate(req: Request, res: Response) {
StudentInfo.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into StudentInfoController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from StudentInfoController.ts: GpCreate');
    })}


}