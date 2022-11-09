import ContractManager from "../artifacts/contracts/ContractManager.json";
import UserStorage from "../artifacts/contracts/UserStorage.json";
import ProposalController from "../artifacts/contracts/ProposalController.json";
import UserController from "../artifacts/contracts/UserController.json";
import LANDRegistry from "../artifacts/contracts/LANDRegistry.json";
import Web3 from "web3";
import ManaToken from '../artifacts/contracts/ManaToken.json'

const newAbi = ManaToken.abi;
const landAbi = LANDRegistry.abi;

var web3 = new Web3(Web3.givenProvider);

const drizzleOptions = {
  web3: {
    block: false,
    status: true,
    // fallback: {
    //   type: 'ws',
    //   //New ganache network with out old cli
    //   //url: 'ws://127.0.0.1:7545',
    //   url: 'ws://127.0.0.1:8545/',
    // },
 
  },

  accounts:[1],
  accountBalances: {
  },
 
  transactions: {
    txHash: {
      confirmations:[3],
      error:true,
      receipt:true,
      status:true
    }
  },
  transactionStack:true,
//   contracts: [UserStorage, ContractManager, UserController,ProposalController,
//  {
//       contractName: 'MANAToken',
//       web3Contract: new web3.eth.Contract(newAbi, '0xfb74efe49b81Bc37B5F3bf77e16eE18238fEe895') 
//     },
//     {
//       contractName: 'LANDRegistry',
//       web3Contract: new web3.eth.Contract(landAbi, '0x804516C4c64E3D2a78ef5eAc0E6a57A0b6bB96B3') 
//     },

//   ],

//Ropsten Network
contracts: [UserStorage, ContractManager, UserController,ProposalController,
  {
       contractName: 'MANAToken',
       web3Contract: new web3.eth.Contract(newAbi, '0xc267090d65b9389c5006d49b2c46b86c71470acb') 
     },
     {
       contractName: 'LANDRegistry',
       web3Contract: new web3.eth.Contract(landAbi, '0xead5be7a17881adc74419565dbd67508979ad2f4') 
     },
 
   ],

//Ropsten LANDRegistry
//0xead5be7a17881adc74419565dbd67508979ad2f4

//Ropsten ManaToken
// 0xc267090d65b9389c5006d49b2c46b86c71470acb

//Roptsten Marketplace
//0xd075116d6eb21afabfc58fdc8a115c5bf044a0fe

  events: {
    UserStorage: ["UserCreated"],
    ProposalController: ["AssetNomination"]
  },

  syncAlways:true,

  polls: {
    accounts: 1500,
  },


};

export default drizzleOptions;
