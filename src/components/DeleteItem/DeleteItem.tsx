import React from "react";
import axios from "axios";
import "./index.css";
import {baseURl} from "../../constants";

const DeleteItem = ({ item, setDeleteModalIsOpen }: any) => {

    console.log("item  from delete component -> ", item)

    const deleteItem = (): void => {
        const url = `${baseURl}/${item.id}`;


        axios
            .delete(url)
            .then((res) => {
                setDeleteModalIsOpen(false);
                location.reload();
            })
            .catch((err) => console.log(err));
    };

    return (
        <div className="confirmation__box">
            <h2>Are you sure you want to delete item with id: {item.id}</h2>
            <div className="confirmation__btns">
                <button onClick={deleteItem}>Yes</button>
                <button onClick={() => setDeleteModalIsOpen(false)}>No</button>
            </div>
        </div>
    );
};

export default DeleteItem;
