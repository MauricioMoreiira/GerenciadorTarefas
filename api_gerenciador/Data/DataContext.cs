using api_gerenciador.models;
using Microsoft.EntityFrameworkCore;

namespace api_gerenciador.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) {}

        public DbSet<Tarefa> tarefa {get; set;}
    }
}