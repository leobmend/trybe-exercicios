namespace Car.Test;

class Car
{
    double _topSpeedKph;

    public double TopSpeed
    {
        get { return _topSpeedKph; }
        set { _topSpeedKph = value; }
    }

    public double TopSpeedMph
    {
        get { return Car.KphToMph(_topSpeedKph); }
    }

    public static double KphToMph(double kph)
    {
        return kph / 1.61;
    }
}