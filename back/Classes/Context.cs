using Microsoft.EntityFrameworkCore;

namespace back.Classes
{
    public class Context : DbContext
    {
        public Context(DbContextOptions<Context> options) : base(options){ }

        public DbSet<User> Users { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>().ToTable("Users");
        }
    }
}
