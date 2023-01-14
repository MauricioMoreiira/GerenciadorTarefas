using Microsoft.EntityFrameworkCore;
using API_TAREFAS.Models;

namespace API_TAREFAS.Data
{
    public class DataContext : DbContext{
         public DataContext(DbContextOptions<DataContext> options) : base(options){}

         public DbSet<Tarefa> Tarefas {get; set;}


    }
}