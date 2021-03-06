import { EntryFormComponent } from './entry-form/entry-form.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntryListComponent } from './entry-list/entry-list.component';

const routes: Routes = [
  {
    path: '',
    component: EntryListComponent,
  },
  {
    path: 'new',
    component: EntryFormComponent,
  },
  {
    path: ':id/edit',
    component: EntryFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EntriesRoutingModule {}
