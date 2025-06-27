import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HeaderCompenent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { TasksComponent } from "./tasks/tasks.component";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
    declarations:[AppComponent],
    bootstrap:[AppComponent],
    imports:[BrowserModule, HeaderCompenent, TasksComponent, UserComponent ]

})
export class AppModule {

}