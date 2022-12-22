import Web3 from 'web3';

export async function connectMetamask(){
    if (!window.ethereum) {
        alert("Instale a Metamask!");
    } else {
        try {
            const web3 = new Web3(window.ethereum);
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            const address = accounts[0];
            return {web3, address};
        } catch (error) {
            alert("Você precisa autorizar o acesso à sua carteira!");
        }
    }
}