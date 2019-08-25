import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Story } from '../stories/story.model';
import { StoriesService } from '../stories/stories.service';

@Component({
  selector: 'app-story-details',
  templateUrl: './story-details.page.html',
  styleUrls: ['./story-details.page.scss'],
})
export class StoryDetailsPage implements OnInit {

  selectedStory:Story;
  constructor(private _activatedRoute:ActivatedRoute,private _storiesService:StoriesService) { }

  ngOnInit() {
    this._activatedRoute.paramMap.subscribe((paramMap)=>{
      if(!paramMap.has('storyId')){
        return;
      }
      this.selectedStory = this._storiesService.getStory(paramMap.get('storyId'));
    })
  }

}
