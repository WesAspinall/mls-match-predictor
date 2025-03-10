import { Component } from '@angular/core';
import { MlsService } from '../mls-service.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-teams',
  imports: [CommonModule],
  templateUrl: './teams.component.html',
  styleUrl: './teams.component.scss'
})
export class TeamsComponent {
  teams: any[] = [];
  constructor(private mlsService: MlsService){}

  ngOnInit():void {
    this.getTeamImages()
  }

  getTeamImages(): void {
    this.mlsService.getTeamImages().subscribe((data: any[]) => {
      this.teams = data;
    });
  }
}
