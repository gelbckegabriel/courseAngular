import { NgModule } from "@angular/core";
import { StarComponent } from "./star.component";

@NgModule ({
    declarations: [
        StarComponent,
    ], 
    exports: [ // export makes possible to use this component in course_module.
        StarComponent
    ]
})
export class StarModule {

}