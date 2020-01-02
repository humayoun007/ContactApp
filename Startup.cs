using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using contact_app.Helpers;
using contact_app.Model;
using contact_app.Services;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.IdentityModel.Logging;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;

namespace contact_app {
    public class Startup {
        public Startup (IConfiguration configuration) {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        //readonly string MyAllowSpecificOrigins = "_myAllowSpecificOrigins";

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices (IServiceCollection services) {

            IdentityModelEventSource.ShowPII = true;
            
            services.AddCors();
            services.AddControllers ();

            // configure strongly typed settings objects
            var appSettingsSection = Configuration.GetSection("AppSettings");
            services.Configure<AppSettings>(appSettingsSection);

            // configure jwt authentication
            var appSettings = appSettingsSection.Get<AppSettings>();
            var key = Encoding.ASCII.GetBytes(appSettings.Secret);
            services.AddAuthentication(x =>
            {
                x.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                x.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
            })
            .AddJwtBearer(x =>
            {
                x.RequireHttpsMetadata = false;
                x.SaveToken = true;
                x.TokenValidationParameters = new TokenValidationParameters
                {
                    ValidateIssuerSigningKey = true,
                    IssuerSigningKey = new SymmetricSecurityKey(key),
                    ValidateIssuer = false,
                    ValidateAudience = false
                };
            });

          

            services.AddDbContext<ContactAppContext> (options =>
                options.UseSqlServer (Configuration.GetConnectionString ("ContactDb")));
            services.AddMvc(option => option.EnableEndpointRouting = false);
            // services.AddMvc();
            // services.AddCors (options => {
            //     options.AddPolicy (MyAllowSpecificOrigins,
            //         builder => {
            //             builder.WithOrigins ("http://localhost:5000")
            //                  .AllowAnyHeader()
            //                     .AllowAnyMethod();
            //         });
            // });

              // configure DI for application services
            services.AddScoped<IUserService, UserService>();

            
            services.AddSwaggerGen(c=> {
                c.SwaggerDoc("v1", new OpenApiInfo{Title="My API", Version="v1"});
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure (IApplicationBuilder app, IWebHostEnvironment env) {
            if (env.IsDevelopment ()) {
                app.UseDeveloperExceptionPage ();
            }
            // else {
            //     app.UseHsts ();
            // }

            // app.UseCors(MyAllowSpecificOrigins);

            //app.UseHttpsRedirection();

            // Enable middleware to serve generated Swagger as a JSON endpoint.
            app.UseSwagger();
            // Enable middleware to serve swagger-ui (HTML, JS, CSS, etc.),
            // specifying the Swagger JSON endpoint.
            app.UseSwaggerUI(c =>
            {
                c.SwaggerEndpoint("/swagger/v1/swagger.json", "My API V1");
            });


            app.UseRouting ();

             // global cors policy
            app.UseCors(x => x
                .AllowAnyOrigin()
                .AllowAnyMethod()
                .AllowAnyHeader());

            app.UseAuthentication();
            app.UseAuthorization();

            app.UseEndpoints (endpoints => {
                endpoints.MapControllers ();
            });

            //Redirect non api calls to angular app that will handle routing of the app.    
            app.Use (async (context, next) => {
                await next ();
                if (context.Response.StatusCode == 404 && !Path.HasExtension (context.Request.Path.Value) && !context.Request.Path.Value.StartsWith ("/api/")) {
                    context.Request.Path = "/index.html";
                    await next ();
                }
            });
            // configure the app to serve index.html from /wwwroot folder    
            app.UseDefaultFiles ();
            app.UseStaticFiles ();
            // configure the app for usage as api    
            app.UseMvcWithDefaultRoute ();

        }
    }
}