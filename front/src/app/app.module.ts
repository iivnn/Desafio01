import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormModalComponent } from './form-modal/form-modal.component';
import { GridComponent } from './grid/grid.component';
import { ToastComponent } from './toast/toast.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppToastService } from './services/toast.service';

@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    FormModalComponent,
    ToastComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
  ],
  providers: [AppToastService],
  bootstrap: [AppComponent]
})
export class AppModule { }
