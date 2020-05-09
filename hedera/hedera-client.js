const { Client } = require("@hashgraph/sdk");

const TestnetClient = Client.forTestnet();
TestnetClient.setOperator(process.env.OPERATOR_ID, process.env.OPERATOR_KEY);

module.exports = TestnetClient;