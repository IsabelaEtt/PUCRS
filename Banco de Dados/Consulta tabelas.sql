-- Selecionar CPFs e nomes dos trabalhadores que ganham mais do que 2.500,00;
SELECT cpf, nome
FROM Trabalhador
WHERE salario > 2500.00


-- Selecionar nomes e salários dos trabalhadores da empresa ALFA, ordenados em ordem alfabética crescente;
SELECT t.nome, t.salario
FROM Trabalhador t
    INNER JOIN Obra o ON o.codigo = t.id_obra
    INNER JOIN Construtora c ON c.codigo = o.id_construtora
WHERE c.nome = 'Construtora Alfa S.A.'
ORDER BY t.nome ASC


-- Selecionar o total gasto em valores de diárias em uso de equipamentos da obra Condomínio Lagos no mês de março de 2022.
SELECT
    sum(e.valor) AS "Gasto"
FROM Equipamento e
    INNER JOIN Aloca a ON e.codigo = a.id_equipamento
    INNER JOIN Obra o ON o.codigo = a.id_obra
WHERE
    o.nome = 'Condomínio dos Lagos' AND
    a.data_inicio <= TO_DATE('31/03/2022', 'DD/MM/YYYY') AND
    a.data_fim >= TO_DATE('01/03/2022', 'DD/MM/YYYY')

-- Calcular e exibir a folha de pagamento de cada obra. Uma folha de pagamento é determinada pela soma dos salários dos seus trabalhadores.
SELECT
    o.nome AS "Obra",
    SUM(t.salario) AS "Folha de Pagamento"
FROM Trabalhador t
    INNER JOIN Obra o ON o.codigo = t.id_obra
GROUP BY o.nome


-- Selecionar os equipamentos que nunca foram utilizados em nenhuma obra.
SELECT codigo, nome, valor
FROM Equipamento e
WHERE NOT EXISTS (
    SELECT *
    FROM Aloca a
    WHERE a.id_equipamento = e.codigo
)
ORDER BY codigo

-- Listar as categorias de equipamentos utilizadas nas obras da construtora ALFA.
SELECT cat.codigo, cat.descricao
FROM Categoria cat
    INNER JOIN Equipamento e ON e.id_categoria = cat.codigo
    INNER JOIN Aloca a ON a.id_equipamento = e.codigo
    INNER JOIN Obra o ON o.codigo = a.id_obra
    INNER JOIN Construtora c ON c.codigo = o.id_construtora
WHERE c.nome = 'Construtora Alfa S.A.'