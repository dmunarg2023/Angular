import { Component, OnInit } from '@angular/core';
import { Serie } from '../serie/serie';
import { SerieService } from '../serie/serie.service';

@Component({
  selector: 'app-serie-list',
  templateUrl: './serie-list.component.html',
  styleUrls: ['./serie-list.component.css'], 
})
@Component({
  selector: 'app-serie-list',
  templateUrl: './serie-list.component.html',
  styleUrls: ['./serie-list.component.css']
 })
 export class serieListComponent implements OnInit {
 
  series: Array<Serie> = [];
  constructor(private serieService: SerieService) {}
  getSeries(): void {
    this.serieService.getSeries().subscribe((series) => {
      this.series = series;
    });
  }
 
  ngOnInit() {
    this.getSeries();
  }
 }

