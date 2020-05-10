const { Client, FileCreateTransaction, Ed25519PrivateKey, Hbar, FileContentsQuery, FileId } = require("@hashgraph/sdk");
require("dotenv").config();


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
  .execute(client).then();

  // console.log(`file contents: ${new TextDecoder().decode(resp)}`) 
  const contents =  `file contents: ${new TextDecoder().decode(resp)}`;
  return contents;
}

async function main()
{
  let contents = await getFile(process.argv[2]);
  console.log(contents);
  return contents;
}

main()
