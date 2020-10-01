using System.Threading.Tasks;

namespace LinkShortenerCore
{
    public interface ILinkService
    {
        Task<string> CutLink(string fullLink);
        Task<string> GetFullLink(string shortLink);
    }
}
