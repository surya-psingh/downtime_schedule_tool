import React from "react";
import Autocomplete from "./Autocomplete";
import devices from "../listOfDevices.json";

let listDevices = devices.Devices;
let deviceNames = listDevices.flatMap(device => {
    return device.name
})

console.log()


const FetchData = () => {
    return (
        <div className="FetchData">
            <Autocomplete
                options={deviceNames}
            />
        </div>
    );
};

export default FetchData;
