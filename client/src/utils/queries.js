import { gql } from '@apollo/client';

export const GET_USER = gql`
    {
        currUser {
        _id
        username
        email
        bookCount
        savedBooks {
            bookId
            authors
            description
            title
            image
            link
        }
        }
    }
`;