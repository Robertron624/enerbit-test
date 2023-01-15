import React, { useEffect, useState } from "react";
import axios from "axios";
import Item from "../../types/item";

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
        <div>
            <header className="dashboard__header">
                <h1>Enerbit</h1>
                <div>
                    <button>Add product</button>
                    <button>Search</button>
                </div>
            </header>

            <div className="items_container">
                {meters.map((item: Item) => (
                    <p>{item.serial}</p>
                ))}
            </div>
        </div>
    );
};

export default Dashboard;
