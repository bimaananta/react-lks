import Swal from "sweetalert2";

export default async function deleteData(name, id){
    try{
        const response = await Api.delete(`v1/${name}/${id}`, {
            headers: {
                "Authorization": `Bearer ${localStorage["token"]}`
            }
        });

        if(response.status === 200){
            Swal.fire({
                title: "Success!",
                text: `${name} with ${id} successfully deleted`,
                icon: "success",
                showCancelButton: false,
                showConfirmButton: true,
                confirmButtonColor: "blue"
            });
        }
    }catch(err){
        Swal.fire({
            title: "Failed!",
            text: `Failed to delete ${name} : ${err.response.status}`,
            icon: "error",
            showCancelButton: false,
            showConfirmButton: true,
            confirmButtonColor: "blue"
        });
    }
}