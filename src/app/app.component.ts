import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MlsService } from './mls-service.service'; // Adjust the path as necessary
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "./ui/header/header.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  
}
