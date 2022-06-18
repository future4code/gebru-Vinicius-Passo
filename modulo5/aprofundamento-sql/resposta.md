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

B) 