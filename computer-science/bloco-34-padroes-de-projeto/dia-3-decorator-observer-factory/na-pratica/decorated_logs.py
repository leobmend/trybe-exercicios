from abc import ABC, abstractmethod

ROSA = "\033[95m"
ROXO = "\033[94m"
AZUL = "\033[96m"
VERDE = "\033[92m"
LARANJA = "\033[93m"
VERMELHO = "\033[91m"
NEGRITO = "\033[1m"
SUBLINHADO = "\033[4m"
RESET = "\033[0m"

# print("\033[94mOlá Mundo!\033[0m")
# # ou
# print(f"{VERMELHO}Olá Mundo!{RESET}")


class Log:
    def dispara_log(self, message):
        return message


class Decorator(ABC):
    def __init__(self, log):
        self.log = log

    # tornar o método acessivel outras classes
    @abstractmethod
    def dispara_log(self, message):
        pass


# Success(Verde): O sistema está funcionando
class LogSuccess(Decorator):
    def dispara_log(self, message):
        decorated_message = f"{VERDE}{message}{RESET}"
        return self.log.dispara_log(decorated_message)


# Warning(Laranja): O sistema está lento
class LogWarning(Decorator):
    def dispara_log(self, message):
        decorated_message = f"{LARANJA}{message}{RESET}"
        return self.log.dispara_log(decorated_message)


# Error(Vermelho): O sistema está com erros
class LogError(Decorator):
    def dispara_log(self, message):
        decorated_message = f"{VERMELHO}{message}{RESET}"
        return self.log.dispara_log(decorated_message)


logger = Log()
print(LogSuccess(logger).dispara_log("O sistema esta funcionando"))
print(LogWarning(logger).dispara_log("O sistema esta lento"))
print(LogError(logger).dispara_log("O sistema esta com erros"))
