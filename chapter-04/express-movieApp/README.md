# Movies App Ver 1
## Objectives
- Mengerti cara membuat API menggunakan express
## Directions
Buatlah sebuah web sederhana menggunakan express sebagai framework dan ejs sebagai view engine dengan routingan sebagai berikut:

| Path          | Method   | Output                                                                                           |
| :---          |  :----:  |   :---                                                                                           |
| /movies       | GET      | list favorite movies, menampilkan id, movie, dan rating                                              |
| /movies/:id    | GET      | detail todo dengan ID = id dan menampilkan movie, review, dan rating          |
| /movies        | POST     | menambahkan movie dengan data userId, movie, review, dan rating (ID auto-generate)           |
| /movies/:id    | PUT      | mengubah data movie (yang bisa diubah hanya review atau ratingnya saja)   | 
| /movies/:id    | DELETE   | menghapus movies dengan ID tertentu                                                                    |


## Notes
- Pisahkanlah parameter function pada app.method ke dalam sebuah file sebagai sebuah controller
- Error handling menggunakan middleware