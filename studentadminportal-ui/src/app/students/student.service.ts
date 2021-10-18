import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetAllStudentsResponse } from '../models/api-models/get-all-students-response.model';
import { Student } from '../models/api-models/student.model';


@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private baseApiUrl = 'https://localhost:44349';

  constructor(private httpClinet : HttpClient) { }

  getStudent(): Observable<any> {
    return this.httpClinet.get<Student[]>(this.baseApiUrl + '/students');
  }
}
