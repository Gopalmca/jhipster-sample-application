import { NgModule } from '@angular/core';

import { SampleAppSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [SampleAppSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [SampleAppSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class SampleAppSharedCommonModule {}
