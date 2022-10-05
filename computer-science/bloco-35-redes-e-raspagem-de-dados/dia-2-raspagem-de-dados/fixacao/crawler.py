import requests

# TOO MANY REQUESTS
# import time
# for _ in range(15):
#     response = requests.get('https://www.cloudflare.com/rate-limit-test/')
#     print(response.status_code)
#     time.sleep(6)

# TIMEOUT
# try:
#     response = requests.get('http://httpbin.org/delay/10', timeout=5)
# except requests.Timeout:
#     response = requests.get('http://httpbin.org/delay/1', timeout=5)
# finally:
#     print(response.status_code)

from parsel import Selector

response = requests.get('http://books.toscrape.com/')
selector = Selector(text=response.text)

# for thumbnail in selector.css('img.thumbnail').getall():
#     print(thumbnail)

# for url in selector.css('div.image_container a::attr(href)').getall():
#     thumbnail_request = requests.get('http://books.toscrape.com/' + url)
#     thumbnail_selector = Selector(text=thumbnail_request.text)
#     book_title = thumbnail_selector.css('div.product_main h1').get()
#     print(book_title)

# Existe uma classe next, que podemos recuperar a url através do seu el. âncora
# next_page_url = selector.css(".next a::attr(href)").get()
# print(next_page_url)

URL_BASE = "http://books.toscrape.com/catalogue/"
next_page_url = 'page-1.html'
while next_page_url:
    # Busca o conteúdo da próxima página
    response = requests.get(URL_BASE + next_page_url)
    selector = Selector(text=response.text)
    # Imprime os produtos de uma determinada página
    for product in selector.css(".product_pod"):
        title = product.css("h3 a::attr(title)").get()
        price = product.css(".price_color::text").get()
        print(title, price)
    # Descobre qual é a próxima página
    next_page_url = selector.css(".next a::attr(href)").get()
