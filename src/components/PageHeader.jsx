import { Link } from "react-router-dom";

export default function PageHeader({children, title, text, addLink}){
    return (
        <div className="row mb-3">
            <div className="col-md-6">
                <h1 className="mb-1">{title}</h1>
                <p className="mb-2">{text}</p>
                {addLink ? (<Link to={addLink} className="btn btn-md btn-success">+ Tambah</Link>) : (<></>)}
            </div>
            <div className="col-md-6">
                {children}
            </div>
        </div>
    );
}