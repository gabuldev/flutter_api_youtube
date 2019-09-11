const { request, GraphQLClient } = require("graphql-request");
require("dotenv").config();
const BASE_URL = process.env.BASE_URL;
const SECRET_HASURA = process.env.SECRETHASURA;

class Hasura {
  static async send(data) {
    const client = new GraphQLClient(BASE_URL, {
      headers: {
        "x-hasura-admin-secret": SECRET_HASURA
      }
    });
    return await client.request(data);
  }

  static async query(data) {
    return await this.send(data);
  }

  static async mutation(data) {
    return await this.send(data);
  }
}

module.exports = { Hasura };
