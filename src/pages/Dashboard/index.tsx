import React, { useEffect, useState } from "react";
import axios from "axios";
import Modal from "react-modal"
import Item from "../../types/item";
import DeleteItem from "../../components/DeleteItem/DeleteItem";
import "./index.css";
import CreateItem from "../../components/CreateItem/CreateItem";
import ItemInfo from "../../components/ItemInfo/ItemInfo";


const customModalStyles = {
    content:{
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        padding: "4rem",
        backgroundColor: "#1a1a1a"
    }
}

Modal.setAppElement("#root")

const Dashboard = () => {
    const [meters, setMeters] = useState([]);
    const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false);
    const [newItemModalIsOpen, setNewItemModalIsOpen] = useState(false);
    const [itemInfoModalIsOpen, setItemInfoModalIsOpen] = useState(false);

    useEffect(() => {
        axios
            .get(
                `https://ops.enerbit.dev/learning/api/v1/meters?page=0&size=50`
            )
            .then((response) => {
                console.log(response);
                setMeters(response.data.items);
            });
    }, []);

    function openModal(modalName: string){
        switch(modalName){
            case "delete": {
                setDeleteModalIsOpen(true)
                break
            }
            case "add": {
                setNewItemModalIsOpen(true)
                break
            }
            case "info": {
                setItemInfoModalIsOpen(true)
                break
            }
        }
    }

    function closeModal(modalName: string){
        console.log("modal name received -> ", modalName);
        switch(modalName){
            case "delete": {
                setDeleteModalIsOpen(false)
                break
            }
            case "add": {
                setNewItemModalIsOpen(false)
                break
            }
            case "info": {
                setItemInfoModalIsOpen(false)
                break
            }
        }
    }

    return (
        <div className="dashboard__container">
            <header className="dashboard__header flex">
                <img src="https://enerbit.co/img/mainLogo.bea5a270.svg" alt="" />
                <div className="dashboard__header--btns">
                    <button onClick={() => openModal("add")} id="add-item">Add product</button>
                    <button id="search-item">Search</button>
                </div>
            </header>

            <div className="items__container">
                {meters.length === 0 ? <h1>There are no Meters</h1> : null}
                {meters.map((item: Item) => (
                    <div className="item__container flex" key={item.id} >
                        <p onClick={()=> openModal("info")} className="item__title">{item.serial}</p>
                        <div className="item__btns">
                            <button className="edit__btn">Edit</button>
                            <button onClick={() => openModal("delete")} className="delete__btn">Delete</button>
                        </div>
                        <Modal
                            isOpen={itemInfoModalIsOpen}
                            onRequestClose={() => closeModal("info")}
                            style={customModalStyles}
                            contentLabel="Item Info"
                        >
                            <ItemInfo item={item} setItemInfoModalIsOpen={setItemInfoModalIsOpen}/>
                        </Modal>
                        <Modal
                            isOpen={deleteModalIsOpen}
                            onRequestClose={() => closeModal("delete")}
                            style={customModalStyles}
                            contentLabel="Delete Item"
                        >
                            <DeleteItem item={item} setDeleteModalIsOpen={setDeleteModalIsOpen}/>
                        </Modal>
                        <Modal
                            isOpen={newItemModalIsOpen}
                            onRequestClose={() => closeModal("add")}
                            style={customModalStyles}
                            contentLabel="Add Item"
                        >
                            <CreateItem setDeleteModalIsOpen={setNewItemModalIsOpen}/>
                        </Modal>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Dashboard;
