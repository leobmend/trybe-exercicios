using System;

class Program
{
  static int GetIntEntry()
  {
    bool success = false;
    int parsedEntry = 0;
    
    while (!success)
    {
      string? entry = Console.ReadLine();
      success = int.TryParse(entry, out parsedEntry);
    }

    return parsedEntry;
  }

  static void Main(string[] args)
  {
    Console.Write("Entre com o número de despesas: ");

    int numberOfExpenses = GetIntEntry();
    int[,] expensesCost = new int[numberOfExpenses, 2];

    for (int i=0; i < numberOfExpenses; i++)
    {
      Console.Write($"Entre com o custo bruto da despesa de número {i + 1}: ");
      expensesCost[i, 0] = GetIntEntry();
      Console.Write("E seu custo líquido: ");
      expensesCost[i, 1] = GetIntEntry();
    }

    int[] totalExpenses = new int[2] { 0, 0 };

    for (int i = 0; i < numberOfExpenses; i++)
    {
      totalExpenses[0] += expensesCost[i, 0];
      totalExpenses[1] += expensesCost[i, 1];
    }

    Console.WriteLine("O total bruto das despesas é: " + totalExpenses[0]);
    Console.WriteLine("O total líquido das despesas é: " + totalExpenses[1]);
  }
}