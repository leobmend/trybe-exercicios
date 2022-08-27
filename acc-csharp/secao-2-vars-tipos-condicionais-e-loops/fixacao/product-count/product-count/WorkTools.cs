namespace WorkTools;
public static class  NumbersTools
{
    public static int CountOf(int[] numbers, int value)
    {     
        var count = 0;

        foreach(var number in numbers)   
        {
            if(number == value) count++;
        }

        return count;
    }

    public static int IndexOf(int[] numbers, int value)
    {     
        var position = -1;

        for(int i=0; i < numbers.Count(); i++)
        {        
            if(numbers[i] == value)
            {
                position = i;
                break;
            }        
        }
        
        return position;
    }

    public static int CountEvenNumbers(int[] numbers)
    {     
        var count = 0;

        foreach(var number in numbers)   
        {          
            if(number%2 != 0) continue;

            count ++;
        }

        return count;
    }
}