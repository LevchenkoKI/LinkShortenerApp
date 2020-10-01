using LinkShortenerData;
using System;
using System.Threading.Tasks;

namespace LinkShortenerCore
{
    public class LinkService : ILinkService
    {
        private ILinkGenerator LinkGenerator { get; }
        private ILinkRepository LinkRepository { get; }
        public LinkService(ILinkGenerator linkGenerator, ILinkRepository linkRepository)
        {
            LinkGenerator = linkGenerator;
            LinkRepository = linkRepository;
        }

        public async Task<string> CutLink(string fullLink)
        {
            var shortLink = await LinkGenerator.GenerateShortLink(fullLink);
            var linkInformation = await LinkRepository.GetLinkInformation(shortLink);

            if (linkInformation is null)
                await LinkRepository.AddLink(new LinkInformation()
                {
                    CreatedOn = DateTime.Now,
                    FullLink = fullLink,
                    ShortLink = shortLink
                });

            return shortLink;
        }

        public async Task<string> GetFullLink(string shortLink)
        {
            var linkInformation = await LinkRepository.GetLinkInformation(shortLink);

            if (linkInformation is null)
                throw new ArgumentException($"Не найдена ссылка {shortLink}");

            return linkInformation.FullLink;
        }
    }
}
