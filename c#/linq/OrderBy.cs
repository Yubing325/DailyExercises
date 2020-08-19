void Main()
{
	// Define other methods, classes and namespaces here
	var numArray = new List<int> { 1, 2, 3, 4, 5, 6, 7, 8, 9, 0 };

	numArray.OrderBy(t =>t).Dump(); //Output: 0,1,2,3,....9

	var countries = new List<Country>{
	new Country{
		CountryId =1,
		Name = "Canada",
		CapitalName = "Ottawa",
		Population = 3500
	},
	new Country{
		CountryId =2,
		Name = "China",
		CapitalName = "Beijing",
		Population = 139000
	},
		new Country{
		CountryId =3,
		Name = "USA",
		CapitalName = "Washington",
		Population = 39000
	}
	};
	countries.OrderByDescending(x=>x.Population).Dump(); //output: China, USA , Canada
}



public class Country
{
	public int CountryId { get; set; }
	public string Name { get; set; }
	public int Population { get; set; }
	public string CapitalName { get; set; }
}


