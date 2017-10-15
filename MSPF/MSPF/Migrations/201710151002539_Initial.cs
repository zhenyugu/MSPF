namespace MSPF.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Initial : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Goods",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                        Description = c.String(),
                        OfficalPrice = c.Double(nullable: false),
                        Price = c.Double(nullable: false),
                        Status = c.String(),
                        Vacancy = c.Int(nullable: false),
                        SalesQuntity = c.Int(nullable: false),
                        CreatedTime = c.DateTime(nullable: false),
                        ShopId = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Shops", t => t.ShopId, cascadeDelete: true)
                .Index(t => t.ShopId);
            
            CreateTable(
                "dbo.Shops",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                        Owner = c.String(),
                        Status = c.String(),
                        CreatedTime = c.DateTime(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Goods", "ShopId", "dbo.Shops");
            DropIndex("dbo.Goods", new[] { "ShopId" });
            DropTable("dbo.Shops");
            DropTable("dbo.Goods");
        }
    }
}
