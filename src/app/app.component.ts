import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles: [
  ]
})
export class AppComponent {
  title = 'AngProject';
  imgUrl :string='../assets/camera.jpg';
  imgHeight:number=95;
  imgWidth:number=200;
}

