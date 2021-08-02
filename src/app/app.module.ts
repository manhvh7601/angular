import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroUnitComponent } from './components/hero-unit/hero-unit.component';
import { GenderPipe } from './pipes/gender.pipe';
import { HomeComponent } from './screens/home/home.component';
import { DanhmucComponent } from './screens/danhmuc/danhmuc.component';
import { ClientLayoutComponent } from './screens/client-layout/client-layout.component';
import { AdminLayoutComponent } from './screens/admin-layout/admin-layout.component';
import { DashboardComponent } from './screens/admin/dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { QTDanhMucComponent } from './screens/admin/qt-danh-muc/qt-danh-muc.component';
import { NewQtDanhMucComponent } from './screens/admin/new-qt-danh-muc/new-qt-danh-muc.component'
import { ReactiveFormsModule } from '@angular/forms';
import { EditQtDanhMucComponent } from './screens/admin/edit-qt-danh-muc/edit-qt-danh-muc.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { UploadDemoComponent } from './screens/admin/upload-demo/upload-demo.component';
import { QtComicsComponent } from './screens/admin/qt-comics/qt-comics.component';
import { NewComicsComponent } from './screens/admin/new-comics/new-comics.component';
import { EditComicsComponent } from './screens/admin/edit-comics/edit-comics.component';
import { QtAuthComponent } from './screens/admin/qt-auth/qt-auth.component';
import { AddAuthComponent } from './screens/admin/add-auth/add-auth.component';
import { EditAuthComponent } from './screens/admin/edit-auth/edit-auth.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroUnitComponent,
    GenderPipe,
    HomeComponent,
    DanhmucComponent,
    ClientLayoutComponent,
    AdminLayoutComponent,
    DashboardComponent,
    QTDanhMucComponent,
    NewQtDanhMucComponent,
    EditQtDanhMucComponent,
    UploadDemoComponent,
    QtComicsComponent,
    NewComicsComponent,
    EditComicsComponent,
    QtAuthComponent,
    AddAuthComponent,
    EditAuthComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
