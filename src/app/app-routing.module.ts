import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
import { MainComponent } from './features/website/main/main.component';
import { MainAdminComponent } from './features/admin/main-admin/main-admin.component';

const routes: Routes = [
  { 
    path: 'core', 
    canActivate: [authGuard], 
    loadChildren: () => import('./core/core.module').then(m => m.CoreModule) 
  },
  { 
    path: 'admin', 
    component: MainAdminComponent,
    // canActivate: [authGuard], 
    loadChildren: () => import('./features/admin/admin.module').then(m => m.AdminModule) 
  },
  { 
    path: 'parent', 
    // canActivate: [authGuard], 
    loadChildren: () => import('./features/parent/parent.module').then(m => m.ParentModule) 
  },
  { 
    path: 'teacher', // Corrected typo
    // canActivate: [authGuard], 
    loadChildren: () => import('./features/teacher/teacher.module').then(m => m.TeacherModule) 
  },
  { 
    path: 'therapist', 
    // canActivate: [authGuard], 
    loadChildren: () => import('./features/therapist/therapist.module').then(m => m.TherapistModule) 
  },
  { 
    path: 'therapix', 
    component: MainComponent, 
    loadChildren: () => import('./features/website/website.module').then(m => m.WebsiteModule) 
  },
  { path: '', redirectTo: 'therapix', pathMatch: 'full' },
  { path: '**', redirectTo: 'therapix' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
