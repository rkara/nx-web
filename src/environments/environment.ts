import { AuthConfig } from "./auth";

export const environment = {
  production: false,
  configuration: {
    auth: AuthConfig,
    graphql: 'https://next-election.hasura.app/v1/graphql',
  },
};

