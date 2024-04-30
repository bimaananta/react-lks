import PageHeader from "../../components/PageHeader";

export default function ProductCreate(){
    return (
        <section id="product-create" className="pt-5 mt-5">
            <div className="container mt-2">
                <PageHeader title={"Create Product"} text={"Create new list of company product"} addLink={false}/>.
                <div className="row w-100">
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label fw-bold">Title</label>
                        <input type="text" name="title" id="title" className="" />
                    </div>
                </div>
            </div>
        </section>
    );
}