import { Link } from "react-router-dom";
const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Sorry !!! </h2>
            <p>page cannot be found </p>
            <div className="not-class">
                <button className="not-found-link">
                    <Link to='/' className="not-link">Back to home page ...</Link>
                </button>
            </div>
        </div>
     );
}
 
export default NotFound;