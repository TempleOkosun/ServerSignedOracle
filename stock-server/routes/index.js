const express = require('express');
const router = express.Router();

const contractStockOrc = require("./stock-orc-abi");
const Web3 = require('web3');
const Tx = require('ethereumjs-tx');


async function init() {

  const TxObj = await Tx.Transaction;

  const contractAddr = '0x91d07E5bcD322d3C992D14b974D40f7281a172E3';
  const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));
  const accounts = await web3.eth.getAccounts(console.log);
  const contractInstance = new web3.eth.Contract(contractStockOrc.abi, contractAddr);
  console.log("contractInstance");
  const privateKey = Buffer.from('0bb655408b9d9836967605a25896b5b15f25b893b4b1d59da1ff90aa78d23b6f', 'hex');

  let symbol = Web3.utils.utf8ToHex("ABCD");
  let price = 50;
  let volume = 200000;

  const _data =await contractInstance.methods.setStock(symbol, price, volume).encodeABI();
  console.log(_data);

  let rawTx = {};
  web3.eth.getTransactionCount(accounts[0]).then(nonce => {
    rawTx = {
      nonce: nonce,
      gasPrice: '0x20000000000',
      gasLimit: '0x41409',
      to: contractAddr,
      value: 0,
      data: _data
    }

    const tx = new TxObj(rawTx);
    tx.sign(privateKey);
    const serializedTx = tx.serialize();

    web3.eth.sendSignedTransaction('0x' + serializedTx.toString('hex'))
        .on('receipt', console.log);

  });




}


/* GET home page. */
router.get('/', function(req, res, next) {
  init();
  res.render('index', { title: 'Express' });
});


module.exports = router;
