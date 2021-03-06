import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatDialogModule, MatProgressSpinnerModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';

import { FuseSharedModule } from '@fuse/shared.module';
import { LoginComponent } from './login/login.component';
import { ChagePasswordComponent } from './chage-password/chage-password.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LinkForForgetPasswordComponent } from './link-for-forget-password/link-for-forget-password.component';

const authRoutes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'changePassword',
        component: ChagePasswordComponent
    },
    {
        path: 'forgotPassword',
        component: ForgotPasswordComponent
    },
    {
        path: 'linkForgotPassword',
        component: LinkForForgetPasswordComponent
    },
    {
        path: '**',
        redirectTo: 'login'
    }
];

@NgModule({
    declarations: [
        LoginComponent,
        ChagePasswordComponent,
        ForgotPasswordComponent,
        LinkForForgetPasswordComponent,
    ],
    imports: [
        MatButtonModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatInputModule,
        FuseSharedModule,
        MatDialogModule,
        MatProgressSpinnerModule,
        RouterModule.forChild(authRoutes)
    ],
})
export class AuthenticationModule {
}
