using System;

class Program
{
  public static void Main()
  {
    AgeCalculator calculator = new();

    Console.Write("Digite seu ano de nascimento: ");

    int year = int.Parse(Console.ReadLine());

    int age = calculator.CalculateAgeByYear(year);

    Console.WriteLine($"Você possui {age} anos!");
  }
}
