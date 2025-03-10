import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MlsService {

  constructor(private http: HttpClient) { }

  getTeams(): Observable<any> {
    const url = 'https://stats-api.mlssoccer.com/v1/clubs?&competition_opta_id=98&season_opta_id=2025&order_by=club_name';
    return this.http.get<any>(url);
  }
  getTeamImages(): Observable<any> {
    const url = 'data/imgData.json';
    return this.http.get<any>(url);
  }
}