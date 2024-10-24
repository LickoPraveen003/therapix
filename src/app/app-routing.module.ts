import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';

const routes: Routes = [
  { 
    path: 'core', 
    canActivate: [authGuard], 
    loadChildren: () => import('./core/core.module').then(m => m.CoreModule) 
  },
  {
    path: 'auth',
    loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule)
  },
  { 
    path: 'admin', 
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
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
  { path: '**', redirectTo: 'auth/login' } // Wildcard route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
