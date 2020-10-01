using System;

namespace LinkShortenerData
{
    public class LinkInformation
    {
        public int Id { get; set; }
        public string FullLink { get; set; }
        public string ShortLink { get; set; }
        public DateTime CreatedOn { get; set; }
    }
}
