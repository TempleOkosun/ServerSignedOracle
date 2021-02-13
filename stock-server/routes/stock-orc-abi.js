const abi = [
    {
        "inputs": [
            {
                "internalType": "bytes4",
                "name": "symbol",
                "type": "bytes4"
            },
            {
                "internalType": "uint256",
                "name": "price",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "volume",
                "type": "uint256"
            }
        ],
        "name": "setStock",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "inputs": [
            {
                "internalType": "bytes4",
                "name": "symbol",
                "type": "bytes4"
            }
        ],
        "name": "getStockPrice",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes4",
                "name": "symbol",
                "type": "bytes4"
            }
        ],
        "name": "getStockVolume",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
]

module.exports = {
    abi
}