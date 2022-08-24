using Xunit;
using FluentAssertions;

namespace variable.Test;

public class UnitTest3
{
    [Fact]
    public void TestVariableConversion()
    {
        Class3 instance = new();

        instance.strEntry.Should().Be("42");
        var strTypeCheck = instance.strEntry is string;
        strTypeCheck.Should().Be(true);

        instance.DoConversion();

        instance.intResponse.Should().Be(42);
        var intTypeCheck = instance.intResponse is int;
        intTypeCheck.Should().Be(true);
    }
}