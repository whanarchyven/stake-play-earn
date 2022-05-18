var $gWC4N$web3=require("web3");function $parcel$export(e,t,n,a){Object.defineProperty(e,t,{get:n,set:a,enumerable:!0,configurable:!0})}$parcel$export(module.exports,"balanceOfAddress",(()=>$bb22727ae9bfd371$export$897535559dbdf506)),$parcel$export(module.exports,"totalSupply",(()=>$bb22727ae9bfd371$export$3c12e9470fab105c)),$parcel$export(module.exports,"isConnected",(()=>$bb22727ae9bfd371$export$e5a90df53f832dc9)),$parcel$export(module.exports,"enableMM",(()=>$bb22727ae9bfd371$export$84461cafb3d5ab08)),$parcel$export(module.exports,"mintNFT",(()=>$bb22727ae9bfd371$export$f7977ddaea182cbe)),$parcel$export(module.exports,"totalSupplyOfCategory",(()=>$bb22727ae9bfd371$export$92b39ab8958aa4ed));var $a9988bd0ce39b5eb$exports={};$a9988bd0ce39b5eb$exports=JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"","type":"uint256"},{"indexed":false,"internalType":"address","name":"","type":"address"}],"name":"Minted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256[]","name":"ids","type":"uint256[]"},{"indexed":false,"internalType":"uint256[]","name":"values","type":"uint256[]"}],"name":"TransferBatch","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"id","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"TransferSingle","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"value","type":"string"},{"indexed":true,"internalType":"uint256","name":"id","type":"uint256"}],"name":"URI","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"inputs":[],"name":"IDCNT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"},{"internalType":"address","name":"_address","type":"address"}],"name":"OwnerMintNFT","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"id","type":"uint256"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"balanceOfAddress","outputs":[{"internalType":"uint256[4]","name":"","type":"uint256[4]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"accounts","type":"address[]"},{"internalType":"uint256[]","name":"ids","type":"uint256[]"}],"name":"balanceOfBatch","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"mintNFT","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"payment","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256[]","name":"ids","type":"uint256[]"},{"internalType":"uint256[]","name":"amounts","type":"uint256[]"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeBatchTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256[4]","name":"","type":"uint256[4]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"}],"name":"uri","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"stateMutability":"payable","type":"receive"}]');var $e2f0f76cb258f529$exports={};$e2f0f76cb258f529$exports={CONTRACT_ADDRESS:"0x265e78A3Fc4f81C4B4eb393E846b4373d62ec665"};class $bb22727ae9bfd371$var$ContractController{web3js;contract;ethereum;chainId;account;balance;contractAddr;price;mmConnected;constructor(){window.contract=this,window.web3js||(window.web3js=new $gWC4N$web3(window.web3.currentProvider)),this.web3js=window.web3js,this.ethereum=window.ethereum;JSON.stringify($a9988bd0ce39b5eb$exports);this.contractAddr=$e2f0f76cb258f529$exports.CONTRACT_ADDRESS;this.gasPrice_wei=this.web3js.utils.toHex("100"),this.price=1,window.contractWrapper||(window.contractWrapper=new this.web3js.eth.Contract($a9988bd0ce39b5eb$exports,this.contractAddr)),this.contract=window.contractWrapper,this.price=parseInt("0.01"),this.value_wei=this.web3js.utils.toWei(String(parseInt(this.price/1e18)),"ether")}async mintNFT(e,t){const n="bronze"===e?0:"silver"===e?1:"gold"===e?2:3;return this.enableMM(t).then((e=>this.mintNFTW(n,t)))}async mintNFTW(e,t){t("loading");const n=0===e?"0.4":1===e?"0.8":2===e?"2.4":"10",a=await contract.web3js.eth.getTransactionCount(contract.account),s=(a.toString(16),{nonce:a,gasPrice:this.web3js.utils.toHex("10000000000"),gas:this.web3js.utils.toHex("2100000"),to:$e2f0f76cb258f529$exports.CONTRACT_ADDRESS,from:window?.ethereum?.selectedAddress,value:this.web3js.utils.toHex(this.web3js.utils.toWei(n)),data:"",chainId:window.ethereum.chainId});return console.log("transactionParameters",s),this.contract.methods.mintNFT(e,1).send(s).then((e=>{console.log("success mint",e),t("success")})).catch((e=>{console.log(e),t("error")}))}balanceOfAddress(){return window?.ethereum?.selectedAddress&&this.contract?.methods?.$bb22727ae9bfd371$export$897535559dbdf506(window?.ethereum?.selectedAddress)?.call()}totalSupply(){return this.contract?.methods?.$bb22727ae9bfd371$export$3c12e9470fab105c()?.call()}totalSupplyOfCategory(e){return"bronze"===e?this.contract.methods.totalSupply().call().then((e=>e[0])):"silver"===e?this.contract.methods.totalSupply().call().then((e=>e[1])):"gold"===e?this.contract.methods.totalSupply().call().then((e=>e[2])):"platinum"===e?this.contract.methods.totalSupply().call().then((e=>e[3])):void 0}async enableMM(e){return e("loading"),await(async()=>{this.chainId=await this.ethereum.request({method:"eth_chainId"})})(),console.log("Connecting metamask"),await(async()=>{var t;if(console.log("request"),window.ethereum){console.log("Ethereum detected");var n=!0;try{t=await this.ethereum.request({method:"eth_requestAccounts"}),console.log("accounts",t),await this.web3js.eth.getBalance(t[0],((e,t)=>{this.balance=this.web3js.utils.fromWei(t,"ether")+" ETH",console.log(this.balance),this.mmConnected=!0}))}catch(t){e("error"),n=!1,4001===t.code?console.log("User Rejected REQUEST"):console.log("failed to connect",t)}return n&&(console.log("success!"),console.log(t[0]),this.account=t[0],e("success",window?.ethereum?.selectedAddress)),this.account}})(),Promise.resolve("ok")}}const $bb22727ae9bfd371$export$e5a90df53f832dc9=()=>!!window?.ethereum?.selectedAddress,$bb22727ae9bfd371$export$84461cafb3d5ab08=e=>{try{(new $bb22727ae9bfd371$var$ContractController).enableMM(e)}catch(t){return console.log(t),void e("error")}},$bb22727ae9bfd371$export$f7977ddaea182cbe=(e,t)=>{try{(new $bb22727ae9bfd371$var$ContractController).mintNFT(e,t)}catch(e){console.log(e),t("error")}},$bb22727ae9bfd371$export$92b39ab8958aa4ed=e=>{try{return(new $bb22727ae9bfd371$var$ContractController).totalSupplyOfCategory(e)}catch(e){return console.log(e),Promise.resolve(-1)}},$bb22727ae9bfd371$export$897535559dbdf506=()=>{try{return(new $bb22727ae9bfd371$var$ContractController).balanceOfAddress()}catch(e){return console.log("balanceOfAddress error",e),Promise.resolve([0,0,0,0])}},$bb22727ae9bfd371$export$3c12e9470fab105c=()=>{try{return(new $bb22727ae9bfd371$var$ContractController).totalSupply()}catch(e){return console.log("totalSupply error",e),Promise.resolve([0,0,0,0])}};