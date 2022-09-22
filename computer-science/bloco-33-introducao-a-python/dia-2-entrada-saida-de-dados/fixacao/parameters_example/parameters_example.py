import sys


if __name__ == "__main__":
    for argument in sys.argv:
        # Rodar o script: python3 arquivo.py 2 4 "teste"
        print("Received -> ", argument)
