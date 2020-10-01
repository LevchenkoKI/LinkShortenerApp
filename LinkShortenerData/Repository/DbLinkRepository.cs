using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;

namespace LinkShortenerData
{
    public class DbLinkRepository : ILinkRepository
    {
        private readonly string _connectionString;
        public DbLinkRepository(string connectionString)
        {
            _connectionString = connectionString;
        }

        public async Task AddLink(LinkInformation urlInformation)
        {
            using (var db = new LinkContext(_connectionString))
            {
                db.Links.Add(urlInformation);
                await db.SaveChangesAsync();
            }
        }

        public async Task<LinkInformation> GetLinkInformation(string shortLink)
        {
            using (var db = new LinkContext(_connectionString))
            {
                return await db.Links.FirstOrDefaultAsync(link => link.ShortLink.ToLower() == shortLink.ToLower());
            }
        }
    }
}
