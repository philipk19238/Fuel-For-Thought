const { Client, FileCreateTransaction, Ed25519PrivateKey, Hbar, FileContentsQuery, FileId } = require("@hashgraph/sdk");
require("dotenv").config();

async function makeFile() {
  const operatorAccount = process.env.OPERATOR_ID;
  const operatorPrivateKey = Ed25519PrivateKey.fromString(process.env.OPERATOR_KEY);
  const operatorPublicKey = operatorPrivateKey.publicKey;

  if (operatorPrivateKey == null || operatorAccount == null) {
    throw new Error(
      "environment variables OPERATOR_KEY and OPERATOR_ID must be present"
    );
  }

  const client = Client.forTestnet()
  client.setOperator(operatorAccount, operatorPrivateKey);
  
  // make new file
  const transactionId = await new FileCreateTransaction()
    .setContents("Hello, Hedera's file service!")
    .addKey(operatorPublicKey) // Defines the "admin" of this file
    .setMaxTransactionFee(new Hbar(15))
    .execute(client);

    const receipt = await transactionId.getReceipt(client); 
    const fileId = receipt.getFileId(); 
    console.log("new file id = ", fileId);
    return fileId;
}

async function getFile(fileId)
{
  const operatorAccount = process.env.OPERATOR_ID;
  const operatorPrivateKey = Ed25519PrivateKey.fromString(process.env.OPERATOR_KEY);
  const operatorPublicKey = operatorPrivateKey.publicKey;

  if (operatorPrivateKey == null || operatorAccount == null) {
    throw new Error(
      "environment variables OPERATOR_KEY and OPERATOR_ID must be present"
    );
  }

  const client = Client.forTestnet();
  client.setOperator(operatorAccount, operatorPrivateKey);
  // get file contents
  const resp = await new FileContentsQuery()
  // .setFileId(FileId.ADDRESS_BOOK)
  .setFileId(fileId)
  .execute(client);

  console.log(`file contents: ${new TextDecoder().decode(resp)}`) 
}

async function main()
{
  let id = await makeFile();
  console.log(id);
  getFile(id);
}

main()