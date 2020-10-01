using System.Threading.Tasks;
using LinkShortenerApi.Model;
using LinkShortenerCore;
using Microsoft.AspNetCore.Mvc;


namespace LinkShortenerApi.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class LinkController : ControllerBase
    {
        private ILinkService LinkService { get; }
        public LinkController(ILinkService linkService)
        {
            LinkService = linkService;
        }
        [HttpPost]
        public async Task<GetFullLinkResponse> GetFullLinkAsync(GetFullLinkRequest request)
        {
            var fullLink = await LinkService.GetFullLink(request.ShortLink);

            return new GetFullLinkResponse()
            {
                FullLink = fullLink
            };
        }

        [HttpPost]
        public async Task<CutLinkResponse> CutLinkAsync(CutLinkRequest request)
        {
            var shortLink = await LinkService.CutLink(request.FullLink);

            return new CutLinkResponse()
            {
                ShortLink = shortLink
            };
        }
    }
}
