using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using contact_app.Model;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;

namespace contact_app {
    public class Startup {
        public Startup (IConfiguration configuration) {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        //readonly string MyAllowSpecificOrigins = "_myAllowSpecificOrigins";

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices (IServiceCollection services) {
            services.AddControllers ();
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

            app.UseRouting ();

            app.UseAuthorization ();

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