import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-easteregg',
  templateUrl: './easteregg.component.html',
  styleUrls: ['./easteregg.component.scss']
})
export class EastereggComponent implements OnInit {
allrecords;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<any>('https://jsonplaceholder.typicode.com/posts').subscribe(data => {
            this.allrecords = data;
        })
  }

}
