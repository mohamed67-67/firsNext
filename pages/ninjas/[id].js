import React from 'react'

export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    const paths = data.map(ninja => {
        return {
            params : { id : ninja.id.toString()}
        }
    })

    return{
        paths,
        fallback : false
    }
}


export const getStaticProps = async (context) => {
    const id = context.params.id
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const data = await res.json();

    return{
        props : {
            ninja: data
        }
    }
}

const Details = ({ninja}) => {
    return (
        <div>
            <h1>Details Page</h1>
            <h5> {ninja.name} </h5>
            <h5> {ninja.email} </h5>
            <h5> {ninja.website} </h5>
            <h5> {ninja.address.city} </h5>
        </div>
    )
}

export default Details
