using System;
using System.ComponentModel.DataAnnotations;

namespace API_TAREFAS.Models
{
    public class Tarefa
    {
        [Key]
        public int Id { get; set; }
        public string Title { get; set; }
        public string Body { get; set; }
        public DateTime Data_Vigencia { get; set; }
        public int Tipo_Tarefa { get; set; }
    }
}