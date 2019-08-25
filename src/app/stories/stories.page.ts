import { Component, OnInit } from '@angular/core';
import {STORIES} from '../mocks/stories.mock';
import { Story } from './story.model';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.page.html',
  styleUrls: ['./stories.page.scss'],
})
export class StoriesPage implements OnInit {

  stories:Array<Story>;
  
  constructor() { }

  ngOnInit() {
    this.stories = STORIES;
  }

}
