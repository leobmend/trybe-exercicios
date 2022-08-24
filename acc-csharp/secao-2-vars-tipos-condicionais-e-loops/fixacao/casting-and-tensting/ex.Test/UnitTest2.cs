using FluentAssertions;

namespace variable.Test;

public class UnitTest2
{
    [Fact]
    public void TestVariableCreation()
     {
        Class2 instance = new();

        instance.intEntry.Should().Be(42);
        var intTypeCheck = instance.intEntry is int;
        intTypeCheck.Should().Be(true);

        instance.Transform();
    
        instance.doubleResponse.Should().Be(42.0);
        var doubleTypeCheck = instance.doubleResponse is double;
        doubleTypeCheck.Should().Be(true);
    }
}