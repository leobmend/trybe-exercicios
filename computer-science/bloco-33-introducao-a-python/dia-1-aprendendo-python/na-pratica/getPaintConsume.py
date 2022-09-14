def getPaintConsume(area):
    paintVolume = area / 3
    paintCans = paintVolume / 18
    paintCost = paintCans * 80

    return (paintCans, paintCost)


print(getPaintConsume(30))
