import { Request, Response, NextFunction } from "express";
import { StudentInfoController } from '../controller/StudentInfoController';


export class Routes {
    private StudentInfo: StudentInfoController = new StudentInfoController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/StudentInfo/:id').delete(this.StudentInfo.GpDelete);
app.route('/StudentInfo/get/search').get(this.StudentInfo.GpSearch);
app.route('/StudentInfo').put(this.StudentInfo.GpUpdate);
app.route('/StudentInfo').get(this.StudentInfo.GpGetAllValues);
app.route('/StudentInfo/:id').get(this.StudentInfo.GpGetNounById);
app.route('/StudentInfo').post(this.StudentInfo.GpCreate);
     }

}