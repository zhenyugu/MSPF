using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using MSPF.Infrastucture;
using MSPF.Models;

namespace MSPF.Migrations
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<MSPF.Models.MSPFContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(MSPF.Models.MSPFContext context)
        {
            //  This method will be called after migrating to the latest version.
            context.Shops.AddOrUpdate(
                p => p.Id,
                new Shop { Id = 1, Name = "testshop", Owner = "admin", Status = "N", CreatedTime = DateTime.Now }
            );

            context.Goods.AddOrUpdate(x => x.Id,
                new Goods()
                {
                    Id = 1,
                    Name = "testname",
                    OfficalPrice = 3.4,
                    Price = 2.0,
                    Status = "N",
                    Vacancy = 10,
                    SalesQuntity = 5,
                    CreatedTime = DateTime.Now,
                    ShopId = 1,
                    Description = "Comedy of manners",
                });

            context.Goods.AddOrUpdate(x => x.Id,
                new Goods()
                {
                    Id = 1,
                    Name = "testname",
                    OfficalPrice = 3.4,
                    Price = 2.0,
                    Status = "N",
                    Vacancy = 10,
                    SalesQuntity = 5,
                    CreatedTime = DateTime.Now,
                    ShopId = 1,
                    Description = "Comedy of manners",
                });


            var manager = new UserManager<ApplicationUser>(new UserStore<ApplicationUser>(new MSPFContext()));

            var user = new ApplicationUser()
            {
                UserName = "admin",
                Email = "admin@mspf.com",
                EmailConfirmed = true,
                FirstName = "admin",
                LastName = "test",
                Level = 1,
                JoinDate = DateTime.Now
            };

            manager.Create(user, "abc@1234");
            //  You can use the DbSet<T>.AddOrUpdate() helper extension method 
            //  to avoid creating duplicate seed data. E.g.
            //
            //    context.People.AddOrUpdate(
            //      p => p.FullName,
            //      new Person { FullName = "Andrew Peters" },
            //      new Person { FullName = "Brice Lambson" },
            //      new Person { FullName = "Rowan Miller" }
            //    );
            //
        }
    }
}
