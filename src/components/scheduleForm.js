import React, { useState } from 'react';
import PreviewPage from './PreviewPage';
import FetchData from './FetchData';
import './style.css';
import Autocomplete from "./Autocomplete";
import devices from "../listOfDevices.json";
import axios from 'axios';
import { Buffer } from 'buffer';
import CustomerList from './CustomerList';

const username = 'ssingh'
const password = 'sm@rtPe0ple91'
const token = `${username}:${password}`;
const encodedToken = Buffer.from(token).toString('base64');
const session_url = 'https://inventory.8x8.com/api/1.0/devices/';

// var config = {
//     method: 'get',
//     url: session_url,
//     headers: {
//         'Authorization': 'Basic ' + encodedToken,
//         'Accept': 'application/json',
//         'Accept-Language': 'en_US',
//         'Content-Type': 'application/x-www-form-urlencoded',
//         'Access-Control-Allow-Origin': '*',
//         auth: {
//             username: username,
//             password: password,
//         },
//         withCredentials: true,
//     }
// };

// axios(config)
//     .then(function (response) {
//         console.log(JSON.stringify(response.data));
//     })
//     .catch(function (error) {
//         console.log(error);
//     });

let listDevices = devices.Devices;
let deviceNames = listDevices.flatMap(device => {
    return device.name
})


function ScheduleForm() {
    const [deviceName, setDeviceName] = useState("");
    const [endTime, setEndTime] = useState("");
    const [startTime, setStartTime] = useState("");
    const [comment, setComment] = useState("");
    const [urgent, setUrgent] = useState(false);
    const [jira, setJira] = useState('');

    const handleInputValue = (inputValue) => {
        setDeviceName(inputValue)
    }

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        if (id === "deviceName") {
            setDeviceName(value);
        }
        if (id === "startTime") {
            setStartTime(value);
        }
        if (id === "endTime") {
            setEndTime(value);
        }
        if (id === "comment") {
            setComment(value);
        }
        if (id === 'urgent') {
            setUrgent(!urgent);
            console.log("Checkbox was clicked")
        }

        if (id === "jira") {
            setJira(value);
        }

    }
    const message = (
        <tbody>
            <tr>
                <td width="1000" valign="top" style={{ width: '750.0pt', border: 'solid #bfbfbf 1.0pt', padding: '0in 5.4pt 0in 5.4pt' }}>
                    <table border="0" cellSpacing="0" cellPadding="0" width="100%" style={{ width: '100.0%', background: 'white' }}>
                        <tbody>
                            <tr>
                                <td style={{ padding: '4.5pt 0in 0in 0in', }}></td>
                            </tr>
                            <tr>
                                <td width="100%" style={{ width: '100%', padding: '0in 0in 0in 0in' }}>
                                    <div align="center">
                                        <table border="0" cellSpacing="0" cellPadding="0">
                                            <tbody>
                                                <tr>
                                                    <td style={{ padding: '0in 0in 0in 0in' }}>
                                                        <table border="0" cellSpacing="0" cellPadding="0" width="100%"
                                                            style={{ width: '100%', background: 'whitesmoke' }}>
                                                            <tbody>
                                                                <tr>
                                                                    <td style={{ padding: '9.75pt 0in 6.75pt 15.0pt' }}>
                                                                        <table border="0" cellSpacing="0" cellPadding="0"
                                                                            width="100%"
                                                                            style={{ width: '100.0%', borderCollapse: 'collapse' }}>
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td
                                                                                        style={{ padding: '9.75pt 0in 6.75pt 15.0pt' }}>
                                                                                        <table border="0" cellSpacing="0"
                                                                                            cellPadding="0" width="100%"
                                                                                            style={{ width: '100.0%', borderCollapse: 'collapse' }}>
                                                                                            <tbody>
                                                                                                <tr style={{ height: '12.75pt' }}>
                                                                                                    <td width="136"
                                                                                                        valign="bottom"
                                                                                                        style={{ width: '102.0pt', padding: '0in 0in 0in 0in', height: '12.75pt' }}>
                                                                                                        <p align="center"
                                                                                                            style={{ textAlign: 'center', lineHeight: '13.5pt', fontSize: '36px' }}>
                                                                                                            <strong><span
                                                                                                                style={{ fontFamily: 'Helvetica', color: 'red' }}>8x8 &nbsp;
                                                                                                            </span></strong><strong><span
                                                                                                                style={{ fontFamily: 'Helvetica', color: '#454545' }}>Cloud
                                                                                                                Infrastructure
                                                                                                            </span></strong><u></u><u></u>
                                                                                                        </p>
                                                                                                    </td>
                                                                                                </tr>
                                                                                            </tbody>
                                                                                        </table>
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td width="100%"
                                                                        style={{ width: '100.0%', padding: '0in 0in 0in 0in' }}>
                                                                        <table border="0" cellSpacing="0" cellPadding="0"
                                                                            width="100%"
                                                                            style={{ width: '100.0%', background: '#0179c5' }}>
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td width="100%"
                                                                                        style={{ width: '100.0%', padding: '0in 0in 0in 0in' }}>
                                                                                        <table border="0" cellSpacing="0"
                                                                                            cellPadding="0">
                                                                                            <tbody>
                                                                                                <tr style={{ height: '48.6pt' }}>
                                                                                                    <td
                                                                                                        style={{ padding: '11.25pt 0in 7.5pt 3.75pt', height: '48.6pt' }}>
                                                                                                        <p><img border="0"
                                                                                                            id="m_3727976520574482737m_8442405236205632610_x0000_i1033"
                                                                                                            src="https://ci4.googleusercontent.com/proxy/kLy8jyMqbk57bdpouHCLtDay_0TIjhtk39_TfRhmlvLE97zqvUHy802IG0tkhRdbuUBwrksYzNoPbOc8bSSbi-MDtA24vaAEH6ARVE-ToyR4qNuZBDl7yLyWo1sT=s0-d-e1-ft#https://cn.plugins.oci.oraclecloud.com/Bare_Metal_Cloud_Services_80x70.png"
                                                                                                            alt="CloudLogo"
                                                                                                            className="CToWUd" /><u></u><u></u>
                                                                                                        </p>
                                                                                                    </td>
                                                                                                    <td
                                                                                                        style={{ padding: '7.5pt 0in 3.75pt 0in', height: '48.6pt' }}>
                                                                                                        <p
                                                                                                            style={{ lineHeight: '15.0pt' }}>
                                                                                                            <span
                                                                                                                style={{ fontSize: '14.0pt', fontFamily: 'Helvetica', color: 'white' }}>8x8
                                                                                                                Server
                                                                                                                Downtime
                                                                                                                Management
                                                                                                            </span><u></u><u></u>
                                                                                                        </p>
                                                                                                    </td>
                                                                                                </tr>
                                                                                            </tbody>
                                                                                        </table>
                                                                                    </td>
                                                                                    <td width="199"
                                                                                        style={{ width: '149.25pt', padding: '0in 0in 0in 0in' }}>
                                                                                        <p><span style={{ color: 'black' }}><img
                                                                                            border="0"
                                                                                            id="m_3727976520574482737m_8442405236205632610_x0000_i1032"
                                                                                            src="https://ci3.googleusercontent.com/proxy/mAgGUyspUqFFU0qfOtq2z8WdCdS_f926QgGzhhbgyZaHbBiOtJPP3c8fCcHfEof5GyLPgPnYvLdVYH8NodnSC6SHOJFx2tJfcWTyrBHagc0=s0-d-e1-ft#https://cn.plugins.oci.oraclecloud.com/integrated-cloud-2.png"
                                                                                            alt="OCI"
                                                                                            className="CToWUd" /></span><u></u><u></u>
                                                                                        </p>
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td style={{ padding: '0in 0in 0in 0in' }}>
                                                        <div align="center">
                                                            <table border="0" cellSpacing="0" cellPadding="0" width="100%"
                                                                style={{ width: '100.0%', borderCollapse: 'collapse' }}>
                                                                <tbody>
                                                                    <tr>
                                                                        <td
                                                                            style={{ background: 'white', padding: '0in 0in 0in 0in' }}>
                                                                            <table border="0" cellSpacing="0"
                                                                                cellPadding="0" width="100%"
                                                                                style={{ width: '100.0%' }}>
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td
                                                                                            style={{ background: 'white', padding: '15.0pt 15.0pt 7.5pt 15.0pt' }}>
                                                                                            <p
                                                                                                style={{ marginLeft: '4.5pt', lineHeight: '13.5pt' }}>
                                                                                                <span
                                                                                                    style={{ fontSize: '10.0pt', fontFamily: 'Helvetica', color: 'black' }}>8x8
                                                                                                    Cloud Infrastructure
                                                                                                    Customer,
                                                                                                </span><u></u><u></u>
                                                                                            </p>
                                                                                            <table border="0"
                                                                                                cellSpacing="0"
                                                                                                cellPadding="0"
                                                                                                style={{ borderCollapse: 'collapse' }}>
                                                                                                <tbody>
                                                                                                    <tr
                                                                                                        style={{ height: '2.65pt' }}>
                                                                                                        <td width="690"
                                                                                                            rowSpan="2"
                                                                                                            valign="top"
                                                                                                            style={{ width: '517.5pt', border: 'none', borderLeft: 'solid red 6.0pt', padding: '0in 5.4pt 0in 5.4pt', height: '2.65pt', borderRightColor: 'inherit', borderTopColor: 'inherit', borderBottomColor: 'inherit' }}>
                                                                                                            <p
                                                                                                                style={{ marginLeft: '5.25pt', lineHeight: '13.5pt' }}>
                                                                                                                <span
                                                                                                                    style={{ fontSize: '10.0pt', fontFamily: 'Helvetica' }}>To
                                                                                                                    maintain
                                                                                                                    the
                                                                                                                    security
                                                                                                                    and
                                                                                                                    reliability
                                                                                                                    of your
                                                                                                                    Compute
                                                                                                                    Virtual
                                                                                                                    Machine
                                                                                                                    instances,
                                                                                                                    the
                                                                                                                    Oracle
                                                                                                                    Cloud
                                                                                                                    Infrastructure
                                                                                                                    Team
                                                                                                                    will be
                                                                                                                    performing
                                                                                                                    maintenance
                                                                                                                    on the
                                                                                                                    infrastructure
                                                                                                                    hosting
                                                                                                                    the
                                                                                                                    instance(s)
                                                                                                                    listed
                                                                                                                    in
                                                                                                                    this
                                                                                                                    notification.
                                                                                                                    <br /><br />At
                                                                                                                    the time
                                                                                                                    listed
                                                                                                                    in
                                                                                                                    this
                                                                                                                    notification,
                                                                                                                    Oracle
                                                                                                                    Cloud
                                                                                                                    Infrastructure
                                                                                                                    will
                                                                                                                    attempt
                                                                                                                    to move
                                                                                                                    your
                                                                                                                    instance(s)
                                                                                                                    to a
                                                                                                                    different
                                                                                                                    infrastructure
                                                                                                                    through
                                                                                                                    a
                                                                                                                    reboot
                                                                                                                    migration.
                                                                                                                    It is
                                                                                                                    recommended
                                                                                                                    that you
                                                                                                                    move
                                                                                                                    your
                                                                                                                    instance(s)
                                                                                                                    before
                                                                                                                    the
                                                                                                                    time
                                                                                                                    listed
                                                                                                                    below.
                                                                                                                    <br /><br />Details
                                                                                                                    related
                                                                                                                    to
                                                                                                                    affected
                                                                                                                    instance(s),
                                                                                                                    timing,
                                                                                                                    and
                                                                                                                    instructions
                                                                                                                    on how
                                                                                                                    to
                                                                                                                    move
                                                                                                                    your
                                                                                                                    affected
                                                                                                                    instance(s)
                                                                                                                    can be
                                                                                                                    found
                                                                                                                    below.
                                                                                                                    <br /><br /><span
                                                                                                                        className="il">OCI</span>
                                                                                                                    security
                                                                                                                    &amp;
                                                                                                                    reliability
                                                                                                                    updates
                                                                                                                    must
                                                                                                                    de be
                                                                                                                    deployed
                                                                                                                    to
                                                                                                                    all
                                                                                                                    systems
                                                                                                                    at <span
                                                                                                                        className="il">OCI</span>,
                                                                                                                    requiring
                                                                                                                    this
                                                                                                                    maintenance
                                                                                                                    activity
                                                                                                                    to
                                                                                                                    occur
                                                                                                                    without
                                                                                                                    delay or
                                                                                                                    rescheduling.
                                                                                                                    If there
                                                                                                                    is
                                                                                                                    an
                                                                                                                    emergency
                                                                                                                    risk to
                                                                                                                    your
                                                                                                                    organizations
                                                                                                                    operations
                                                                                                                    impacted
                                                                                                                    by
                                                                                                                    this
                                                                                                                    maintenance,
                                                                                                                    please
                                                                                                                    contact
                                                                                                                    customer
                                                                                                                    support
                                                                                                                    with
                                                                                                                    the
                                                                                                                    reference
                                                                                                                    "Compute
                                                                                                                    Security
                                                                                                                    Updates"
                                                                                                                    along
                                                                                                                    with
                                                                                                                    the CN
                                                                                                                    number.</span><u></u><u></u>
                                                                                                            </p>
                                                                                                        </td>
                                                                                                        <td width="32"
                                                                                                            rowSpan="2"
                                                                                                            valign="top"
                                                                                                            style={{ width: '24.0pt', padding: '0in 5.4pt 0in 5.4pt', height: '2.65pt' }}>
                                                                                                        </td>
                                                                                                        <td width="250"
                                                                                                            style={{ width: '187.5pt', background: 'red', padding: '0in 5.4pt 0in 5.4pt', height: '2.65pt' }}>
                                                                                                            <p align="center"
                                                                                                                style={{ marginRight: '0in', marginBottom: '6.0pt', marginLeft: '0in', textAlign: 'center' }}>
                                                                                                                <b><span
                                                                                                                    style={{ fontSize: '18.0pt', fontFamily: 'Helvetica', color: 'white' }}>Downtime
                                                                                                                    Reminder
                                                                                                                </span></b><u></u><u></u>
                                                                                                            </p>
                                                                                                        </td>
                                                                                                    </tr>
                                                                                                    <tr
                                                                                                        style={{ height: '2.6pt' }}>
                                                                                                        <td width="180"
                                                                                                            style={{ width: '135.0pt', padding: '0in 5.4pt 0in 5.4pt', height: '2.6pt' }}>
                                                                                                        </td>
                                                                                                    </tr>
                                                                                                </tbody>
                                                                                            </table>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td style={{ background: '#f3f3f3', padding: '11.25pt 11.25pt 11.25pt 11.25pt' }}
                                                                                            id="m_3727976520574482737m_8442405236205632610graybackground">
                                                                                            <table border="0"
                                                                                                cellSpacing="0"
                                                                                                cellPadding="0" width="100%"
                                                                                                style={{ width: '100.0 %', borderCollapse: 'collapse' }}>
                                                                                                <tbody>
                                                                                                    <tr>
                                                                                                        <td width="40"
                                                                                                            style={{ width: '30.0pt', padding: '.75pt .75pt .75pt .75pt' }}>
                                                                                                            <p
                                                                                                                className="MsoNormal">
                                                                                                                <img border="0"
                                                                                                                    id="m_3727976520574482737m_8442405236205632610_x0000_i1031"
                                                                                                                    src="https://ci5.googleusercontent.com/proxy/XmouYGpquY6srJ5HYUGHn0539gRups1YLfxPpYAzEI1m46L4KiVFU63ld_SlhGlbRqjBuzCEp-ONFwpiNeTDEV33=s0-d-e1-ft#https://cn.plugins.oci.oraclecloud.com/date.png"
                                                                                                                    alt="timeVal"
                                                                                                                    className="CToWUd" /><u></u><u></u>
                                                                                                            </p>
                                                                                                        </td>
                                                                                                        <td width="600"
                                                                                                            style={{ width: '6.25in', padding: '3.75pt 3.75pt 3.75pt 3.75pt' }}>
                                                                                                            <div>
                                                                                                                <p
                                                                                                                    className="MsoNormal">
                                                                                                                    <strong><span
                                                                                                                        style={{ fontSize: '10.0pt', fontFamily: 'Helvetica' }}>Downtime
                                                                                                                        Scheduled
                                                                                                                        for:</span></strong><span
                                                                                                                            style={{ fontSize: '10.0pt', fontFamily: 'Helvetica' }}>
                                                                                                                        {startTime} - {endTime}</span><u></u><u></u>
                                                                                                                </p>
                                                                                                            </div>
                                                                                                        </td>
                                                                                                    </tr>
                                                                                                    <tr>
                                                                                                        <td width="40"
                                                                                                            style={{ width: '30.0pt', padding: '.75pt .75pt .75pt .75pt' }}>
                                                                                                            <p
                                                                                                                className="MsoNormal">
                                                                                                                <img border="0"
                                                                                                                    id="m_3727976520574482737m_8442405236205632610_x0000_i1030"
                                                                                                                    src="https://ci6.googleusercontent.com/proxy/RG7D5SziCmiVmEYG7wDh7aUBCdM3wk50XDBHULBXcQJfNJ2Y_MTf2zq7wJiaPCgtdH6NEIXyxi4lYttFtwKa8WulTcA2=s0-d-e1-ft#https://cn.plugins.oci.oraclecloud.com/service.png"
                                                                                                                    alt="serviceVal"
                                                                                                                    className="CToWUd" /><u></u><u></u>
                                                                                                            </p>
                                                                                                        </td>
                                                                                                        <td width="600"
                                                                                                            style={{ width: '6.25in', padding: '3.75pt 3.75pt 3.75pt 3.75pt' }}>
                                                                                                            <div>
                                                                                                                <p
                                                                                                                    className="MsoNormal">
                                                                                                                    <strong><span
                                                                                                                        style={{ fontSize: '10.0pt', fontFamily: 'Helvetica' }}>Host:
                                                                                                                    </span></strong><span
                                                                                                                        style={{ fontSize: '10.0pt', fontFamily: 'Helvetica' }}>{deviceName}</span><u></u><u></u>
                                                                                                                </p>
                                                                                                            </div>

                                                                                                        </td>
                                                                                                    </tr>
                                                                                                </tbody>
                                                                                            </table>
                                                                                            <p className="MsoNormal">
                                                                                                <u></u>&nbsp;<u></u>
                                                                                            </p>
                                                                                            <table border="0"
                                                                                                cellSpacing="0"
                                                                                                cellPadding="0"
                                                                                                style={{ borderCollapse: 'collapse' }}
                                                                                                id="m_3727976520574482737m_8442405236205632610AllResourcesTable">
                                                                                                <tbody>
                                                                                                    <tr>
                                                                                                        <td
                                                                                                            style={{ padding: '.75pt .75pt .75pt .75pt' }}>
                                                                                                            <table
                                                                                                                border="1"
                                                                                                                cellSpacing="0"
                                                                                                                cellPadding="0"
                                                                                                                style={{ borderCollapse: 'collapse' }}>
                                                                                                                <tbody>
                                                                                                                    <tr
                                                                                                                        style={{ height: '22.5pt' }}>
                                                                                                                        <td width="115"
                                                                                                                            style={{ width: '386.25pt', border: 'solid #a6a6a6 1.0pt', background: '#a5a5a5', padding: '0in 7.5pt 0in 7.5pt', height: '22.5pt' }}>
                                                                                                                            <p
                                                                                                                                className="MsoNormal">
                                                                                                                                <b><span
                                                                                                                                    style={{ fontSize: '10.0pt', fontFamily: 'Helvetica', color: 'white' }}>Host</span></b><b><span
                                                                                                                                        style={{ color: 'black' }}>
                                                                                                                                    </span></b><b><u></u><u></u></b>
                                                                                                                            </p>
                                                                                                                        </td>
                                                                                                                        <td width="115"
                                                                                                                            style={{ width: '386.25pt', border: 'solid #a6a6a6 1.0pt', borderLeft: 'none', background: '#a5a5a5', padding: '0in 7.5pt 0in 7.5pt', height: '22.5pt' }}>
                                                                                                                            <p
                                                                                                                                className="MsoNormal">
                                                                                                                                <b><span
                                                                                                                                    style={{ fontSize: '10.0pt', fontFamily: 'Helvetica', color: 'white' }}>Description</span></b><b><span
                                                                                                                                        style={{ color: 'black' }}>
                                                                                                                                    </span></b><b><u></u><u></u></b>
                                                                                                                            </p>
                                                                                                                        </td>
                                                                                                                        <td width="650"
                                                                                                                            style={{ width: '386.25pt', border: 'solid #a6a6a6 1.0pt', borderLeft: 'none', background: '#a5a5a5', padding: '0in 7.5pt 0in 7.5pt', height: '22.5pt' }}>
                                                                                                                            <p
                                                                                                                                className="MsoNormal">
                                                                                                                                <b><span
                                                                                                                                    style={{ fontSize: '10.0pt', fontFamily: 'Helvetica', color: 'white' }}>Duration</span></b><b><span
                                                                                                                                        style={{ color: 'black' }}>
                                                                                                                                    </span></b><b><u></u><u></u></b>
                                                                                                                            </p>
                                                                                                                        </td>
                                                                                                                    </tr>
                                                                                                                    <tr
                                                                                                                        style={{ height: '13.2pt' }}>
                                                                                                                        <td width="15%"
                                                                                                                            style={{ width: '15.0%', border: 'solid #a6a6a6 1.0pt', borderTop: 'none', background: 'white', padding: '2.25pt 2.25pt 2.25pt 2.25pt', height: '13.2pt' }}>
                                                                                                                            <p className="MsoNormal"
                                                                                                                                style={{ wordBreak: 'break-all' }}>
                                                                                                                                <span
                                                                                                                                    style={{ fontSize: '10.0pt', fontFamily: 'Helvetica', color: 'black' }}>{deviceName}
                                                                                                                                </span><u></u><u></u>
                                                                                                                            </p>
                                                                                                                        </td>
                                                                                                                        <td width="15%"
                                                                                                                            style={{ width: '15.0%', border: 'solid #a6a6a6 1.0pt', borderTop: 'none', background: 'white', padding: '2.25pt 2.25pt 2.25pt 2.25pt', height: '13.2pt' }}>
                                                                                                                            <p className="MsoNormal"
                                                                                                                                style={{ wordBreak: 'break-all' }}>
                                                                                                                                <span
                                                                                                                                    style={{ fontSize: '10.0pt', fontFamily: 'Helvetica', color: 'black' }}>{comment}
                                                                                                                                </span><u></u><u></u>
                                                                                                                            </p>
                                                                                                                        </td>
                                                                                                                        <td width="15%"
                                                                                                                            style={{ width: '15.0%', border: 'solid #a6a6a6 1.0pt', borderTop: 'none', background: 'white', padding: '2.25pt 2.25pt 2.25pt 2.25pt', height: '13.2pt' }}>
                                                                                                                            <p className="MsoNormal"
                                                                                                                                style={{ wordBreak: 'break-all' }}>
                                                                                                                                <span
                                                                                                                                    style={{ fontSize: '10.0pt', fontFamily: 'Helvetica', color: 'black' }}>{startTime} - {endTime}
                                                                                                                                </span><u></u><u></u>
                                                                                                                            </p>
                                                                                                                        </td>
                                                                                                                    </tr>
                                                                                                                </tbody>
                                                                                                            </table>
                                                                                                        </td>
                                                                                                    </tr>
                                                                                                </tbody>
                                                                                            </table>
                                                                                        </td>
                                                                                    </tr>

                                                                                </tbody>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td
                                                                            style={{ background: 'white', padding: '0in 0in 0in 0in' }}>
                                                                            <div align="center">
                                                                                <table border="0" cellSpacing="0"
                                                                                    cellPadding="0" width="100%"
                                                                                    style={{ width: '100.0%' }}>
                                                                                    <tbody>
                                                                                        <tr>
                                                                                            <td
                                                                                                style={{ background: 'white', padding: '15.0pt 15.0pt 15.0pt 15.0pt' }}>
                                                                                                <p align="center"
                                                                                                    style={{ textAlign: 'center', lineHeight: '13.5pt' }}>
                                                                                                    <strong><span
                                                                                                        style={{ fontFamily: 'Helvetica', color: 'red' }}>8x8 &nbsp;
                                                                                                    </span></strong><strong><span
                                                                                                        style={{ fontFamily: 'Helvetica', color: '#454545' }}>Cloud
                                                                                                        Infrastructure
                                                                                                    </span></strong><u></u><u></u>
                                                                                                </p>
                                                                                            </td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td
                                                                                                style={{}}>

                                                                                            </td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td
                                                                                                style={{ padding: '7.5pt 15.0pt 7.5pt 15.0pt' }}>
                                                                                                <p className="MsoNormal"><span
                                                                                                    style={{ fontSize: '7.0pt', fontFamily: 'Helvetica' }}>This
                                                                                                    is a system
                                                                                                    generated
                                                                                                    message. Do not
                                                                                                    reply to
                                                                                                    this message. You
                                                                                                    are
                                                                                                    receiving this email
                                                                                                    as
                                                                                                    a result of your
                                                                                                    current
                                                                                                    relationship with
                                                                                                    Oracle
                                                                                                    Cloud. General
                                                                                                    marketing
                                                                                                    opt-out preferences
                                                                                                    have
                                                                                                    been overridden to
                                                                                                    ensure that you
                                                                                                    receive
                                                                                                    this email.
                                                                                                </span><u></u><u></u>
                                                                                                </p>
                                                                                            </td>
                                                                                        </tr>
                                                                                    </tbody>
                                                                                </table>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td style={{ padding: '0in 0in 0in 0in' }}>
                                                        <div align="center">
                                                            <table border="0" cellSpacing="0" cellPadding="0" width="100%"
                                                                style={{ width: '100.0%', borderCollapse: 'collapse' }}>
                                                                <tbody>
                                                                    <tr>
                                                                        <td
                                                                            style={{ border: 'none', borderTop: 'solid #cccccc 1.0pt', background: 'white', padding: '7.5pt 0in 7.5pt 0in' }}>
                                                                            <div align="center">
                                                                                <table border="0" cellSpacing="0"
                                                                                    cellPadding="0" width="100%"
                                                                                    style={{ width: '100.0%', borderCollapse: 'collapse' }}>
                                                                                    <tbody>
                                                                                        <tr style={{ height: '18.75pt' }}>
                                                                                            <td
                                                                                                style={{ padding: '0in 7.5pt 0in 15.0pt', height: '18.75pt' }}>
                                                                                                <p
                                                                                                    style={{ lineHeight: '18.0pt' }}>
                                                                                                    <span
                                                                                                        style={{ fontSize: '8.5pt', fontFamily: 'Helvetica', color: '#333333' }}>Copyright
                                                                                                        2022, 8x8. All
                                                                                                        rights
                                                                                                        reserved.
                                                                                                    </span><u></u><u></u>
                                                                                                </p>
                                                                                            </td>
                                                                                            <td
                                                                                                style={{ padding: '0in 15.0pt 0in 7.5pt', height: '18.75pt' }}>
                                                                                                <p align="right"
                                                                                                    style={{ textAlign: 'right', lineHeight: '18.0pt' }}>
                                                                                                    <a href="http://www.oracle.com/us/corporate/index.html"

                                                                                                        data-saferedirecturl="https://www.google.com/url?q=http://www.oracle.com/us/corporate/index.html&amp;source=gmail&amp;ust=1657170882217000&amp;usg=AOvVaw1MN_-4UPVYzP2slxPQmLcC"><span
                                                                                                            style={{ fontSize: '8.5pt', fontFamily: 'Helvetica', color: 'black' }}>About
                                                                                                            8x8
                                                                                                        </span></a><span
                                                                                                            style={{ fontSize: '8.5pt', fontFamily: 'Helvetica', color: '#333333' }}>|
                                                                                                    </span><a
                                                                                                        href="http://www.oracle.com/us/legal/terms/index.html"

                                                                                                        data-saferedirecturl="https://www.google.com/url?q=http://www.oracle.com/us/legal/terms/index.html&amp;source=gmail&amp;ust=1657170882217000&amp;usg=AOvVaw2bvHsX2oZ3sagd3w81sOPK"><span
                                                                                                            style={{ fontSize: '8.5pt', fontFamily: 'Helvetica', color: 'black' }}>Legal
                                                                                                            Notices and
                                                                                                            Terms of
                                                                                                            Use
                                                                                                        </span></a><span
                                                                                                            style={{ fontSize: '8.5pt', fontFamily: 'Helvetica', color: '#333333' }}>|
                                                                                                    </span><a
                                                                                                        href="http://www.oracle.com/us/legal/privacy/overview/index.html"

                                                                                                        data-saferedirecturl="https://www.google.com/url?q=http://www.oracle.com/us/legal/privacy/overview/index.html&amp;source=gmail&amp;ust=1657170882217000&amp;usg=AOvVaw3TiQt58s73_e0ZGMoqlLgg"><span
                                                                                                            style={{ fontSize: '8.5pt', fontFamily: 'Helvetica', color: 'black' }}>Privacy
                                                                                                            Statement
                                                                                                        </span></a>
                                                                                                    <font color="#888888">
                                                                                                        <u></u><u></u>
                                                                                                    </font>
                                                                                                </p>
                                                                                            </td>
                                                                                        </tr>
                                                                                    </tbody>
                                                                                </table>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
        </tbody >
    )
    const handleSubmit = () => {
        console.log(deviceName, startTime, endTime, comment, urgent);
        PreviewPage.open({
            title: "Preview Page",
            content: message,
            buttons: [
                { name: "Submit", handler: () => "yes" },
                { name: "Cancel", handler: () => "nope" }
            ]
        })
    }
    <FetchData />
    return (
        <div className='form'>
            <div className='form-body'>

                <Autocomplete options={deviceNames} onInputValue={handleInputValue} />

                <CustomerList />
                <div className='urgent'>
                    <label className='form_label' htmlFor='urgent'>Urgent Maintainance:</label>
                    <input className='' type='checkbox' id='urgent' value={urgent} onChange={(e) => handleInputChange(e)} />
                </div>
                <div className='jira' style={{ display: urgent ? "block" : "none" }}>
                    <label className='form_label' htmlFor='jira'>Create Jira Issue:</label>
                    <input className='form_input' type="text" id="jira" value={jira} placeholder="Enter Title for Jira Issue" onChange={(e) => handleInputChange(e)} />
                </div>
                <div className='starttime'>
                    <label className='form_label' htmlFor="startTime">Start Time:</label>
                    <input type="datetime-local" className="form_input" id='startTime' value={startTime} onChange={(e) => handleInputChange(e)} />
                </div>
                <div className='endtime'>
                    <label className='form_label' htmlFor="endTime">End Time:</label>
                    <input className='form_input' type="datetime-local" id='endTime' value={endTime} onChange={(e) => handleInputChange(e)} />
                </div>
                <div className='comment'>
                    <label className='form_label' htmlFor="comment">Comment: </label>
                    <input type="text" className="form_input" id="comment" placeholder='Enter Details' value={comment} onChange={(e) => handleInputChange(e)} />
                </div>
            </div>
            <div className="footer">
                <button onClick={() => handleSubmit()} type="submit" className="btn">Preview</button>
            </div>
        </div>
    )
}

export default ScheduleForm;
