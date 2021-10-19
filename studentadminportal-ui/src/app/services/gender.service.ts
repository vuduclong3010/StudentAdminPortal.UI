import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Gender } from '../models/api-models/gender.model';

@Injectable({
  providedIn: 'root'
})
export class GenderService {

  private baseApiUrl = 'https://localhost:44349';

  constructor(private httpClinet: HttpClient) { }

  getGenderList(): Observable<Gender[]> {
    return this.httpClinet.get<Gender[]>(this.baseApiUrl + '/genders');
  }

}
