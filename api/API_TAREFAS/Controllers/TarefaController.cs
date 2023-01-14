using System.Threading.Tasks;
using API_TAREFAS.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using API_TAREFAS.Models;
using Microsoft.AspNetCore.Http;
using System;

namespace API_TAREFAS.Controllers
{
    [Controller]
    [Route("[controller]")]

    public class TarefaController : ControllerBase
    {
        private DataContext dc;
        public TarefaController(DataContext context){
            this.dc = context;
        }

        [HttpGet("api")]
        public async Task<ActionResult> GetTask(){
            try
            {
                var dados = await dc.Tarefas.ToListAsync();
                return Ok(dados);
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError,
                "Error deleting data");
            }

        }

        [HttpPost("api")]
        public async Task<ActionResult> CreateTarefa([FromBody] Tarefa t){
            try
            {
                dc.Tarefas.Add(t);
                await dc.SaveChangesAsync();

                return Created("obj tarefa", t);
            }
             catch (Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError,
                "Error deleting data");
            }
        }

        [HttpGet("api/{id}")]
        public Tarefa FindTarefa(int id){
            Tarefa t = dc.Tarefas.Find(id);
             return t;
        }

        [HttpPut("api")]
        public async Task<ActionResult> EditaTarefa([FromBody] Tarefa t){
            try
            {
                dc.Tarefas.Update(t);
                await dc.SaveChangesAsync();

            return Ok(t);
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError,
                "Error deleting data");
            }
        }

        [HttpDelete("api/{id}")]
        public async Task<ActionResult> DeletaTarefa(int id){
            try
            {
                Tarefa t = FindTarefa(id);
            
            if(t == null){
                return NotFound();
            }else{
                dc.Tarefas.Remove(t);
            }

            await dc.SaveChangesAsync();
            return Ok();
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError,
                "Error deleting data");
            }
            

        }
    }
}