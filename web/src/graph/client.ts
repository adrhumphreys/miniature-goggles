import { Client, createClient } from "urql";

const getClient = (): Client =>
  createClient({
    url: import.meta.env.VITE_GRAPH_SERVER,
    suspense: true,
  });

export default getClient;
