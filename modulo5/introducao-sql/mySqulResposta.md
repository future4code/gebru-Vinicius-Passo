```
Execício 1 

a) O float é forma de representar um não inteiro 

b) SHOW DATABASES, mostra a informação do schema do usuário, SHOW TABLES mostra o nome da tabela

c) Mostra o detalhe da tabela de actor, e do tipo do que casa chave representar

### 
SELECT * FROM actor;

Exercício 2

a) Sucesso, pois a quantidade de item é a mesma passada na query

b) Da erro pq o que estava passando não combina com quantidade de item na tabela

c) A query espera um id, name, salary, birth_date, gender, e só é passado
id, name, salary, isso ocerra um error porque pq item tem que ser igual a quantidade da query
a solução é INSERT INTO actor(id, name, salary, birth_date, gender)
VALUE("004",  "Fernanda Montenegro",  300000,  "1929-10-19", "female");

d) É um erro parecido das as questão anterior, o campo que falta é do salary

e) todos os parâmento foram respeito

###
 Exercício 3

 a) SELECT id, name FROM actor WHERE gender = "female", retorna o id nome da atriz;

 b) SELECT name, salary FROM actor WHERE name = "Tony Ramos";

 c) SELECT * FROM actor WHERE gender = "invalid";

 d) SELECT id, name, salary FROM actor  WHERE salary < 500000;

 e) SELECT id, nome from Actor WHERE id = "002" vai da erro porque o campo nome não existe
 a forma correta portando é SELECT id, name from actor WHERE id = "002" 
 
```