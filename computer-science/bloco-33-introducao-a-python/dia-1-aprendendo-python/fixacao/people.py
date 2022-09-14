import area

PEOPLE_PER_SQUARE_METER = 2  # numero de pessoas por metro quadrado em média
FIELD_LENGTH = 60  # em metros
FIELD_WIDTH = 45  # em metros
people_at_concert = (
    area.rectangle(FIELD_LENGTH, FIELD_WIDTH) * PEOPLE_PER_SQUARE_METER
)


if __name__ == "__main__":
    print("Área do quadrado:", area.square(10))
    print("Área do retângulo:", area.rectangle(2, 2))
    print("Área do círculo:", area.circle(3))
