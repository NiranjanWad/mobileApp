import { Component } from '@angular/core';
import { from } from 'rxjs';
import { PhotoService} from '../services/photo.service'

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private photoService: PhotoService) {}

  async ngOnInit(){
    await this.photoService.loadSaved();
  }

  addPhotoToGallery(){
    this.photoService.addNewTogallery();
  }

}
