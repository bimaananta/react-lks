export default function SearchBar(){
    return (
        <div className="search-bar w-100 d-flex gap-2 align-items-center">
            <input type="text" name="search" id="search" placeholder="Enter Search" className="form-control" />
            <button className="btn btn-md btn-primary"><i className="bi bi-search"></i></button>
        </div>
    )
}