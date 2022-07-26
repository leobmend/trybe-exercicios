# EXERCÍCIOS

Como base, utilizaremos a aplicação *school-poo* do dia anterior, refatorando-o.

Nosso software escolar desenvolvido nos exercícios dos dias anteriores ainda não está completo, e com os conhecimentos que adquirimos nesse dia podemos deixá-lo ainda mais conciso dentro do paradigma de orientação a objetos. Por isso, iremos mais uma vez refatorar algumas partes do nosso sistema aplicando os novos conceitos de polimorfismo apresentados no dia de hoje e criar novas funcionalidades.

## Exercício 1: 

A classe pessoa no nosso sistema hoje é uma classe comum que pode ser instanciada, ou seja, conseguimos criar novas pessoas diretamente. Porém isso não faz sentido, já que nossa classe pessoa é apenas uma abstração para ser herdada por outras classes do sistema como pessoa estudante e pessoa professora. Refatore nossa classe pessoa de forma que não possamos mais criar diretamente instâncias de pessoa, somente das classes que herdam dela.

## Exercício 2:

Notamos também que tanto nossa classe de pessoa estudante quanto a classe de pessoa professora possuem um método parecido, que retorna uma string única gerada para servir de identificador daquele tipo de pessoa (respectivamente, a matrícula e o registro). Para termos mais reuso de código e adequar melhor nosso sistema à POO:

A: Transforme nossa interface de pessoa funcionária em uma classe de pessoa funcionária que herda da nossa classe pessoa.

B: Faça com que nossa classe de pessoa professora herde da classe de pessoa funcionária.

C: Por último crie uma nova interface que será implementada por nossas classes pessoa estudante e pessoa funcionária que dirá que a instância delas deve ser matriculável.

Nossa nova modelagem para esses componentes ficará assim:

```
`Interface`: Enrollable
`Attributes`:
    - enrollment: identificador único da matrícula
`Methods`:
    - generateEnrollment: retorna uma string única gerada como matrícula
Copiar
`Class`: Student
`Extends`: Person
`Implements`: Enrollable
`Attributes`:
    - examsGrades: notas de provas
    - worksGrades: notas de trabalhos
`Methods`:
    - Getters/Setters
    - constructor: deve receber como parâmetro nome e data de nascimento e preencher a matrícula automaticamente
    - sumGrades: retorna a soma das notas da pessoa estudante
    - sumAverageGrade: retorna a média das notas da pessoa estudante
`Validations`:
    - A matrícula deve possuir no mínimo 16 caracteres
    - A pessoa estudante deve possuir no máximo 4 notas de provas
    - A pessoa estudante deve possuir no máximo 2 notas de trabalhos
```

```
`Class`: Employee
`Extends`: Person
`Implements`: Enrollable
`Attributes`:
    - salary: valor do salário
    - admissionDate: data de admissão
`Methods`:
    - Getters/Setters
    - constructor: deve receber como parâmetro nome, data de nascimento, salário e preencher a matrícula automaticamente
`Validations`:
    - A matrícula deve possuir no mínimo 16 caracteres
    - O salário não pode ser negativo.
    - A data de admissão não pode ser no futuro
```

```
`Class`: Teacher
`Extends`: Employee
`Attributes`:
    - subject: a disciplina lecionada pela pessoa professora
`Methods`:
    - Getters/Setters
    - constructor: deve receber como parâmetro nome, data de nascimento, salário e a disciplina
`Validations`:
    - A matrícula deve possuir no mínimo 16 caracteres
    - O salário não pode ser negativo.
    - A data de admissão não pode ser no futuro
```

Para testar crie duas pessoas estudantes e duas pessoas professoras.

## Exercício 3:

Vamos agora melhorar um pouco nossa classe de pessoa estudante. Para isso vamos criar uma nova classe cujas as instâncias representam as avaliações aplicadas pela escola e a nossa pessoa estudante agora passará a ter como propriedade uma única lista que carrega os resultados das avaliações que ela realizou. A nossa classe avaliações conterá a pontuação da avaliação, a pessoa professora e o tipo de avaliação. A nossa classe de resultado de avaliação conterá a avaliação e a nota da pessoa estudante.

```
`Class`: Evaluation
`Attributes`:
    - score: nota da avaliação
    - teacher: pessoa professora
    - type: tipo da avaliação
`Methods`:
    - Getters/Setters
    - constructor: deve receber como parâmetro a pontuação, a pessoa professora e o tipo
`Validations`:
    - O tipo da avaliação aceita os seguintes valores: "prova" e "trabalho"
    - A pontuação não pode ser negativa
    - A pontuação caso a avaliação seja do tipo "prova" não pode passar de 25 pontos
    - A pontuação caso seja do tipo "trabalho" não pode passar de 50 pontos
```

```
`Class`: EvaluationResult
`Attributes`:
    - evaluation: a avaliação
    - score: a nota da pessoa estudante
`Methods`:
    - Getters/Setters
    - constructor: deve receber como parâmetro a avaliação e a nota da pessoa estudante
`Validations`:
    - A pontuação não pode ser negativa
    - A pontuação não pode ser maior que a pontuação da avaliação.
```

```
`Class`: Student
`Extends`: Person
`Implements`: Enrollable
`Attributes`:
    - evaluationsResults: lista de resultados de avaliações
`Methods`:
    - Getters/Setters
    - constructor: deve receber como parâmetro nome e data de nascimento e preencher a matrícula automaticamente
    - sumGrades: retorna a soma das notas da pessoa estudante
    - sumAverageGrades: retorna a média das notas da pessoa estudante
    - addEvaluationResult: adiciona um novo resultado de avaliação a lista
`Validations`:
    - A matrícula deve possuir no mínimo 16 caracteres
```
