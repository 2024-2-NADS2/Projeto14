MATERIAIS
METAL
PLASTICO
PAPEL
VIDRO
CREATE TABLE materiais ( 
    materialid INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    type VARCHAR(255) UNIQUE
);

INSERT INTO materiais(type) VALUES('plastico');
INSERT INTO materiais(type) VALUES('vidro');
INSERT INTO materiais(type) VALUES('metal');
INSERT INTO materiais(type) VALUES('papel');

CREATE TABLE userprofile (
    profile_email VARCHAR(255) PRIMARY KEY,
    qntplastico BIGINT DEFAULT 0,
    qntvidro BIGINT DEFAULT 0,
    qntpapel BIGINT DEFAULT 0,
    qntmetal BIGINT DEFAULT 0,
    foreign key (profile_email) references users (user_email)
);

INSERT INTO userprofile (qntplastico, qntmetal, profile_email) VALUES(10, 5, 'jb@test.com');


CREATE TABLE ecopontos