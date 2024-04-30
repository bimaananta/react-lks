import { useEffect } from "react";
import { useState } from "react";
import PageHeader from "../../components/PageHeader";
import SearchBar from "../../components/SearchBar";
import useFetch from "../../hooks/useFetch";


export default function ReadProduct({middleware}){
    const [products, setProducts] = useState([]);

    useEffect(() => {
        if(Object.keys(middleware).length !== 0){
            for(const key in middleware){
                if(typeof middleware[key] === 'function'){
                    middleware[key]();
                }
            }
        }
    }, [middleware]);

    useEffect(() => {
        useFetch("index", "product", setProducts, null);
    }, []);

    function handleSearch(){

    }

    function handleDelete(){
        
    }


    return (
        <section id="read-product" className="pt-5 mt-5">
            <div className="container">
                <PageHeader title={"Product List"} text={"List of company released products"} addLink={'/create-product'}>
                    <SearchBar/>
                </PageHeader>
                <div className="row w-100">
                    <table>
                        <thead>
                            <tr>
                                {['ID', 'Title', 'Description', 'Release Date','Price', 'Available', 'Action'].map((column, index) => (
                                    <th>{column}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {products?.data?.map((product, index) => {
                                index++;
                                return (
                                    <tr key={index}>
                                        <td>{index++}</td>
                                        <td>{product.title}</td>
                                        <td>{product.description}</td>
                                        <td>{product.release_date}</td>
                                        <td>{product.price? product.price : "Free"}</td>
                                        <td>{product.available? "Yes" : "No"}</td>
                                        <td className="d-flex gap-2">
                                            <button className="btn btn-md btn-success">Edit</button>
                                            <button className="btn btn-md btn-danger">Delete</button>
                                            <button className="btn btn-md btn-primary">Detail</button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}