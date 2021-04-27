import { Component, OnInit } from '@angular/core';
import { StudentdetailsService } from './studentdetails.service';

@Component({
  selector: 'app-studentdetails',
  templateUrl: './studentdetails.component.html',
  styleUrls: ['./studentdetails.component.scss'],
})

export class StudentdetailsComponent implements OnInit {
    public StudentInfo = {
        Name: '',
        Email: '',
        Email_Pwd: '',
    }

    constructor (
        private studentdetailsService: StudentdetailsService,
    ) { }

    ngOnInit() {
    }
    GpCreate() {
        this.studentdetailsService.GpCreate(this.StudentInfo).subscribe(data => {
            this.StudentInfo.Name = ''
 	 	this.StudentInfo.Email = ''
 	 	this.StudentInfo.Email_Pwd = ''
        },
        error => {
            console.log('Error', error);
        });
    }
}