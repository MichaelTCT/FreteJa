namespace FreteJa.Models
{
    public class User
    {
        public required string Email { get; set; }
        public required string Password { get; set; }
        public required string Cep { get; set; }
        public required string Endereco { get; set; }
        public required string Bairro { get; set; }
        public required string Cidade { get; set; }
        public required string Estado { get; set; }
    }
}
