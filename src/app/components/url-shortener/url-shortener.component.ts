import { Component } from '@angular/core';
import { UrlService } from 'src/app/services/url.service';

@Component({
  selector: 'app-url-shortener',
  templateUrl: './url-shortener.component.html',
  styleUrls: ['./url-shortener.component.css'],
})
export class UrlShortenerComponent {
  originalUrl: string = '';
  shortenedUrl: string = '';
  errorMessage: string = '';
  copyMessage: string = '';
  loading: boolean = false; // Indica si se está procesando la solicitud

  constructor(private urlService: UrlService) {}

  shortenUrl() {
    const urlPattern = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/;

    if (!this.originalUrl) {
      this.errorMessage = 'Debe ingresar una URL.';
      return;
    }

    if (!urlPattern.test(this.originalUrl)) {
      this.errorMessage = 'Debe proporcionar una URL válida.';
      return;
    }

    this.errorMessage = '';
    this.loading = true; // Mostrar spinner
    this.urlService.shortenUrl(this.originalUrl).subscribe({
      next: (response: any) => {
        this.shortenedUrl = response.shortUrl;
        this.loading = false;
      },
      error: (error: any) => {
        console.error('Error al acortar la URL:', error);
        this.errorMessage = 'Ocurrió un error al procesar la URL.';
        this.loading = false;
      },
    });
  }

  copyToClipboard() {
    navigator.clipboard.writeText(this.shortenedUrl).then(() => {
      this.copyMessage = '¡Se ha copiado el link!';
      setTimeout(() => (this.copyMessage = ''), 3000);
    });
  }

  clearFields() {
    this.originalUrl = '';
    this.shortenedUrl = '';
    this.errorMessage = '';
    this.copyMessage = '';
  }
}
