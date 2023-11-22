-- CONTRUTORA
INSERT INTO Construtora (nome, nome_fantasia, codigo, cnpj)
    WITH construtoras AS (
        SELECT 'Isabela Canelas Ett', 'ETTECHNOLOGIES', 1, '12.345.678/0001-90' FROM dual UNION ALL
        SELECT 'Construtora Alfa S.A.', 'Alfa Incorporações', 10, '23.456.789/0001-01' FROM dual
    )
    SELECT * FROM construtoras;


-- TELEFONE
INSERT INTO Telefone (telefone, id_construtora)
    WITH telefones AS (
        SELECT '(51)3333-3334', 10 FROM dual UNION ALL
        SELECT '(51)3333-3335', 10 FROM dual UNION ALL
        SELECT '(51)3333-3336', 10 FROM dual UNION ALL
        SELECT '(11)8542-1213', 10 FROM dual
    )
    SELECT * FROM telefones;


-- OBRA
INSERT INTO Obra (endereco, nome, codigo, id_construtora)
    WITH obras AS (
        SELECT 'Travessa dos Lagos, 100', 'Condomínio dos Lagos', 115, 10 FROM dual UNION ALL
        SELECT 'Avenida Rio Grande, 22', 'Condomínio Araras', 116, 10 FROM dual UNION ALL
        SELECT 'Rua Marquês de Paranágua, 190', 'Condomínio Eldorado V', 117, 1 FROM dual
    )
    SELECT * FROM obras;

-- TRABALHADOR
INSERT INTO Trabalhador (nome, salario, cpf, id_obra)
    WITH trabalhadores AS (
        -- Obra 115
        SELECT 'José Chaves', 2200.00, '101.101.101-34', 115 FROM dual UNION ALL
        SELECT 'Pedro Passos', 3502.18, '102.102.102-91', 115 FROM dual UNION ALL
        SELECT 'Maria Aparecida', 2800.87, '103.103.103-18', 115 FROM dual UNION ALL
        SELECT 'Augusto Dias', 1700.42, '106.106.106-82', 115 FROM dual UNION ALL
        SELECT 'Beatriz Almeida', 3700.24, '107.107.107-75', 115 FROM dual UNION ALL

        -- Obra 116
        SELECT 'Carlos Dutra', 3100.00, '104.104.104-52', 116 FROM dual UNION ALL
        SELECT 'Mário Pires', 4323.29, '105.105.105-85', 116 FROM dual UNION ALL
        SELECT 'Márcia Almeida', 2456.17, '108.108.108-94', 116 FROM dual UNION ALL
        SELECT 'Gomes Junior', 2129.98, '109.109.109-94', 116 FROM dual UNION ALL
        SELECT 'Alfredo Luz', 3756.87, '110.110.110-00', 116 FROM dual UNION ALL

        -- Obra 117
        SELECT 'Julia Almeida', 1500.00, '111.111.111-98', 117 FROM dual UNION ALL
        SELECT 'Laís Silva', 4976.17, '112.112.112-01', 117 FROM dual UNION ALL
        SELECT 'Linda Santos', 2978.77, '113.113.113-21', 117 FROM dual UNION ALL
        SELECT 'Vitoria Santana', 3560.47, '114.114.114-41', 117 FROM dual UNION ALL
        SELECT 'Camila Freitas', 4500.90, '115.115.115-32', 117 FROM dual
    )
    SELECT * FROM trabalhadores;

-- CATEGORIA
INSERT INTO Categoria (descricao, codigo)
    WITH categorias AS (
        SELECT 'Concretagem', 1 FROM dual UNION ALL
        SELECT 'Acesso e Elevação', 2 FROM dual UNION ALL
        SELECT 'Geradores e Compressores', 3 FROM dual UNION ALL
        SELECT 'Andaimes', 4 FROM dual UNION ALL
        SELECT 'Ferramenta Elétrica', 5 FROM dual
    )
    SELECT * FROM categorias;

-- EQUIPAMENTO
INSERT INTO Equipamento (nome, valor, codigo, id_categoria)
    WITH equipamentos AS (
        SELECT 'Betoneira', 100.00, 301, 1 FROM dual UNION ALL
        SELECT 'Cortadora de Piso', 10.00, 302, 1 FROM dual UNION ALL
        SELECT 'Mangote', 30.50, 303, 1 FROM dual UNION ALL
        SELECT 'Guincho', 250.00, 304, 2 FROM dual UNION ALL
        SELECT 'Gerador', 451.00, 305, 3 FROM dual UNION ALL
        SELECT 'Piso Metálico', 150.00, 306, 4 FROM dual UNION ALL
        SELECT 'Furadeira de bancadao', 65.00, 307, 5 FROM dual UNION ALL
        SELECT 'Parafusadeira', 37.00, 308, 5 FROM dual UNION ALL
        SELECT 'Plaina', 25.00, 309, 5 FROM dual
    )
    SELECT * FROM equipamentos;

-- ALOCA
INSERT INTO Aloca (id_obra, id_equipamento, data_inicio, data_fim)
    WITH locacoes AS (
        SELECT 115, 301, TO_DATE('07/03/2022', 'DD/MM/YYYY'), TO_DATE('28/03/2022', 'DD/MM/YYYY') FROM dual UNION ALL
        SELECT 115, 304, TO_DATE('10/04/2022', 'DD/MM/YYYY'), TO_DATE('27/04/2022', 'DD/MM/YYYY') FROM dual UNION ALL
        SELECT 115, 305, TO_DATE('10/03/2022', 'DD/MM/YYYY'), TO_DATE('11/03/2022', 'DD/MM/YYYY') FROM dual UNION ALL
        SELECT 115, 309, TO_DATE('01/05/2022', 'DD/MM/YYYY'), TO_DATE('31/05/2022', 'DD/MM/YYYY') FROM dual
    )
    SELECT * FROM locacoes;