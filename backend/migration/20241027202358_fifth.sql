-- +goose Up
ALTER TABLE products
ADD COLUMN sale boolean;



-- +goose Down


ALTER TABLE products
DROP COLUMN IF EXISTS sale;
