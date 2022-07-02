import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms"; // import a forms module.
import { RouterModule } from "@angular/router"; // direct path.
import { StarModule } from "../shared/component/star/star.module"; // import the rating stars module that you´ve created to share.
import { CourseInfoComponent } from "./course-info.component";
import { CourseListComponent } from "./course-list.component";
import { AppPipeModule } from "../shared/pipe/app-pipe.module"; // the replace pipe / change characters.

@NgModule({
    declarations: [
        CourseListComponent,
        CourseInfoComponent,
    ], 
    imports: [
        CommonModule,
        FormsModule,
        StarModule,
        AppPipeModule,
        RouterModule.forChild([
            {
                path: 'courses', component: CourseListComponent
            },
            {
               path: 'courses/info/:id', component: CourseInfoComponent // o dois pontos id é a identificacao/nome do path.
            }
        ])
    ]
})
export class CourseModule {

}