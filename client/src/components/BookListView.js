import Table from "./Table";
const axios = require('axios')

export default function BookListView(props){
     // Delete books from the server
     const deleteBook = (bookId) => {
         console.log('........')
        axios.delete('http://localhost:3005/books',{bookId:bookId})
            .then(resp => {
                //console.log(resp.data)
                //setData(resp.data)
            })
    }
    return(
        <div style={styles.container}>
            <Table rows={props.data} deleteBook={deleteBook}/>
        </div>
    );
}

const styles={
    container:{
        display:'inline-block'
    }
}