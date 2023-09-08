import { gql } from '@apollo/client';

export const GET_CURRUSER = gql`
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