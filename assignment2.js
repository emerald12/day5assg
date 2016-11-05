var ServiceYear = 8;
if (var ServiceYear >= 0) && (var ServiceYear < 11)
{
    console.log ("You are a level" + ServiceYear+ "staff, and your Designation is Casual Staff");
}
else if (var ServiceYear > 10) && (var ServiceYear < 21)
{
    console.log ("You are a level" ServiceYear "staff, and your Designation is Junior Staff")
}
else if (var ServiceYear > 20) && (var ServiceYear < 31)
{
    console.log ("You are a level" ServiceYear "staff, and your Designation is Senior Staff")
}
else if (var ServiceYear > 30) && (var ServiceYear < 41)
{
    console.log ("You are a level" ServiceYear "staff, and your Designation is Manager")
}
else if  (var ServiceYear > 40) && (var ServiceYear <= 50) 
{
   console.log ("You are a level" ServiceYear "staff, and your Designation is Director")
}
else
{
    console.log ("You are a level" ServiceYear "staff, and your Designation is Director")
}