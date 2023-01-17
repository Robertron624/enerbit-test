import React, { useState } from "react";
import axios from "axios";
import "./index.css";
import ItemComponent from "../ItemComponent/ItemComponent";
import {baseURl} from "../../constants";

const Search = ({ setSearchIsOpen }: any) => {
    const [idToSearch, setIdToSearch] = useState("");
    const [itemFound, setItemFound] = useState({});

    const handleInput = (e: any) => {
        setIdToSearch(e.target.value);
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        const url = `${baseURl}/${idToSearch}`;
        axios
            .get(url)
            .then((response) => {
                setItemFound({...response.data})
            })
            .catch((error) => {
                if(error.response.data.detail === "meter not found") return alert("Item not found")
            });
    };

    return (
        <div className="search__container">
            <h2>Please enter id of Item to search</h2>
            <form action="GET" className="search__form" onSubmit={handleSubmit}>
                <label htmlFor="item-id">Item Id</label>{" "}
                <input name="item-id" onChange={handleInput} type="text" />
                <button type="submit">Search</button>
            </form>
            <div className="results__container">
                {Object.keys(itemFound).length > 0 ? (
                    <ItemComponent item={itemFound} />
                ) : null}
            </div>
        </div>
    );
};

export default Search;
