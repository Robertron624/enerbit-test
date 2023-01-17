import React, { useEffect, useState } from "react";
import axios from "axios";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";
import "./index.css";
import CreateItem from "../../components/CreateItem/CreateItem";
import ItemComponent from "../../components/ItemComponent/ItemComponent";

Modal.setAppElement("#root");

const customModalStyles = {
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

const Dashboard = () => {
    const navigate = useNavigate();
    const [meters, setMeters] = useState([]);
    const [newItemModalIsOpen, setNewItemModalIsOpen] = useState(false);

    // Check if there is a user and a password in session storage, if not, go to login page
    useEffect(() => {
        const user = sessionStorage.getItem("user");
        const password = sessionStorage.getItem("password");
    
        if (!user || !password) {
            navigate("/")
        }
    }, [])

    useEffect(() => {
        async function fetchData() {
            await axios
                .get(
                    `https://ops.enerbit.dev/learning/api/v1/meters?page=0&size=50`
                )
                .then((response) => {
                    console.log(response);
                    setMeters(response.data.items);
                });
        }
        fetchData();
    }, []);

    function openModal() {
        setNewItemModalIsOpen(true);
    }

    function closeModal() {
        setNewItemModalIsOpen(false);
    }

    return (
        <div className="dashboard__container">
            <header className="dashboard__header flex">
                <a href="/dashboard">
                    <img
                        src="https://enerbit.co/img/mainLogo.bea5a270.svg"
                        alt="enerbit logo"
                    />
                </a>
                <div className="dashboard__header--btns">
                    <button onClick={() => openModal()} id="add-item">
                        Add product
                    </button>
                    <button id="search-item">Search</button>
                </div>
            </header>

            <Modal
                isOpen={newItemModalIsOpen}
                onRequestClose={() => closeModal()}
                style={customModalStyles}
                contentLabel="Add Item"
            >
                <CreateItem setNewItemModalIsOpen={setNewItemModalIsOpen} />
            </Modal>

            <div className="items__container">
                {meters.length === 0 ? <h1>There are no Meters</h1> : null}
                {meters.map((item: any) => {
                    return <ItemComponent item={item} key={item.id} />;
                })}
            </div>
        </div>
    );
};

export default Dashboard;
