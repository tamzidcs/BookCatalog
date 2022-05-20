import axios from "axios";
import {useState } from "react";
import BookListView from "./BookListView";

export default function DisplayBooks() {
    // List of default books 
    const [data, setData] = useState([])
    // Fetch books from the server
    const getBooks = () => {
        axios.get('http://localhost:3005/books')
            .then(resp => {
                console.log(resp.data)
                setData(resp.data)
            })
    }
    
    return (
        <div>
            <BookListView data={data} />
            <div style={styles.getBooksButtonView}>
                <button style={styles.button} onClick={()=>getBooks()}> Get Books</button>
            </div>
        </div>
    );
}

const styles = {
    getBooksButtonView: {
        display: 'inline-block',
        verticalAlign: 'top',
        padding: '3vw'

    },
    button: {
        padding: '1vw',
    }
}