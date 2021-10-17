import { SharedModule } from './../../shared/shared.module';
import { EntryFormComponent } from './entry-form/entry-form.component';
import { NgModule } from '@angular/core';

import { EntriesRoutingModule } from './entries-routing.module';
import { EntryListComponent } from './entry-list/entry-list.component';

import { CalendarModule } from 'primeng/calendar';
import { IMaskModule } from 'angular-imask';

@NgModule({
  declarations: [EntryListComponent, EntryFormComponent],
  imports: [SharedModule, EntriesRoutingModule, CalendarModule, IMaskModule],
})
export class EntriesModule {}
