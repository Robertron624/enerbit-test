import React from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "./index.css";
import { baseURl } from "../../constants";

const DeleteItem = ({ item, setDeleteModalIsOpen }: any) => {

    const deleteItem = (): void => {
        const url = `${baseURl}/${item.id}`;

        axios
            .delete(url)
            .then((res) => {
                setDeleteModalIsOpen(false);
                toast.success("Item deleted successfully 🚀🚀🚀", {
                    autoClose: 1500,
                    position: toast.POSITION.TOP_CENTER,
                });

                setTimeout(() => {
                    location.reload();
                }, 1600);
            })
            .catch((err) => console.log(err));
    };

    return (
        <div className="confirmation__box">
            <h2>Are you sure you want to delete item with id: {item.id}</h2>
            <div className="confirmation__btns">
                <button className="delete__yes" onClick={deleteItem}>
                    Yes
                </button>
                <button
                    className="delete__no"
                    onClick={() => setDeleteModalIsOpen(false)}
                >
                    No
                </button>
            </div>
        </div>
    );
};

export default DeleteItem;
