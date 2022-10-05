import requests

response = requests.get(
    "https://scrapethissite.com/pages/advanced/?gotcha=headers",
    headers={"User-agent": "Mozilla", "Accept": "text/html"},
)

# Se nada acontecer, código está funcionando.
assert "bot detected" not in response.text
