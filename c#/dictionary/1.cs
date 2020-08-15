// <int, string>

var some = new Dictionary<int, string>();

some.Dump();

some.Add(1, "test");
some.Add(2, "test2");
some.Add(3, "test3");

some.Dump();

some[2].Dump();


var another = new Dictionary<string, string>()
{
	{"key1", "value1"},
	{"key2", "value2"},
};

another.Dump();

//another["key3"].Dump();  //will give error

string val = "";
another.TryGetValue("key3", out val); //return false in this case