require("dotenv").config();
const ethers = require('ethers');
(async () => {
	const node = 'https://rpc.scroll.io'    //your rpc
const provider = new ethers.providers.JsonRpcProvider(node);

const privatekey = '' // your private key
    const signer = new ethers.Wallet(privatekey, provider);

      const tx = await signer.sendTransaction({
        to: '', // receiver adress
        value: ethers.utils.parseUnits('0.00001', 'ether'),
      });
      console.log(tx);
})();
