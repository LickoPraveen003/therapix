import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [
        LoginComponent,
        RegisterComponent,
        HeaderComponent,
        FooterComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        AuthRoutingModule
    ],
    exports: [
        LoginComponent,
        RegisterComponent,
        HeaderComponent,
        FooterComponent
    ]
})
export class AuthModule { }
