void Main()
{
	var user = new User{
		Id=1,
		Name="Jack",
		BankCards = new List<string>{
			"RBC", "CIBC", "AME"
		}
	};
	
	user.Dump();
	
	var bcs = user.BankCards.Select(t =>t.ToString());
	
	var sb = new StringBuilder();
	
	sb.AppendLine("ID, 姓名,银行卡,");

	sb.AppendLine($"{user.Id}, {user.Name},{String.Join(",", bcs)}");
	
	sb.Dump();
}

// Define other methods, classes and namespaces here
public class User{
	public int Id{ get; set; }
	public string Name { get; set; }
	public List<string> BankCards{ get; set; }
}