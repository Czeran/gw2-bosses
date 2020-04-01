import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {RaidBossesTableComponent} from './views/raid-bosses-table/raid-bosses-table.component';


const routes: Routes = [
  {
    path: '',
    component: RaidBossesTableComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
