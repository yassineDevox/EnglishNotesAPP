import { Component, OnInit } from '@angular/core';
import { StoriesService } from './stories.service';
import { Story } from './story.model';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.page.html',
  styleUrls: ['./stories.page.scss'],
})
export class StoriesPage implements OnInit{

  stories:Array<Story>;
  constructor(private _storiesService:StoriesService){}

  ngOnInit(){
    this.stories = this._storiesService.getAll();
  }

}
