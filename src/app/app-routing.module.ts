import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabsComponent } from './tabs/tabs.component';
import { GiftHomeComponent } from './gift-home/gift-home.component';


const routes: Routes = [
  { path: '', component: TabsComponent },
  {path:'addgift', component:GiftHomeComponent}
  // Other routes if you have more
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
