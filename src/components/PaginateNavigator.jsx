export default function PaginateNavigator(){
    return (
        <div className="row mt-5">
            <div className="col d-flex justiy-content-center align-items-center">
                <nav aria-label="...">
                    <ul className="pagination" style={{cursor: "pointer"}}>
                        <li className="page-item">
                            <a className="page-link">Previous</a>
                        </li>
                        <li className="page-item active">
                            <a className="page-link">1</a>
                        </li>
                        <li className="page-item">
                            <a className="page-link">2</a>
                        </li>
                        <li className="page-item">
                            <a className="page-link">3</a>
                        </li>
                        <li className="page-item">
                            <a className="page-link">Next</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}