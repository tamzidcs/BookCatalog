import { useEffect, useState } from "react";
const axios = require('axios')

export default function AddNewBook() {
    const [title, setTitle] = useState("");
    const [year, setYear] = useState("");
    const [authorId, setAuthorId] = useState("");
    // Add new book
    const addNewBook = (event) => {
        event.preventDefault();
        axios.post('http://localhost:3005/books', { title: title, year: year,authorId:authorId })
            .then(resp => {
                console.log(resp)
            })
    }
    return (
        <div style={styles.addNewBook}>
            <form onSubmit={addNewBook}>
                <label>Title</label>
                <input type="text" name="title" value={title} onChange={e => setTitle(e.target.value)} />
                <label>Author</label>
                <input type="text" name="author_id" value={authorId} onChange={e => setAuthorId(e.target.value)} />
                <label>Year</label>
                <input type="text" name="year" value={year} onChange={e => setYear(e.target.value)} />
                <input style={styles.submitButton} type="submit" value='Add' />
            </form>
        </div>
    );
}

const styles = {
    submitButton: {
        width: '10vw',
        marginTop: '1vw'
    },
    addNewBook: {
        display: 'inline-block',
        justifyContent: 'center',
        width: '10vw',
        paddingTop: '5vw'
    }
}