import { Injectable } from '@angular/core';
import { Story } from './story.model';
import { STORIES } from '../mocks/stories.mock';

@Injectable({
  providedIn: 'root'
})
export class StoriesService {

  private _stories:Array<Story> = STORIES;
  
  constructor() { }


  public getAll(){
    return this._stories;
  }

  public getStory(storyId:string){
    return this._stories.find((story)=>{ return story.id === storyId;});
  }
}
