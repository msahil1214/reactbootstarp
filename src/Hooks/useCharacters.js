import { useQuery, gql } from "@apollo/client";

const GET_CHARACTERS = gql`
  query {
    jobs {
      title
      isPublished
      company {
        name
      }
      userEmail
      applyUrl
      description
    }
  }
`;

export const useCharacters = () => {
  const { error, data, loading } = useQuery(GET_CHARACTERS);

  return {
    error,
    data,
    loading
  };
};
