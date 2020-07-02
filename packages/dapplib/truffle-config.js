require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey prison suspect venture strong radar six puppy give prize slot gesture'; 
let testAccounts = [
"0x88b94b74e194a0647b32d3d9adfa146ac1c3deac9a5cfea63866a059c3378ff0",
"0xcd1a295e60ff17b568b2b91814af7fb4e70a5af39993ecfa37d82ea80ed37a8f",
"0xa4ac8d1f3f384a17d3bb1cc5e6fc9771cd8b243c570ef8f4fbbf6d132ccc7113",
"0xb9fac48a1ea53e323b04963a3b38ff9957f2d49abb8bd551d27c22361c00e237",
"0xa5df45600e46adc4c2f7ebbed26826bf346297287e64527667110f67e9d0de54",
"0xdff1661cd96c37429d88fa29471c6f623b1bf9c1782375c77181cc2d02ca8eef",
"0x505ed1d63e2af2a14d9044c375ee12c15151fe07d42d07cd6d88c12bc325db9f",
"0x899c1c5111403bc0a0af426e0b024f6b38a35213fadddd35686c53a38be73a08",
"0x56fb139e9f470692a5bc696d3651e386a0a90d1337e3fceac28817f69477ec9d",
"0x7c7967cc11fdf87e9d1aac2b2fbd01f566ebba889205a5095ab558b94b14e77d"
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
            version: '^0.5.11'
        }
    }
};
