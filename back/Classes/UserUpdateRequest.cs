namespace back.Classes
{
    public class UserUpdateRequest
    {
        public int Id { get; set; } = 0;
        public string Nome { get; set; } = string.Empty;
        public string Sobrenome { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public DateTime DataNascimento { get; set; } = DateTime.MinValue;
        public EscolaridadeEnum Escolaridade { get; set; } = EscolaridadeEnum.Nenhum;
    }
}
