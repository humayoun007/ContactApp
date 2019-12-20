# Contact App
**Credit goes to Jayesh Agrawal,
here is link:https://www.c-sharpcorner.com/article/contact-application-using-asp-net-core-web-api-angular-6-0-and-visual-studio-c/
But that project was in .net core 2.0 and angular 6 , i have updated all the configuration**

_sidenote: for self host certificate command is : dotnet dev-certs https --trust_

## Steps:
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

9. Setup development variable and URL for project in terminal:
      set ASPNETCORE_ENVIRONMENT=Development
      set ASPNETCORE_URLS=http://localhost:5000

10. run project with 'dotnet run'

> ----------------- angular part ----------
11. ng new Contact-App --skip-install (Note:--skip-install option is used to skip installation of the npm packages)
12. move all item from Contact-App to root folder
13. enter "npm install" command
14. Go to 'angular.json' file, it is a configuration schema file.We changed ‘wwwroot’ folder path in OutputPath
15. enter 'ng build' command
16. apply routing to wwwroot index.html in startup.cs file
17. enter 'dotnet run' command
18. add angular material with this command: ng add @angular/material
19. install angular cdk layout module for material using : npm install -d @angular/cdk
20. we have imported Angular material theme in the main style.css in src folder
        @import '~@angular/material/prebuilt-themes/deeppurple-amber.css';
    Then, we added this link of material icons into index.html in src folder:
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">  
21. To generate new component, we used ‘ng generate component’ command 
22. we have set up routing for that component in 'app.routing.ts'
23. we are generating Angular contact services class in app folder using this command:
    'ng generate service contact'
24. Update main app html template
25. update contact form and contact list componenet
26. finally Build components and run the project by : 'ng build' and 'dotnet run' 


