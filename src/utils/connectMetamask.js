

export default async function connectMetamask(){
    if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
        try {
            window.ethereum.enable().then(function() {
                // User has allowed account access to DApp...
            });
        } catch(e) {
            // User has denied account access to DApp...
        }
    }
    // Legacy DApp Browsers
    else if (window.web3) {
        window.web3 = new Web3(web3.currentProvider);
    }
    // Non-DApp Browsers
    else {
        alert('You have to install MetaMask !');
    }
}