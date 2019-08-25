import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {path:'',redirectTo:'stories',pathMatch:"full"},
    {

        path: 'stories',
        children:[
            {path:'', loadChildren: './stories/stories.module#StoriesPageModule'},
            {path:':storyId', loadChildren: './story-details/story-details.module#StoryDetailsPageModule'}
        ],
       
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
    exports: [RouterModule]
})
export class AppRoutingModule {}