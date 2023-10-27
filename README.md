# Crud para gerenciamento de funcionários

##  Sobre
Este é um projeto de uma API para cadastro, edição, listagem e deleção de funcionários.

## Tecnologias utilizadas
- Next.js - 13.5.6
- PostgreSQL - 14.3

## Como executar o projeto
Primeiramente clone o repositório: 
```bash
$ git clone https://github.com/marimgabi/crud-func.git
```
Acesse a pasta raiz do projeto `crud-func` na sua máquina e utilize o comando abaixo para instalar as dependências:
```bash
$ npm install
```
Para este projeto será necessária a criação de um banco de dados PostgreSQL localmente. A SQL de criação do banco está disponível na pasta `crud-func/database/crud-func.sql`. O banco a ser criado possui apenas uma tabela no schema `public` denominada `funcionario`. Segue abaixo o script de criação da tabela:
```bash
CREATE  TABLE  IF  NOT  EXISTS public.funcionario(
	id integer  NOT NULL  DEFAULT nextval('funcionario_id_seq'::regclass),
	name  character varying(200) COLLATE pg_catalog."default",
	email character varying(500) COLLATE pg_catalog."default",
	department character varying(200) COLLATE pg_catalog."default",
	date  timestamp with time zone,
	CONSTRAINT funcionario_pkey PRIMARY KEY (id)
)
```
Para conectar a aplicação ao banco criado, coloque na variável `DATABASE_URL` no arquivo `.env` do seu projeto a url do banco local.
```bash
DATABASE_URL="postgres://postgres:[SENHA]@localhost:5432/[NOME DO BANCO]?schema=public"
```
O serviço estará disponível na porta 3000, acesse [localhost:3000](http://localhost:3000).

## Endpoints

A API conta com duas rotas principais, sendo elas:
- funcionario (GET, POST)
```bash
# GET
$ curl -X GET http://localhost:3000/api/funcionario

# POST
$ curl -X POST -H "Content-Type: application/json" -d '{"name":"nome","email":"email", "department":"department"}'
```
- funcionario/{id} (GET, PUT, DELETE)
```bash
# PUT
$ curl -X PUT -H "Content-Type: application/json" -d '{"id":1, "name":"nome","email":"email", "department":"department"}'

# GET
$ curl -X GET http://localhost:3000/api/funcionario/{id}

# DELETE
$ curl -X DELETE http://localhost:3000/api/funcionario/{id}
``` 