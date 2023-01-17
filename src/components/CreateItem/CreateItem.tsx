import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import baseURl from "../../constants";
import "./index.css";

const CreateItem = ({ setDeleteModalIsOpen }: any) => {

    const navigate = useNavigate();

    const [newItem, setNewItem] = useState({
        serial: "342423423",
        connection_type: "directa",
        storage_system: "interno",
        condition: "nuevo",
        owner: "RF",
        location: "",
        manufacturer: "",
        purchase: "2022-07-28 03:08:49.340514",
        i_max: "6345.654",
        i_b: "21.5",
        i_n: "876.5",
        seals: "545.65",
    });

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log("item before being sent -> ", newItem);
        if(Object.keys(newItem).length === 0) return;
        axios
            .post(baseURl, newItem)
            .then((response) => {
              setDeleteModalIsOpen(false)
              location.reload();
            })
            .catch((err) => console.log("error while posting -> ", err));
    };

    const handleChange = (event: any) => {
        const name = event.target.name;
        const value = event.target.value;
        setNewItem({ ...newItem, [name]: value });
    };

    return (
        <div className="form__container">
            <h1 className="modal__header">Add new Item</h1>
            <form id="newItem__form" onSubmit={handleSubmit}>
                <div className="form__row">
                    <div className="label__inputs">
                        <label htmlFor="serial">Serial</label>
                        <input
                            onChange={handleChange}
                            type="text"
                            name="serial"
                            id="serial"
                        />
                    </div>
                    <div className="label__inputs">
                        <label htmlFor="connection_type">Connection type</label>
                          <select onChange={handleChange} name="connection_type" id="connection_type">
                            <option value="directa">directa</option>
                            <option value="semi-directa">semi-directa</option>
                            <option value="indirecta">indirecta</option>
                          </select>
                    </div>
                    <div className="label__inputs">
                        <label htmlFor="storage_system">Storage System</label>
                        <select onChange={handleChange} name="storage_system" id="storage_system">
                          <option value="interno">interno</option>
                          <option value="externo">externo</option>
                        </select>
                    </div>
                </div>
                <div className="form__row">
                    <div className="label__inputs">
                        <label htmlFor="condition">Condition</label>
                        <select onChange={handleChange} name="condition" id="condition">
                          <option value="nuevo">nuevo</option>
                          <option value="usado">usado</option>
                        </select>
                    </div>
                    <div className="label__inputs">
                        <label htmlFor="owner">Owner</label>
                        <select onChange={handleChange} name="condition" id="condition">
                          <option value="RF">RF</option>
                          <option value="OR">OR</option>
                        </select>
                    </div>
                    <div className="label__inputs">
                        <label htmlFor="location">Location</label>
                        <input
                            onChange={handleChange}
                            type="text"
                            name="location"
                            id="location"
                        />
                    </div>
                </div>
                <div className="form__row">
                    <div className="label__inputs">
                        <label htmlFor="manufacturer">Manufacturer</label>
                        <input
                            onChange={handleChange}
                            type="text"
                            name="manufacturer"
                            id="manufacturer"
                        />
                    </div>
                    <div className="label__inputs">
                        <label htmlFor="purchase">purchase</label>
                        <input
                            onChange={handleChange}
                            type="text"
                            name="purchase"
                            id="purchase"
                        />
                    </div>
                    <div className="label__inputs">
                        <label htmlFor="i_max">i_max</label>
                        <input
                            onChange={handleChange}
                            type="number"
                            name="i_max"
                            id="i_max"
                        />
                    </div>
                </div>
                <div className="form__row">
                    <div className="label__inputs">
                        <label htmlFor="i_b">i_b</label>
                        <input
                            onChange={handleChange}
                            type="number"
                            name="i_b"
                            id="i_b"
                        />
                    </div>
                    <div className="label__inputs">
                        <label htmlFor="i_n">i_n</label>
                        <input
                            onChange={handleChange}
                            type="number"
                            name="i_n"
                            id="i_n"
                        />
                    </div>
                    <div className="label__inputs">
                        <label htmlFor="seals">seals</label>
                        <input
                            onChange={handleChange}
                            type="number"
                            name="seals"
                            id="seals"
                        />
                    </div>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default CreateItem;
