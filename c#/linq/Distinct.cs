//example: check if duplicated values in the array

var nums = new int[] { 1, 2, 3, 3, 6};

foreach (var i in nums)
{
	i.Dump(" ");
}

var result = nums.Distinct();

foreach (var i in result)
{
	i.Dump(); //1,2,3,6
}



