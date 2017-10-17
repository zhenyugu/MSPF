using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using Microsoft.AspNet.Identity.EntityFramework;

namespace MSPF.Models
{
    public class MSPFContext : IdentityDbContext<IdentityUser>
    {
        // You can add custom code to this file. Changes will not be overwritten.
        // 
        // If you want Entity Framework to drop and regenerate your database
        // automatically whenever you change your model schema, please use data migrations.
        // For more information refer to the documentation:
        // http://msdn.microsoft.com/en-us/data/jj591621.aspx
    
        public MSPFContext() : base("name=MSPFContext")
        {
            Configuration.ProxyCreationEnabled = false;
            Configuration.LazyLoadingEnabled = false;
        }
        public static MSPFContext Create()
        {
            return new MSPFContext();
        }
        public System.Data.Entity.DbSet<MSPF.Models.Shop> Shops { get; set; }

        public System.Data.Entity.DbSet<MSPF.Models.Goods> Goods { get; set; }
    }
}
