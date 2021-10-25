# *EXERCíCIOS*

----

## **Parte 1 - Comandos de Input e Output**

1. Crie um arquivo texto pelo terminal com o nome skills2.txt e adicione os valores Internet , Unix e Bash , um em cada linha.

`cat > skills2.txt` Agora escreva os três valores, pressionando Enter após cado um dos três e finalizando com CTRL+C.

2. Adicione mais 5 itens à sua lista de skills e depois imprima a lista ordenada no terminal.

`cat >> skills2.tem` Agora preencha com outros 5 valores, como feito anteriormente.

`sort	skills2.txt`

3. Conte quantas linhas tem o arquivo skills2.txt .

`wc skills2.txt -l`

4. Crie um arquivo chamado top_skills.txt usando o skills2.txt , contendo as 3 primeiras skills em ordem alfabética.

`sort skills2.txt | head -n 3 > top_skills.txt.`

5. Crie um novo arquivo chamado phrases2.txt pelo terminal e adicione algumas frases de sua escolha.

6. Conte o número de linhas que contêm as letras br .

7. Conte o número de linhas que não contêm as letras br .

8. Adicione dois nomes de países ao final do arquivo phrases2.txt .

9. Crie um novo arquivo chamado bunch_of_things.txt com os conteúdos dos arquivos phrases2.txt e countries.txt

10. Ordene o arquivo bunch_of_things.txt .