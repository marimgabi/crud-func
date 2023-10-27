-- Database: crud_func

-- DROP DATABASE IF EXISTS crud_func;

CREATE DATABASE crud_func
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'Portuguese_Brazil.1252'
    LC_CTYPE = 'Portuguese_Brazil.1252'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;

-- Table: public.funcionario

-- DROP TABLE IF EXISTS public.funcionario;

CREATE TABLE IF NOT EXISTS public.funcionario
(
    id integer NOT NULL DEFAULT nextval('funcionario_id_seq'::regclass),
    name character varying(200) COLLATE pg_catalog."default",
    email character varying(500) COLLATE pg_catalog."default",
    department character varying(200) COLLATE pg_catalog."default",
    date timestamp with time zone,
    CONSTRAINT funcionario_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.funcionario
    OWNER to postgres;