CREATE TABLE Construtora (
    nome VARCHAR(50) NOT NULL,
    nome_fantasia VARCHAR(50),
    codigo INT PRIMARY KEY,
    cnpj CHAR(18) NOT NULL
);

CREATE TABLE Telefone (
    telefone CHAR(13),
    id_construtora INT,
    PRIMARY KEY (telefone, id_construtora),
    FOREIGN KEY(id_construtora) REFERENCES Construtora (codigo)
);

CREATE TABLE Obra (
    endereco VARCHAR(200) NOT NULL,
    nome VARCHAR(50) NOT NULL,
    codigo INT PRIMARY KEY,
    id_construtora INT NOT NULL,
    FOREIGN KEY(id_construtora) REFERENCES Construtora (codigo)
);

CREATE TABLE Trabalhador (
    nome VARCHAR(50) NOT NULL,
    salario FLOAT NOT NULL,
    cpf CHAR(14) PRIMARY KEY,
    id_obra INT NOT NULL,
    FOREIGN KEY(id_obra) REFERENCES Obra (codigo)
);

CREATE TABLE Categoria (
    descricao VARCHAR(200) NOT NULL,
    codigo INT PRIMARY KEY
);

CREATE TABLE Equipamento (
    nome VARCHAR(50) NOT NULL,
    valor FLOAT NOT NULL,
    codigo INT PRIMARY KEY,
    id_categoria INT NOT NULL,
    FOREIGN KEY(id_categoria) REFERENCES Categoria (codigo)
);

CREATE TABLE Aloca (
    id_obra INT,
    id_equipamento INT,
    data_inicio DATE,
    data_fim DATE,
    PRIMARY KEY(id_obra, id_equipamento),
    FOREIGN KEY(id_obra) REFERENCES Obra (codigo),
    FOREIGN KEY(id_equipamento) REFERENCES Equipamento (codigo)
);
