```
        ---------------------------- EXERCÍCIO 1 -------------------------

   A) ALTER TABLE Actor DROP COLUMN salary; Esse comando faz com que na tabela Actor apaga a coluna salary;

   B) ALTER TABLE Actor MODIFY gender VARCHAR(6); Esse comando faz com que na tabela Actor modifica a quantidade de caracters na coluna gender

   C) ALTER TABLE actor MODIFY gender VARCHAR(100); 

        ---------------------------- EXERCÍCIO 2 --------------------------

  A) UPDATE actor SET name = "vitor duarte passo", birth_date = "2003-06-17" WHERE id = "003";  Comando para atualizar a tabela, nesse caso estou atualizando o nome e a data de nascimento

  B) UPDATE actor SET name = "JULIANA PAES" WHERE id = "005"; Atualizando o nome pra caixa alta, UPDATE actor SET name = "juliana paes" WHERE id = "005"; Atualizando o nome pra caixa baixa novamente. 

  C) UPDATE actor SET name = "caila silva rocha", salary = 320000,  birth_date = "2004-09-25", gender = "male" WHERE id = 005; Atualiza toda a coluna da key 005

  D) UPDATE actor SET name = "simone" WHERE id = 008; Esse meu id não existe na minha tabela, o erro que aparece pra mim, é que WHERE usa a coluna key, não é possível usar o acesso de intervalo no índice 'PRIMARY' devido à conversão de tipo ou agrupamento no campo 'id'   

    --------------------------------- EXERCÍCIO 3 -------------------------



A) DELETE FROM actor WHERE name = "Fernanda Montenegro"; comando para deletar uma coluna pelo nome

B) DELETE FROM actor WHERE gender = "male" AND salary > 1000000; Se encontrar o mole e um salario maior que 1000000 a coluna encontrada sera removida


   --------------------------------- EXERCÍCIO 4 -------------------------

   A) SELECT MAX(salary) FROM actor; essa query pega o maior sálario

   B) SELECT MIN(salary) FROM actor; Essa query pega o menor sálario

   C) SELECT COUNT(*) FROM actor WHERE gender = "famele"; query para pegar a quantidade de atriz

   D) SELECT SUM(salary) FROM actor; Essa query soma todo salário da coluna salary

    --------------------------------- EXERCÍCIO 5 -------------------------

    A) SELECT COUNT(*), gender FROM actor GROUP BY gender, Essa query pega a quantidade e o grupo que pertece, no caso do meu teste me deu a quantidade e nome do grupo

    B) SELECT id, name FROM actor ORDER BY name DESC; Esse query pega id e o nome dos atores em ordem decrescente alfabética

    C) SELECT * FROM actor ORDER BY salary; Essa query retorna o salário do menor pro maior

    D) SELECT * FROM actor ORDER BY salary DESC LIMIT 3; Essa query retorna os três primeiros maiores salários;

    E) SELECT AVG(salary), gender FROM actor GROUP BY gender; Essa query retorna a média do salário do grupo gender;

     --------------------------------- EXERCÍCIO 6 -------------------------

     A) 