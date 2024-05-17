import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { SigninComponent } from './components/auth/user/signin/signin.component';
import { SignupComponent } from './components/auth/user/signup/signup.component';
import { AdminSigninComponent } from './components/auth/admin/admin-signin/admin-signin.component';
import { AdminSignupComponent } from './components/auth/admin/admin-signup/admin-signup.component';
import { CourseHomeComponent } from './components/courses/course-home/course-home.component';
import { CourseSearchComponent } from './components/courses/course-search/course-search.component';
import { CourseInfoComponent } from './components/courses/course-info/course-info.component';
import { CourseLecturesComponent } from './components/courses/course-lectures/course-lectures.component';
import { AdminDashboardComponent } from './components/admin/admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './components/user/user-dashboard/user-dashboard.component';
import { RoutesComponent } from './components/utilities/routes/routes.component';
import { UserProfileComponent } from './components/user/user-dashboard/user-profile/user-profile.component';
import { AdminProfileComponent } from './components/admin/admin-dashboard/admin-profile/admin-profile.component';
import { AdminStatsComponent } from './components/admin/admin-dashboard/admin-stats/admin-stats.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  // * Courses
  {
    path: 'courses/home',
    component: CourseHomeComponent,
  },
  {
    path: 'courses/search',
    component: CourseSearchComponent,
  },
  {
    path: 'courses/course/info/:id',
    component: CourseInfoComponent,
  },
  {
    path: 'courses/course/:id/lectures',
    component: CourseLecturesComponent,
  },
  //? Authentication pages
  // * User authentication paths
  {
    path: 'auth/user/signin',
    component: SigninComponent,
  },
  {
    path: 'auth/user/signup',
    component: SignupComponent,
  },
  // * Admin authentication paths
  {
    path: 'auth/admin/signin',
    component: AdminSigninComponent,
  },
  {
    path: 'auth/admin/signup',
    component: AdminSignupComponent,
  },
  // * User pages
  {
    path: 'user/dashboard',
    component: UserDashboardComponent,
    children: [
      {
        path: '',
        redirectTo: 'profile',
        pathMatch: 'full',
      },
      {
        path: 'profile',
        component: UserProfileComponent,
      },
    ],
  },
  // * Admin pages
  {
    path: 'admin/dashboard',
    component: AdminDashboardComponent,
    children: [
      {
        path: '',
        redirectTo: 'profile',
        pathMatch: 'full',
      },
      {
        path: 'profile',
        component: AdminProfileComponent,
      },
      {
        path: 'stats',
        component: AdminStatsComponent,
      },
    ],
  },
  {
    path:'admin/stats',
    component:AdminStatsComponent
  },
  // ! Miscellanious
  {
    path: 'routes',
    component: RoutesComponent,
  },
  {
    path: '**',
    component: NotfoundComponent,
  },
];
