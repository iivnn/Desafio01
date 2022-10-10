namespace back.Classes
{
    public class UserGetResponse
    {
        public int Id { get; set; } = 0;
        public string Nome { get; set; } = string.Empty;
        public string Sobrenome { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string DataNascimento { get; set; } = DateTime.MinValue.ToString("yyyy-MM-dd");
        public EscolaridadeEnum Escolaridade { get; set; } = EscolaridadeEnum.Nenhum;
    }
}
