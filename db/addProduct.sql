INSERT INTO product (name, price, img)
-- VALUES (${name},${price},${img})
VALUES ( $1, $2,$3)

-- RETURNING *;
-- SELECT * FROM product;