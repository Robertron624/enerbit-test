import React, { useEffect, useState } from "react";
import axios from "axios";
import Item from "../../types/item";
import "./index.css";

const Dashboard = () => {
    const [meters, setMeters] = useState([]);

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

    return (
        <div className="dashboard__container">
            <header className="dashboard__header flex">
                <img src="https://enerbit.co/img/mainLogo.bea5a270.svg" alt="" />
                <div className="dashboard__header--btns">
                    <button id="add-item">Add product</button>
                    <button id="search-item">Search</button>
                </div>
            </header>

            <div className="items__container">
                {meters.map((item: Item) => (
                    <div className="item__container flex" key={item.id}>
                        <p className="item__title">{item.serial}</p>
                        <div className="item__btns">
                            <button className="edit__btn">Edit</button>
                            <button className="delete__btn">Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Dashboard;
