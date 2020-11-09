DROP TABLE IF EXISTS gundams;

CREATE TABLE gundams (
  id BIGINT GENERATED ALWAYS AS IDENTITY,
  name VARCHAR NOT NULL,
  model_number VARCHAR NOT NULL,
  manufacturer VARCHAR NOT NULL,
  weight VARCHAR,
  thrust VARCHAR,
  reactor_output VARCHAR
);