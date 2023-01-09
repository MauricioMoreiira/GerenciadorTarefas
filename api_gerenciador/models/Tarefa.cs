using System;
using System.ComponentModel.DataAnnotations;

namespace api_gerenciador.models
{
    public class Tarefa
    {
        public Tarefa(int id, string title, string body, DateTime data_vigencia, int tipo_tarefa)
        {
            this.id = id;
            this.title = title;
            this.body = body;
            this.data_vigencia = data_vigencia;
            this.tipo_tarefa = tipo_tarefa;

        }

        [Key]
        public int id { get; set; }
        public string title { get; set; }
        public string body { get; set; }
        public DateTime data_vigencia { get; set; }
        public int tipo_tarefa { get; set; }
    }
}