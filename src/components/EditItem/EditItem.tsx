import axios from "axios";
import React, { useState } from "react";
import { baseURl } from "../../constants";
import "./index.css";

const EditItem = ({
    item,
    setItemEditModalIsOpen,
    setItemInfoModalIsOpen,
}: any) => {
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
        id,
    } = item;

    const [Item, setItem] = useState({
        serial: serial,
        connection_type: connection_type,
        storage_system: storage_system,
        condition: condition,
        owner: owner,
        location: location,
        manufacturer: manufacturer,
        purchase: purchase,
        i_max: i_max,
        i_b: i_b,
        i_n: i_n,
        seals: seals,
    });

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log("item before being sent -> ", Item);
        if (Object.keys(Item).length === 0) return;

        const url = `${baseURl}/${id}`;
        axios
            .patch(url, Item)
            .then((response) => {
                console.log(response);
                setItemEditModalIsOpen(false);
                window.location.reload();
            })
            .catch((err) => console.log("error while posting -> ", err));
    };

    const handleChange = (event: any) => {
        const name = event.target.name;
        const value = event.target.value;
        setItem({ ...Item, [name]: value });
    };

    return (
        <div className="form__container--add">
            <h1 className="modal__header">Edit Item with id: {item.id}</h1>
            <form id="newItem__form" onSubmit={handleSubmit}>
                <div className="form__row">
                    <div className="label__inputs">
                        <label htmlFor="serial">Serial</label>
                        <input
                            onChange={handleChange}
                            type="text"
                            name="serial"
                            id="serial"
                            value={Item.serial}
                        />
                    </div>
                    <div className="label__inputs">
                        <label htmlFor="connection_type">Connection type</label>
                        <select
                            onChange={handleChange}
                            name="connection_type"
                            id="connection_type"
                            value={Item.connection_type}
                        >
                            <option value="directa">directa</option>
                            <option value="semi-directa">semi-directa</option>
                            <option value="indirecta">indirecta</option>
                        </select>
                    </div>
                    <div className="label__inputs">
                        <label htmlFor="storage_system">Storage System</label>
                        <select
                            onChange={handleChange}
                            name="storage_system"
                            id="storage_system"
                            value={Item.storage_system}
                        >
                            <option value="interno">interno</option>
                            <option value="externo">externo</option>
                        </select>
                    </div>
                </div>
                <div className="form__row">
                    <div className="label__inputs">
                        <label htmlFor="condition">Condition</label>
                        <select
                            onChange={handleChange}
                            name="condition"
                            id="condition"
                            value={Item.condition}
                        >
                            <option value="nuevo">nuevo</option>
                            <option value="usado">usado</option>
                        </select>
                    </div>
                    <div className="label__inputs">
                        <label htmlFor="owner">Owner</label>
                        <select
                            onChange={handleChange}
                            name="condition"
                            id="condition"
                            value={Item.owner}
                        >
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
                            value={Item.location}
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
                            value={Item.manufacturer}
                        />
                    </div>
                    <div className="label__inputs">
                        <label htmlFor="purchase">purchase</label>
                        <input
                            onChange={handleChange}
                            type="text"
                            name="purchase"
                            id="purchase"
                            value={Item.purchase}
                        />
                    </div>
                    <div className="label__inputs">
                        <label htmlFor="i_max">i_max</label>
                        <input
                            onChange={handleChange}
                            type="number"
                            name="i_max"
                            id="i_max"
                            value={Item.i_max}
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
                            value={Item.i_b}
                        />
                    </div>
                    <div className="label__inputs">
                        <label htmlFor="i_n">i_n</label>
                        <input
                            onChange={handleChange}
                            type="number"
                            name="i_n"
                            id="i_n"
                            value={Item.i_n}
                        />
                    </div>
                    <div className="label__inputs">
                        <label htmlFor="seals">seals</label>
                        <input
                            onChange={handleChange}
                            type="number"
                            name="seals"
                            id="seals"
                            value={Item.seals}
                        />
                    </div>
                </div>
                <div className="edit__btns">
                    <button className="submit__btn" type="submit">
                        Save
                    </button>
                    <button
                        className="cancel__btn"
                        onClick={() => setItemInfoModalIsOpen(false)}
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
};

export default EditItem;
