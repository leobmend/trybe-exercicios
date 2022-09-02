using System;

class AgeCalculator
{
  public int CalculateAgeByYear(int yearOfBirth)
  {
    return DateTime.Now.Year - yearOfBirth;
  }
}