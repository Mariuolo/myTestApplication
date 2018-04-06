import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { MyTestApplicationRegionMySuffixModule } from './region-my-suffix/region-my-suffix.module';
import { MyTestApplicationCountryMySuffixModule } from './country-my-suffix/country-my-suffix.module';
import { MyTestApplicationLocationMySuffixModule } from './location-my-suffix/location-my-suffix.module';
import { MyTestApplicationDepartmentMySuffixModule } from './department-my-suffix/department-my-suffix.module';
import { MyTestApplicationTaskMySuffixModule } from './task-my-suffix/task-my-suffix.module';
import { MyTestApplicationEmployeeMySuffixModule } from './employee-my-suffix/employee-my-suffix.module';
import { MyTestApplicationJobMySuffixModule } from './job-my-suffix/job-my-suffix.module';
import { MyTestApplicationJobHistoryMySuffixModule } from './job-history-my-suffix/job-history-my-suffix.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        MyTestApplicationRegionMySuffixModule,
        MyTestApplicationCountryMySuffixModule,
        MyTestApplicationLocationMySuffixModule,
        MyTestApplicationDepartmentMySuffixModule,
        MyTestApplicationTaskMySuffixModule,
        MyTestApplicationEmployeeMySuffixModule,
        MyTestApplicationJobMySuffixModule,
        MyTestApplicationJobHistoryMySuffixModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MyTestApplicationEntityModule {}
