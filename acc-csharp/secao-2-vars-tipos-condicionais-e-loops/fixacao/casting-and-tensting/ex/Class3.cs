namespace variable;
public class Class3
{
    public string strEntry = "42";
    public int intResponse;

    public void DoConversion()
    {
        if(strEntry is string)
        {
            intResponse = Convert.ToInt32(strEntry);
        }
    }
}