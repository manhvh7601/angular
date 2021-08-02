import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './screens/admin-layout/admin-layout.component';
import { DashboardComponent } from './screens/admin/dashboard/dashboard.component';
import { NewQtDanhMucComponent } from './screens/admin/new-qt-danh-muc/new-qt-danh-muc.component';
import { QTDanhMucComponent } from './screens/admin/qt-danh-muc/qt-danh-muc.component';
import { UploadDemoComponent } from './screens/admin/upload-demo/upload-demo.component';
import { ClientLayoutComponent } from './screens/client-layout/client-layout.component';
import { DanhmucComponent } from './screens/danhmuc/danhmuc.component';
import { EditQtDanhMucComponent } from './screens/admin/edit-qt-danh-muc/edit-qt-danh-muc.component';
import { HomeComponent } from './screens/home/home.component';
import { QtComicsComponent } from './screens/admin/qt-comics/qt-comics.component';
import { NewComicsComponent } from './screens/admin/new-comics/new-comics.component';
import { EditComicsComponent } from './screens/admin/edit-comics/edit-comics.component';
import { QtAuthComponent } from './screens/admin/qt-auth/qt-auth.component';
import { AddAuthComponent } from './screens/admin/add-auth/add-auth.component';
import { EditAuthComponent } from './screens/admin/edit-auth/edit-auth.component';

const routes: Routes = [
  {
    path: "",
    component: ClientLayoutComponent,
    children: [
      {
        path: "",
        component: HomeComponent
      },
      {
        path: "danh-muc/:id",
        component: DanhmucComponent
      },
    ]
  },
  {
    path: "admin",
    component: AdminLayoutComponent,
    children: [
      {
        path: "",
        redirectTo: "dashboard",
        pathMatch: "full"      
      },
      {
        path: "dashboard",
        component: DashboardComponent,
      },
      {
        path: "danh-muc",
        component: QTDanhMucComponent
      },
      {
        path: "danh-muc/tao-moi",
        component: NewQtDanhMucComponent
      },
      {
        path: "danh-muc/edit/:id",
        component: EditQtDanhMucComponent
      },
      {
        path: "upload-file",
        component: UploadDemoComponent
      },
      {
        path: "comics",
        component: QtComicsComponent
      },
      {
        path: "comics/add-comics",
        component: NewComicsComponent
      },
      {
        path: "comics/edit/:id",
        component: EditComicsComponent
      },
      {
        path: "authors",
        component: QtAuthComponent
      },
      {
        path: "authors/add-auth",
        component: AddAuthComponent
      },
      {
        path: "authors/edit/:id",
        component: EditAuthComponent
      }
    ]
  },
  {
    path: "**",
    redirectTo: "",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
