using diversitytracker.api.Enums;

namespace diversitytracker.api.Models
{
    public class Person
    {
        public int Id { get; private set; }
        public required string Name { get; set; }
        public required Gender Gender { get; set; }
        public required DateTime TimeAtCompany { get; set; }
    }
}