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

CREATE TABLE recycleprofile (
    recycle_id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    user_id INT not null,
    qntplastico BIGINT,
    qntvidro BIGINT,
    qntpapel BIGINT,
    qntmetal BIGINT,
    foreign key (user_id) references users (id)
);

INSERT INTO recycleprofile (qntplastico, qntmetal, qntpapel, qntvidro, user_id) VALUES(10, 5, 10, 7, 21);