using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;
using MSPF.Models;

namespace MSPF.Controllers
{
    public class GoodsController : ApiController
    {
        private MSPFContext db = new MSPFContext();

        // GET: api/Goods
        public IQueryable<Goods> GetGoods()
        {
            return db.Goods.Include(r => r.Shop);
        }

        // GET: api/Goods/5
        [ResponseType(typeof(Goods))]
        public async Task<IHttpActionResult> GetGoods(int id)
        {
            Goods goods = await db.Goods.FindAsync(id);
            if (goods == null)
            {
                return NotFound();
            }

            return Ok(goods);
        }

        // PUT: api/Goods/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutGoods(int id, Goods goods)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != goods.Id)
            {
                return BadRequest();
            }

            db.Entry(goods).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!GoodsExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Goods
        [ResponseType(typeof(Goods))]
        public async Task<IHttpActionResult> PostGoods(Goods goods)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Goods.Add(goods);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = goods.Id }, goods);
        }

        // DELETE: api/Goods/5
        [ResponseType(typeof(Goods))]
        public async Task<IHttpActionResult> DeleteGoods(int id)
        {
            Goods goods = await db.Goods.FindAsync(id);
            if (goods == null)
            {
                return NotFound();
            }

            db.Goods.Remove(goods);
            await db.SaveChangesAsync();

            return Ok(goods);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool GoodsExists(int id)
        {
            return db.Goods.Count(e => e.Id == id) > 0;
        }
    }
}