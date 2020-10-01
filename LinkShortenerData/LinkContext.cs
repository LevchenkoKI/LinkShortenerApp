using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;

namespace LinkShortenerData
{
    public class LinkContext : DbContext
    {
        private readonly string _connectionString;
        public DbSet<LinkInformation> Links { get; set; }
        public LinkContext(string connectionString)
            : base()
        {
            _connectionString = connectionString;
            Database.EnsureCreated();  
        }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer(_connectionString);
            }

        }
    }
}
