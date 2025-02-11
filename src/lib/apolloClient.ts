import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

// Create an Apollo Client instance without the authLink for login requests
export const loginClient = new ApolloClient({
  link: new HttpLink({
    uri: "https://prelura.com/graphql/",
    credentials: "same-origin",
  }),
  cache: new InMemoryCache(),
});

// Create an Apollo Client instance with the authLink for authenticated requests
const httpLink = new HttpLink({
  uri: "https://prelura.com/graphql/",
  credentials: "same-origin",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("token");

  console.log(token, "Access Token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${JSON.parse(token)}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;
