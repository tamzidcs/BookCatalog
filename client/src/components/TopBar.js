import { Link } from "react-router-dom";

export default function TopBar() {
    return (
        <div style={styles.topbar}>
            <div style={styles.topbarLinks}><Link to='/'>Home</Link></div>
            <div style={styles.topbarLinks}><Link to='/AddNewBook'>Add New Book</Link></div>
            <div style={styles.topbarLinks}><Link to='/DisplayBooks'>DisplayBooks</Link></div>
        </div>
    );
}

const styles = {
    topbar: {
        color: 'white',
        backgroundColor: 'lightgray',
        width: '100vw',
        height: '9vh',
        display: 'flex'
    },
    topbarLinks:
    {
        backgroundColor: 'lightgray',
        padding: '1vw',
        display: 'inline-block'
    }
}

