require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give enroll slender tragic charge raise machine upgrade grunt light army giant'; 
let testAccounts = [
"0xd18882ff68726da7cf20db77b1577fdc0100580bcd9672001241b3c6f42f31d9",
"0x4bd3b73a4ce480c007b04385bc0750b15097810d38fe9acb78dad398c7fb0ebb",
"0xbb1e49e49e4fa060227d8b4700e050b63522e61417d98f53f27ed5e62040faaf",
"0xb080812199d9961846b13b2f91aeea054545f0523cb343e9cb461cc7d8988ace",
"0xbcde005b90d3b368c89a1b6f3e34b296e28a8dffafb0fe47220b1a67fc007ed3",
"0x63b2681a48ef93945fa66120a32d34bddba62e4fc84c2060f33c051147975b79",
"0x01e62b1153a9e6c64fb6216c434969df84f07a682a60046257727db293f952b9",
"0x64dcbc4d28b4a415c0986d7457e5eb5effade9a1c182924ed708758445eb6331",
"0x47fe0feff935f8ac29759841662e2ead75c08da374790fc2fe14fe7282d91003",
"0x426241b487262b4d323da4c9d5256056392eb431571835756939ffb14828d8e9"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

