
const Web3 = require("web3");
const contractJson = require('./contract/nft.json');


const rinkebyNetworkUrl = 'https://rinkeby.infura.io/v3/0440d5e52c824647b370b33bb3054eda';

const ownerAddress = '0x7Cf7b853C3917F5A6caA6A101EF18F40CaFBf520';


(async() => {

   
const web3 = new Web3(rinkebyNetworkUrl);

const contract = new web3.eth.Contract(contractJson.abi, '0x19C80deD53BE35acA3c55E576106E5221f5AC5Fe');

const ethBalance =  await web3.eth.getBalance(ownerAddress);
/**
 *  muon call cgi tu contract thi kiem method cua no
 */
const nftBalance =  await contract.methods
.balanceOf(ownerAddress)
.call();

console.log('ethBalance:',web3.utils.fromWei(ethBalance.toString(), "ether"));

console.log('nftBalance:',nftBalance);
})()
