# 0.Angular 4 설치하기
  npm install @angular/cli@1.4 -g


# 1.package.json 파일 수정하기
  "scripts": {
    "ng": "ng",
    "start": "ng serve --proxy-config proxy-conf.json",

# 2.app.module.ts dp 모듈 추가하기
  import { HttpClientModule,HttpClient } from '@angular/common/http'; 

# 3.app.module.ts dp 모듈 추가하기
  import { HttpClientModule,HttpClient } from '@angular/common/http'; 
  
  imports: [
    BrowserModule,
    HttpClientModule //이것도 반드시 해야 한다
  ],
  
# 4.proxy-conf.json 파일 만들기
  {
  "/api": {
    "target": "http://localhost:포트번호",
    "secure": false
  }
}

# 5.서버가동시
   ng serve --proxy-config proxy-conf.json  



# Ng4project

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.10.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
