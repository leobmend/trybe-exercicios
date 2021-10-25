# *EXERCíCIOS*

----

## **Parte 1 - Comandos de Input e Output**

1. Navegue até a pasta unix_tests.

`cd module-01-web-dev-foundations/block-01-unix-and-bash/day-02/unix-tests/`

2. Crie um arquivo texto pelo terminal com o nome skills2.txt e adicione os valores Internet , Unix e Bash , um em cada linha.

`cat > skills2.txt` Agora escreva os três valores, pressionando Enter após cado um dos três e finalizando com CTRL+C.

3. Adicione mais 5 itens à sua lista de skills e depois imprima a lista ordenada no terminal.

`cat >> skills2.tem` Agora preencha com outros 5 valores, como feito anteriormente.

`sort	skills2.txt`

4. Conte quantas linhas tem o arquivo skills2.txt.

`wc skills2.txt -l`

5. Crie um arquivo chamado top_skills.txt usando o skills2.txt , contendo as 3 primeiras skills em ordem alfabética.

`sort skills2.txt | head -n 3 > top_skills.txt.`

6. Crie um novo arquivo chamado phrases2.txt pelo terminal e adicione algumas frases de sua escolha.

`echo "maria tem uma boneca" > phrases2.txt`
`echo "joao tem uma bicicleta" >> phrases2.txt`
`echo "amanda tem uma bola" >> phrases2.txt`
`echo "lucas tem um brasao" >> phrases2.txt`
`echo "brenda tem uma presilha" >> phrases2.txt`

7. Conte o número de linhas que contêm as letras br.

`grep br phrases2.txt | wc -l`

8. Conte o número de linhas que não contêm as letras br.

`grep -v br phrases2.txt | wc -l`

9. Adicione dois nomes de países ao final do arquivo phrases2.txt.

`echo "Brasil" "\nAlemanha" >> phrases2.txt`

10. Crie um novo arquivo chamado bunch_of_things.txt com os conteúdos dos arquivos phrases2.txt e countries.txt.

`cp phrases2.txt bunch_of_things.txt`

`cat countries.txt >> bunch_of_things.txt`

11. Ordene o arquivo bunch_of_things.txt .

`sort bunch_of_things -o bunch_of_things`