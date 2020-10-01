using LinkShortenerData;
using System.Threading.Tasks;

namespace LinkShortenerCore
{
    public class HashLinkGenerator : ILinkGenerator
    {
        private HashCalculator HashCalculator { get; set; }
        private ILinkRepository LinkRepository { get; set; }

        public HashLinkGenerator(ILinkRepository linkRepository)
        {
            HashCalculator = new HashCalculator();
            LinkRepository = linkRepository;
        }
        public async Task<string> GenerateShortLink(string fullLink)
        {
            return await GenerateByRecursiveInsert(fullLink, 0, 5);
        }

        private async Task<string> GenerateByRecursiveInsert(string link, int startIndex, int endIndex)
        {
            var linkHash = HashCalculator.GetMD5Hash(link).Substring(0, 6).Replace('/', '_').Replace('+', '-');
            var existedLink = await LinkRepository.GetLinkInformation(linkHash);

            if (existedLink != null && existedLink.FullLink != link)
            {
                return await GenerateByRecursiveInsert(link, endIndex + 1, endIndex + 6);
            }
            return linkHash;
        }
    }
}
