using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using MVCReactApp.Server.Models;

namespace MVCReactApp.Server.Controllers
{

    [ApiController]
    [Route("[controller]")]
    public class EmpleadosController : Controller
    {
        private readonly ReactMvcContext _context;

        public EmpleadosController(ReactMvcContext context)
        {
           
            _context = context;
        }

        [HttpGet]
        public async Task<List<Empleado>> Index()
        {
            List<Empleado> lista = await _context.Empleados.ToListAsync();
            return lista;
        }


    }
}
