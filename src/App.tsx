import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import DisplayAssets from "./components/DisplayAssets";
import Navbar from "./components/Navbar";

// async function testFunc() {
//     const res = await fetch("https://api-mainnet.rarible.com/items/map", {
//         "headers": {
//             "accept": "*/*",
//             "accept-language": "en-US,en;q=0.9",
//             "content-type": "application/json",
//             "sec-ch-ua": "\"Google Chrome\";v=\"89\", \"Chromium\";v=\"89\", \";Not A Brand\";v=\"99\"",
//             "sec-ch-ua-mobile": "?0",
//             "sec-fetch-dest": "empty",
//             "sec-fetch-mode": "cors",
//             "sec-fetch-site": "same-site",
//         },
//         "referrer": "https://rarible.com/",
//         "referrerPolicy": "strict-origin-when-cross-origin",
//         "body": "[\"0xd07dc4262bcdbf85190c01c996b4c06a461d2430:41102\",\"0xd07dc4262bcdbf85190c01c996b4c06a461d2430:90221\",\"0x4ee2513dc4e4b3999ca4f79566b1f8f66f64fd93:4\",\"0xfbeef911dc5821886e1dda71586d90ed28174b7d:219452\",\"0xfbeef911dc5821886e1dda71586d90ed28174b7d:217101\",\"0xd07dc4262bcdbf85190c01c996b4c06a461d2430:70662\",\"0xd07dc4262bcdbf85190c01c996b4c06a461d2430:25070\",\"0x4ee2513dc4e4b3999ca4f79566b1f8f66f64fd93:3\",\"0xd07dc4262bcdbf85190c01c996b4c06a461d2430:29327\",\"0xd07dc4262bcdbf85190c01c996b4c06a461d2430:28164\"]",
//         "method": "POST",
//         "mode": "cors",
//         "credentials": "omit"
//     }).then(res => (res.ok ? res : Promise.reject(res)))
//         .then(res => res.json())
//     console.log(res)
// }

function App() {
    const [queryString, setQueryString] = useState('')

    return (
        <div>
            <Navbar setQueryString={setQueryString}/>
            <div className="mt-2">
                <DisplayAssets queryString={queryString}/>
            </div>
        </div>
    );
}

export default App;
