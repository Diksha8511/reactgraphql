import { useQuery } from '@apollo/client'
import { gql } from 'graphql-tag';

const SET_COOKIE = gql`
    query {
        setCookie
    }
`

function LoadCookie() {
    const { loading, error, data } = useQuery(SET_COOKIE)

    if (loading) return <h1>Loading...</h1>
    console.log(data);
    if (error) return `Error! ${error}`
    return (
        <div>
            <p>{data}</p>
        </div>
    );
}

export default LoadCookie