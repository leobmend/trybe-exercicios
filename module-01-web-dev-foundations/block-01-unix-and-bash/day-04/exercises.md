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

`echo "maria tem uma boneca" > phrases2.txt`</br>
`echo "joao tem uma bicicleta" >> phrases2.txt`</br>
`echo "amanda tem uma bola" >> phrases2.txt`</br>
`echo "lucas tem um brasao" >> phrases2.txt`</br>
`echo "brenda tem uma presilha" >> phrases2.txt`</br>

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

## Parte 2 - Permissões

1. Navegue até a pasta unix_tests ;

`cd Documents/trybe/trybe-exercises/module-01-web-dev-foundations/block-01-unix-and-bash/day-04/unix-tests`

2. Rode o comando ls -l e veja quais as permissões dos arquivos;

`# -rw-rw-r-- 1 leonardo leonardo 1967 out 25 11:32 bunch_of_things.txt`</br>
`# -rw-rw-r-- 1 leonardo leonardo 1842 out 25 10:48 countries.txt`</br>
`# -rw-rw-r-- 1 leonardo leonardo    0 out 25 10:48 empty.pdf`</br>
`# -rw-rw-r-- 1 leonardo leonardo    0 out 25 10:48 empty.tbt`</br>
`# -rw-rw-r-- 1 leonardo leonardo  124 out 25 11:19 phrases2.txt`</br>
`# -rw-rw-r-- 1 leonardo leonardo  101 out 25 10:48 phrases.txt`</br>
`# -rw-rw-r-- 1 leonardo leonardo   48 out 25 10:59 skills2.txt`</br>
`# -rw-rw-r-- 1 leonardo leonardo   14 out 25 11:04 top_skills.txt`</br>

3. Mude a permissão do arquivo bunch_of_things.txt para que todos os usuários possam ter acesso à leitura e escrita, e verifique se está correto com o comando ls -l ;
> Resultado esperado:
`# -rw-rw-rw- 1 ana ana 1860 ago 13 11:39 bunch_of_things.txt`

`chmod a+rw bunch_of_things.txt`

4. Tire a permissão de escrita do arquivo bunch_of_things.txt para todos os usuários, verifique se está correto com o comando ls -l;
> Resultado esperado: 
`# -r--r--r-- 1 ana ana 1860 ago 13 11:39 bunch_of_things.txt`

`chomod a-w bunch_of_things.txt`

5. Volte à permissão do arquivo bunch_of_things.txt para a listada inicialmente utilizando o comando.
> Resultado esperado: 
`# -rw-rw-r-- 1 ana ana 1860 ago 13 11:39 bunch_of_things.txt`

`chmod 664 bunch_of_things.txt`

## Parte 3 - Permissões

1. Liste todos os processos;

`ps`

2. Agora use o comando sleep 30 & ;

`sleep 30 &`

3. Use a listagem de processos para encontrar o PID do processo que está executando o comando sleep 30 e termine a sua execução (mate o processo) ;

`jobs`</br>
`kill %1`</br>
No caso, a posição do processo era 1.

4. Execute novamente o comando sleep 30 , mas agora sem o & . Depois, faça com que ele continue executando em background;

`sleep 30`</br>
Pressione CTRL+Z para suspender o processo sleepk, e então:</br>
`bg`

5. Crie um processo em background que rode o comando sleep por 300 segundos.

`sleep 300 &`

6. Crie mais dois processos que rodem o comando sleep por 200 e 100 segundos, respectivamente.
> Você deve criá-los em foreground (sem usar o & ) e suspendê-los (apertando ctrl+z ) após cada um começar a executar.

`sleep 200`</br>
CTRL+Z</br>
`sleep 100`</br>
CTRL+Z

7. Verifique que apenas o processo sleep 300 está em execução com o comando jobs . Suspenda a execução desse processo.
> Você vai precisar trazer o processo para foreground ( fg ) e suspendê-lo ( ctrl+z ), ou enviar um sinal.

`fg %1 # Para colocá-lo em primeiro plano`</br>
CTRL+Z

8. Retome a execução do processo sleep 100 em background com o comando bg .

`bg %3`

9. Termine a execução de todos os processos sleep (mate os processos) .

`kill %1 %2 %3`

##  Parte IV (Bônus) - O despertar do terminal

E pra terminar com a energia óh, lá no alto, que tal aprender agora alguns comandos divertidos do Unix?

1. Se você utiliza o Linux , abra o terminal e execute o comando sudo apt-get install cmatrix , ou para pessoas usuárias de macOS , utilize no terminal brew install cmatrix . Depois, execute o comando cmatrix . Quando estiver se sentindo como o Neo , aperte ctrl+c para voltar ao terminal;

`sudo apt-get install cmatrix`</br>
`cmatrix`</br>
![cmatrix](https://www.linux.com/images/stories/55137/matrix.png)



2. No sistema Linux , execute o comando sudo apt-get install fortune , ou no macOS brew install fortune , e após a instalação, crie um arquivo de texto chamado fortune.txt que contenha a sua sorte do dia. Utilize apenas uma linha de comando. Dica: use o comando fortune , e o operador > ;



3. Conte quantas palavras tem a frase da sua sorte do dia. Dica: use o comando wc ;



4. Execute o comando sudo apt-get install sl em um terminal Linux , ou brew install sl em um terminal macOS . Após a instalação, execute o comando sl . Agora tente sl -F ;



5. No sistema Linux , execute o comando sudo apt-get install cowsay , ou brew install cowsay no macOS . Após a instalação, execute o comando cowsay e algo que você queira falar. Agora faça a vaquinha dizer a frase que está gravada no arquivo fortune.txt ;



6. Descubra os fatores primos usando o comando factor e em seguida o número 42 ;



7. Veja como fica a sua sorte do dia ao contrário. Dica: utilize o comando rev .



8. Execute o comando telnet towel.blinkenlights.nl e espere alguns segundos. Lembre-se que você tem mais exercícios para fazer! 😅
Gostou das curiosidades? Nos Recursos Adicionais tem mais alguns comandos divertidos. Confere lá!
