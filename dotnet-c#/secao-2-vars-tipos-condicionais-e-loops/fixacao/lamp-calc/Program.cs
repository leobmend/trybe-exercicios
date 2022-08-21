// DATA IN

Console.WriteLine(
  "Hello! Here we will calculate the number of lamps needed to iluminate a room."
);

Console.WriteLine("First of all, what is the name of the room?");
string roomName = Console.ReadLine();

Console.WriteLine("Tell me how big it is. What's the width of " + roomName + "?");
decimal width = decimal.Parse(Console.ReadLine());

Console.WriteLine("And what's its length?");
decimal length = decimal.Parse(Console.ReadLine());

Console.WriteLine("Ok! Now, what's the lamp power to be used on " + roomName + "?");
int power = int.Parse(Console.ReadLine());

// PROCESSING

decimal area = width * length;
decimal quotientX = power / 18M;
decimal totalLightBulbs = area / quotientX;

// DATA OUT

Console.WriteLine(
  "To iluminate the room " + roomName + " with " + area.ToString("N2") + " square meters:"
);

Console.WriteLine(
  "It will be needed a total of " + totalLightBulbs.ToString("N2") + " lamps"
); 