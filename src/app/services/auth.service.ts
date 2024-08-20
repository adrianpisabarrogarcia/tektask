import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'; // Ajusta la ruta según sea necesario


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = environment.apiUrl + '/usuarios';

  constructor(private http: HttpClient) { }

  login(correo: string, password: string): Observable<any[]> {
    return this.http.post<any[]>(this.apiUrl + '/login', { correo, password });
  }

  sendRecoveryMail(correo: string): Observable<any[]> {
    return this.http.post<any[]>(this.apiUrl + '/send-recovery-password-mail', { correo });
  }

}
