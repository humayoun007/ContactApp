# ContactApp
Contact app is a demo app created by using ".net core 3.1, ef core, angular 8  and angular material"

**Credit goes to Jayesh Agrawal for getting basic idea from his link:
 https://www.c-sharpcorner.com/article/contact-application-using-asp-net-core-web-api-angular-6-0-and-visual-studio-c/**
## But that project is based on .net core 2.0 and angular 6 , I have updated all the configuartion code based on .net core 3.1 and angular 8

sidenote: for self host certificate command is : dotnet dev-certs https --trust

Steps:
1. download latest dot net sdk (os version wise)
2. download vs code latest
3. download nodejs latest 
4. install latest angular
5. Install these vs code extensions:
   ASP.NET core VS Code Extension Pack
   .NET Core Extension Pack
   Angular v6 Snippets (now v8)
   Angular 6 Snippets - TypeScript, Html, Angular Material, ngRx, RxJS & Flex Layout (now v8)
6. Use these command to create project web api
   mkdir contact-app  
   cd contact-app  
   dotnet new webapi 
7. Build and debugger with F5 command
8. Command: 
    dotnet add package Microsoft.EntityFrameworkCore.SqlServer
    dotnet add package Microsoft.VisualStudio.Web.CodeGeneration.Design
    dotnet add package Microsoft.EntityFrameworkCore.Design
    dotnet tool install --global dotnet-aspnet-codegenerator
    dotnet aspnet-codegenerator controller -name ContactController -async -api -m Contact -dc ContactAppContext -outDir Controllers
    dotnet tool install --global dotnet-ef --version 3.1.0
    dotnet ef migrations add InitialCreate
    dotnet ef database update
    dotnet build

9. run project with 'dotnet run'

> ----------------- For angular part ----------
10. ng new Contact-App --skip-install (Note:--skip-install option is used to skip installation of the npm packages)
11. move all item from Contact-App to root folder
12. enter "npm install" command
13. Go to 'angular.json' file, it is a configuration schema file.We changed ‘wwwroot’ folder path in OutputPath
14. enter 'ng build' command
15. apply routing to wwwroot index.html in startup.cs file
16. enter 'dotnet run' command
17. add angular material with this command: ng add @angular/material
18. install angular cdk layout module for material using : npm install -d @angular/cdk
19. we have imported Angular material theme in the main style.css in src folder
        @import '~@angular/material/prebuilt-themes/deeppurple-amber.css';
    Then, we added this link of material icons into index.html in src folder:
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">  
20.To generate new component, we used ‘ng generate component’ command 
21.we have set up routing for that component in 'app.routing.ts'
22.we are generating Angular contact services class in app folder using this command:
    'ng generate service contact'
23. Update main app html template
24. update contact form and contact list componenet
25. finally Build components and run the project by : 'ng build' and 'dotnet run' 
