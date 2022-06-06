namespace SFAS.Common
{
    public class AppSettings
    {
        public string Secret { get; set; }
        public int TokenValidMinutes { get; set; }
        public string TokenIssuer { get; set; }
        public string TokenAudience { get; set; }
        public string PortalMailServer { get; set; }
        public int PortalMailPort { get; set; }
        public string PortalMailFromEmail { get; set; }
        public string PortalMailFromName { get; set; }
        public string PortalMailPassword { get; set; }
        public string AdminPassword { get; set; }
    }
}
