import axios from 'axios';

const endpoint = "https://checkmk.8x8.com/CHECKMK_VIEW/api/v1/domain-types/downtime/collections/host/";
const token = "";
const username = ""
const password = ""

// const config = {
//     headers: {
//         'Authorization': `Bearer ${username} ${password}`,
//         "Access-Control-Allow-Origin": "*"
//     }

// };

let _data = {
    auth: {
        username: username,
        password: password
    },
    'start_time': "2022-07-21T17:32:28Z",
    'end_time': "2022-07-21T17:32:28Z",
    'recur': 'hour',
    'duration': 3600,
    'comment': "Downtime Testing",
    'downtime_type': 'host',
    'host_name': "confluenttest2-cc.packet8-pilot.net"
}

// function Calls() {
//     axios({
//         method: 'post',
//         headers: {
//             'Access-Control-Allow-Origin': '*',
//             'Authorization': `Bearer ${username} ${password}`
//         },
//         withCredentials: false,
//         url: endpoint
//     }).then(function (response) {
//         console.log(response.data);
//     });
// }

// const username = ''
// const password = ''
const session_url = 'https://inventory.8x8.com/api/1.0/devices/';

var config = {
    method: 'get',
    url: session_url,
    headers: {
        'Authorization': 'Basic: ' + btoa(username + ':' + password),
        'Access-Control-Allow-Origin': '*'
        ,'Origin':'https://inventory.8x8.com'
    }
};
function Calls() {

    axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
            console.log(error);
        });


}


export default Calls;


