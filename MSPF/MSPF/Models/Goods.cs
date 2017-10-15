using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MSPF.Models
{
    public class Goods
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public double OfficalPrice { get; set; }
        public double Price { get; set; }
        public string Status { get; set; }
        public int Vacancy { get; set; }
        public int SalesQuntity { get; set; }
        public DateTime CreatedTime { get; set; }


        public int ShopId { get; set; }
        public Shop Shop { get; set; }
    }
}