import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Servicio para interactuar con la API
@Injectable({
  providedIn: 'root',
})
export class UrlService {
  private apiUrl = 'https://url-shortener-wi9k.onrender.com/api/shorten';//'http://localhost:8080/api/shorten'; // URL de la API

  constructor(private http: HttpClient) {}

  /**
   * Acorta una URL proporcionada.
   * @param originalUrl - La URL original a acortar.
   * @returns Observable con la respuesta del backend.
   */
  shortenUrl(originalUrl: string): Observable<any> {
    return this.http.post(this.apiUrl, { longUrl: originalUrl }); // 'longUrl' es el nombre esperado por el backend.
  }
}
