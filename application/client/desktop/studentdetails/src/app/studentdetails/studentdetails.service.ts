import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SharedService } from '../../shared/shared.service';

@Injectable({
    providedIn: 'root'
})

export class StudentdetailsService {
    constructor(
        private sharedService: SharedService,
        private http: HttpClient,
    ) { }

    GpCreate(StudentInfo): Observable<any> {
        return this.http.post(this.sharedService.DESKTOP_API + '/StudentInfo', StudentInfo);
    }
}