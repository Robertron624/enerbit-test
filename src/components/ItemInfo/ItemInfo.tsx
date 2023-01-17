import React, { useState } from "react";
import Modal from "react-modal";
import DeleteItem from "../DeleteItem/DeleteItem";
import EditItem from "../EditItem/EditItem";
import "./index.css";
import { customModalStyles } from "../../constants";

const ItemInfo = ({ item }: any) => {
    const {
        serial,
        connection_type,
        storage_system,
        condition,
        owner,
        purchase,
        seals,
        i_b,
        i_max,
        i_n,
        location,
        manufacturer,
    } = item;

    const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false);
    const [itemEditModalIsOpen, setItemEditModalIsOpen] = useState(false);

    function openModal(modalName: string) {
        switch (modalName) {
            case "delete": {
                setDeleteModalIsOpen(true);
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
            case "edit": {
                setItemEditModalIsOpen(false);
                break;
            }
        }
    }

    return (
        <div>
            <h2 className="item__info--header">Item details</h2>
            <table className="itemInfo__table table">
                <thead>
                    <tr>
                        <th>Detail</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Serial</td>
                        <td>{serial}</td>
                    </tr>
                    <tr>
                        <td>Connection Type</td>
                        <td>{connection_type}</td>
                    </tr>
                    <tr>
                        <td>Storage System</td>
                        <td>{storage_system}</td>
                    </tr>
                    <tr>
                        <td>Condition</td>
                        <td>{condition}</td>
                    </tr>
                    <tr>
                        <td>Owner</td>
                        <td>{owner}</td>
                    </tr>
                    <tr>
                        <td>Purchase</td>
                        <td>{purchase}</td>
                    </tr>
                    <tr>
                        <td>Seals</td>
                        <td>{seals}</td>
                    </tr>
                    <tr>
                        <td>I B</td>
                        <td>{i_b}</td>
                    </tr>
                    <tr>
                        <td>I N</td>
                        <td>{i_n}</td>
                    </tr>
                    <tr>
                        <td>I Max</td>
                        <td>{i_max}</td>
                    </tr>
                    <tr>
                        <td>Location</td>
                        <td>{location}</td>
                    </tr>
                    <tr>
                        <td>Manufacturer</td>
                        <td>{manufacturer}</td>
                    </tr>
                </tbody>
            </table>
            <div className="itemInfo__btns">
                <button onClick={() => openModal("edit")}>Edit</button>
                <button onClick={() => openModal("delete")}>Delete</button>
            </div>
            <Modal
                isOpen={itemEditModalIsOpen}
                onRequestClose={() => closeModal("edit")}
                style={customModalStyles}
                contentLabel="Edit Item"
            >
                <EditItem
                    item={item}
                    setItemEditModalIsOpen={setItemEditModalIsOpen}
                />
            </Modal>
            <Modal
                isOpen={deleteModalIsOpen}
                onRequestClose={() => closeModal("delete")}
                style={customModalStyles}
                contentLabel="Delete Item"
            >
                <DeleteItem
                    item={item}
                    setDeleteModalIsOpen={setDeleteModalIsOpen}
                />
            </Modal>
        </div>
    );
};

export default ItemInfo;
