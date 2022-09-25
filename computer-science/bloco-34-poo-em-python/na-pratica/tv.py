class TV:
    def __init__(self, tamanho):
        self.__ligada = False
        self.__volume = 50
        self.__canal = 1
        self.__tamanho = tamanho

    def aumentar_volume(self):
        if self.__volume < 99:
            self.__volume += 1

    def diminuir_volume(self):
        if self.__volume > 0:
            self.__volume -= 1

    def modificar_canal(self, canal):
        if not 1 <= canal <= 99:
            raise ValueError('Canal indisponível')
        self.__canal = canal

    def ligar_desligar(self):
        self.__ligada = not self.__ligada

    def __str__(self):
        return f"""
        TV {self.__tamanho}
        - Ligada: {self.__ligada}
        - Canal: {self.__canal}
        - Volume: {self.__volume}
        """


tv = TV('50 polegadas')
tv.ligar_desligar()
print
tv.modificar_canal(5)
tv.aumentar_volume()

print(tv)
