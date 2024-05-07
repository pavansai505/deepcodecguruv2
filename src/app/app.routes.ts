import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { SigninComponent } from './components/auth/user/signin/signin.component';
import { SignupComponent } from './components/auth/user/signup/signup.component';
import { AdminSigninComponent } from './components/auth/admin/admin-signin/admin-signin.component';
import { AdminSignupComponent } from './components/auth/admin/admin-signup/admin-signup.component';
import { CourseHomeComponent } from './components/courses/course-home/course-home.component';

export const routes: Routes = [
    {
        path:'',
        component:HomeComponent
    },
    {
        path:'home',
        component:HomeComponent
    },
    {
        path:'courses/home',
        component:CourseHomeComponent
    },
    //? Authentication pages
    // * User authentication paths
    {
        path:'auth/user/signin',
        component:SigninComponent
    },
    {
        path:'auth/user/signup',
        component:SignupComponent

    },
    // * Admin authentication paths
    {
        path:'auth/admin/signin',
        component:AdminSigninComponent
    },
    {
        path:'auth/adminAd/signup',
        component:AdminSignupComponent

    },
    {
        path:'**',
        component:NotfoundComponent
    }
];
