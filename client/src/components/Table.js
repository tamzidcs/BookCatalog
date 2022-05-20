export default function Table(props) {
    console.log(props)
    return (
        <div style={styles.tableView}>
            <table style={styles.table}>
                <thead>
                    <tr>
                        <th style={styles.tableHeaderStyle}>Title</th>
                        <th style={styles.tableHeaderStyle}>Author</th>
                        <th style={styles.tableHeaderStyle}>Year</th>
                        <th style={styles.tableHeaderStyle}></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.rows.map(rows => (

                            <tr>
                                <td>{rows.title}</td>
                                <td>{rows.author}</td>
                                <td>{rows.year}</td>
                                <td><button onClick={props.deleteBook(53)}>Delete</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

const styles = {
    table: {
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    tableView: {
        display: 'inline-block',
        alignItems: 'center',
        justifyContents: 'center',
        padding: '3vw',

    },
    tableHeaderStyle: {
        padding: '1vw',
        minWidth: '10vw',
        backgroundColor: 'gray'
    },
}