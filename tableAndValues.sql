
CREATE TABLE project(
idproject INT NOT NULL AUTO_INCREMENT PRIMARY KEY ,
name VARCHAR (1024) NOT NULL,
slogan VARCHAR (1024) NOT NULL,
repo VARCHAR (1024) NOT NULL,
demo VARCHAR (1024) NOT NULL,
technologies VARCHAR (1024),
descproject VARCHAR(1024),
image LONGTEXT NOT NULL
);

CREATE TABLE author(
idautor INT NOT NULL,
autor VARCHAR (45) NOT NULL,
job VARCHAR(45),
photo LONGTEXT NOT NULL

);
INSERT INTO project(name, slogan, repo, demo, technologies, descproject, image)
VALUES('The ninety developers','Estás en la web correcta','https://github.com/Adalab/project-promo-t-module-3-team-2.git','https://github.com/Adalab/project-promo-t-module-3-team-2.git', 'React', 'Esta pagina web nos permite crear una tarjeta digital para hablar sobre un proyecto personal.', 'ruta_imagen1.jpg');

INSERT INTO project(name, slogan, repo, demo, technologies, descproject, image)
VALUES('Awesome profile-cards', 'Awesome Cards', 'https://github.com/Awesome profile-cards', 'https://github.com/Awesome profile-cards', 'mobile phone', 'Aplicación web que nos permite crear una tarjeta de visita personalizada', 'ruta_imagen1.jpg');


INSERT INTO author(idautor,autor, job, photo)
VALUES(1, 'Mari Camen', 'Web DEveloper', 'ruta_maricarmen.jpg');

INSERT INTO author(idautor, autor, job, photo)
VALUES(2, 'Paquita', 'Web-Dev', 'https://www.beatsource.com/release/paquita-la-del-barrio/452045');

alter table project add column fk_author int;
alter table project add foreign key (fk_author ) references author (idauthor);
describe project;

update project set fk_author = 1 where idproject = 1;
select * from projects where name like "paquita";



select name, descproject , author
from author inner join project on fk_author = idauthor;
