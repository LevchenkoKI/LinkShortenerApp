using System.Threading.Tasks;

namespace LinkShortenerCore
{
    public interface ILinkGenerator
    {
        Task<string> GenerateShortLink(string fullLink);
    }
}
