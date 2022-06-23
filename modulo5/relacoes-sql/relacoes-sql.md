```
### EXERCÍCIO 1

A) É uma chave que espera um id já existente para adicionar algum item de outra tabela, ou seja, a partir dessa chave eu consigo criar relações com outra tabela

B) INSERT INTO Rating (id, comment, rate, movie_id)
VALUES("001", "Muito bom", 7, "004");

C) Quando tenta criar um avaliação para um id de filme que não existe, da erro porque ele não encontra um filme que existe na tabela para fazer relação, "uma restrição de chave estrangeira falha"

D) ALTER TABLE Movie DROP COLUMN avalicao;

E) Não é possivel atualizar ou excluir uma linha que está sendo usada em outra tabela, manda a seguinte mensagem "uma restrição de chave estrangeira falha"


### EXERCÍCIO 2

A) Essa tabela esta recendo duas chaves estrangeira, e se relaciona com as tabela actor e movie atrávez do id, e dessa forma temos uma relação de n pra m

B) INSERT INTO MovieCast (movie_id, actor_id)
VALUES("004","003"); CRIEI MAIS DE 6

C) não é possivel, pq o id tem que existir para as tabelas se relacionar

D) Não é possível excluir ou atualizar uma linha pai: uma restrição de chave estrangeira falha
eu preciso excluir o actor primeira  pra depois conseguir excluir ta tabela de MovieCast, enquanto o actor que é o pai não for excuindo não é possivel deletar esse meu id do meu MovieCast

### EXERCÍCIO 3

A) faz a unicao de Rating com Movie.id

B) SELECT m.id as movie_id, r.rate as rating FROM Movie m
INNER JOIN Rating r ON m.id = r.movie_id;

```
