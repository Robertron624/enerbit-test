import React from "react";
import "./index.css";

const ItemInfo = ({ item, setItemInfoModalIsOpen }: any) => {
    console.log("Item recieved -> ", item);

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
        </div>
    );
};

export default ItemInfo;
