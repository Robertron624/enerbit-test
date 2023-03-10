import React, { useEffect, useState } from "react";
import axios from "axios";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";
import "./index.css";
import CreateItem from "../../components/CreateItem/CreateItem";
import ItemComponent from "../../components/ItemComponent/ItemComponent";
import Search from "../../components/Search/Search";
import { customModalStyles, baseURl } from "../../constants";
import Pagination from "../../components/Pagination/Pagination";

Modal.setAppElement("#root");

const Dashboard = () => {
    const navigate = useNavigate();
    const [meters, setMeters] = useState([]);
    const [newItemModalIsOpen, setNewItemModalIsOpen] = useState(false);
    const [searchIsOpen, setSearchIsOpen] = useState(false);

    // User is currently on this page
    const [currentPage, setCurrentPage] = useState(1);
    // No of Records to be displayed on each page
    const [recordsPerPage] = useState(10);

    const indexOfLastRecord:number = currentPage * recordsPerPage;
    const indexOfFirstRecord:number = indexOfLastRecord - recordsPerPage;

    const currentRecords = meters?.slice(indexOfFirstRecord, indexOfLastRecord);

    const nPages = Math.ceil(meters?.length / recordsPerPage)

    // Check if there is an user and a password in session storage, if not, go to login page
    useEffect(() => {
        const user = sessionStorage.getItem("user");
        const password = sessionStorage.getItem("password");

        if (!user || !password) {
            navigate("/");
        }
    }, []);

    // Fetches api data and stores it in a state
    useEffect(() => {
        async function fetchData() {
            await axios.get(`${baseURl}?page=0&size=50`).then((response) => {
                setMeters(response.data.items);
            });
        }
        fetchData();
    }, []);

    function openModal(modalName: string) {
        switch (modalName) {
            case "add": {
                setNewItemModalIsOpen(true);
                break;
            }
            case "search": {
                setSearchIsOpen(true);
                break;
            }
        }
    }

    function closeModal(modalName: string) {
        switch (modalName) {
            case "add": {
                setNewItemModalIsOpen(false);
                break;
            }
            case "search": {
                setSearchIsOpen(false);
                break;
            }
        }
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
                    <button onClick={() => openModal("add")} id="add-item">
                        Add product
                    </button>
                    <button
                        onClick={() => openModal("search")}
                        id="search-item"
                    >
                        Search
                    </button>
                </div>
            </header>

            <Modal
                isOpen={searchIsOpen}
                onRequestClose={() => closeModal("search")}
                style={customModalStyles}
                contentLabel="Search Item"
            >
                <Search setSearchIsOpen={setSearchIsOpen} />
            </Modal>
            <Modal
                isOpen={newItemModalIsOpen}
                onRequestClose={() => closeModal("add")}
                style={customModalStyles}
                contentLabel="Add Item"
            >
                <CreateItem setNewItemModalIsOpen={setNewItemModalIsOpen} />
            </Modal>

            <div className="items__container">
                {meters.length === 0 ? <h1>There are no Meters</h1> : null}
                {currentRecords.map((item: any) => {
                    return <ItemComponent item={item} key={item.id} />;
                })}
                <Pagination nPages={nPages} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
            </div>
        </div>
    );
};

export default Dashboard;
