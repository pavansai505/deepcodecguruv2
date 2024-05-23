import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { SigninComponent } from './components/auth/user/signin/signin.component';
import { SignupComponent } from './components/auth/user/signup/signup.component';
import { AdminSigninComponent } from './components/auth/admin/admin-signin/admin-signin.component';
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
import { authAdminGuard } from './guard/auth-admin.guard';
import { AdminCoursesViewComponent } from './components/admin/admin-dashboard/admin-courses-view/admin-courses-view.component';
import { InstructorDashboardComponent } from './components/instructor/instructor-dashboard/instructor-dashboard.component';
import { InstructorProfileComponent } from './components/instructor/instructor-dashboard/instructor-profile/instructor-profile.component';
import { InstructorCheckStatsComponent } from './components/instructor/instructor-dashboard/instructor-check-stats/instructor-check-stats.component';
import { InstructorMyCoursesComponent } from './components/instructor/instructor-dashboard/instructor-my-courses/instructor-my-courses.component';
import { InstructorModifyCourseComponent } from './components/instructor/instructor-dashboard/instructor-modify-course/instructor-modify-course.component';
import { InstructorAddCourseComponent } from './components/instructor/instructor-dashboard/instructor-add-course/instructor-add-course.component';
import { InstructorAddLessonsComponent } from './components/instructor/instructor-dashboard/instructor-add-lessons/instructor-add-lessons.component';

export const routes: Routes = [
  {
    path: '',
    component: RoutesComponent,
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
  // * Instructor pages
  {
    path: 'instructor/dashboard',
    component: InstructorDashboardComponent,
    children: [
      {
        path: '',
        redirectTo: 'profile',
        pathMatch: 'full',
      },
      {
        path: 'profile',
        component: InstructorProfileComponent,
      },
      {
        path: 'stats',
        component: InstructorCheckStatsComponent,
      },
      {
        path: 'courses',
        component: InstructorMyCoursesComponent,
      },
      {
        path: 'courses/modify',
        component: InstructorModifyCourseComponent,
      },
      {
        path: 'courses/add',
        component: InstructorAddCourseComponent,
      },
      {
        path:'courses/lessons/add',
        component:InstructorAddLessonsComponent
      }
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
      {
        path: 'courses',
        component: AdminCoursesViewComponent,
      },
    ],
    canActivate:[authAdminGuard]
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
