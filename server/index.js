const express = require('express')
const cors = require('cors')
const fs = require('fs')
let {pool: pool,sequelize} = require("./db")
const PORT = process.env.PORT || 3005;

const app = express()
app.use(express.json());
app.use(cors())

let currentBookId=-1

app.get("/books", (req, res) => {
    const query = 'SELECT book.title,book.year,author.name AS author  FROM book,author,book_author WHERE book_author.book_id = book.book_id and book_author.author_id = author.author_id'
    pool.query(query, (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).json(results.rows).end()
    })
})

const  insertIntoBookAuthor = async (bookId,authorId) =>{
    query ="INSERT INTO book_author(book_id,author_id) VALUES('"+bookId+"',"+authorId+")"
    await pool.query(query)
}

const  insertIntoBook = async (title,year) =>{  
    let query = "INSERT INTO book(title,year) VALUES('"+title+"',"+year+") RETURNING *"
    const results = await pool.query(query)
    return results.rows[0].book_id
}

app.post("/books", async(req, res) => { 
    const id = await insertIntoBook(req.body.title,req.body.year)
    await insertIntoBookAuthor(id,req.body.authorId)
    res.status(200).json({msg:'book added'}).end()
})

app.put("/books", async(req, res) => { 
    let query = "UPDATE book set title='"+req.body.title+"'year=2009 where book_id=" +req.body.book_id
    await pool.query(query)
})

app.delete("/books", async(req, res) => { 
    let query = "DELETE FROM book where book_id=" +req.body.book_id
    await pool.query(query)
})


app.listen(PORT, () => {
    console.log(`Server listening  on ${PORT}`);
})

