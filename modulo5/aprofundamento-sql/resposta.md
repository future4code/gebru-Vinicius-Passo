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

     A) ALTER TABLE Movie ADD playing_limit_date DATE; Essa query adiciona mais um novo parâmetro

     B) UPDATE Movie SET avalicao = 9.5 WHERE id = "004"; Esse query passa aceitar voleres não inteiro 

     C) UPDATE Movie SET playing_limit_date = "2015-12-31" WHERE id = "004"; Essa query atualiza o tempo que de saida desse filme

     D) DELETE FROM Movie WHERE id = "001"; Essa query deleta o filme recenbendo um id, no meu caso esta deletando o meu filme que esta na id 1

      --------------------------------- EXERCÍCIO 7 -------------------------

      A) SELECT COUNT(*) FROM Movie WHERE avalicao > 7.5; Essa query mostra a quantidade de filmes com avaliação maior do que 7.5;

      B) SELECT AVG(avalicao) FROM Movie; Essa query mostra a média das avaliações dos filmes
      no meu caso a resposta foi 9.1

      C) SELECT COUNT(*) FROM Movie WHERE playing_limit_date  > CURDATE(); 

      D) SELECT COUNT(*) FROM Movie WHERE data_de_lancamento > CURDATE();

      E) SELECT MAX(avalicao) FROM Movie;

      F) SELECT MIN(avalicao) FROM Movie;

      --------------------------------- EXERCÍCIO 8 -------------------------

      A) SELECT * FROM Movie ORDER BY titulo 

      B) SELECT * FROM Movie ORDER BY titulo DESC LIMIT 5

      C) SELECT * FROM Movie WHERE data_de_lancamento < CURDATE() ORDER BY data_de_lancamento DESC LIMIT 3

      D) SELECT * FROM Movie ORDER BY avalicao DESC LIMIT 3