import { Component, OnInit } from '@angular/core';
import ImageEditor from 'tui-image-editor';
@Component({
  selector: 'app-img-edit',
  templateUrl: './img-edit.component.html',
  styleUrls: ['./img-edit.component.css']
})
export class ImgEditComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const instance = new ImageEditor(document.querySelector('#tui-image-editor'), {
      includeUI: {
        loadImage: {
          path: '/assets/img/img.jpg',
          name: 'SampleImage'
        }, // theme: {'common.bi.image': 'assets/img/logo.png'}
      },
      cssMaxWidth: 700,
      cssMaxHeight: 800,
      selectionStyle: {
        cornerSize: 20,
        rotatingPointOffset: 70
      }
    });
  }

}
