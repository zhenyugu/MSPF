using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MSPF.Models
{
    public class Shop
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Owner { get; set; }
        public string Status { get; set; }
        public DateTime CreatedTime { get; set; }
    }
}