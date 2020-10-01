using System.Threading.Tasks;

namespace LinkShortenerData
{
    public interface ILinkRepository
    {
        Task<LinkInformation> GetLinkInformation(string shortLink);
        Task AddLink(LinkInformation urlInformation);
    }
}
