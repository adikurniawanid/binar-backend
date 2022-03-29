# E-Commerce Application

## Objectives

- Memahami cara mendesain database
- Membuat query database (DDL dan DML)

## Case

Buatlah desain (ERD) dan DDL database sebuah e-commerce yang memiliki data sebagai berikut:
(Tabel yang wajib ada: produk, penjual, kategori)

|          Nama Barang          |  Kategori  |  Penjual  | Stok |  Harga  |
| :---------------------------: | :--------: | :-------: | :--: | :-----: |
|       Teh botol 100 ml        |  Makanan   | NutriMart |  10  |  5000   |
|       Type C Jack Audio       | Elektronik |  EcMart   |  10  | 100000  |
|       Coca Cola 300 ml        |  Makanan   | FoodMart  |  10  |  7000   |
|        FITBIT Charge 5        | Elektronik |  EcMart   |  10  | 500000  |
| Baju Kaos Hitam Lengan Pendek |  Fashion   | FashStore |  10  |  30000  |
|         Fanta 400 ml          |  Makanan   | FoodMart  |  10  |  3000   |
|    Choco Chip Sereal Simba    |  Makanan   | NutriMart |  10  |  10000  |
|   Kurma Sukari 1 kg Premium   |  Makanan   | FoodMart  |  10  |  50000  |
|      Inone Powerbank Z14      | Elektronik |  EcMart   |  10  | 1000000 |
|        Teh Pucuk Harum        |  Makanan   | NutriMart |  10  |  4000   |
|         Charger Aukey         | Elektronik |  EcMart   |  10  | 300000  |
|         Apple Airpods         | Elektronik |  EcMart   |  10  | 1000000 |

### Link ERD

![chapter3 drawio](https://user-images.githubusercontent.com/72638249/159491464-0edd6534-53a9-43b9-ac36-56eb668af583.png)

```
https://drive.google.com/file/d/1p6jIHbB6XxAM6GZDbAINKPwPd_rdX1ib/view?usp=sharing
```

### DDL

```postgresql
CREATE DATABASE "chapter3_e-commerce";

CREATE TABLE categories
(
    id UUID DEFAULT GEN_RANDOM_UUID() NOT NULL CONSTRAINT categories_pk PRIMARY KEY ,
    name VARCHAR(100) NOT NULL
);

CREATE TABLE sellers
(
    id UUID DEFAULT GEN_RANDOM_UUID() NOT NULL CONSTRAINT sellers_pk PRIMARY KEY ,
    name VARCHAR(100) NOT NULL
);

CREATE TABLE products
(
    id UUID DEFAULT GEN_RANDOM_UUID() NOT NULL CONSTRAINT table_name_pk PRIMARY KEY ,
    name VARCHAR(100) NOT NULL,
    stock INTEGER DEFAULT 0 NOT NULL CONSTRAINT stock_non_negative CHECK (stock >= 0),
    price NUMERIC NOT NULL CONSTRAINT price_non_negative CHECK (price >= 0),
    category_id UUID NOT NULL CONSTRAINT products_categories_id_fk REFERENCES categories ON UPDATE RESTRICT ON DELETE RESTRICT,
    seller_id uuid NOT NULL CONSTRAINT products_sellers_id_fk REFERENCES sellers ON UPDATE RESTRICT ON DELETE RESTRICT
);
```

### DML

#### Menambah data di kategori (berdasarkan tabel di atas)

````postgresql
INSERT INTO categories (name) VALUES ('Makanan'),
                                     ('Elektronik'),
                                     ('Fashion');

#### Menambah data penjual (berdasarkan tabel di atas)

```postgresql
INSERT INTO sellers (name) VALUES ('NutriMart'),
                                  ('EcMart'),
                                  ('FoodMart'),
                                  ('FashStore');
````

#### Menambah data produk (berdasarkan tabel di atas)

```postgresql
INSERT INTO products (name, stock, price, category_id, seller_id) VALUES
('Teh botol 100 ml', 10, 5000, '6a8c704a-c7d3-43f3-8498-6892371e629b', '8855c4f0-2a94-42b9-81fb-12ee0f3bee12'),
('Type C Jack Audio', 10, 100000, 'faf9a881-d63b-45b3-90e3-10a0e5493742', '7b38aea9-16fa-4da2-abc6-5871f6b0e1e1'),
('Coca Cola 300 ml', 10, 7000, '6a8c704a-c7d3-43f3-8498-6892371e629b', '6270c7ad-d9b7-400b-85bd-088af318dc45'),
('FITBIT Charge 5', 10, 500000, '6a8c704a-c7d3-43f3-8498-6892371e629b', '7b38aea9-16fa-4da2-abc6-5871f6b0e1e1'),
('Baju Kaos Hitam Lengan Pendek', 10, 30000, 'fd2147ef-54d3-49c0-a055-2065b235a130', '177adde2-342d-411c-8af7-300dd60de076'),
('Fanta 400 ml', 10, 3000, '6a8c704a-c7d3-43f3-8498-6892371e629b', '6270c7ad-d9b7-400b-85bd-088af318dc45'),
('Choco Chip Sereal Simba', 10, 10000, '6a8c704a-c7d3-43f3-8498-6892371e629b', '8855c4f0-2a94-42b9-81fb-12ee0f3bee12'),
('Kurma Sukari 1 kg Premium', 10, 50000, '6a8c704a-c7d3-43f3-8498-6892371e629b', '6270c7ad-d9b7-400b-85bd-088af318dc45'),
('Inone Powerbank Z14 ', 10, 1000000, 'faf9a881-d63b-45b3-90e3-10a0e5493742', '7b38aea9-16fa-4da2-abc6-5871f6b0e1e1'),
('Teh Pucuk Harum', 10, 4000, '6a8c704a-c7d3-43f3-8498-6892371e629b', '8855c4f0-2a94-42b9-81fb-12ee0f3bee12');
```

#### Ubahlah data stok Teh Botol 100 ml menjadi 1 buah

```postgresql
UPDATE products
SET stock = 1
WHERE id = '5813d85b-e3ab-4fe1-8de0-40a93441ba2f';
```

#### Ubahlah data nama 'Charger Aukey' menjadi 'CHARGER AUKEY'

```postgresql
UPDATE products
SET name = 'CHARGER AUKEY'
WHERE id = 'cba7f9aa-d7c8-4e72-a636-3886c276d950';
```

#### Hapuslah data Charger Aukey

```postgresql
DELETE FROM products
WHERE id = 'cba7f9aa-d7c8-4e72-a636-3886c276d950'
```

#### Tampilkanlah data sebagai berikut

|          Nama Barang          |  Kategori  |  Penjual  | Stok |  Harga  |
| :---------------------------: | :--------: | :-------: | :--: | :-----: |
|       Teh botol 100 ml        |  Makanan   | NutriMart |  10  |  5000   |
|       Type C Jack Audio       | Elektronik |  EcMart   |  10  | 100000  |
|       Coca Cola 300 ml        |  Makanan   | FoodMart  |  10  |  7000   |
|        FITBIT Charge 5        | Elektronik |  EcMart   |  10  | 500000  |
| Baju Kaos Hitam Lengan Pendek |  Fashion   | FashStore |  10  |  30000  |
|         Fanta 400 ml          |  Makanan   | FoodMart  |  10  |  3000   |
|    Choco Chip Sereal Simba    |  Makanan   | NutriMart |  10  |  10000  |
|   Kurma Sukari 1 kg Premium   |  Makanan   | FoodMart  |  10  |  50000  |
|      Inone Powerbank Z14      | Elektronik |  EcMart   |  10  | 1000000 |
|        Teh Pucuk Harum        |  Makanan   | NutriMart |  10  |  4000   |
|         Charger Aukey         | Elektronik |  EcMart   |  10  | 300000  |
|         Apple Airpods         | Elektronik |  EcMart   |  10  | 1000000 |

```postgresql
SELECT p.name AS  "Nama Barang",
       c.name AS "Kategori",
       s.name AS "Penjual",
       p.stock AS "Stok",
       p.price AS "Harga"
FROM products p
INNER JOIN categories c on p.category_id = c.id
INNER JOIN sellers s on p.seller_id = s.id;
```

### Tampilkanlah data sebagai berikut

|  Kategori  | Harga Produk Minimum | Harga Produk Maksimum |
| :--------: | :------------------: | :-------------------: |
| Elektronik |        100000        |        1000000        |
|  Fashion   |        30000         |         30000         |
|  Makanan   |         3000         |         50000         |

```postgresql
SELECT c.name AS "Kategori",
       MIN(p.price) AS "Harga Produk Minimum",
       MAX(p.price) AS "Harga Produk Maksimum"
FROM products p
INNER JOIN categories c on p.category_id = c.id
GROUP BY 1
ORDER BY 1
```
