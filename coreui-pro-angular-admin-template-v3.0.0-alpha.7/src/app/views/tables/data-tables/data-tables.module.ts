import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// DataTable
import { DataTableModule } from '@pascalhonegger/ng-datatable';

import { CardModule, FormModule, GridModule } from '@coreui/angular';

import { DataTablesComponent } from './data-tables.component';
import { DataFilterPipe } from './data-tables-filter.pipe';

// Routing
import { DataTablesRoutingModule } from './data-tables-routing.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        DataTablesRoutingModule,
        DataTableModule,
        CardModule,
        GridModule,
        DataTableModule,
        FormModule,
    ],
  declarations: [DataTablesComponent, DataFilterPipe],
})
export class DataTablesInitModule {}
