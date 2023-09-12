import React, { useState, useEffect } from 'react';

const baseUrl = "https://jsonplaceholder.typicode.com/posts";

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

const App = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch(baseUrl+'?_limit=10')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setPosts(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    return (
        data
        // ... consume here
     );
};