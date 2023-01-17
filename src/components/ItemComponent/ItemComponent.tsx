import React, { useState } from "react";
import Modal from "react-modal";
import DeleteItem from "../DeleteItem/DeleteItem";
import ItemInfo from "../ItemInfo/ItemInfo";
import EditItem from "../EditItem/EditItem";
import { customModalStyles } from "../../constants";
import "./index.css"

export const deleteModalStyles = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        padding: "4rem",
        backgroundColor: "#1a1a1a",
    },
};

const ItemComponent = ({ item }: any) => {
    const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false);
    const [itemInfoModalIsOpen, setItemInfoModalIsOpen] = useState(false);
    const [itemEditModalIsOpen, setItemEditModalIsOpen] = useState(false);

    function openModal(modalName: string) {
        switch (modalName) {
            case "delete": {
                setDeleteModalIsOpen(true);
                break;
            }
            case "info": {
                setItemInfoModalIsOpen(true);
                break;
            }
            case "edit": {
                setItemEditModalIsOpen(true);
                break;
            }
        }
    }

    function closeModal(modalName: string) {
        switch (modalName) {
            case "delete": {
                setDeleteModalIsOpen(false);
                break;
            }
            case "info": {
                setItemInfoModalIsOpen(false);
                break;
            }
            case "edit": {
                setItemEditModalIsOpen(false);
                break;
            }
        }
    }

    return (
        <div className="item__container flex" key={item.id}>
            <p onClick={() => openModal("info")} className="item__title">
                {item.serial}
            </p>
            <div className="item__btns">
                <button onClick={() => openModal("edit")} className="edit__btn">
                    Edit
                </button>
                <button
                    onClick={() => openModal("delete")}
                    className="delete__btn"
                >
                    Delete
                </button>
            </div>
            <Modal
                isOpen={itemInfoModalIsOpen}
                onRequestClose={() => closeModal("info")}
                style={customModalStyles}
                contentLabel="Item Info"
            >
                <ItemInfo
                    item={item}
                    setItemInfoModalIsOpen={setItemInfoModalIsOpen}
                />
            </Modal>
            <Modal
                isOpen={deleteModalIsOpen}
                onRequestClose={() => closeModal("delete")}
                style={deleteModalStyles}
                contentLabel="Delete Item"
            >
                <DeleteItem
                    item={item}
                    setDeleteModalIsOpen={setDeleteModalIsOpen}
                />
            </Modal>
            <Modal
                isOpen={itemEditModalIsOpen}
                onRequestClose={() => closeModal("edit")}
                style={customModalStyles}
                contentLabel="Edit Item"
            >
                <EditItem
                    item={item}
                    setItemEditModalIsOpen={setItemEditModalIsOpen}
                    setItemInfoModalIsOpen={setItemInfoModalIsOpen}
                />
            </Modal>
        </div>
    );
};

export default ItemComponent;
