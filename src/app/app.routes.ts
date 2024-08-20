import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { UsersComponent } from './components/users/users.component';
import { authGuard } from './auth.guard';

const isLoggedIn = () => {
  if (!sessionStorage.getItem('userToken')) {
    return 'login';
  }
  return 'dashboard';
}


export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'login/recovery-passowrd/:token', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [authGuard] },
  { path: 'projects', component: ProjectsComponent, canActivate: [authGuard] },
  { path: 'tasks', component: TasksComponent, canActivate: [authGuard] },
  { path: 'users', component: UsersComponent, canActivate: [authGuard] },
  { path: '', redirectTo: isLoggedIn, pathMatch: 'full' },
  { path: '**', redirectTo: isLoggedIn }
];
