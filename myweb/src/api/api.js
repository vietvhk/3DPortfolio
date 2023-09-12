import React, { useState, useEffect } from 'react';

const baseUrl = "https://jsonplaceholder.typicode.com/todos/1";

// const addPosts = async (title, body) => {
//     await fetch(baseUrl, {
//         method: 'POST',
//         body: JSON.stringify({
//             title: title,
//             body: body,
//             userId: Math.random().toString(36).slice(2),
//         }),
//         headers: {
//             'Content-type': 'application/json; charset=UTF-8',
//         },
//     })
//         .then((response) => response.json())
//         .then((data) => {
//             setPosts((posts) => [data, ...posts]);
//             setTitle('');
//             setBody('');
//         })
//         .catch((err) => {
//             console.log(err.message);
//         });
// };

const GetPost = () => {
    // const [posts, setPosts] = useState([]);
    let items;
    // useEffect(() => {
    return fetch(baseUrl)
        .then(response => response.json())
        .then(json => console.log(json))
    // }, []);

    // return (
    //     items
    //     // ... consume here
    //  );
};
export default GetPost;