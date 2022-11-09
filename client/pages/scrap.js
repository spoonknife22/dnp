import React from 'react';
import { ContractForm, AccountData, ContractData } from "@drizzle/react-components";
import Web3 from "web3"

class UserAccount extends React.Component {
 state = { dataKey: null, userId: null };

componentDidMount() {
   const { drizzle, drizzleState } = this.props;
   const contract = drizzle.contracts.UserStorage;
   const account = drizzleState.accounts[0];
  
                                                        
  const dataKey = contract.methods['addresses'].cacheCall(account);
  this.setState({ dataKey });

 }


 render() {
  
   const { UserStorage } = this.props.drizzleState.contracts;
   const displayData = UserStorage.addresses[this.state.dataKey]; // if displayData (an object) exists, then we can display the value 
   const userId =  displayData && displayData.value[0];
  console.log( userId );

   return (
   <div>{userId}</div>
      
   )
 }
}

export default UserAccount;

//  <ContractData contract="Storage" method="getData" toUtf8 toAscii />
const { accounts } = drizzleState;
const account = drizzleState.accounts[0];

const IsMem = async (account) => {
const isMember = await drizzle.contracts.UserStorage.methods.addresses(account).call();
  if(isMember) {
    <div>hello</div>
  }
}
console.log(IsMem(account));
return (
 
<div>
  {/* <UserInfo drizzleState={drizzleState} drizzle={drizzle} accounts={accounts} /> */}

  <MyAddBar drizzleState={drizzleState} drizzle={drizzle} />
</div>   
)   


const { accounts } = drizzleState;
const account = drizzleState.accounts[0];
let member;
let isMember
member = async (account) => {
const isMember = await drizzle.contracts.UserStorage.methods.addresses(account).call();
console.log(isMember)
 return isMember;
} 


\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
const account = drizzleState.accounts[0];
let member;
member = async (account) => {
const isMember = await drizzle.contracts.UserStorage.methods.addresses(account).call();
let button;
if (isMember) {
  console.log(isMember)
    button = <MyAddBar drizzleState={drizzleState} drizzle={drizzle} /> 
  } else {
    console.log(isMember)
    button = <JoinButton />
  }

  return (
    <div> 
      {button}
    </div>
  );
} 



<ContractData drizzle={drizzle} 
drizzleState={drizzleState} 
contract="UserStorage" 
method="addresses" methodArgs={[drizzleState.accounts[0]]} />
/////////////////////////////////////////////////////

else  {
  const account = drizzleState.accounts[0];

  const getMember = async () => {
  let isMember;
  isMember = await drizzle.contracts.UserStorage.methods.addresses(drizzleState.accounts[0]).call();
  return isMember;
  };


  if(!getMember().then((member) => {
    member;
  })) {
  return <MyAddBar drizzleState={drizzleState} drizzle={drizzle}  />
  }
  return <JoinButton drizzleState={drizzleState} drizzle={drizzle} />
  }


  //////////////////////////////////////////////////

         getMember().then((member) => {
            console.log(member)
          });
          
           // console.log(getMember())
          
            if(getMember().then((member) => {
              return member;
            }))
          
            if(!getMember().then((member) => {
              member;
            })) {
            return <MyAddBar drizzleState={drizzleState} drizzle={drizzle}  />
            }
            return <JoinButton drizzleState={drizzleState} drizzle={drizzle} />
            }

////////////////////////////////////////////////////////////

     const Member = <ContractData drizzle={drizzle} drizzleState={drizzleState} contract="UserStorage" method="addresses" methodArgs={[drizzleState.accounts[0]]} />
              if(!Member){
                return "hello";
              }
              return "goodbye";
              return Member;
              render = {data => (
                <>
                this is <b>{data}</b>
                </>
              )}
              
            
             
              render (){<div></div>}
              console.log(getMember())
            return {getMember};




            //////////////////////////////////////////////////////////////////////

                  
            const getMember = async () => {
            let isMember;
            isMember = await drizzle.contracts.UserStorage.methods.addresses(drizzleState.accounts[0]).call();
            if(isMember)
            {
              return <MyAddBar drizzleState={drizzleState} drizzle={drizzle}  />
              }
              return <JoinButton drizzleState={drizzleState} drizzle={drizzle} />
              }



              ////////////////////////////////////////////////////////////////////////////

              import React from "react";
              import UserInfo from "./UserInfo";  
              import MyAddBar from "./AddressBar.js"; 
              import { DrizzleContext } from "@drizzle/react-plugin";
              import { newContextComponents } from "@drizzle/react-components";
              import { Drizzle } from "@drizzle/store";
              import options from "./drizzleOptions";
              import {  Loader } from 'rimble-ui';
              import JoinButton from "../components/Buttons/JoinButton.js";
              
              const { ContractData } = newContextComponents;
              const drizzle = new Drizzle(options);
              
              const AccountsContainer = () => {
               
                return  (
                  <DrizzleContext.Provider drizzle={drizzle}>
                    <DrizzleContext.Consumer>
                      {drizzleContext => {
                        const {drizzle, drizzleState, initialized } = drizzleContext;
              
                        if(!initialized) {
                          return <Loader size="30px" color="white" />
                        }
                    
                          const account = drizzleState.accounts[0];
              
                           
                       
                            //const acount = drizzleState.accounts[0];
                          
                            const member = async () => {
                            const isMember = await drizzle.contracts.UserStorage.methods.addresses(drizzleState.accounts[0]).call();
                            let button;
                            if (isMember) {
                              console.log('hello')
                              return <MyAddBar drizzleState={drizzleState} drizzle={drizzle} /> 
                              } else {
                                console.log('hello')
                                return <JoinButton drizzleState={drizzleState} drizzle={drizzle} />
                              }
                              
                            } 
                          console.log({member})
                            if (typeof {member} === "object") {
                              var i = 0;
                              const displayObjectProps = [];
                        
                              Object.keys(member).forEach(key => {
                                if (i != key) {
                                  displayObjectProps.push(
                                    <li key={i}>
                                      <strong>{key}</strong>
                                      {pendingSpinner}
                                      <br />
                                      {`${member[key]}`}
                                    </li>,
                                  );
                                }
                        
                                i++;
                              });
                              return   <ul>www{displayObjectProps[1]}</ul>;
                             
                           }
              
                            return <div>dja;ldfj</div>
                          
                          
                        
                        
                          
                        
                   
              
                      }}
                    </DrizzleContext.Consumer>
                  </DrizzleContext.Provider>
              );
                
              }
              export default AccountsContainer;



              //////////////////////////////////////////////////////////

Working ETH Accounts Component
import React from 'react';


class EthAccounts extends React.Component {
 state = { dataKey: null };

async componentDidMount() {
   const { drizzle, drizzleState } = this.props;
   const contract = drizzle.contracts.UserStorage;
   const account = drizzleState.accounts[0];
  
                                                        

  const userId = await drizzle.contracts.UserStorage.methods.addresses(account).call();
 
 
  const dataKey = await contract.methods["profiles"].cacheCall(account);
  this.setState({ dataKey });

 }


 render() {
  
   const { UserStorage } = this.props.drizzleState.contracts;
   const displayData = UserStorage.profiles[this.state.dataKey]; // if displayData (an object) exists, then we can display the value 
   const user =  displayData && displayData.value[1];
   console.log({user})

   return (

    <p>Hi: {user} </p>
   )
 }
}

export default EthAccounts


////////////////////////////////////////////////////////////////
Working AddressBar before change from Component to cacheCall

import React from "react";
import { EthAddress, Loader } from 'rimble-ui';
import { newContextComponents } from "@drizzle/react-components";
import { BaseStyles, theme } from "rimble-ui";
import { ThemeProvider } from "styled-components";

const { AccountData } = newContextComponents;


const customTheme = {
  backgroundColor: {
    blue: '#007bff'
  }
};

const AddressBar = ({ drizzle, drizzleState }) => {
  return (
            <div >   
              <AccountData
                drizzle={drizzle}
                drizzleState={drizzleState}
                accountIndex={0}
                units="ether"
                precision={3}
                render={({ address, balance, units }) => (

                <EthAddress theme={customTheme} backgroundColor='blue' address={address}  />
                
                )}
              />
            </div>
          )

}

export default AddressBar;

///////////////////////////////////////////////////////////////////
Join Form Working

import React from "react";
import { newContextComponents } from "@drizzle/react-components";
import { Button, Form } from "shards-react";

const { ContractForm } = newContextComponents;

const JoinForm = ({ onClose, drizzle, drizzleState }) => {

return (
  <div>  
    <ContractForm
      drizzle={drizzle}
      drizzleState={drizzleState}
      contract="UserController"
      method="createUser" 
      fromAscii
      render={({ inputs, inputTypes, state, handleInputChange, handleSubmit }) => (
        <Form onSubmit={handleSubmit}>
         <div className='join-form-dialog modal-body'>
           <p>Access the Crypto Asset Protocal to use a set of tools that help you take advantage passive investment stratigies</p>
          {inputs.map((input, index) => (
            <input className="form-control form-control-sm"
              style={{ fontSize: 20 }}
              key={input.name}
              type={inputTypes[index]}
              name={input.name}
              value={state[input.name]}
              placeholder="Username"
              onChange={handleInputChange}
            />
        ))}
          </div> 
          <div className="modal-footer">
            <button className="btn btn-block btn-success join-form-btn" key="submit" type="button" onClick={handleSubmit} style={{ fontSize: 16 }} > 
              ACCESS CAP
            </button>
          </div>
        </Form>
      )}
    />
      <style jsx>
        {`  .join-form-btn {font-family: Poppins;letter-spacing:5.5px;}
            .join-form-dialog {font-family: Poppins; font-size:1rem;}
        `}                
      </style>
  </div>
)
}

export default JoinForm;

////////////////////////////////////////////////
import React from 'react';
import AddressBar  from "./AddressBar.js"; 
import JoinButton from "./JoinButton.js";



class AddrJoinNav extends React.Component {
 state = { dataKey: null };

async componentDidMount() {
  const { drizzle, drizzleState } = this.props;
  const contract = drizzle.contracts.UserStorage;
  const account = drizzleState.accounts[0];

  try {
  const dataKey = await contract.methods["addresses"].cacheCall(account);
  this.setState({ dataKey });
 
  }
  catch (err) {
    this.setState({ errorMessage: err.message });
  }
  
 }


 render() {
  const { UserStorage } = this.props.drizzleState.contracts;
  const displayData = UserStorage.addresses[this.state.dataKey]; 
  const user =  displayData && displayData.value;

  if(user) {
    return <AddressBar drizzleState={this.props.drizzleState} drizzle={this.props.drizzle} />;
  }
    return <JoinButton drizzleState={this.props.drizzleState} drizzle={this.props.drizzle} />;
  }
}

export default AddrJoinNav;





//////////////////////////////////
import React from "react";
import { newContextComponents } from "@drizzle/react-components";
import { Button, Form } from "shards-react";

const { ContractForm } = newContextComponents;

const JoinForm = ({ onClose, drizzle, drizzleState }) => {

return (
  <div>  
    <ContractForm
      drizzle={drizzle}
      drizzleState={drizzleState}
      contract="UserController"
      method="createUser" 
      fromAscii
      render={({ inputs, inputTypes, state, handleInputChange, handleSubmit }) => (
        <Form onSubmit={handleSubmit}>
         <div className='join-form-dialog modal-body'>
           <p>Access the Crypto Asset Protocal to use a set of tools that help you take advantage passive investment stratigies</p>
          {inputs.map((input, index) => (
            <input className="form-control form-control-sm"
              style={{ fontSize: 20 }}
              key={input.name}
              type={inputTypes[index]}
              name={input.name}
              value={state[input.name]}
              placeholder="Username"
              onChange={handleInputChange}
            />
          ))}
          </div> 
          <div className="modal-footer">
            <button className="btn btn-block btn-success join-form-btn" key="submit" type="button" onClick={handleSubmit} style={{ fontSize: 16 }} > 
              ACCESS CAP
            </button>
          </div>
        </Form>
      )}
    />
      <style jsx>
        {`  .join-form-btn {font-family: Poppins;letter-spacing:5.5px;}
            .join-form-dialog {font-family: Poppins; font-size:1rem;}
        `}                
      </style>
  </div>
)
}

export default JoinForm;
//////////////////////////////////////////////////////////////////
import React from 'react';
import AddressBar  from "./AddressBar.js"; 
import JoinButton from "./JoinButton.js";

class AddrJoinNav extends React.Component {
 state = { dataKey: null };

async componentDidMount() {
  const { drizzle } = this.props;
  let state = drizzle.store.getState();
  const contract = drizzle.contracts.UserStorage;
  const account = state.accounts[0];

  try {
  const dataKey = await contract.methods["addresses"].cacheCall(account);
  this.setState({ dataKey });
  }
  catch (err) {
    this.setState({ errorMessage: err.message });
  }
 }

 componentDidUpdate(prevProps) {
  const { drizzleState } = this.props;
  if (prevProps.drizzleState.accounts[0] !== this.props.drizzleState.accounts[0]) {
    window.location.reload();
  }
}

 render() {
  const { UserStorage } = this.props.drizzleState.contracts;
  const displayData = UserStorage.addresses[this.state.dataKey]; 
  let user =  displayData && displayData.value;

  if(user) {
    return <AddressBar drizzle={this.props.drizzle} />;
  }
    return <JoinButton />;
  }
}

export default AddrJoinNav;



/////////////////////////////////////////////////////////////////
import React from "react";
import { newContextComponents } from "@drizzle/react-components";
import { Button, Form } from "shards-react";
import Web3 from "web3";
import { toast } from 'react-toastify';
import JoinSubmitBtn from '../components/buttons/JoinSubmit';

class JoinForm extends React.Component {
  state = { dataKey: null };

  handleSubmit = (event) => {
    const { drizzle } = this.props;
    let state = drizzle.store.getState();
    const contract = drizzle.contracts.UserController;
    const username = Web3.utils.fromAscii(this.state.newVal);
    contract.methods["createUser"].cacheSend(username);
  }
  handleChange = (event) => {
    this.setState({newVal: event.target.value});
  }
  
  render() {

  return (
    <div>
      <Form onSubmit={this.handleSubmit}>
        <div className='join-form-dialog modal-body'>
        <p>Access the Crypto Asset Protocal to use a set of tools that help you take advantage passive investment stratigies</p>
          <input className="form-control form-control-sm"
            placeholder="Username"
            onChange={this.handleChange}
          />      
        </div> 
        <div className="modal-footer">
          <JoinSubmitBtn drizzle={this.props.drizzle}  handleSubmit = {this.handleSubmit} />
        </div>
      </Form>
  
      <style jsx>
        {`  .join-form-btn {font-family: Poppins;letter-spacing:5.5px;}
            .join-form-dialog {font-family: Poppins; font-size:1rem;}
        `}                
      </style>
    </div>
    )
  }
}

export default JoinForm;

///////////////////////////////////////////////////////////////

import React from "react";
import {createUser} from '../EthComponents/middleware/capSagas'
import { Button, Form } from "shards-react";
import Web3 from "web3";
import { toast } from 'react-toastify';
import JoinSubmitBtn from '../components/buttons/JoinSubmit';
import { drizzleConnect } from '@drizzle/react-plugin'
import store from '../EthComponents/middleware'
import { DrizzleContext } from "@drizzle/react-plugin";


const Input = ({ title, value, onChange }) => (
  <div>
    <label>
      {title}
    </label>
    <input className="form-control form-control-sm" value={value} onChange={onChange} />
  </div>
) 

export default class JoinForm extends React.Component {
//class JoinForm extends React.Component {
  state = { username:"", };
  constructor(props) {
    super(props);

  }

updateField = (fieldName, e) => {
  const newState = {}
  newState[fieldName] = e.target.value;

  this.setState(newState)
}

createUser = async (e) => {
  e.preventDefault() 

  // Some quick validation checks
  for (let key in this.state) {
    if (!this.state[key]) {
      return toast.error( `You must fill in your ${key}!`, { position: toast.POSITION.TOP_CENTER });
    }
  }
  const { username } = this.state
  try {
    const { drizzle } = this.props;
    let state = drizzle.store.getState();
    const contract = drizzle.contracts.UserController;
    const uName = Web3.utils.fromAscii(username);
    contract.methods["createUser"].cacheSend(uName);

  } catch (err) {
    toast.error( `${err}`, { position: toast.POSITION.TOP_CENTER })
 
  }
}


  
  render() {
  return (
    <div>
      <form onSubmit={this.createUser}>
        <div className='join-form-dialog modal-body'>
        <p>Access the Crypto Asset Protocal to use a set of tools that help you take advantage passive investment stratigies</p>
        <Input 
          title="Desired Username" 
          onChange={e => this.updateField("username", e)} 
        />  
        </div> 
        <div className="modal-footer">
          <JoinSubmitBtn drizzle={this.props.drizzle}  createUser = {this.createUser} />
        </div>
      </form>
  
      <style jsx>
        {`  .join-form-btn {font-family: Poppins;letter-spacing:5.5px;}
            .join-form-dialog {font-family: Poppins; font-size:1rem;}
        `}                
      </style>
    </div>
    )
  }
  
}

////////////////////////////////////////////////////////////
JoinForm.contextTypes = {
  drizzle: PropTypes.object
}
JoinForm.contextType = DrizzleContext.Context;

const mapDispatchToProps = dispatch => {
  return {
    onMetaMaskCheckDone: () => dispatch({ type: "CHECK_METAMASK_DONE" }),
    onTxErrorDone: () => dispatch({ type: "TX_ERROR_METAMASK_DONE" }),
    onRedirectToHomeDone: () => dispatch({ type: "REDIRECT_TO_HOME_DONE"})
  };
};

export default drizzleConnect(JoinForm,mapDispatchToProps);


////////////////////////////////////////////////////////


createUser = async (e) => {
  e.preventDefault() 

  // Some quick validation checks
  for (let key in this.state) {
    if (!this.state[key]) {
      return toast.error( `You must fill in your ${key}!`, { position: toast.POSITION.TOP_CENTER });
    }
  }
    const { username } = this.state;




    
    const { drizzle } = this.props;
    let state = drizzle.store.getState();
    const contract = drizzle.contracts.UserController;
    const uName = Web3.utils.fromAscii(username);

    try {
    contract.methods["createUser"].cacheSend(uName);
  } catch (err) {
    console.error("Err:", err)
  }
}
/////////////////////////////////////////////////////////
import React from "react";
import { Button, Container  } from "shards-react";
import { Link } from '../../../../routes';
import RegModal from '../../RegModal.js'
import JoinBtnInterestBar from '../../buttons/JoinBtnInterestBar.js';
import { Drizzle } from "@drizzle/store";
import options from "../../../EthComponents/drizzleOptions";
import { DrizzleContext } from "@drizzle/react-plugin";

const drizzle = new Drizzle(options);

export default class InterestBar extends React.Component {

  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     showRegisterModal: false,
  //   };
  // }

  // toggleRegisterModal = async () => {
  //   const { showRegisterModal } = this.state

  //   this.setState({
  //     showRegisterModal: !showRegisterModal,
  //   })
  // }

render() {
  //const { showRegisterModal } = this.state 
    return (  

    <div className="mb-4 d-flex justify-content-center">
      <div className="card">
        <div className="card-body">
          <Container>
              <div className="row justify-content-sm-center"> 
                <div className="col-sm d-flex justify-content-sm-center">
                  <JoinBtnInterestBar />                            
                </div> 
                <div className="col-sm d-flex justify-content-sm-center">
                  <div className="card-text arrow">&rarr;</div>
                </div> 
                <div className="col-sm d-flex justify-content-sm-center">
                  <div className="card-text">Deposit</div>
                </div>  
                <div className="col-sm d-flex justify-content-sm-center">
                  <div className="card-text arrow">&rarr;</div>
                </div>  
                <div className="col-sm d-flex justify-content-sm-center">
                  <div className="card-text">Save</div>
                </div> 
                <div className="col-sm d-flex justify-content-sm-center">
                  <div className="card-text arrow">&rarr;</div>
                </div>   
                <div className="col-sm d-flex justify-content-sm-center">
                  <div className="card-text">Profit</div>
                </div>                                                      
              </div>
            </Container>
          </div>     
        </div>
        <style jsx>{` 
                  .card-text {margin-bottom:.1rem;font-family: Poppins;color:black;}
                  .card {width:60%;margin-bottom:0;}
                  .card-body {padding:.5rem;font-size:18px;font-weight:300;} 
                  .arrow {color:#17c671;font-size:19px;font-weight:900;}
                  .join-btn{color:#000;letter-spacing:2px;font-family: Poppins;font-size:14px;line-height: 1;}
                  `}  
        </style>

    </div>

        );
    }
}


<Button onClick={this.toggleRegisterModal}  block outline theme="success" size="sm">
<div className="join-btn">JOIN</div>
</Button>  
////////////////////////////////////////////////////////

import React from "react";
import Footer from '../components/Footer.js';
import TestComponent from "../components/testComponent.js";
import { Button, Container  } from "shards-react";
import { Page, Center } from '../components/Layout.js';
import { Link } from '../../routes';
import { DrizzleContext, DrizzleProvider } from "@drizzle/react-plugin";
import {  Loader } from 'rimble-ui';

import drizzleOptions from "../EthComponents/drizzleOptions";
import store from '../EthComponents/middleware';


export default class TestPage extends React.Component {

render() {
    return (    
            <div>
              <Page>
                <Center>
                <DrizzleProvider options={drizzleOptions} store={store}>
                   
                   
                          
                          
                             
                              <div> <TestComponent /></div>
          
                </DrizzleProvider>
                </Center>
              </Page>  
            </div>
       
        );
    }

}


//////////////////////////////////////////
import React from "react";
import Footer from '../components/Footer.js';
import TestComponent from "../components/testComponent.js";
import { Button, Container  } from "shards-react";
import { Page, Center } from '../components/Layout.js';
import { Link } from '../../routes';
import { DrizzleContext } from "@drizzle/react-plugin";
import {  Loader } from 'rimble-ui';
export default class TestPage extends React.Component {

render() {
    return (    
            <div>
              <Page>
                <Center>
                <DrizzleContext.Consumer>
                      {drizzleContext => {
                        const {drizzle, drizzleState, store, initialized } = drizzleContext;
                          if(!initialized) {
                            return <Loader size="30px" color="blue" />
                            }
                          
                            return(   
                             
                              <div> <TestComponent drizzle={drizzle} store={drizzle.store} /></div>
                              // <JoinForm onClose={onClose} drizzleState={drizzleState} drizzle={drizzle} />  
                        )
                    }
                }  
                </DrizzleContext.Consumer>
                </Center>
              </Page>  
            </div>
       
        );
    }

}


///////////////////////////////////////

import React from "react";
import Footer from '../components/Footer.js';
import TestComponent from "../components/testComponent.js";
import { Button, Container  } from "shards-react";
import { Page, Center } from '../components/Layout.js';
import { Link } from '../../routes';
import { DrizzleContext, DrizzleProvider } from "@drizzle/react-plugin";
import {  Loader } from 'rimble-ui';
import options from "../EthComponents/drizzleOptions";
import store from '../EthComponents/middleware'
//import drizzleOptions from "../EthComponents/drizzleOptions";
//import store from '../EthComponents/middleware';


export default class TestPage extends React.Component {

render() {
    return (    
            <div>
              <Page>
                <Center>
                  <DrizzleProvider  options={options} store={store} >
                                      
                    <div> <TestComponent store={store}  /></div>
            
                  </DrizzleProvider>
                </Center>
              </Page>  
            </div>
       
        );
    }

}


//////////////////////////////////////////////

import React, { Component } from 'react';
import OpenSeaApi from "../api/OpenSeaApi.js"
import Web3 from "web3";

import {
  Card,
  CardDeck,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  CardTitle,
  Row,
  Col,
  Table,
  Header,
  HeaderCell,
  Container,
  Progress
} from "shards-react";

export default class PurchaseProposalCard extends Component {
  constructor(){
    super();
    this.state = {
      error:null,
      isLoaded:false,
      assetData: []
    }
  }


  componentDidMount() {
    fetch('https://api.opensea.io/api/v1/events?asset_contract_address=0xf87e31492faf9a91b02ee0deaad50d51d56d5d4d&only_opensea=true&auction_type=english&limit=6')
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            assets: result.asset_events
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      ) 
  }

  render() {
    const { error, isLoaded, assets } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <Progress />
    } else {


      
      return (

        
        <Row>
          {assets.map((assetData) => 
         
            <div key={assetData.id.toString()} className="mb-4 col-sm-12 col-md-12 col-lg-4">
            <Card>{console.log(assetData)}
               <CardHeader className="asset-header p-2 card-title text-center text-uppercase">{assetData.asset.asset_contract.name}</CardHeader>
               <CardTitle className="asset-vote-title text-center text-uppercase">
                 <div className="asset-vote-total">Vote Total&nbsp;&rarr;&nbsp;124</div>
               </CardTitle>
                <CardBody className="pb-.4rem;px-2">
                  <Row className="asset-image align-items-center">
                    <img className="mx-auto" src= {assetData.asset.image_preview_url}/>
                  </Row>
                  <Row className="mt-2 justify-content-center">
                    <div className="mb-2 asset-card text-center card-text">{assetData.asset.name}</div>
                  </Row>
                  <Row className="mt-3 justify-content-center">
                    <div className="mb-2 col-sm asset-card text-left card-text">{assetData.payment_token.symbol}</div>
                    <div className="mb-2 col-sm asset-card text-right card-text">End Date</div>
                  </Row>
                  <Row className="p-0 justify-content-center">
                    <div className="mb-2 col-sm text-left card-text asset-card-numbers">{Web3.utils.fromWei(assetData.starting_price,'ether')}</div>
                    <div className=" mb-2 col-sm text-right card-text asset-card-numbers">{assetData.duration}</div>
                  </Row>
              </CardBody>
              <CardFooter className="p-0">
                <button type="button" className="btn btn-lg btn-block card-footer-btn">APPROVE</button>
              </CardFooter>
            </Card>  
            </div>        
          )}

          <style jsx> {` 
            .asset-card{font-weight:400;color:black;font-size:.9rem;font-family: Poppins;}
            .card-footer-btn{font-family: Poppins;font-weight:400;color:#000;font-size:1rem;letter-spacing:.3rem;border-radius:.01rem .01rem .2rem .2rem;}
            .card-footer-btn:hover{background:#007bff;color:white;}
            .asset-vote-total{font-weight:200;font-size:.9rem;letter-spacing:.2rem;color:#007bff;}
            .asset-card-numbers{font-size:1rem;letter-spacing:.2rem;color:#007bff;hover:black;}
            
            `}    
          </style>

      </Row>  


      );
    }
  }
}

/////////////////////////////////////////////////////////
{assetData.asset.map((sub)=> 
  <div>
  <Row className="asset-image align-items-center">
    <img className="mx-auto" src= {sub.image_preview_url}/>
  </Row>
  <Row className="mt-2 justify-content-center">
    <div className="mb-2 asset-card text-center card-text">{sub.asset.name}</div>
  </Row>
  </div>
  )}

/////////////////////////////////////////////
import React, { Component } from 'react';
import OpenSeaApi from "../api/OpenSeaApi.js"
import Web3 from "web3";

import {
  Card,
  CardDeck,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  CardTitle,
  Row,
  Col,
  Table,
  Header,
  HeaderCell,
  Container,
  Progress
} from "shards-react";

export default class PurchaseProposalCard extends Component {
  constructor(){
    super();
    this.state = {
      error:null,
      isLoaded:false,
      assetData: [],
      subAsset:[]
    }
  }

//'https://api.opensea.io/api/v1/events?asset_contract_address=0xf87e31492faf9a91b02ee0deaad50d51d56d5d4d&only_opensea=true&auction_type=english&limit=6'
  componentDidMount() {
    fetch('https://api.opensea.io/api/v1/events?asset_contract_address=0xf87e31492faf9a91b02ee0deaad50d51d56d5d4d&only_opensea=true&auction_type=english&limit=6')
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            assets: result.asset_events
          });
          
            {console.log(result)}
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      ) 
  }

  render() {
    const { error, isLoaded, assets} = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <Progress />
    } else {


   
     
      {console.log(assets)}
      const listItems = assets.map((assetData, i) => 
     
       
        <li key={assetData.id} className="mb-4 col-sm-12 col-md-12 col-lg-4">
        <Card>
           {/* <CardHeader className="asset-header p-2 card-title text-center text-uppercase">{assetData.asset.asset_contract.name}</CardHeader> */}
           <CardTitle className="asset-vote-title text-center text-uppercase">
             <div className="asset-vote-total">Vote Total&nbsp;&rarr;&nbsp;124</div>
           </CardTitle>
            <CardBody className="pb-.4rem;px-2">
              <ul>
              {(typeof(assetData.asset)=='object')? 
              <div>
              {[assetData.asset].map((sub)=> 
              <li key={sub.token_id}>
              <Row className="asset-image align-items-center">
                <img className="mx-auto" src= {sub.image_preview_url}/>
              </Row>
              <Row className="mt-2 justify-content-center">
                <div className="mb-2 asset-card text-center card-text">{sub.name}</div>
              </Row>
              </li>
              )}
              </div>
              : null
              }    
             </ul>
              <Row className="mt-3 justify-content-center">
                <div className="mb-2 col-sm asset-card text-left card-text">{assetData.payment_token.symbol}</div>
                <div className="mb-2 col-sm asset-card text-right card-text">End Date</div>
              </Row>
              <Row className="p-0 justify-content-center">
                <div className="mb-2 col-sm text-left card-text asset-card-numbers">{Web3.utils.fromWei(assetData.starting_price,'ether')}</div>
                <div className=" mb-2 col-sm text-right card-text asset-card-numbers">{assetData.duration}</div>
              </Row>
          </CardBody>
          <CardFooter className="p-0">
            <button type="button" className="btn btn-lg btn-block card-footer-btn">APPROVE</button>
          </CardFooter>
        </Card>  
        </li>        
      
      );
      <style jsx> {` 
        .asset-card{font-weight:400;color:black;font-size:.9rem;font-family: Poppins;}
        .card-footer-btn{font-family: Poppins;font-weight:400;color:#000;font-size:1rem;letter-spacing:.3rem;border-radius:.01rem .01rem .2rem .2rem;}
        .card-footer-btn:hover{background:#007bff;color:white;}
        .asset-vote-total{font-weight:200;font-size:.9rem;letter-spacing:.2rem;color:#007bff;}
        .asset-card-numbers{font-size:1rem;letter-spacing:.2rem;color:#007bff;hover:black;}
        
        `}    
      </style>
  

      return (

        
        <ul>{listItems} </ul>
      

      );
    }
  }
}


//////////////////////////////////////////////////////////////////WITH ASSET API NOT EVENT
import React, { Component } from 'react';
import OpenSeaApi from "../api/OpenSeaApi.js"
import Web3 from "web3";

import {
  Card,
  CardDeck,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  CardTitle,
  Row,
  Col,
  Table,
  Header,
  HeaderCell,
  Container,
  Progress
} from "shards-react";

export default class PurchaseProposalCard extends Component {
  constructor(){
    super();
    this.state = {
      error:null,
      isLoaded:false,
      assetData: []
    }
  }


  componentDidMount() {
    var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
    targetUrl = 'https://api.opensea.io/api/v1/events?asset_contract_address=0xf87e31492faf9a91b02ee0deaad50d51d56d5d4d&event_type=successful&only_opensea=false&auction_type=dutch&offset=6&limit=18'
    fetch(proxyUrl + targetUrl)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            assets: result.asset_events
          });
          
            {console.log(result)}
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      ) 
  }

  render() {
    const { error, isLoaded, assets} = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <Progress />
    } else {


   
     
      {console.log(assets)}
      const listItems = assets.map((assetData) => 
  
        <li key={assetData.id} className="mb-4 col-sm-12 col-md-12 col-lg-4">
        <Card>
           <CardHeader className="asset-header p-2 card-title text-center text-uppercase">{assetData.asset_contract.name}</CardHeader>
           <CardTitle className="asset-vote-title text-center text-uppercase">
             <div className="asset-vote-total">Vote Total&nbsp;&rarr;&nbsp;124</div>
           </CardTitle>
            <CardBody className="pb-.4rem;px-2">
              <Row className="asset-image align-items-center">
                <img className="mx-auto" src= {assetData.image_preview_url}/>
              </Row>
              <Row className="mt-2 justify-content-center">
                <div className="mb-2 asset-card text-center card-text">{assetData.name}</div>
              </Row>
              <Row className="mt-3 justify-content-center">
                {/* <div className="mb-2 col-sm asset-card text-left card-text">{assetData.payment_token.symbol}</div> */}
                <div className="mb-2 col-sm asset-card text-right card-text">End Date</div>
              </Row>
              <Row className="p-0 justify-content-center">
                {/* <div className="mb-2 col-sm text-left card-text asset-card-numbers">{Web3.utils.fromWei(assetData.starting_price,'ether')}</div>
                <div className=" mb-2 col-sm text-right card-text asset-card-numbers">{assetData.duration}</div> */}
              </Row>
          </CardBody>
          <CardFooter className="p-0">
            <button type="button" className="btn btn-lg btn-block card-footer-btn">APPROVE</button>
          </CardFooter>
        </Card>  
        </li>        
      
      );
      <style jsx> {` 
        .asset-card{font-weight:400;color:black;font-size:.9rem;font-family: Poppins;}
        .card-footer-btn{font-family: Poppins;font-weight:400;color:#000;font-size:1rem;letter-spacing:.3rem;border-radius:.01rem .01rem .2rem .2rem;}
        .card-footer-btn:hover{background:#007bff;color:white;}
        .asset-vote-total{font-weight:200;font-size:.9rem;letter-spacing:.2rem;color:#007bff;}
        .asset-card-numbers{font-size:1rem;letter-spacing:.2rem;color:#007bff;hover:black;}
        
        `}    
      </style>
  

      return (

        
        <ul>{listItems} </ul>
      

      );
    }
  }
}




/////////////////////////////////////////////////////////////////////////////

import React, { Component } from 'react';
import OpenSeaApi from "../api/OpenSeaApi.js"
import Web3 from "web3";

import {
  Card,
  CardDeck,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  CardTitle,
  Row,
  Col,
  Table,
  Header,
  HeaderCell,
  Container,
  Progress
} from "shards-react";

export default class PurchaseProposalCard extends Component {
  constructor(){
    super();
    this.state = {
      error:null,
      isLoaded:false,
      assetData: [] 
    }
  }
  

  componentDidMount() {
    var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
    targetUrl = 'https://api.opensea.io/api/v1/events?asset_contract_address=0xf87e31492faf9a91b02ee0deaad50d51d56d5d4d&event_type=successful&only_opensea=false&auction_type=dutch&offset=6&limit=6'
    '
    fetch(proxyUrl + targetUrl)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            assets: result.asset_events
          });
          
            {console.log(result)}
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      ) 
  }

  render() {
    const { error, isLoaded, assets} = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <Progress />
    } else {

      return (
        <Row>
          {assets.map((assetData) => 
         
            <div key={assetData.id.toString()} className="mb-4 col-sm-12 col-md-12 col-lg-4">
            <Card>
               <CardHeader className="asset-header p-2 card-title text-center text-uppercase">{assetData.asset.asset_contract.name}</CardHeader>
               <CardTitle className="asset-vote-title text-center text-uppercase">
                 <div className="asset-vote-total">Vote Total&nbsp;&rarr;&nbsp;124</div>
               </CardTitle>
                <CardBody className="pb-.4rem;px-2">
                  <Row className="asset-image align-items-center">
                    <img className="mx-auto" src= {assetData.asset.image_preview_url}/>
                  </Row>
                  <Row className="mt-2 justify-content-center">
                    <div className="mb-2 asset-card text-center card-text">{assetData.asset.name}</div>
                  </Row>
                  <Row className="mt-3 justify-content-center">
                    <div className="mb-2 col-sm asset-card text-left card-text">{assetData.payment_token.symbol}</div>
                    <div className="mb-2 col-sm asset-card text-right card-text">End Date</div>
                  </Row>
                  <Row className="p-0 justify-content-center"> 
                    <div className="mb-2 col-sm text-left card-text asset-card-numbers">{Web3.utils.fromWei(assetData.total_price,'ether')}  <img src={assetData.payment_token.img_url} /></div>
                    <div className=" mb-2 col-sm text-right card-text asset-card-numbers">{assetData.duration}</div>
                  </Row>
              </CardBody>
              <CardFooter className="p-0">
                <button type="button" className="btn btn-lg btn-block card-footer-btn">APPROVE</button>
              </CardFooter>
            </Card>  
            </div>        
          )}

          <style jsx> {` 
            .asset-card{font-weight:400;color:black;font-size:.9rem;font-family: Poppins;}
            .card-footer-btn{font-family: Poppins;font-weight:400;color:#000;font-size:1rem;letter-spacing:.3rem;border-radius:.01rem .01rem .2rem .2rem;}
            .card-footer-btn:hover{background:#007bff;color:white;}
            .asset-vote-total{font-weight:200;font-size:.9rem;letter-spacing:.2rem;color:#007bff;}
            .asset-card-numbers{font-size:1rem;letter-spacing:.2rem;color:#007bff;hover:black;}
            
            `}    
          </style>

      </Row>  


      );
    }
  }
}


/////////////////////////////////////////////////////
componentDidMount() {
  var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
  targetUrl = 'https://api.opensea.io/api/v1/assets?asset_contract_address=0xf87e31492faf9a91b02ee0deaad50d51d56d5d4d&order_by=current_price&order_direction=desc&on_sale=true&offset=0&limit=6'
  fetch(proxyUrl + targetUrl)
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          isLoaded: true,
          assets: result.assets
        });
        
          // {console.log(result)}
      },
      (error) => {   
        this.setState({
          isLoaded: true,
          error
        });
      }
    ) 
    
}


///////////////////////////////////////////////
import React, { Component } from 'react';
import OpenSeaApi from "../api/OpenSeaApi.js"
import Web3 from "web3";
//import { OpenSeaPort, Network, OpenSeaAsset  } from 'opensea-js'
//var web3 = new Web3(Web3.givenProvider);

//const seaport = new OpenSeaPort(Web3.givenProvider, { networkName: Network.Main })

// seaport.api.getOrder({
//   asset_contract_address: 0xf87e31492faf9a91b02ee0deaad50d51d56d5d4d,
//   token_id: tokenId,
//   side: OrderSide.Sell
// }).then(function(order) {
//   // Important to check if the order is still available as it can have already been fulfilled by
//   // another user or cancelled by the creator
//   if (order) {
//     // This will bring the wallet confirmation popup for the user to confirm the purchase
//     seaport.fulfillOrder({ order: order, accountAddress: account });
//   } else {
//     // Handle when the order does not exist anymore
//   }
// });

// const asset: OpenSeaAsset = await seaport.api.getAsset({
//   tokenAddress, // string
//   tokenId, // string | number | null
// })
//console.log(seaport)
import { Tooltip } from 'rimble-ui';
import {
  Card,
  CardDeck,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Button,
  Row,
  Progress,
  Collapse 
} from "shards-react";



export default class PurchaseProposalCard extends Component {
  constructor(props){
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      error:null,
      isLoaded:false,
      collapse: false,
      assetData: []
    }
  }

  

  //  'https://api.opensea.io/api/v1/assets?asset_contract_address=0xf87e31492faf9a91b02ee0deaad50d51d56d5d4d&order_by=current_price&order_direction=desc&on_sale=true&offset=0&limit=6'
  
  componentDidMount() {
    var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
    targetUrl = 'https://api.opensea.io/api/v1/assets?asset_contract_address=0xf87e31492faf9a91b02ee0deaad50d51d56d5d4d&order_by=current_price&order_direction=desc&on_sale=true&offset=0&limit=6'
    fetch(proxyUrl + targetUrl,{header:'x-api-key: 2f2a0900458f4bdfbb489680a58e7526'})
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            assets: result.assets
          });
          
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      ) 
      
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }


  render() {
    const { error, isLoaded, assets} = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <Progress />
    } else {

      return (
        <Row className="mt-4">
          {assets.map((assetData) =>         
    
          {if(assetData.sell_orders.payment_token_contract.id === 1){
            return (
            <div className="mb-4 col-sm-12 col-md-12 col-lg-4">
           {/* {(typeof(assetData.sell_orders)== "object")?<div>Yo</div> :<div>no</div> } */}
            <Card key={assetData.token_id.toString()}>
              <CardHeader className="asset-header p-2 card-title text-center">Decentraland</CardHeader>
             
              <div>
              {assetData.sell_orders.map((subOne)=> 
                  {if(subOne.payment_token_contract.id === 1){
                  return (
                    <div key={subOne.created_date}>
                    <CardTitle className="asset-title text-center">
                      <Progress className='m-4' theme="primary" value={1} max={Web3.utils.fromWei(subOne.current_price,'ether')} />
                      <div className="current-price">Current Price:{Web3.utils.fromWei(subOne.current_price,'ether')} ETH</div>
                    </CardTitle>
                    </div>
                  )}
                }
              )}
              </div>
      
                <div>
                <Row className="justify-content-center">
                  <div>
                    <Button outline theme="light" onClick={this.toggle}>Details</Button>
                    <Collapse open={this.state.collapse}>
                      <div className="p-3 mt-3 border rounded">
                        <div>Previouse Sales:{assetData.num_sales}</div>
                        {[assetData.last_sale].map((subSet) => {
                          if(subSet?.payment_token.id == 3) {
                            return <div key={subSet.top_bid} >Last Sale: {Web3.utils.fromWei(subSet.total_price,'ether')} MANA</div>
                          }
                          if(subSet?.payment_token.id == 1) {
                            return <div key={subSet.top_bid}>Last Sale: {Web3.utils.fromWei(subSet.total_price,'ether')} ETH</div>
                          }
                          else{
                            return <div>No Previouse Sales</div>
                          }
                        }
                        )}
                      </div>
                    </Collapse>
                  </div> 
                </Row>
                </div>
                <CardBody className="pb-.4rem;px-2">
                <a href={assetData.permalink}>{}
                  <Row className="asset-image align-items-center">
                      <img className="mx-auto" src= {assetData.image_preview_url} target="_blank" />
                  </Row>
                  </a>
                  <Row className="mt-2 justify-content-center">
                    <div className="mb-2 asset-card text-center card-text">{assetData.name}</div>
                  </Row>
                  <Row className="mt-3 justify-content-center">
                    <div className="mb-2 col-sm asset-card text-left card-text">ETH</div>
                    <div className="mb-2 col-sm asset-card text-right card-text">End Date</div>
                  </Row>
                  <div>
                    {(typeof(assetData.sell_orders)=='object')? 
                    <div>
                     
                      {assetData.sell_orders.map((subThree)=> 
                       {if(subThree.payment_token_contract.id === 1){
                      return (
                        <Row key={subThree.listing_time} className="p-0 justify-content-center">  
               
                          {/* <div className="mb-2 col-sm asset-card text-left card-text">{sub.payment_token_contract.symbol}</div> */}
                          <div className="mb-2 col-sm text-left card-text asset-card-numbers">{Web3.utils.fromWei(subThree.current_price,'ether')}</div>
                          <div className=" mb-2 col-sm text-right card-text asset-card-numbers">{subThree.closing_date}</div>
                        </Row>
                      )
                       }

                       return 'Mana'
                       }
                      
                      )}
                    </div>
                    : "Asset Not For Sale"
                    }    
                  </div>
              </CardBody>
              <CardFooter className="p-0">
                <button type="button" className="btn btn-lg btn-block card-footer-btn">APPROVE</button>
              </CardFooter>
            </Card>  
            </div>    
            )}
            return (<div>shfadsf</div>
        
          )
          }
      
          )}

          <style jsx> {` 
            .asset-card{font-weight:400;color:black;font-size:.9rem;font-family: Poppins;}
            .card-footer-btn{font-family: Poppins;font-weight:400;color:#000;font-size:1rem;letter-spacing:.3rem;border-radius:.01rem .01rem .2rem .2rem;}
            .card-footer-btn:hover{background:#007bff;color:white;}
            .asset-total-fund{font-weight:200;font-size:.9rem;letter-spacing:.2rem;color:#000;}
            .asset-card-numbers{font-size:1rem;letter-spacing:.2rem;color:#007bff;hover:black;}
            .current-price{font-size:.8rem;letter-spacing:.1rem;font-weight:100;}
            `}    
          </style>

      </Row>  


      );
    }
  }
}



////////////////////////////////////////////////////////////////////////


{assetData.sell_orders.map((subOne)=> 
    {if(subOne.payment_token_contract.id === 1){
    return (
      <div>
  

      </div>
    )}
  }
)}

////////////////////////////////////////////////////////////

function ContextAwareToggle({ children, eventKey, callback }) {
  const currentEventKey = useContext(AccordionContext);

  const decoratedOnClick = useAccordionToggle(
    eventKey,
    () => callback && callback(eventKey),
  );

  const isCurrentEventKey = currentEventKey === eventKey;

  return (
    <button
      type="button"
      style={{ backgroundColor: isCurrentEventKey ? 'pink' : 'lavender' }}
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
}

function Example() {
  return (
    <Accordion defaultActiveKey="0">
      <Card>
        <Card.Header>
          <ContextAwareToggle eventKey="0">Click me!</ContextAwareToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>Hello! I'm the body</Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <ContextAwareToggle eventKey="1">Click me!</ContextAwareToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <Card.Body>Hello! I'm another body</Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}

render(<Example />);

///////////////////////////////////////////
return(   
                              
                              
  <div> <TestComponent  drizzleContext ={ drizzleContext}  /></div>


)
////////////////////////////////////

import React from "react";
import Footer from '../components/Footer.js';
import TestComponent from "../components/testComponent.js";
import { Button, Container, Card  } from "shards-react";
import { Page, Center } from '../components/Layout.js';
import { Link } from '../../routes';
import { DrizzleContext, DrizzleProvider } from "@drizzle/react-plugin";
import {  Loader } from 'rimble-ui';
import options from "../EthComponents/drizzleOptions";
import Accordion from 'react-bootstrap/Accordion';


import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';
function ContextAwareToggle({ children, eventKey, callback }) {
  const currentEventKey = useContext(AccordionContext);

  const decoratedOnClick = useAccordionToggle(
    eventKey,
    () => callback && callback(eventKey),
  );

  const isCurrentEventKey = currentEventKey === eventKey;

  return (
    <button
      type="button"
      style={{ backgroundColor: isCurrentEventKey ? 'pink' : 'lavender' }}
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
}



function Example() {
  return (
    <Accordion defaultActiveKey="0">
      <Card>
        <div>
          <ContextAwareToggle eventKey="0">Click me!</ContextAwareToggle>
        </div>
        <Accordion.Collapse eventKey="0">
          <div>Hello! I'm the body</div>
        </Accordion.Collapse>
      </Card>
      <Card>
        <div>
          <ContextAwareToggle eventKey="1">Click me!</ContextAwareToggle>
        </div>
        <Accordion.Collapse eventKey="1">
          <div>Hello! I'm another body</div>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}

class Test extends React.Component {

render () {
  return <Example />
}
  
}

export default Test;

//////////////////////////////////////

function App() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Launch vertically centered modal
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

render(<App />);

/////////////////////////////////////////////

<Row className="mt-3 justify-content-center">
                    <div className="mb-2 col-sm asset-card text-left card-text">End Date:</div>

                    {assetData.sell_orders.map((subThree)=> 
                    
                    {if(subThree.payment_token_contract.id === 1){
                      return ( 
                          <div key={subThree.listing_time.toString()} className="mb-2 col-sm asset-card text-right card-text">
                             {console.log(subThree.closing_date)}
                             {(typeof(subThree.closing_date)=='string')?
                              <div>{subThree.closing_date}</div>            
                            :
                            'no end date'
                            }
                          </div>
                          )
                          
                          }
                        }
                      )}
                  </Row>
///////////////////////////////////////////////

async componentDidMount() {
  const { drizzle } = this.props;
  const contract = drizzle.contracts.UserStorage;
  const account = drizzle.accounts;

  try {
  const dataKey = await contract.methods["addresses"].cacheCall(account);

  this.setState({ dataKey });
  }
  catch (err) {
    this.setState({ errorMessage: err.message });
  }
 }

 componentDidUpdate(prevProps) {
  //const { drizzleState } = this.props;
  if (prevProps.drizzleState.accounts[0] !== this.props.drizzleState.accounts[0]) {
    window.location.reload();
  }
}

 render() {
 
  const { drizzle } = this.props;
  const contract = drizzle.contracts.UserStorage;
  const displayData = contract.addresses[this.state.dataKey]; 
  let user =  displayData && displayData.value;
 
 
  if(user) {   
   
    return  (
              <div>
                <AddressBar drizzle={this.props.drizzle} />
              </div>
            )
            }
              return <JoinButton />;
            }
    }

export default AddrJoinNav;

///////////////////////////////////////////////////////


import React from "react";
import { Button } from "shards-react";
import { Loader } from 'rimble-ui';


 





const NominateBtn = ({ drizzleState, drizzle, nominateAsset, intialContribution }) => {


 
  let state = drizzle.store.getState();
  let transactProcessing = state.dappReducer.transactionProcessing;
  let txSuccessful = state.dappReducer.txSuccessful


  const isLoggedIn = state.dappReducer.transactionProcessing;
  console.log(isLoggedIn)

  if(!txSuccessful)  {
  
    
  return (
    
          <div>
            {isLoggedIn ?  
           <div className="mx-auto">   
                <Loader color="#007bff" size="40px" />
              </div>
            : 
            <Button className="btn btn-block btn-success contribute-form-btn" key="submit" type="button" onClick={nominateAsset}  theme="success" >
            <p className="mb-0">Contribute&nbsp;&nbsp;{intialContribution}&nbsp;ETH</p>
          </Button>
              
            }
          </div>
        )   
      
  } 
if(txSuccessful){
  return(
  <div>
  "yes"
  </div>
  )
}
  // if(transactProcessing)  {
  //   return (
  //           <div className="mx-auto">   
  //             <Loader color="#007bff" size="40px" />
  //           </div>
  //       )   
  // }

}
export default NominateBtn;


/////////////////////////////////////////


import React from "react";
import { Button } from "shards-react";
import { Loader } from 'rimble-ui';

const NominateBtn = ({ drizzleState, drizzle, nominateAsset, intialContribution }) => {

 
 
  let state = drizzle.store.getState();
  let transactProcessing = state.dappReducer.transactionProcessing;
  let txSuccessful = state.dappReducer.txSuccessful
  console.log(drizzleState.dappReducer.txSuccessful)
  if(!transactProcessing)  {
    
  return (
          <Button className="btn btn-block btn-success contribute-form-btn" key="submit" type="button" onClick={nominateAsset}  theme="success" >
            <p className="mb-0">Contribute&nbsp;&nbsp;{intialContribution}&nbsp;ETH</p>
          </Button>
        )   
  } 
  if(transactProcessing)  {
    return (

            <div className="mx-auto">   
              <Loader color="#007bff" size="40px" />
            </div>
        )   
  }
  if(!transactProcessing)  {
    
    return (
            <Button className="btn btn-block btn-success contribute-form-btn" key="submit" type="button" onClick={nominateAsset}  theme="success" >
              <p className="mb-0">Contribute&nbsp;&nbsp;{intialContribution}&nbsp;ETH</p>
            </Button>
          )   
    } 
}
export default NominateBtn;


//////////////////////////



import React, { Component } from 'react';
import Web3 from "web3";
import { Loader } from 'rimble-ui';
import Accordion from 'react-bootstrap/Accordion';
import { Card, CardHeader, CardBody, CardFooter, CardTitle, Button, Row, Progress } from "shards-react";
import ContributeModal from '../modals/ContributeModal';
import ProposalCard from '../components/cards/ProposalCards';
      
// import Moment from "react-moment";
// <time>
// <Moment fromNow ago unix>
//   {postedAt}
// </Moment>
// </time>
      
export default class ProposedAssetCard extends Component {
  constructor(props){
    super(props);
    this.handleSlide = this.handleSlide.bind(this),
 
    this.state = {
      error:null,
      isLoaded:false,
      value: 0,
      valueSlider:0,
      contribAmount:0,
      assetData: []
    }
  }

  
  componentDidMount() {
    var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
    targetUrl = 'https://api.opensea.io/api/v1/events?asset_contract_address=0xf87e31492faf9a91b02ee0deaad50d51d56d5d4d&event_type=created&on_sale=true&offset=3&limit=6'
    fetch(proxyUrl + targetUrl,{header:'x-api-key: 2f2a0900458f4bdfbb489680a58e7526'})
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            assets: result.asset_events
          });
          
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      ) 
      
  }

  handleSlide(e) {
    this.setState({
      valueSlider: parseFloat(e[0])
    });
  }

  render() {
    const { error, isLoaded, assets} = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <Loader color="white" />
    } else {
     
      return (
        <Row className="mt-4">
          {assets.map((assetData) =>         
          {if( (Array.isArray(assetData.sell_orders) && assetData.sell_orders.length) ){
            return (
            <div className="mb-4 col-sm-12 col-md-12 col-lg-4"  key={assetData.asset.token_id.toString()}>
              <Card>
                <CardHeader className="asset-header p-2 card-title text-center">Decentraland</CardHeader>
                <div>
                  {assetData.sell_orders.map((subOne)=> 
                      {if(subOne.payment_token_contract.id === 1){
                      return (
                        <div key={subOne.created_date.toString()}>
                        <CardTitle className="asset-title text-center">
                          <Progress className='mx-4' theme="primary" value={3} max={Web3.utils.fromWei(subOne.current_price,'ether')} >{3}</Progress>
                          <div className="current-price">Current Price:{Web3.utils.fromWei(subOne.current_price,'ether')} ETH</div>
                        </CardTitle>
                        </div>
                      )}
                    }
                  )}
                </div>
                <Row className="justify-content-center">
                  <Accordion defaultActiveKey="1">
                    <div>  
                      <Accordion.Toggle as={Button} variant="link" eventKey="0" outline theme="light">
                        Details
                      </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                          <div className="p-3 mt-3 border rounded">
                            <div>Previouse Sales:{assetData.num_sales}</div>
                            {[assetData.last_sale].map((subSet) => {
                              if(subSet?.payment_token.id == 3) {
                                return <div key={subSet.event_timestamp.toString()} >Last Sale: {Web3.utils.fromWei(subSet.total_price,'ether')} MANA</div>
                              }
                              if(subSet?.payment_token.id == 1) {
                                return <div key={subSet.event_timestamp.toString()}>Last Sale: {Web3.utils.fromWei(subSet.total_price,'ether')} ETH</div>
                              }
                            }
                            )}
                          </div>
                        </Accordion.Collapse>
                    </div> 
                  </Accordion>
                </Row>
                <CardBody className="pb-.4rem;px-2">
                  <a href={assetData.permalink}>{}
                    <Row className="asset-image align-items-center">
                        <img className="mx-auto" src= {assetData.image_preview_url} target="_blank" />
                    </Row>
                  </a>
                  <Row className="mt-2 justify-content-center">
                    <div className="mb-2 asset-card text-center card-text">{assetData.name}</div>
                  </Row>
                  <Row className="mt-3 justify-content-center">
                    <div className="mb-2 col-sm asset-card text-left card-text">End Date:</div>

                    {assetData.sell_orders.map((subThree)=> 
                    
                    {if(subThree.payment_token_contract.id === 1){
                      return ( 
                          <div key={subThree.listing_time.toString()} className="mb-2 col-sm asset-card text-right card-text">
                             {(typeof(subThree.closing_date)=='string')?
                              <div>{subThree.closing_date}</div>            
                            :
                            'no end date'
                            }
                          </div>
                          )
                          
                          }
                        }
                      )}
                  </Row>
                </CardBody>
                <ContributeModal handleSlide={this.handleSlide} state={this.state} assetData={assetData} drizzle={this.props.drizzle} />
              </Card>  
            </div>    
            )}
            // console.log("In OpenSea API MANA sales do not return sale_orders array")
          }
      
          )}

          <style jsx> {` 
            .asset-card{font-weight:400;color:black;font-size:.9rem;font-family: Poppins;}
            .card-footer-btn{font-family: Poppins;font-weight:400;color:#000;font-size:1rem;letter-spacing:.3rem;border-radius:.01rem .01rem .2rem .2rem;}
            .card-footer-btn:hover{background:#007bff;color:white;}
            .asset-total-fund{font-weight:200;font-size:.9rem;letter-spacing:.2rem;color:#000;}
            .asset-card-numbers{font-size:1rem;letter-spacing:.2rem;color:#007bff;hover:black;}
            .current-price{font-size:.8rem;letter-spacing:.1rem;font-weight:100;}
           
            `}    
          </style>

        </Row> 
      );
    }
  }
}


///////////////////////

ProposalCard

import React from 'react';
import OpenSeaApi from "../api/OpenSeaApi.js"

import {
  Card,
  CardDeck,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  CardTitle,
  Row,
  Col,
  Table,
  Header,
  HeaderCell,
  Container,
  Progress
} from "shards-react";
import AvailableAssetCard from '../components/cards/NominatedAssetCards';

export default class ProposalCard extends React.Component {
  constructor(){
    super();
    this.state = {
      error:null,
      isLoaded:false,
      assetData: []
    }
  }


  //'https://api.opensea.io/api/v1/events?asset_contract_address=0xf87e31492faf9a91b02ee0deaad50d51d56d5d4d&event_type=created&on_sale=true&offset=0&limit=50'
  componentDidMount() {
    fetch('https://api.opensea.io/api/v1/events?asset_contract_address=0xf87e31492faf9a91b02ee0deaad50d51d56d5d4d&event_type=created&on_sale=true&offset=3&limit=6')
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            assets: result.asset_events
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      ) 
  }
 
  render() {
    const { error, isLoaded, assets } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <Progress />
    } else {
      return (


        <Row>
          {assets.map(assetData=> (
            <div key={assetData.asset.token_id} className="mb-4 col-sm-12 col-md-12 col-lg-4">
            <Card>
               <CardHeader className="asset-header p-2 card-title text-center text-uppercase">{assetData.asset.asset_contract.name}</CardHeader>
               <CardTitle className="asset-vote-title text-center text-uppercase">
                 <div className="asset-vote-total">Vote Total&nbsp;&rarr;&nbsp;124</div>
               </CardTitle>
                <CardBody className="pb-.4rem;px-2">
                  <Row className="asset-image align-items-center">
                    <img className="mx-auto" src= {assetData.asset.image_preview_url}/>
                  </Row>
                  <Row className="mt-2 justify-content-center">
                    <div className="mb-2 asset-card text-center card-text">{assetData.asset.name}</div>
                  </Row>
                  <Row className="mt-3 justify-content-center">
                    <div className="mb-2 col-sm asset-card text-left card-text">ETH</div>
                    <div className="mb-2 col-sm asset-card text-right card-text">End Date</div>
                  </Row>
                  <Row className="p-0 justify-content-center">
                    <div className="mb-2 col-sm text-left card-text asset-card-numbers">{assetData.starting_price}</div>
                    <div className=" mb-2 col-sm text-right card-text asset-card-numbers">{assetData.duration}</div>
                  </Row>
              </CardBody>
              <CardFooter className="p-0">
                <button type="button" className="btn btn-lg btn-block card-footer-btn">APPROVE</button>
              </CardFooter>
            </Card>  
            </div>        
          ))}

          <style jsx> {` 
            .asset-card{font-weight:400;color:black;font-size:.9rem;font-family: Poppins;}
            .card-footer-btn{font-family: Poppins;font-weight:400;color:#000;font-size:1rem;letter-spacing:.3rem;border-radius:.01rem .01rem .2rem .2rem;}
            .card-footer-btn:hover{background:#007bff;color:white;}
            .asset-vote-total{font-weight:200;font-size:.9rem;letter-spacing:.2rem;color:#007bff;}
            .asset-card-numbers{font-size:1rem;letter-spacing:.2rem;color:#007bff;hover:black;}
            
            `}    
          </style>

      </Row>  


      );
    }
  }
}


/////////////////////////////////////////////////

AvailableAssetCard WORKING ORDER BEFORE COMBINE WITH PROPASAL Card

import React, { Component, useState } from 'react';
import Web3 from "web3";
import { Loader } from 'rimble-ui';
import Accordion from 'react-bootstrap/Accordion';
import { Card, CardHeader, CardBody, CardFooter, CardTitle, Button, Row, Progress } from "shards-react";
import NominationModal from '../modals/NominationModal';


export default class AvailableAssetCard extends Component {
  constructor(props){
    super(props);

    this.state = {
      error:null,
      isLoaded:false,
      contribAmount:0,
      assetData: [],
      toggleModal: false,
      show:false
    }
    
  }


  //0xf87e31492faf9a91b02ee0deaad50d51d56d5d4d
 
  //2f2a0900458f4bdfbb489680a58e7526
  //https://api.opensea.io/api/v1/events?asset_contract_address=0xf87e31492faf9a91b02ee0deaad50d51d56d5d4d&event_type=created&only_opensea=true&on_sale=true&offset=0&limit=100
 
  componentDidMount() {
    var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
    targetUrl = 'https://api.opensea.io/api/v1/events?asset_contract_address=0xf87e31492faf9a91b02ee0deaad50d51d56d5d4d&event_type=created&on_sale=true&offset=3&limit=6'
    fetch(proxyUrl + targetUrl,{header:'x-api-key:2f2a0900458f4bdfbb489680a58e7526'})
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            assets: result.assets
          });
          
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )    
  }


  toggleModal = () => {
    const { show } = this.state
    this.setState({
      show: !show,
    });
  }

  
componentDidUpdate(prevProps) {
  if (prevProps.drizzleState.dappReducer.transactionProcessing !== this.props.drizzleState.dappReducer.transactionProcessing) {
      this.setState({
        show: this.props.drizzleState.dappReducer.transactionProcessing,
      });
  }
}


  render() {
    
    const { error, isLoaded, assets} = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <Loader color="white" />
    } else {
     
      return (
        <Row className="mt-4">
          {assets.map((assetData) =>         
          {if( (Array.isArray(assetData.sell_orders) && assetData.sell_orders.length) ){
            return (
            <div className="mb-4 col-sm-12 col-md-12 col-lg-4" key={assetData.token_id.toString()}>
              <Card>
                <CardHeader className="asset-header p-2 card-title text-center">Decentraland</CardHeader>
                <div>
                  {assetData.sell_orders.map((subOne)=> 
                      {if(subOne.payment_token_contract.id === 1){
                      return (
                        <div key={subOne.created_date.toString()}>
                        <CardTitle className="asset-title text-center">
                          <div className="current-price">Current Price:{Web3.utils.fromWei(subOne.current_price,'ether')} ETH</div>
                        </CardTitle>
                        </div>
                      )}
                    }
                  )}
                </div>
                <Row className="justify-content-center">
                  <Accordion defaultActiveKey="1">
                    <div>  
                      <Accordion.Toggle as={Button} variant="link" eventKey="0" outline theme="light">
                        Details
                      </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                          <div className="p-3 mt-3 border rounded">
                            <div>Previouse Sales:{assetData.num_sales}</div>
                            {[assetData.last_sale].map((subSet) => {
                              if(subSet?.payment_token.id == 3) {
                                return <div key={subSet.event_timestamp.toString()} >Last Sale: {Web3.utils.fromWei(subSet.total_price,'ether')} MANA</div>
                              }
                              if(subSet?.payment_token.id == 1) {
                                return <div key={subSet.event_timestamp.toString()}>Last Sale: {Web3.utils.fromWei(subSet.total_price,'ether')} ETH</div>
                              }
                            }
                            )}
                          </div>
                        </Accordion.Collapse>
                    </div> 
                  </Accordion>
                </Row>
                <CardBody className="pb-.4rem;px-2">
                  <a href={assetData.permalink}>{}
                    <Row className="asset-image align-items-center">
                        <img className="mx-auto" src= {assetData.image_preview_url} target="_blank" />
                    </Row>
                  </a>
                  <Row className="mt-2 justify-content-center">
                    <div className="mb-2 asset-card text-center card-text">{assetData.name}</div>
                  </Row>
                  <Row className="mt-3 justify-content-center">
                    <div className="mb-2 col-sm asset-card text-left card-text">End Date:</div>

                    {assetData.sell_orders.map((subThree)=> 
                    
                    {if(subThree.payment_token_contract.id === 1){
                      return ( 
                          <div key={subThree.listing_time.toString()} className="mb-2 col-sm asset-card text-right card-text">
                             {(typeof(subThree.closing_date)=='string')?
                              <div>{subThree.closing_date}</div>            
                            :
                            'no end date'
                            }
                          </div>
                          )
                          }
                        } 
                      )}
                  </Row>
                </CardBody>     
                  <CardFooter className="p-0">
                  <button type="button" className="btn btn-lg btn-block card-footer-btn" onClick={this.toggleModal}>Nominate Asset</button>
                    <NominationModal 
                      toggleModal={this.toggleModal}
                      state={this.state} 
                      assetData={assetData} 
                      drizzle={this.props.drizzle}
                      drizzleState={this.props.drizzleState} 
                    />
                  </CardFooter>
              </Card>  
            </div>    
            )}
            // console.log("In OpenSea API MANA sales do not return sale_orders array")
          }
      
          )}

          <style jsx> {` 
            .asset-card{font-weight:400;color:black;font-size:.9rem;font-family: Poppins;}
            .card-footer-btn{font-family: Poppins;font-weight:400;color:#000;font-size:1rem;letter-spacing:.3rem;border-radius:.01rem .01rem .2rem .2rem;}
            .card-footer-btn:hover{background:#007bff;color:white;}
            .asset-total-fund{font-weight:200;font-size:.9rem;letter-spacing:.2rem;color:#000;}
            .asset-card-numbers{font-size:1rem;letter-spacing:.2rem;color:#007bff;hover:black;}
            .current-price{font-size:.8rem;letter-spacing:.1rem;font-weight:100;}
           
            `}    
          </style>

        </Row> 
      );
    }
  }
}


//////////////////////////////////////////////////////////




{
  "asset_events": [
      {
          "approved_account": null,
          "asset": {
              "id": 1004339,
              "token_id": "115792089237316195423570985008687907836596148686514579329752228243756487278619",
              "num_sales": 0,
              "background_color": "000000",
              "image_url": "https://lh3.googleusercontent.com/WyFUqy8VQMAuNADQs_TySJQ8StbpMtiEseLrT6N3HyB5VUOcstlqyZ4tvKGDCjIvuC5taE31oaX7Js0ugsxpGJfk",
              "image_preview_url": "https://lh3.googleusercontent.com/WyFUqy8VQMAuNADQs_TySJQ8StbpMtiEseLrT6N3HyB5VUOcstlqyZ4tvKGDCjIvuC5taE31oaX7Js0ugsxpGJfk=s250",
              "image_thumbnail_url": "https://lh3.googleusercontent.com/WyFUqy8VQMAuNADQs_TySJQ8StbpMtiEseLrT6N3HyB5VUOcstlqyZ4tvKGDCjIvuC5taE31oaX7Js0ugsxpGJfk=s128",
              "image_original_url": "https://api.decentraland.org/v1/parcels/-49/27/map.png?size=24",
              "animation_url": null,
              "animation_original_url": null,
              "name": "Land at -49, 27",
              "description": "",
              "external_link": "https://market.decentraland.org/contracts/0xf87e31492faf9a91b02ee0deaad50d51d56d5d4d/tokens/115792089237316195423570985008687907836596148686514579329752228243756487278619",
              "asset_contract": {
                  "address": "0xf87e31492faf9a91b02ee0deaad50d51d56d5d4d",
                  "asset_contract_type": "non-fungible",
                  "created_date": "2018-04-16T22:29:19.030292",
                  "name": "Decentraland",
                  "nft_version": "3.0",
                  "opensea_version": null,
                  "owner": 69126,
                  "schema_name": "ERC721",
                  "symbol": "LAND",
                  "total_supply": null,
                  "description": "Decentraland is an Ethereum blockchain-powered virtual world, developed and owned by its users, who can create, experience, and monetize content and applications. Join a growing community of virtual world inhabitants who are building the world's largest alternate reality economy on the blockchain. In this store, you can buy and sell land assets in MANA, DCL's native currency.",
                  "external_link": "https://decentraland.org/",
                  "image_url": "https://lh3.googleusercontent.com/5KIxEGmnAiL5psnMCSLPlfSxDxfRSk4sTQRSyhPdgnu70nGb2YsuVxTmO2iKEkOZOfq476Bl1hAu6aJIKjs1myY=s60",
                  "default_to_fiat": false,
                  "dev_buyer_fee_basis_points": 0,
                  "dev_seller_fee_basis_points": 0,
                  "only_proxied_transfers": false,
                  "opensea_buyer_fee_basis_points": 0,
                  "opensea_seller_fee_basis_points": 0,
                  "buyer_fee_basis_points": 0,
                  "seller_fee_basis_points": 0,
                  "payout_address": null
              },
              "owner": {
                  "user": {
                      "username": "MrClone"
                  },
                  "profile_img_url": "https://storage.googleapis.com/opensea-static/opensea-profile/1.png",
                  "address": "0x683a42e5b414ae5cf79ece7e369ca5937fdcdc11",
                  "config": "affiliate",
                  "discord_id": ""
              },
              "permalink": "https://opensea.io/assets/0xf87e31492faf9a91b02ee0deaad50d51d56d5d4d/115792089237316195423570985008687907836596148686514579329752228243756487278619",
              "collection": {
                  "banner_image_url": "https://storage.opensea.io/static/banners/dclwearables-banner.png",
                  "chat_url": null,
                  "created_date": "2019-04-26T22:13:21.651227",
                  "default_to_fiat": false,
                  "description": "Decentraland is an Ethereum blockchain-powered virtual world, developed and owned by its users, who can create, experience, and monetize content and applications. Join a growing community of virtual world inhabitants who are building the world's largest alternate reality economy on the blockchain. In this store, you can buy and sell land assets in MANA, DCL's native currency.",
                  "dev_buyer_fee_basis_points": "0",
                  "dev_seller_fee_basis_points": "0",
                  "discord_url": "https://discord.gg/k5ydeZp",
                  "display_data": {
                      "card_display_style": "cover"
                  },
                  "external_url": "https://decentraland.org/",
                  "featured": false,
                  "featured_image_url": "https://storage.googleapis.com/opensea-static/featured-images/decentraland-featured.png",
                  "hidden": false,
                  "safelist_request_status": "approved",
                  "image_url": "https://lh3.googleusercontent.com/5KIxEGmnAiL5psnMCSLPlfSxDxfRSk4sTQRSyhPdgnu70nGb2YsuVxTmO2iKEkOZOfq476Bl1hAu6aJIKjs1myY=s60",
                  "is_subject_to_whitelist": false,
                  "large_image_url": "https://lh3.googleusercontent.com/5KIxEGmnAiL5psnMCSLPlfSxDxfRSk4sTQRSyhPdgnu70nGb2YsuVxTmO2iKEkOZOfq476Bl1hAu6aJIKjs1myY",
                  "medium_username": null,
                  "name": "Decentraland",
                  "only_proxied_transfers": false,
                  "opensea_buyer_fee_basis_points": "0",
                  "opensea_seller_fee_basis_points": "0",
                  "payout_address": null,
                  "require_email": false,
                  "short_description": null,
                  "slug": "decentraland",
                  "telegram_url": null,
                  "twitter_username": "decentraland",
                  "wiki_url": null
              },
              "decimals": null
          },
          "asset_bundle": null,
          "auction_type": "dutch",
          "bid_amount": null,
          "collection_slug": "decentraland",
          "contract_address": "0x7be8076f4ea4a4ad08075c2508e481d6c946d12b",
          "created_date": "2020-08-22T00:01:31.952056",
          "custom_event_name": null,
          "dev_fee_payment_event": null,
          "duration": null,
          "ending_price": "5500000000000000000",
          "event_type": "created",
          "from_account": {
              "user": {
                  "username": "MrClone"
              },
              "profile_img_url": "https://storage.googleapis.com/opensea-static/opensea-profile/1.png",
              "address": "0x683a42e5b414ae5cf79ece7e369ca5937fdcdc11",
              "config": "affiliate",
              "discord_id": ""
          },
          "id": 71528925,
          "owner_account": null,
          "payment_token": {
              "id": 1,
              "symbol": "ETH",
              "address": "0x0000000000000000000000000000000000000000",
              "image_url": "https://lh3.googleusercontent.com/7hQyiGtBt8vmUTq4T0aIUhIhT00dPhnav87TuFQ5cLtjlk724JgXdjQjoH_CzYz-z37JpPuMFbRRQuyC7I9abyZRKA",
              "name": "Ether",
              "decimals": 18,
              "eth_price": "1.001272396780057",
              "usd_price": "385.589999999999974989"
          },
          "quantity": "1",
          "seller": {
              "user": {
                  "username": "MrClone"
              },
              "profile_img_url": "https://storage.googleapis.com/opensea-static/opensea-profile/1.png",
              "address": "0x683a42e5b414ae5cf79ece7e369ca5937fdcdc11",
              "config": "affiliate",
              "discord_id": ""
          },
          "starting_price": "5500000000000000000",
          "to_account": null,
          "total_price": null,
          "transaction": null,
          "winner_account": null
      },
      {
          "approved_account": null,
          "asset": {
              "id": 1004058,
              "token_id": "115792089237316195423570985008687907807331865131313871471902012004624421093401",
              "num_sales": 0,
              "background_color": "000000",
              "image_url": "https://lh3.googleusercontent.com/2njC9whyf6ycZYFzTlz1Nbo_86ND9amNj-r1TCSQfpx0a-g6vTKYQMotY3YfgtSCGf04voDMCC3w6PtOCmeCpac",
              "image_preview_url": "https://lh3.googleusercontent.com/2njC9whyf6ycZYFzTlz1Nbo_86ND9amNj-r1TCSQfpx0a-g6vTKYQMotY3YfgtSCGf04voDMCC3w6PtOCmeCpac=s250",
              "image_thumbnail_url": "https://lh3.googleusercontent.com/2njC9whyf6ycZYFzTlz1Nbo_86ND9amNj-r1TCSQfpx0a-g6vTKYQMotY3YfgtSCGf04voDMCC3w6PtOCmeCpac=s128",
              "image_original_url": "https://api.decentraland.org/v1/parcels/-135/25/map.png?size=24",
              "animation_url": null,
              "animation_original_url": null,
              "name": "Land at -135, 25",
              "description": "",
              "external_link": "https://market.decentraland.org/contracts/0xf87e31492faf9a91b02ee0deaad50d51d56d5d4d/tokens/115792089237316195423570985008687907807331865131313871471902012004624421093401",
              "asset_contract": {
                  "address": "0xf87e31492faf9a91b02ee0deaad50d51d56d5d4d",
                  "asset_contract_type": "non-fungible",
                  "created_date": "2018-04-16T22:29:19.030292",
                  "name": "Decentraland",
                  "nft_version": "3.0",
                  "opensea_version": null,
                  "owner": 69126,
                  "schema_name": "ERC721",
                  "symbol": "LAND",
                  "total_supply": null,
                  "description": "Decentraland is an Ethereum blockchain-powered virtual world, developed and owned by its users, who can create, experience, and monetize content and applications. Join a growing community of virtual world inhabitants who are building the world's largest alternate reality economy on the blockchain. In this store, you can buy and sell land assets in MANA, DCL's native currency.",
                  "external_link": "https://decentraland.org/",
                  "image_url": "https://lh3.googleusercontent.com/5KIxEGmnAiL5psnMCSLPlfSxDxfRSk4sTQRSyhPdgnu70nGb2YsuVxTmO2iKEkOZOfq476Bl1hAu6aJIKjs1myY=s60",
                  "default_to_fiat": false,
                  "dev_buyer_fee_basis_points": 0,
                  "dev_seller_fee_basis_points": 0,
                  "only_proxied_transfers": false,
                  "opensea_buyer_fee_basis_points": 0,
                  "opensea_seller_fee_basis_points": 0,
                  "buyer_fee_basis_points": 0,
                  "seller_fee_basis_points": 0,
                  "payout_address": null
              },
              "owner": {
                  "user": null,
                  "profile_img_url": "https://storage.googleapis.com/opensea-static/opensea-profile/31.png",
                  "address": "0x007023da14d573703033bb1c44cb17e79d32ae5b",
                  "config": "",
                  "discord_id": ""
              },
              "permalink": "https://opensea.io/assets/0xf87e31492faf9a91b02ee0deaad50d51d56d5d4d/115792089237316195423570985008687907807331865131313871471902012004624421093401",
              "collection": {
                  "banner_image_url": "https://storage.opensea.io/static/banners/dclwearables-banner.png",
                  "chat_url": null,
                  "created_date": "2019-04-26T22:13:21.651227",
                  "default_to_fiat": false,
                  "description": "Decentraland is an Ethereum blockchain-powered virtual world, developed and owned by its users, who can create, experience, and monetize content and applications. Join a growing community of virtual world inhabitants who are building the world's largest alternate reality economy on the blockchain. In this store, you can buy and sell land assets in MANA, DCL's native currency.",
                  "dev_buyer_fee_basis_points": "0",
                  "dev_seller_fee_basis_points": "0",
                  "discord_url": "https://discord.gg/k5ydeZp",
                  "display_data": {
                      "card_display_style": "cover"
                  },
                  "external_url": "https://decentraland.org/",
                  "featured": false,
                  "featured_image_url": "https://storage.googleapis.com/opensea-static/featured-images/decentraland-featured.png",
                  "hidden": false,
                  "safelist_request_status": "approved",
                  "image_url": "https://lh3.googleusercontent.com/5KIxEGmnAiL5psnMCSLPlfSxDxfRSk4sTQRSyhPdgnu70nGb2YsuVxTmO2iKEkOZOfq476Bl1hAu6aJIKjs1myY=s60",
                  "is_subject_to_whitelist": false,
                  "large_image_url": "https://lh3.googleusercontent.com/5KIxEGmnAiL5psnMCSLPlfSxDxfRSk4sTQRSyhPdgnu70nGb2YsuVxTmO2iKEkOZOfq476Bl1hAu6aJIKjs1myY",
                  "medium_username": null,
                  "name": "Decentraland",
                  "only_proxied_transfers": false,
                  "opensea_buyer_fee_basis_points": "0",
                  "opensea_seller_fee_basis_points": "0",
                  "payout_address": null,
                  "require_email": false,
                  "short_description": null,
                  "slug": "decentraland",
                  "telegram_url": null,
                  "twitter_username": "decentraland",
                  "wiki_url": null
              },
              "decimals": null
          },
          "asset_bundle": null,
          "auction_type": "dutch",
          "bid_amount": null,
          "collection_slug": "decentraland",
          "contract_address": "0x7be8076f4ea4a4ad08075c2508e481d6c946d12b",
          "created_date": "2020-08-21T23:17:23.296941",
          "custom_event_name": null,
          "dev_fee_payment_event": null,
          "duration": null,
          "ending_price": "34000000000000000000000",
          "event_type": "created",
          "from_account": {
              "user": null,
              "profile_img_url": "https://storage.googleapis.com/opensea-static/opensea-profile/31.png",
              "address": "0x007023da14d573703033bb1c44cb17e79d32ae5b",
              "config": "",
              "discord_id": ""
          },
          "id": 71517713,
          "owner_account": null,
          "payment_token": {
              "id": 3,
              "symbol": "MANA",
              "address": "0x0f5d2fb29fb7d3cfee444a200298f468908cc942",
              "image_url": "https://lh3.googleusercontent.com/hsrIlncQIGqCWc1qQ7CUAIuVsNFwzuSmr_dCEpbUYnO_YO0VWoGZzCxVlDVSgcxATeuPcCQPdOh3t5PhXj_c8gAQ",
              "name": "Decentraland MANA",
              "decimals": 18,
              "eth_price": "0.000234418521816",
              "usd_price": "0.090274572751380885"
          },
          "quantity": "1",
          "seller": {
              "user": null,
              "profile_img_url": "https://storage.googleapis.com/opensea-static/opensea-profile/31.png",
              "address": "0x007023da14d573703033bb1c44cb17e79d32ae5b",
              "config": "",
              "discord_id": ""
          },
          "starting_price": "34000000000000000000000",
          "to_account": null,
          "total_price": null,
          "transaction": null,
          "winner_account": null
      }
  ]
}



let active = this.state.activePage;
//let number = this.state.number;
//let itemsArray = assets.map((assetDat) => assetDat);
let items = ['lee', 'rank']
// console.log(items)
 for (let number = 1; number <= 5; number++) {
 items.push(
 <Pagination.Item key={number} active={number === active}>
   {number}
 </Pagination.Item>,
);
}

const paginationBasic = (
<div>
 <Pagination size="md">{items}</Pagination>
</div>
);
{paginationBasic}


//////////////////////////////import React, { Component, useState } from 'react';
//  BEFORE MOVING BODY TO N

import Web3 from "web3";
import { Loader } from 'rimble-ui';
import Accordion from 'react-bootstrap/Accordion';
import { Card, CardHeader, CardBody, CardFooter, CardTitle, Button, Row, Progress } from "shards-react";
import NominationModal from '../modals/NominationModal';
import Pagination from '../../components/Pagination';
import Nominations from '../../components/Nominations'
// import Pagination from 'react-bootstrap/Pagination';
// import PageItem from 'react-bootstrap/PageItem';




export default class AvailableAssetCard extends Component {
  constructor(props){
    super(props);

    this.state = {
      error:null,
      isLoaded:false,
      contribAmount:0,
      assetData: [],
      toggleModal: false,
      show:false,
      activePage:1
    }
    
  }


  componentDidMount() {
    var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
    targetUrl = 'https://api.opensea.io/api/v1/assets?asset_contract_address=0xf87e31492faf9a91b02ee0deaad50d51d56d5d4d&order_by=visitor_count&order_direction=desc&on_sale=true&offset=0&limit=20'
    fetch(proxyUrl + targetUrl,{header:'x-api-key:2f2a0900458f4bdfbb489680a58e7526'})
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            assets: result.assets,
            currentPage: 1,
            postsPerPage: 6,            
            totalPosts:result.assets.length
            // itemsArray: result.assets.map((assetDat) => {Object.values(assetDat)})
            //itemsArray: Object.values(result.assets)
          });
          
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )    
  }


  toggleModal = () => {
    const { show } = this.state
    this.setState({
      show: !show,
    });
  }

  
componentDidUpdate(prevProps) {
  if (prevProps.drizzleState.dappReducer.transactionProcessing !== this.props.drizzleState.dappReducer.transactionProcessing) {
      this.setState({
        show: this.props.drizzleState.dappReducer.transactionProcessing,
      });
  }
}


  render() {

  const { error, isLoaded, assets, currentPage, postsPerPage, totalPosts } = this.state;

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <Loader color="white" />
  } else {

  //Get Current Posts   
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = assets.slice(indexOfFirstPost, indexOfLastPost);

  //Change Page
  const paginate = pageNumber => setCurrentPage(pageNumber);
    
      return (
        <div>
        <Row className="mt-4">
          {assets.map((assetData) =>         
          {if( (Array.isArray(assetData.sell_orders) && assetData.sell_orders.length) ){
            return (
            <div className="mb-4 col-sm-12 col-md-12 col-lg-4" key={assetData.token_id.toString()}>
              <Card>
                <CardHeader className="asset-header p-2 card-title text-center">Decentraland</CardHeader>
                <div>
                  {assetData.sell_orders.map((subOne)=> 
                      {if(subOne.payment_token_contract.id === 1){
                      return (
                        <div key={subOne.created_date.toString()}>
                        <CardTitle className="asset-title text-center">
                          <div className="current-price">Current Price:{Web3.utils.fromWei(subOne.current_price,'ether')} ETH</div>
                        </CardTitle>
                        </div>
                      )}
                      {if(subOne.payment_token_contract.id === 3){
                        return (
                          <div key={subOne.created_date.toString()}>
                          <CardTitle className="asset-title text-center">
                            <div className="current-price">Current Price:{Web3.utils.fromWei(subOne.current_price,'ether')} MANA</div>
                          </CardTitle>
                          </div>
                        )}
                      }
                    }
                    
                  )}
                </div>
                <Row className="justify-content-center">
                  <Accordion defaultActiveKey="1">
                    <div>  
                      <Accordion.Toggle as={Button} variant="link" eventKey="0" outline theme="light">
                        Details
                      </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                          <div className="p-3 mt-3 border rounded">
                            <div>Previouse Sales:{assetData.num_sales}</div>
                            {[assetData.last_sale].map((subSet) => {
                              if(subSet?.payment_token.id == 3) {
                                return <div key={subSet.event_timestamp.toString()} >Last Sale: {Web3.utils.fromWei(subSet.total_price,'ether')} MANA</div>
                              }
                              if(subSet?.payment_token.id == 1) {
                                return <div key={subSet.event_timestamp.toString()}>Last Sale: {Web3.utils.fromWei(subSet.total_price,'ether')} ETH</div>
                              }
                            }
                            )}
                          </div>
                        </Accordion.Collapse>
                    </div> 
                  </Accordion>
                </Row>
                <CardBody className="pb-.4rem;px-2">
                  <a href={assetData.permalink}>{}
                    <Row className="asset-image align-items-center">
                        <img className="mx-auto" src= {assetData.image_preview_url} target="_blank" />
                    </Row>
                  </a>
                  <Row className="mt-2 justify-content-center">
                    <div className="mb-2 asset-card text-center card-text">{assetData.name}</div>
                  </Row>
                  <Row className="mt-3 justify-content-center">
                    <div className="mb-2 col-sm asset-card text-left card-text">End Date:</div>

                    {assetData.sell_orders.map((subThree)=> 
                    
                    {if(subThree.payment_token_contract.id === 1){
                      return ( 
                          <div key={subThree.listing_time.toString()} className="mb-2 col-sm asset-card text-right card-text">
                             {(typeof(subThree.closing_date)=='string')?
                              <div>{subThree.closing_date}</div>            
                            :
                            'no end date'
                            }
                          </div>
                          )
                          }
                        } 
                      )}
                  </Row>
                </CardBody>     
                  <CardFooter className="p-0">
                  <button type="button" className="btn btn-lg btn-block card-footer-btn" onClick={this.toggleModal}>Nominate Asset</button>
                    <NominationModal 
                      toggleModal={this.toggleModal}
                      state={this.state} 
                      assetData={assetData} 
                      drizzle={this.props.drizzle}
                      drizzleState={this.props.drizzleState} 
                    />
                  </CardFooter>
              </Card>  
              
            </div>    
            )}
            // console.log("In OpenSea API MANA sales do not return sale_orders array")
          }
      
          )}

          <style jsx> {` 
            .asset-card{font-weight:400;color:black;font-size:.9rem;font-family: Poppins;}
            .card-footer-btn{font-family: Poppins;font-weight:400;color:#000;font-size:1rem;letter-spacing:.3rem;border-radius:.01rem .01rem .2rem .2rem;}
            .card-footer-btn:hover{background:#007bff;color:white;}
            .asset-total-fund{font-weight:200;font-size:.9rem;letter-spacing:.2rem;color:#000;}
            .asset-card-numbers{font-size:1rem;letter-spacing:.2rem;color:#007bff;hover:black;}
            .current-price{font-size:.8rem;letter-spacing:.1rem;font-weight:100;}
           
            `}    
          </style>
    
        </Row> 
        
        <Pagination postPerPage={postsPerPage} totalPosts={this.state.totalPosts} paginate={paginate} />
        </div>
      );
     
    }
  }

}

//////////////////////////////////////////////
import React, { Component, useState } from 'react';
import Web3 from "web3";
import { Loader } from 'rimble-ui';
import Accordion from 'react-bootstrap/Accordion';
import { Card, CardHeader, CardBody, CardFooter, CardTitle, Button, Row, Progress } from "shards-react";
import NominationModal from '../modals/NominationModal';
import Pagination from '../../components/Pagination';
import Nominations from '../../components/Nominations'



export default class AvailableAssetCard extends Component {
  constructor(props){
    super(props);

    this.state = {
      error:null,
      isLoaded:false,
      contribAmount:0,
      assetData: [],
      toggleModal: false,
      show:false,  
      currentPage: 1,
      postsPerPage: 10, 
    }
    
  }

  //'https://api.opensea.io/api/v1/events?asset_contract_address=0xf87e31492faf9a91b02ee0deaad50d51d56d5d4d&event_type=created&only_opensea=false&offset=0&limit=100'

  componentDidMount() {
    var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
    targetUrl = 'https://api.opensea.io/api/v1/assets?asset_contract_address=0xf87e31492faf9a91b02ee0deaad50d51d56d5d4d&asset_contract_addresses=%5B%5D&order_by=current_price&order_direction=desc&on_sale=true&offset=0&limit=100'
    fetch(proxyUrl + targetUrl,{header:'x-api-key:2f2a0900458f4bdfbb489680a58e7526'})
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            assets: result.assets,           
            totalPosts:result.assets.length
          });
          
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )    
  }


  toggleModal = () => {
    const { show } = this.state
    this.setState({
      show: !show,
    });
  }

  
componentDidUpdate(prevProps) {
  if (prevProps.drizzleState.dappReducer.transactionProcessing !== this.props.drizzleState.dappReducer.transactionProcessing) {
      this.setState({
        show: this.props.drizzleState.dappReducer.transactionProcessing,
      });
  }
}



  render() {

  const { error, isLoaded, assets, currentPage, postsPerPage } = this.state;

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <Loader color="white" />
  } else {

    const paginate = pageNumber => setcurrentPage(pageNumber);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = assets.slice(indexOfFirstPost, indexOfLastPost);

 
    
      return (
        <div>
        <Row className="mt-4">
          {currentPosts.map((assetData) =>         
          {if( (Array.isArray(assetData.sell_orders) && assetData.sell_orders.length) ){
            return (
            <div className="mb-4 col-sm-12 col-md-12 col-lg-4" key={assetData.token_id.toString()}>
              <Card>
                <CardHeader className="asset-header p-2 card-title text-center">Decentraland</CardHeader>
                <div>
                  {assetData.sell_orders.map((subOne)=> 
                      {if(subOne.payment_token_contract.id === 1){
                      return (
                        <div key={subOne.created_date.toString()}>
                        <CardTitle className="asset-title text-center">
                          <div className="current-price">Current Price:{Web3.utils.fromWei(subOne.current_price,'ether')} ETH</div>
                        </CardTitle>
                        </div>
                      )}
                      {if(subOne.payment_token_contract.id === 3){
                        return (
                          <div key={subOne.created_date.toString()}>
                          <CardTitle className="asset-title text-center">
                            <div className="current-price">Current Price:{Web3.utils.fromWei(subOne.current_price,'ether')} MANA</div>
                          </CardTitle>
                          </div>
                        )}
                      }
                    }
                    
                  )}
                </div>
                <Row className="justify-content-center">
                  <Accordion defaultActiveKey="1">
                    <div>  
                      <Accordion.Toggle as={Button} variant="link" eventKey="0" outline theme="light">
                        Details
                      </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                          <div className="p-3 mt-3 border rounded">
                            <div>Previouse Sales:{assetData.num_sales}</div>
                            {[assetData.last_sale].map((subSet) => {
                              if(subSet?.payment_token.id == 3) {
                                return <div key={subSet.event_timestamp.toString()} >Last Sale: {Web3.utils.fromWei(subSet.total_price,'ether')} MANA</div>
                              }
                              if(subSet?.payment_token.id == 1) {
                                return <div key={subSet.event_timestamp.toString()}>Last Sale: {Web3.utils.fromWei(subSet.total_price,'ether')} ETH</div>
                              }
                            }
                            )}
                          </div>
                        </Accordion.Collapse>
                    </div> 
                  </Accordion>
                </Row>
                <CardBody className="pb-.4rem;px-2">
                  <a href={assetData.permalink}>{}
                    <Row className="asset-image align-items-center">
                        <img className="mx-auto" src= {assetData.image_preview_url} target="_blank" />
                    </Row>
                  </a>
                  <Row className="mt-2 justify-content-center">
                    <div className="mb-2 asset-card text-center card-text">{assetData.name}</div>
                  </Row>
                  <Row className="mt-3 justify-content-center">
                    <div className="mb-2 col-sm asset-card text-left card-text">End Date:</div>

                    {assetData.sell_orders.map((subThree)=> 
                    
                    {if(subThree.payment_token_contract.id === 1){
                      return ( 
                          <div key={subThree.listing_time.toString()} className="mb-2 col-sm asset-card text-right card-text">
                             {(typeof(subThree.closing_date)=='string')?
                              <div>{subThree.closing_date}</div>            
                            :
                            'no end date'
                            }
                          </div>
                          )
                          }
                        } 
                      )}
                  </Row>
                </CardBody>     
                  <CardFooter className="p-0">
                  <button type="button" className="btn btn-lg btn-block card-footer-btn" onClick={this.toggleModal}>Nominate Asset</button>
                    <NominationModal 
                      toggleModal={this.toggleModal}
                      state={this.state} 
                      assetData={assetData} 
                      drizzle={this.props.drizzle}
                      drizzleState={this.props.drizzleState} 
                    />
                  </CardFooter>
              </Card>  
              
            </div>    
            )}
            // console.log("In OpenSea API MANA sales do not return sale_orders array")
          }
      
          )}

          <style jsx> {` 
            .asset-card{font-weight:400;color:black;font-size:.9rem;font-family: Poppins;}
            .card-footer-btn{font-family: Poppins;font-weight:400;color:#000;font-size:1rem;
            letter-spacing:.3rem;border-radius:.01rem .01rem .2rem .2rem;}
            .card-footer-btn:hover{background:#007bff;color:white;}
            .asset-total-fund{font-weight:200;font-size:.9rem;letter-spacing:.2rem;color:#000;}
            .asset-card-numbers{font-size:1rem;letter-spacing:.2rem;color:#007bff;hover:black;}
            .current-price{font-size:.8rem;letter-spacing:.1rem;font-weight:100;}
           
            `}    
          </style>
    
        </Row>   
        <Pagination postsPerPage={this.state.postsPerPage} totalPosts={this.state.totalPosts} paginate={paginate} />{console.log(currentPage)}
        </div>
      );
     
    }
  }

}

///////////////////////////////////////



import { all, fork, takeLatest, put, call, take, race, select, takeEvery } from 'redux-saga/effects';
//import { toast } from 'react-toastify';
// const delay = (ms) => new Promise(res => setTimeout(res, ms));

// const TOKEN_ID_FETCH = 'TOKEN_ID_FETCH';
// const GET_PROP_ADDRESS ='GET_PROP_ADDRESS';
const TEST_SAGA = 'TEST_SAGA';

// const getDrizzle = (state) => state.appReducers.drizzle;
// const getContracts = (state) => state.contracts;

function* testSaga () {
  yield put({ type: 'TESTED_SAGA' });
  //console.log('Hello Sagas!');
}


// function* fetchTokenId (action) {
//   yield put({ type: 'TOKEN_ID_FETCHED', tokenId:action.tokenId });
// }
// function* fetchTokenId (action) {
//   return console.log('Hello Sagas!')
// }

// function* fetchPropAddr (action) {
//   yield put({ type: 'GOT_PROP_ADDRESS' });
// }

function* appRootSaga() {
  yield takeLatest('TEST_SAGA', testSaga);
  // yield takeLatest('GET_PROP_ADDRESS', fetchPropAddr)
  // yield takeLatest('TOKEN_ID_FETCH', fetchTokenId)
}

export default appRootSaga;

















































return (
<Row className="mt-4">
{currentPosts.map((assetData) =>         

  <div className="mb-4 col-sm-12 col-md-12 col-lg-4" key={assetData.token_id.toString()}>
    <Card>
      <CardHeader className="asset-header p-2 card-title text-center">Decentraland</CardHeader>
      <div>

            {(subOne.payment_token_contract.id === 1) ?
              <div key={subOne.created_date.toString()}>
              <CardTitle className="asset-title text-center">
                <div className="current-price">Current Price:{Web3.utils.fromWei(subOne.current_price,'ether')} ETH</div>
              </CardTitle>
              </div>
           :
              <div key={subOne.created_date.toString()}>
              <CardTitle className="asset-title text-center">
                <div className="current-price">Current Price:{Web3.utils.fromWei(subOne.current_price,'ether')} MANA</div>
              </CardTitle>
              </div>
          }
          
      
      </div>
      <Row className="justify-content-center">
        <Accordion defaultActiveKey="1">
          <div>  
            <Accordion.Toggle as={Button} variant="link" eventKey="0" outline theme="light">
              Details
            </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <div className="p-3 mt-3 border rounded">
                  <div>Previouse Sales:{assetData.num_sales}</div>
                  {/* {[assetData.last_sale].map((subSet) => {
                    if(subSet?.payment_token.id == 3) {
                      return <div key={subSet.event_timestamp.toString()} >Last Sale: {Web3.utils.fromWei(subSet.total_price,'ether')} MANA</div>
                    }
                    if(subSet?.payment_token.id == 1) {
                      return <div key={subSet.event_timestamp.toString()}>Last Sale: {Web3.utils.fromWei(subSet.total_price,'ether')} ETH</div>
                    }
                  }
                  )} */}
                </div>
              </Accordion.Collapse>
          </div> 
        </Accordion>
      </Row>
      <CardBody className="pb-.4rem;px-2">
        <a href={assetData.permalink}>{}
          <Row className="asset-image align-items-center">
              <img className="mx-auto" src= {assetData.image_preview_url} target="_blank" />
          </Row>
        </a>
        <Row className="mt-2 justify-content-center">
          <div className="mb-2 asset-card text-center card-text">{assetData.name}</div>
        </Row>
        <Row className="mt-3 justify-content-center">
          <div className="mb-2 col-sm asset-card text-left card-text">End Date:</div>

          <div className="mb-2 col-sm asset-card text-right card-text">
              {(typeof(assetData.duration)=='string')?
              <div>{assetData.duration}</div>            
            :
            'no end date'
            }
          </div> 
        </Row>
      </CardBody>     
        <CardFooter className="p-0">
        <button type="button" className="btn btn-lg btn-block card-footer-btn" onClick={this.toggleModal}>Nominate Asset</button>
          <NominationModal 
            toggleModal={this.toggleModal}
            state={this.state} 
            assetData={assetData} 
            drizzle={this.props.drizzle}
            drizzleState={this.props.drizzleState} 
          />
        </CardFooter>
    </Card>  
    
  </div>    
  )}
 

<style jsx> {` 
  .asset-card{font-weight:400;color:black;font-size:.9rem;font-family: Poppins;}
  .card-footer-btn{font-family: Poppins;font-weight:400;color:#000;font-size:1rem;
  letter-spacing:.3rem;border-radius:.01rem .01rem .2rem .2rem;}
  .card-footer-btn:hover{background:#007bff;color:white;}
  .asset-total-fund{font-weight:200;font-size:.9rem;letter-spacing:.2rem;color:#000;}
  .asset-card-numbers{font-size:1rem;letter-spacing:.2rem;color:#007bff;hover:black;}
  .current-price{font-size:.8rem;letter-spacing:.1rem;font-weight:100;}
 
  `}    
</style>

</Row>   
)

//////////////////////////////////////////////////////////////

//WORKING BEFORE CHANGING API TO DECENTRALAND

import React, { Component, useState, useEffect } from 'react';
import Web3 from "web3";
import { Loader } from 'rimble-ui';
import Accordion from 'react-bootstrap/Accordion';
import { Card, CardHeader, CardBody, CardFooter, CardTitle, Button, Row, Progress } from "shards-react";
import NominationModal from '../modals/NominationModal';
import Pagination from '../../components/Pagination';
import Nominations from '../../components/Nominations'


const Cards = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);

  useEffect(() => {
    const fetchPosts = async () => {
    var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
    targetUrl = 'https://api.opensea.io/api/v1/events?asset_contract_address=0xf87e31492faf9a91b02ee0deaad50d51d56d5d4d&event_type=created&only_opensea=false&offset=0&limit=100'
    fetch(proxyUrl + targetUrl,{header:'x-api-key:2f2a0900458f4bdfbb489680a58e7526'})
      .then(res => res.json())
      .then(
        (result) => {
          setPosts(result.asset_events);
          setLoading(false);
          
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      ) 
    
      }

    fetchPosts();
  }, []);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <>
      <Nominations posts={currentPosts} loading={loading} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </>
  );
};

export default Cards;

//////////////////////////////////


const fetchDetailsLink = async () => {

  let proxyUrl = 'https://cors-anywhere.herokuapp.com/',
  targetUrl = 'https://api.thegraph.com/subgraphs/name/decentraland/marketplace'

  fetch(proxyUrl + targetUrl, {
  body: `{"query":{
        parcels(where: {x:"${-25}",{y:"${2}"}) {
          tokenId
      }
  },"variables":null}`,
  method: "POST",
  headers:myHeaders
})
.then(res => res.json())
.then(
  (result) => {
    const parcelData = result.data.parcels[0];
    console.log(`${parcelData}`);
  });

  }




  /////////////////////////////////////////////////////

  const fetchDetailsLink = async () => {

  let proxyUrl = 'https://cors-anywhere.herokuapp.com/',
  targetUrl = 'https://api.thegraph.com/subgraphs/name/decentraland/marketplace'

  fetch(proxyUrl + targetUrl, {
  body: `{"query":{
        parcels(where: {x:"${-25}",{y:"${2}"}) {
          tokenId
      }
  },"variables":null}`,
  method: "POST",
  headers:myHeaders
})
.then(res => res.json())
.then(
  (result) => {
    const parcelData = result.data.parcels[0];
    console.log(`${parcelData}`);
  });

  }

  //////import React from "react";
import { connect } from 'react-redux';
import { Container  } from "shards-react";
import { ContractForm, AccountData, ContractData } from "@drizzle/react-components";
//import ProposedAssetCard from "./cards/ProposedAssetCard.js";
// import NominateAssetCards from "./cards/NominateAssetCards.js";
import ProposalCards from "./cards/ProposalCards.js";
import Cards from "./cards/NominateAssetCards.js";
import Web3 from "web3";
import ManaTokenAbi from '../artifacts/contracts/ManaTokenAbi'

let newAbi = ManaTokenAbi;

let web3= new Web3("HTTP://127.0.0.1:7545");
const contractConfig = {
  contractName: "MANAToken",
  web3Contract: new web3.eth.Contract(newAbi, '0x2ba2b6d42e950e141bbc0363d98f52117d5cba17')
};


class PurchaseProtocal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      manaBalance:null
    }
  }

  componentDidMount() {   
    const { drizzle, drizzleState } = this.props;
    if (!drizzle.contracts['MANAToken']) {
      drizzle.addContract(contractConfig);
    }

    const account = drizzleState.accounts[0];
    const userManaBalance = drizzle.contracts.MANAToken.methods.balanceOf(account).call();
    console.log(userManaBalance)

    this.setState({
      manaBalance: userManaBalance
    });

  }


  render() {       
   //console.log(this.state.userManaBalance)
    return (
    <div className="d-flex justify-content-center">

      <Container>

        <Cards 
          props={this.props} 
          drizzleState ={this.props.drizzleState} 
          drizzle={this.props.drizzle} 
          txSuccessful={this.props.txSuccessful} 
          userManaBalance ={this.state.manaBalance}
        
        />
        {/* <NominateAssetCards drizzleState ={this.props.drizzleState} drizzle={this.props.drizzle} txSuccessful={this.props.txSuccessful}  /> */}
        {/* <ProposedAssetCard drizzleState ={this.props.drizzleState} drizzle={this.props.drizzle} /> */}
        {/* <ProposalCards drizzleState ={this.props.drizzleState} drizzle={this.props.drizzle} txSuccessful={this.props.txSuccessful} /> */}
      </Container>
      
      <style jsx>{` .card-text {margin-bottom:.1rem;font-family: Poppins;}
                .card {font-size: 10px;width:70%;margin-bottom:0;}
                .card-header {font-family: Poppins;padding: .3rem 2.2rem;background-color: #f2f2f2;font-size:17px;font-weight:500;}
                .card-body {padding: .6rem;font-size:17px;font-weight:400;} 
                .joinButton {letter-spacing: 2.5px;}
                `}  
      </style>
    </div>
    )
        
    }
     
}
  
const mapStateToProps = (state) => ({
  txSuccessful: state.dappReducer.txSuccessful,
  checkMetaMask: state.dappReducer.checkMetaMask,
  metaMaskReject: state.dappReducer.metaMaskReject
})

const mapDispatchToProps = (dispatch) => ({
  onMetaMaskCheckDone: () => dispatch({ type: "CHECK_METAMASK_DONE" }),
  onTxErrorDone: () => dispatch({ type: "TX_ERROR_METAMASK_DONE" })
});

export default connect(mapStateToProps, mapDispatchToProps)(PurchaseProtocal);




//////////////////////////

BEFORE STATE TO PROPS 
WORKING

import React, {useState, useEffect} from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { Button } from "shards-react";

const NominationDetailsLink = ({ parcel }) => { 

  const [tokenId, setTokenId] = useState();
  const [loading, setLoading] = useState(false);

  const myHeaders = new Headers();  
  myHeaders.append("Content-Type", "application/json");

  const fetchDetailsLink = async () => {
  const graphql= JSON.stringify({ query: 
  `{ parcels(where: {x:"${parcel.x}",y:"${parcel.y}"}) { tokenId }}`
})

  const proxyUrl = 'https://cors-anywhere.herokuapp.com/',
  targetUrl = 'https://api.thegraph.com/subgraphs/name/decentraland/marketplace'

  fetch(proxyUrl + targetUrl, {
    method: "POST",
    headers:myHeaders,  
    body:graphql, variables:{},
    redirect: 'follow'
})
    .then(res => res.json())
    .then(
      (result) => {
        const parcelData = result.data.parcels[0];
        setTokenId(parcelData.tokenId)
    });
  }

return (
    <Accordion defaultActiveKey="1">
      <div> 
        <Accordion.Toggle as={Button} onClick={fetchDetailsLink} variant="link" eventKey="0" outline theme="light">
        <div>Asset Details</div>
        </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <div className="p-3 mt-3 border rounded">
              <div>
                <a href={`https://market.decentraland.org/contracts/0xf87e31492faf9a91b02ee0deaad50d51d56d5d4d/tokens/`+ tokenId}  target="_blank">Decentraland</a>
              </div>
            </div>
          </Accordion.Collapse>
      </div> 
    </Accordion>
  )
}

export default NominationDetailsLink;



////////////////////////////////////////////////import React, {useState } from 'react';
import { connect } from 'react-redux';
import Accordion from 'react-bootstrap/Accordion';
import { Button } from "shards-react";

const NominationDetailsLink = ({ parcel, getTokenId, tokenIdState }) => { 

  const [tokenId, setTokenId] = useState();
  const [loading, setLoading] = useState(false);

  const myHeaders = new Headers();  
  myHeaders.append("Content-Type", "application/json");

  const fetchDetailsLink = async ({getTokenId}) => {
  const graphql= JSON.stringify({ query: 
  `{ parcels(where: {x:"${parcel.x}",y:"${parcel.y}"}) { tokenId }}`
})

  const proxyUrl = 'https://cors-anywhere.herokuapp.com/',
  targetUrl = 'https://api.thegraph.com/subgraphs/name/decentraland/marketplace'

  fetch(proxyUrl + targetUrl, {
    method: "POST",
    headers:myHeaders,  
    body:graphql, variables:{},
    redirect: 'follow'
})
    .then(res => res.json())
    .then(
      (result) => {
        const parcelData = result.data.parcels[0];
        const gotTokenId = parcelData.tokenId;
        setTokenId(gotTokenId);
    });
 
  } 

  const getTheId = () => {
    const getTokenId = () => ({ type: "GET_TOKEN_ID",tokenId: tokenId });
  }
 
return (
    <Accordion defaultActiveKey="1">
      <div> {console.log(tokenIdState)}
        <Accordion.Toggle as={Button} onClick={fetchDetailsLink} variant="link" eventKey="0" outline theme="light">
        <div>Asset Details</div>
        </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <div className="p-3 mt-3 border rounded">
              <div>
              <div>
                  <Button onClick={getTokenId}>Dougy</Button>
              </div>
                <a href={`https://market.decentraland.org/contracts/0xf87e31492faf9a91b02ee0deaad50d51d56d5d4d/tokens/`+ tokenId}  target="_blank">Decentraland</a>
              </div>
            </div>
          </Accordion.Collapse>
      </div> 
    </Accordion>
  )
}


const mapStateToProps = (state) => ({
  tokenIdState: state.dappReducer.tokenId,
  txSuccessful: state.dappReducer.txSuccessful,
  checkMetaMask: state.dappReducer.checkMetaMask,
  metaMaskReject: state.dappReducer.metaMaskReject
})



//const getTokenId = () => ({ type: "GET_TOKEN_ID" });

const mapDispatchToProps = (dispatch) => ({
  getTokenId: () => dispatch({ type: "GET_TOKEN_ID" }),
});

export default connect(mapStateToProps, mapDispatchToProps)(NominationDetailsLink);



//////////////////////////////////////

Nom
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Accordion from 'react-bootstrap/Accordion';
import { Button } from "shards-react";

const NominationDetailsLink = ({ parcel, getTokenId, tokenIdState, txSuccessful }) => { 

  const [tokenId, setTokenId] = useState();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
  const myHeaders = new Headers();  
  myHeaders.append("Content-Type", "application/json");

  const fetchDetailsLink = async () => {
  const graphql= JSON.stringify({ query: 
  `{ parcels(where: {x:"${parcel.x}",y:"${parcel.y}"}) { tokenId }}`
})

  const proxyUrl = 'https://cors-anywhere.herokuapp.com/',
  targetUrl = 'https://api.thegraph.com/subgraphs/name/decentraland/marketplace'

  fetch(proxyUrl + targetUrl, {
    method: "POST",
    headers:myHeaders,  
    body:graphql, variables:{},
    redirect: 'follow'
})
    .then(res => res.json())
    .then(
      (result) => {
        const parcelData = result.data.parcels[0];
        const gotTokenId = parcelData.tokenId;
        setTokenId(gotTokenId);
    });
 
  } 
  fetchDetailsLink();
});
 
return (
    <Accordion defaultActiveKey="1">
      <div> {console.log(tokenId)}
        <Accordion.Toggle as={Button}  variant="link" eventKey="0" outline theme="light">
        <div>Asset Details</div>
        </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <div className="p-3 mt-3 border rounded">
              <div>
              <div>
                  <Button onClick={getTokenId}>Token</Button>
              </div>
                <a href={`https://market.decentraland.org/contracts/0xf87e31492faf9a91b02ee0deaad50d51d56d5d4d/tokens/`+ tokenId}  target="_blank">Decentraland</a>
              </div>
            </div>
          </Accordion.Collapse>
      </div> 
    </Accordion>
  )
}

const mapStateToProps = (state) => ({
  tokenIdState: state.dappReducer.tokenId,
  txSuccessful: state.dappReducer.txSuccessful,
  checkMetaMask: state.dappReducer.checkMetaMask,
  metaMaskReject: state.dappReducer.metaMaskReject
})



const getTokenId = (tokenId) => ({ type: "GET_TOKEN_ID", tokenId:2 });

const mapDispatchToProps = (dispatch) => ({
  getTokenId: () => dispatch(getTokenId()),
});

// const getTokenId = () => ({ type: "GET_TOKEN_ID" });

// const mapDispatchToProps = (dispatch) => ({
//   getTokenId: () => dispatch(getTokenId()),
// });

export default connect(mapStateToProps, mapDispatchToProps)(NominationDetailsLink);

/////////////////////////////////import React from 'react';
import Navbar from './Navbar.js';
import HeadOne from './Head.js';
import Footer from './Footer.js'
import { DrizzleContext } from "@drizzle/react-plugin"; 
import { ToastContainer } from 'react-toastify';   
import { Drizzle, generateStore, generateContractsInitialState } from "@drizzle/store";
import drizzleOptions  from "../EthComponents/drizzleOptions";
import { contractEventSaga, joinTransactionSaga, cappSagas } from '../sagas/appSagas';
import { appReducers } from '../middleware/reducers/capReducers.js';
import createSagaMiddleware from '../../node_modules/redux-saga'
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';


//store/index


const contractEventNotifier = contractEventSaga;
const joinTransactionComplete = joinTransactionSaga;
const appMiddlewares = [ contractEventNotifier(), joinTransactionComplete ];
 
const initialState = {
  contracts: generateContractsInitialState(drizzleOptions)
};

const sagaMiddleware = createSagaMiddleware();


const store = createStore(
  
    //initialState,
    appReducers,
    //appMiddlewares,
    //disableReduxDevTools: false,
    applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(cappSagas)
   
const drizzle = new Drizzle(drizzleOptions, store);
export const Page = ({ children }) => (
  <div>
    <DrizzleContext.Provider drizzle={drizzle} >
      <Provider store={store}>
      <HeadOne />
      <Navbar />  
      <script src="https://kit.fontawesome.com/bd21ab8235.js" crossOrigin="anonymous"></script>
        <main>
          <ToastContainer />
          {children}
        </main>
      <Footer />
      </Provider>  
    </DrizzleContext.Provider>
  </div>
) 

export const Center = ({ children }) => (
    <div>
      {children}   
    </div>
  )

// function* fetchTokenId() {

// const myHeaders = new Headers();  
// myHeaders.append("Content-Type", "application/json");

// const [tokenId, setTokenId] = useState();
// const [loading, setLoading] = useState(false);

// const graphql= JSON.stringify({ query: 
// `{ parcels(where: {x:"${action.parcel.x}",y:"${action.parcel.y}"}) { tokenId }}`
// })

// const proxyUrl = 'https://cors-anywhere.herokuapp.com/',
// targetUrl = 'https://api.thegraph.com/subgraphs/name/decentraland/marketplace'

// fetch(proxyUrl + targetUrl, {
//   method: "POST",
//   headers:myHeaders,  
//   body:graphql, variables:{},
//   redirect: 'follow'
// })
//   .then(res => res.json())
//   .then(
//     (result) => {
//       const parcelData = result.data.parcels[0];
//       const gotTokenId = parcelData.tokenId;
//       setTokenId(gotTokenId);
//   });
//   yield put({ type: GET_TOKEN_ID, tokenId: 2});

// } 
.then(res => res.json())
.then((result) => {
  const parcelData = result.data.parcels[0];
  return parcelData;
})
.then((result) => { 
      const { tokenId } = result;
      return tokenId;
})
.then((result) => {
  setTokenId(result);
  getTokenId(result);
}) 
     
////////////////////////////

</div>
{loading ?
  <Loader size="30px" color="blue" /> :
  <a href={`https://market.decentraland.org/contracts/0xf87e31492faf9a91b02ee0deaad50d51d56d5d4d/tokens/` + tokenId}  target="_blank">Decentraland</a>
} 
</div>

///////////////////////////////////////////////////////////////
/**
 *Submitted for verification at Etherscan.io on 2017-08-15
*/

pragma solidity ^0.4.11;

contract ERC20Basic {
  uint256 public totalSupply;
  function balanceOf(address who) constant returns (uint256);
  function transfer(address to, uint256 value) returns (bool);
  event Transfer(address indexed from, address indexed to, uint256 value);
}

contract Ownable {
  address public owner;


  /**
   * @dev The Ownable constructor sets the original `owner` of the contract to the sender
   * account.
   */
  function Ownable() {
    owner = msg.sender;
  }


  /**
   * @dev Throws if called by any account other than the owner.
   */
  modifier onlyOwner() {
    require(msg.sender == owner);
    _;
  }


  /**
   * @dev Allows the current owner to transfer control of the contract to a newOwner.
   * @param newOwner The address to transfer ownership to.
   */
  function transferOwnership(address newOwner) onlyOwner {
    if (newOwner != address(0)) {
      owner = newOwner;
    }
  }

}

contract Pausable is Ownable {
  event Pause();
  event Unpause();

  bool public paused = false;


  /**
   * @dev modifier to allow actions only when the contract IS paused
   */
  modifier whenNotPaused() {
    require(!paused);
    _;
  }

  /**
   * @dev modifier to allow actions only when the contract IS NOT paused
   */
  modifier whenPaused {
    require(paused);
    _;
  }

  /**
   * @dev called by the owner to pause, triggers stopped state
   */
  function pause() onlyOwner whenNotPaused returns (bool) {
    paused = true;
    Pause();
    return true;
  }

  /**
   * @dev called by the owner to unpause, returns to normal state
   */
  function unpause() onlyOwner whenPaused returns (bool) {
    paused = false;
    Unpause();
    return true;
  }
}

contract ERC20 is ERC20Basic {
  function allowance(address owner, address spender) constant returns (uint256);
  function transferFrom(address from, address to, uint256 value) returns (bool);
  function approve(address spender, uint256 value) returns (bool);
  event Approval(address indexed owner, address indexed spender, uint256 value);
}

library SafeMath {
  function mul(uint256 a, uint256 b) internal constant returns (uint256) {
    uint256 c = a * b;
    assert(a == 0 || c / a == b);
    return c;
  }

  function div(uint256 a, uint256 b) internal constant returns (uint256) {
    // assert(b > 0); // Solidity automatically throws when dividing by 0
    uint256 c = a / b;
    // assert(a == b * c + a % b); // There is no case in which this doesn't hold
    return c;
  }

  function sub(uint256 a, uint256 b) internal constant returns (uint256) {
    assert(b <= a);
    return a - b;
  }

  function add(uint256 a, uint256 b) internal constant returns (uint256) {
    uint256 c = a + b;
    assert(c >= a);
    return c;
  }
}

contract BasicToken is ERC20Basic {
  using SafeMath for uint256;

  mapping(address => uint256) balances;

  /**
  * @dev transfer token for a specified address
  * @param _to The address to transfer to.
  * @param _value The amount to be transferred.
  */
  function transfer(address _to, uint256 _value) returns (bool) {
    balances[msg.sender] = balances[msg.sender].sub(_value);
    balances[_to] = balances[_to].add(_value);
    Transfer(msg.sender, _to, _value);
    return true;
  }

  /**
  * @dev Gets the balance of the specified address.
  * @param _owner The address to query the the balance of. 
  * @return An uint256 representing the amount owned by the passed address.
  */
  function balanceOf(address _owner) constant returns (uint256 balance) {
    return balances[_owner];
  }

}

contract StandardToken is ERC20, BasicToken {

  mapping (address => mapping (address => uint256)) allowed;


  /**
   * @dev Transfer tokens from one address to another
   * @param _from address The address which you want to send tokens from
   * @param _to address The address which you want to transfer to
   * @param _value uint256 the amout of tokens to be transfered
   */
  function transferFrom(address _from, address _to, uint256 _value) returns (bool) {
    var _allowance = allowed[_from][msg.sender];

    // Check is not needed because sub(_allowance, _value) will already throw if this condition is not met
    // require (_value <= _allowance);

    balances[_to] = balances[_to].add(_value);
    balances[_from] = balances[_from].sub(_value);
    allowed[_from][msg.sender] = _allowance.sub(_value);
    Transfer(_from, _to, _value);
    return true;
  }

  /**
   * @dev Aprove the passed address to spend the specified amount of tokens on behalf of msg.sender.
   * @param _spender The address which will spend the funds.
   * @param _value The amount of tokens to be spent.
   */
  function approve(address _spender, uint256 _value) returns (bool) {

    // To change the approve amount you first have to reduce the addresses`
    //  allowance to zero by calling `approve(_spender, 0)` if it is not
    //  already 0 to mitigate the race condition described here:
    //  https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729
    require((_value == 0) || (allowed[msg.sender][_spender] == 0));

    allowed[msg.sender][_spender] = _value;
    Approval(msg.sender, _spender, _value);
    return true;
  }

  /**
   * @dev Function to check the amount of tokens that an owner allowed to a spender.
   * @param _owner address The address which owns the funds.
   * @param _spender address The address which will spend the funds.
   * @return A uint256 specifing the amount of tokens still avaible for the spender.
   */
  function allowance(address _owner, address _spender) constant returns (uint256 remaining) {
    return allowed[_owner][_spender];
  }

}

contract MintableToken is StandardToken, Ownable {
  event Mint(address indexed to, uint256 amount);
  event MintFinished();

  bool public mintingFinished = false;


  modifier canMint() {
    require(!mintingFinished);
    _;
  }

  /**
   * @dev Function to mint tokens
   * @param _to The address that will recieve the minted tokens.
   * @param _amount The amount of tokens to mint.
   * @return A boolean that indicates if the operation was successful.
   */
  function mint(address _to, uint256 _amount) onlyOwner canMint returns (bool) {
     
    totalSupply = totalSupply.add(_amount);
    balances[_to] = balances[_to].add(_amount);
    Mint(_to, _amount);
    return true;
  }

  /**
   * @dev Function to stop minting new tokens.
   * @return True if the operation was successful.
   */
  function finishMinting() onlyOwner returns (bool) {
    mintingFinished = true;
    MintFinished();
    return true;
  }
}

contract PausableToken is StandardToken, Pausable {

  function transfer(address _to, uint _value) whenNotPaused returns (bool) {
    return super.transfer(_to, _value);
  }

  function transferFrom(address _from, address _to, uint _value) whenNotPaused returns (bool) {
    return super.transferFrom(_from, _to, _value);
  }
}

contract BurnableToken is StandardToken {

    event Burn(address indexed burner, uint256 value);

    /**
     * @dev Burns a specified amount of tokens.
     * @param _value The amount of tokens to burn. 
     */
    function burn(uint256 _value) public {
        require(_value > 0);

        address burner = msg.sender;
        balances[burner] = balances[burner].sub(_value);
        totalSupply = totalSupply.sub(_value);
        Burn(msg.sender, _value);
    }

}

contract MANAToken is BurnableToken, PausableToken, MintableToken {

    string public constant symbol = "MANA";

    string public constant name = "Decentraland MANA";

    uint8 public constant decimals = 18;
    uint256 public totalSupply = 1000000 * (uint256(10) ** decimals);

    function burn(uint256 _value) whenNotPaused public {
        super.burn(_value);
    }
}
///////////////////////////////////////////////////////////////

ARRAY STORAGE FOR PROPOSAL Contract
pragma solidity ^0.5.17;

import '../helpers/BaseStorage.sol';
import "../../node_modules/@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "../../node_modules/@openzeppelin/contracts/lifecycle/Pausable.sol";


pragma solidity ^0.5.17;

contract ProposalStorage is Pausable, BaseStorage  {
    
event AssetNomination(string _message);
  
mapping (uint => uint[]) userProposalIds;
mapping(address => bool) public contributors;
Proposal[] public proposals;
uint[] public ProposalIds;
uint latestProposalId = 0;

struct Proposal {
    uint id;
    uint userId;
    uint listPrice;
    uint reSalePrice;
    string text;
    uint tokenId;
    uint postedAt;
    uint balance;
} 

function getNumProposals() public view returns(uint _numProposals) {
return ProposalIds.length;
}

constructor(uint _userId, uint _listPrice, uint _reSalePrice, string memory _text, uint _tokenId) public {
    
  latestProposalId++;
  userProposalIds[_userId].push(latestProposalId);
  ProposalIds.push(latestProposalId);
  latestProposalId;

  Proposal memory newProposal = Proposal({
    id: latestProposalId,
    userId: _userId,
    listPrice: _listPrice,
    reSalePrice: _reSalePrice,
    text: _text,
    tokenId: _tokenId,
    postedAt: now,
    balance: 0
  });

  proposals.push(newProposal);

  emit AssetNomination("Asset Nominated");
}


function contribute(uint _contribution) public returns(address) {
  proposals.balance
  uint currentBalance = 
  require()
     ERC20 mana = ERC20(0xd8b934580fcE35a11B58C6D73aDeE468a2833fa8);
     mana.approve(address(this), _contribution);
     contributors[msg.sender] = true;
  }

function getProposalIdsFromUser(uint _userId) public view returns(uint[] memory) {
return userProposalIds[_userId];
}

function getSummary() public view returns (
  uint
  ) {
    return (
     ProposalIds.length
    );
}
}   




















  RETURNS STRUCT FROM MAPPING
function getSummary(uint _tokenId) external view returns(Proposal memory) {
    return proposals[_tokenId];
  }

mapping (uint => Proposal) proposals;
struct Choice {
    uint id;
    string name;
    uint votes;
  }
 mapping(uint => Ballot) ballots;
  ballots[nextBallotId].choices.push(Choice(i, _choices[i], 0));

mapping (uint => Proposal) proposals;
proposals[latestProposalId] = Proposal(latestProposalId, _userId, _listPrice,  _reSalePrice, _intitialContrib, _text, _tokenId, now);


function balanceOfAddress(address _addr) public view returns (uint) {
 return mana.balanceOf(_addr);
}
  
function transfer(address toAddr, uint256 _contribution) external {

mana.transfer(toAddr, _contribution);   
}
  
    function contribute(uint _contribution) public returns(address) {
     ERC20 mana = ERC20(0xd8b934580fcE35a11B58C6D73aDeE468a2833fa8);
     mana.approve(address(this), _contribution);
     contributors[msg.sender] = true;
    }

    ////////////////////////////////////////////////////////////////


    /////
    /*NOMINATION FORM BEFORE REMOVING INITIAL CONTRIBUTION */


    import React from "react";
import Web3 from "web3";
import { toast } from 'react-toastify';
import Modal from 'react-bootstrap/Modal';
import NominationButton from '../buttons/NominateButton';

import { newContextComponents } from "@drizzle/react-components";
const { AccountData, ContractData, ContractForm } = newContextComponents;

  
const Input = ({ title, value, onChange, type, placeholder, maxLength }) => (   
  <div>
    <label className="mt-4">
      {title}   
    </label>
    <input className="form-control form-control-sm" value={value} onChange={onChange} type={type} placeholder={placeholder} maxLength={maxLength} /> 
  </div>
) 

class NominationForm extends React.Component {
  constructor(props){   
    super(props);
    this.state = { 
    intialContribution:"",
    text: "",
    reSalePrice: ""
  };
}


updateField = (fieldName, e) => {
  const newState = {}
  newState[fieldName] = e.target.value
  this.setState(newState)
}

nominateAsset = async (e) => {
  e.preventDefault() 

  // Some quick validation checks
  for (let key in this.state) {
    if (!this.state[key]) {
      return toast.warning(`You must fill in your ${key}!`,{ position: toast.POSITION.TOP_RIGHT })
    }
  }
    const { intialContribution, text, reSalePrice } = this.state;
    const { drizzle, drizzleState } = this.props;
    const account = drizzleState.accounts[0];
    const memberBool = await drizzle.contracts.UserStorage.methods.addresses(account).call();
    const listPrice = this.props.assetPrice;
    
    if(memberBool) {
      const user = await drizzle.contracts.UserStorage.methods.profiles(account).call();
      const { userId } = user;
      const contract = drizzle.contracts.ProposalController;
      const contribution =  Web3.utils.toWei(intialContribution, 'ether')
    try {
        contract.methods["createProposal"].cacheSend(userId, listPrice, reSalePrice, contribution, text );
    } catch (err) {
        return toast.error(`Sorry, we couldn't create asset nomination: ${err}`,{ position: toast.POSITION.TOP_RIGHT })
    }
  }
    else {
      return toast.warning( `Join the Consortium and nominate this asset`, { position: toast.POSITION.TOP_RIGHT });
  }
}
  render() {
    return (
      <div>
        <div>
<ContractForm
  drizzle={this.props.drizzle}
  drizzleState={this.props.drizzleState}
  contract="MANAToken"
  method="transfer"
/>
 </div>
        <form onSubmit={this.nominateAsset}>
          <div className="contribute-form-dialog">
            <Input 
              title="Initial Contribution" 
              placeholder="Minimum 100 MANA"
              onChange={e => this.updateField("intialContribution", e) } 
              autoFocus />  
            <Input 
              title="Pitch"
              maxLength="55"   
              placeholder="Why this asset" 
              onChange={e => this.updateField("text", e)} 
            />
            <Input 
              title="Resale Price"
              placeholder="MANA" 
              onChange={e => this.updateField("reSalePrice", e)} 
            />
          </div> 
          <Modal.Footer>
            <NominationButton drizzle={this.props.drizzle} intialContribution={this.state.intialContribution}  nominateAsset={this.nominateAsset} />
          </Modal.Footer>
        </form>
    
        <style jsx>
          {`  .contribute-form-btn {font-family: Poppins;letter-spacing:5.5px;}
              .contribute-form-dialog {font-family: Poppins; font-size:1rem;}
          `}                
        </style>
      </div>
    )
  }
  
}

export default NominationForm; 



////////////////////////////////////////////////////////////////////////////////////
//NOMINATION MODAL BEFORE TOKENID STATE

  
import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import NominationForm from '../forms/NominationForm';
import Web3 from 'web3';
const NominationModal = ({ drizzleState, drizzle, parcel, props, userManaBalance }) => {

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  // let web3 = drizzle.web3;
  let state = drizzle.store.getState();
  let transactProcessing = state.transactionProcessing;
 
  useEffect(  () => {

    if(transactProcessing){ 
      setShow(true);
    }
    else{
    setShow(false);
    }
  }, [transactProcessing]);   

   
  return (   
        <> 
         <button type="button" className="btn btn-lg btn-block card-footer-btn" onClick={handleShow}>Nominate Asset</button>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header className="text-center justify-content-center" closeButton>
              <Modal.Title className="text-center justify-content-center">Asset Price:&nbsp;{parcel.publication.price}&nbsp;MANA</Modal.Title>
            </Modal.Header>
            <Modal.Body className="pt-1">
              {/* <div className="text-center justify-content-center">
                Your Balance:&nbsp;{Web3.utils.fromWei(userManaBalance,'ether')}&nbsp;MANA
              </div>   */}
                <NominationForm                   
                  drizzle={drizzle}
                  drizzleState ={drizzleState}  
                  assetPrice={parcel.publication.price}  
                  props={props}
                  userManaBalance ={userManaBalance}
                  /> 
            </Modal.Body>
          </Modal>
        </>
         );    
        } 

    export default NominationModal;      

    ///////////////////////////////////////////////////////////////////////////////

    NOMINATION BUTTON WITH LIVE CONTRIBUTION PULL DataCue
    import React from "react";
import { Button } from "shards-react";
import { Loader } from 'rimble-ui';

const NominationButton = ({ drizzle, nominateAsset, intialContribution }) => {     

  let state = drizzle.store.getState();
  let transactProcessing = state.transactionProcessing;

  if(!transactProcessing)  {  
    
  return (
          <Button className="btn btn-block btn-success contribute-form-btn" key="submit" type="button" onClick={nominateAsset}  theme="success" >
            <p className="mb-0">Nominate&nbsp;&nbsp;{intialContribution}&nbsp;MANA</p>
          </Button>
        )   
  } 
  if(transactProcessing)  {
    return (   
            <div className="mx-auto">   
              <Loader color="#007bff" size="40px" />
            </div>
        )   
  }

}

export default NominationButton;

////////////////////////////////////////////
GET MANA BALANCE
            <div className="text-center justify-content-center">
              Your Balance:&nbsp;{Web3.utils.fromWei(userManaBalance,'ether')}&nbsp;MANA
            </div>  

            ///////////////////////////////////

      ******************LAYOUT PAGE WITH STORE AND GENERATE STORE*****************************


import React from 'react';
import Navbar from './Navbar.js';
import HeadOne from './Head.js';
import Footer from './Footer.js'
import { Provider } from 'react-redux';
// import createSagaMiddleware from 'redux-saga';
// import { createStore, applyMiddleware, compose } from 'redux';
import { DrizzleContext } from "@drizzle/react-plugin"; 
import { ToastContainer } from 'react-toastify';   
import { Drizzle, generateStore, generateContractsInitialState } from "@drizzle/store";
import drizzleOptions  from "../../EthComponents/drizzleOptions";
import { contractEventSaga, joinTransactionSaga } from '../../middleware/capMiddleWare';
//import  reducer from '../../middleware/reducers/appReducers.js';
import  dappReducer from '../../middleware/reducers/reducer.js';
import appSagas from '../../middleware/sagas/appSagas';
//import rootSaga from '../../middleware/sagas/rootSaga';


const contractEventNotifier = contractEventSaga;
const joinTransactionComplete = joinTransactionSaga;
const appMiddlewares = [ contractEventNotifier(), joinTransactionComplete ];
const appReducers = {appReducers: dappReducer};
// const initialState = {
//   contracts: generateContractsInitialState(drizzleOptions)
// };

// const sagaMiddleware = createSagaMiddleware();

// const store = createStore(
//     reducer,
//     initialState,
//     applyMiddleware(
//       sagaMiddleware
//     )
// );

//sagaMiddleware.run(appSagas);
//sagaMiddleware.run(rootSaga);

const store = generateStore({
    drizzleOptions,
    appReducers,
    appMiddlewares,
    ...appSagas
})

const drizzle = new Drizzle(drizzleOptions, store);

export const Page = ({ children }) => (
  
  <div>
    <DrizzleContext.Provider drizzle={drizzle} >
      <Provider store={store}>
      <HeadOne />
      <Navbar />  
        <main>
          <ToastContainer />
          {children}
        </main>
      <Footer />
      </Provider>  
    </DrizzleContext.Provider>
  </div>
) 

export const Center = ({ children }) => (
    <div>
      {children}   
    </div>
  )

/////////////////////////////////////////////////////////////////////////


export default NominationButton;


<ContractData contract="Storage" method="getData" toUtf8 toAscii />

<ContractData drizzle={drizzle} 
drizzleState={drizzleState} 
contract="UserStorage" 
method="addresses" methodArgs={[drizzleState.accounts[0]]} />


const Member = <ContractData drizzle={drizzle} drizzleState={drizzleState} contract="UserStorage" method="addresses" methodArgs={[drizzleState.accounts[0]]} />
if(!Member){
  return "hello";
}
return "goodbye";
return Member;
render = {data => (
  <>
  this is <b>{data}</b>
  </>
)}



render (){<div></div>}
console.log(getMember())
// return {getMember};

/////////////////////////////////////////


import React from 'react';
import Navbar from './Navbar.js';
import HeadOne from './Head.js';
import Footer from './Footer.js'
import { Provider } from 'react-redux';
import { DrizzleContext } from "@drizzle/react-plugin"; 
import { ToastContainer } from 'react-toastify';   
import { Drizzle, generateStore } from "@drizzle/store";
import drizzleOptions  from "../../EthComponents/drizzleOptions";
import { contractEventSaga, joinTransactionSaga } from '../../middleware/capMiddleWare';
import  dappReducer from '../../middleware/reducer.js';
import appRootSaga from '../../middleware/appSagas';

const appSagas = [appRootSaga];

const contractEventNotifier = contractEventSaga;
const joinTransactionComplete = joinTransactionSaga;
const appMiddlewares = [ contractEventNotifier(), joinTransactionComplete ];
const appReducers = {appReducers: dappReducer};

const store = generateStore({
    drizzleOptions,
    appReducers,
    ...appSagas,
    appMiddlewares
})

const drizzle = new Drizzle(drizzleOptions, store);

export const Page = ({ children }) => (
  <div>
    <DrizzleContext.Provider drizzle={drizzle} >
      <Provider store={store}>
      <HeadOne />
      <Navbar />  
        <main>
          <ToastContainer />
          {children}
        </main>
      <Footer />
      </Provider>  
    </DrizzleContext.Provider>
  </div>
) 

export const Center = ({ children }) => (
    <div>
      {children}   
    </div>
  )

//////////////////////////////////////


export default combineReducers({
  appReducers,
  ...drizzleReducers
});
//////////////////////////////////


import React from 'react';
import Navbar from './Navbar.js';
import HeadOne from './Head.js';
import Footer from './Footer.js'
import { Provider } from 'react-redux';
import { DrizzleContext } from "@drizzle/react-plugin"; 
import { ToastContainer } from 'react-toastify';   
import { Drizzle, generateStore } from "@drizzle/store";
import drizzleOptions  from "../../EthComponents/drizzleOptions";
import { contractEventSaga, joinTransactionSaga } from '../../middleware/capMiddleWare';
import appSagas from '../../middleware/rootSaga';
import reducer from '../../middleware/reducer.js'

const contractEventNotifier = contractEventSaga;
const joinTransactionComplete = joinTransactionSaga;
const appMiddlewares = [ contractEventNotifier(), joinTransactionComplete ];
const appReducers = {appReducers: reducer};

const store = generateStore({
    drizzleOptions,
    appReducers,
    ...appSagas,
    appMiddlewares,
    disableReduxDevTools:false
})

const drizzle = new Drizzle(drizzleOptions, store);

export const Page = ({ children }) => (
  <div>
    <DrizzleContext.Provider drizzle={drizzle} >
      <Provider store={store}>
      <HeadOne />
      <Navbar />  
        <main>
          <ToastContainer />
          {children}
        </main>
      <Footer />
      </Provider>  
    </DrizzleContext.Provider>
  </div>
) 

export const Center = ({ children }) => (
    <div>
      {children}   
    </div>
  )


  //////////////////////////////////////////////////////////////

import { all, fork, takeLatest, put, call, take, race, select, takeEvery } from 'redux-saga/effects';

const TEST_SAGA = 'TEST_SAGA';

function* testSaga () {
  yield put({ type: 'TESTED_SAGA' });
}

function* appRootSaga() {
  yield takeLatest('TEST_SAGA', testSaga);
}

export default appRootSaga;


 //////////////////////////////////////////////////////////////

 const TESTED_SAGA = 'TESTED_SAGA';

 const initialState = {
   testedSaga:false
 };   
  
 function appReducers(state = initialState, action) {
     switch (action.type) {
       case TESTED_SAGA:
         return { ...state, testedSaga: true }; 
       default:
         return state;
     }
   }   
 
 export default appReducers;
 


/////////////////////////////////

******************FAILING AT accountBananesSaga

import { all, fork, takeLatest, put, call, take, race, select, takeEvery } from 'redux-saga/effects';
import { drizzleSagas }  from '@drizzle/store';




const drizzleSaga = [drizzleSagas];
// const dtuff = ...drizzleSagas;
const GET_PROP_ADDRESS ='GET_PROP_ADDRESS';



function * fetchPropAddr (action) {
  yield put({ type: 'GOT_PROP_ADDRESS', propAddress:action.propAddress});
}

export default function* root() {
  yield takeLatest(GET_PROP_ADDRESS, fetchPropAddr);
  yield all(
    drizzleSaga.map(saga => fork(saga))
  );

  }

  /////////////////////////////////////////////////

  import React from 'react';
import Navbar from '../components/layout/Navbar.js';
import HeadOne from '../components/layout/Head.js';
import Footer from '../components/layout/Footer.js'
import { connect, Provider } from 'react-redux';
import { DrizzleContext, DrizzleProvider, drizzleConnect  } from "@drizzle/react-plugin"; 
import { ToastContainer } from 'react-toastify';   
import { generateStore } from "@drizzle/store";
import drizzleOptions  from "../EthComponents/drizzleOptions";
import { contractEventSaga, joinTransactionSaga } from '../middleware/capMiddleWare';
import rootSaga from '../middleware/sagas/root';
import appSagas from '../middleware/sagas/rootSaga';
import reducer from '../middleware/reducers/appReducers.js'
import MyComponent from './innerInnerTestPage'



// const InnerTestPage = ({ propAddress,getCurrentProp }) => {
//   getCurrentProp()
// return (

//   <div>
//  {console.log(propAddress)}
//     <div>Hello</div>
 

//   </div>
//     );

// }

const mapStateToProps = (state) => ({
  propAddress: state.appReducer.propAddress,
  drizzleStatus: state.drizzleStatus,
  UserStorage: state.accounts[0]
 })
 
 const mapDispatchToProps = (dispatch) => ({
    getCurrentProp: () =>  dispatch({ type: "GET_PROP_ADDRESS",propAddress:2 })
 });

 const InnerTestPage = drizzleConnect(
  MyComponent,
  mapStateToProps,
  mapDispatchToProps
)

export default InnerTestPage;
 
 //export default connect(mapStateToProps, mapDispatchToProps)(InnerTestPage);

 ////////////////////////////////////////////////////////////////////


 import React from 'react';
import Navbar from './Navbar.js';
import HeadOne from './Head.js';
import Footer from './Footer.js'
import { Provider } from 'react-redux';
import { DrizzleContext } from "@drizzle/react-plugin"; 
import { ToastContainer } from 'react-toastify';   
import createSagaMiddleware from 'redux-saga';
import { Drizzle, generateStore, generateContractsInitialState } from "@drizzle/store";
import drizzleOptions  from "../../EthComponents/drizzleOptions";
import { contractEventSaga, joinTransactionSaga } from '../../middleware/capMiddleWare';
//Old Store
import rootSaga from '../../middleware/sagas/root';
//New GenerateStore
import appSagas from '../../middleware/sagas/rootSaga';

import reducer from '../../middleware/reducers/appReducers.js'

import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { isDOMComponent } from 'react-dom/test-utils';

const contractEventNotifier = contractEventSaga;
const joinTransactionComplete = joinTransactionSaga;
const appMiddlewares = [ contractEventNotifier(), joinTransactionComplete ];
const appReducers = {appReducers: reducer};
const sagaMiddleware = createSagaMiddleware();

const initialState = {
  contracts: generateContractsInitialState(drizzleOptions)
};

const store = createStore(
    reducer,
    //initialState,
   applyMiddleware(
      sagaMiddleware
    ),
 
);

sagaMiddleware.run(rootSaga);

const drizzleStore = generateStore({
    drizzleOptions,
    appReducers,
    //appSagas,
    appMiddlewares,
    disableReduxDevTools:false
})

const drizzle = new Drizzle(drizzleOptions, drizzleStore);

export const Page = ({ children }) => (
  <div>
    <DrizzleContext.Provider drizzle={drizzle} >
      <Provider store={store}>{console.log(store.getState())}
      <HeadOne />
      <Navbar />  
        <main>
          <ToastContainer />
          {children}
        </main>
      <Footer />
      </Provider>  
    </DrizzleContext.Provider>
  </div>
) 

export const Center = ({ children }) => (
    <div>
      {children}   
    </div>
  )

/////////////////////////////////////////////////////////////////

*******************Nomination Asset Cards before filter out of ids *************************

import React, { useState, useEffect } from 'react';
import Pagination from '../../components/Pagination';
import Nominations from '../../components/Nominations'

const NominationAssetCards = ({ props, userManaBalance }) => {

  const [parcels, setParcels] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [parcelsPerPage] = useState(6);
  const [totalParcels, setTotalParcels] = useState();
//'../api.DecentralandApi.json'
  useEffect(
    () => {
        const fetchParcels = async () => {
        const proxyUrl = 'https://cors-anywhere.herokuapp.com/',
        targetUrl = 'https://api.decentraland.org/v1/parcels?status=open&sort_by=price&sort_order=desc&limit=20&offset=0'
        fetch(proxyUrl + targetUrl)
          .then(res => res.json())
          .then(
            (result) => {
              setParcels(result.data.parcels);
              setTotalParcels(result.data.parcels.length)
              setLoading(false); 
            },
            (error) => {
              setLoading(true),
              error;
            }
        ) 
      }

    fetchParcels();  
  }, []);


  // Get current Parcels
  const indexOfLastParcel = currentPage * parcelsPerPage;
  const indexOfFirstParcel = indexOfLastParcel - parcelsPerPage;
  const currentParcels = parcels.slice(indexOfFirstParcel, indexOfLastParcel);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (   
    <>
      <Nominations 
      parcels={currentParcels} 
      loading={loading} 
      props={props} 
      userManaBalance={userManaBalance}
      />
      <Pagination
        currentPage ={currentPage }
        parcelsPerPage={parcelsPerPage}
        totalParcels={totalParcels}
        paginate={paginate}
      />
    </>
  );
};

export default NominationAssetCards;

// ////////////////////////////////////////////////////////////

******************before propaddress event******************

export const contractEventSaga = lastSeenEventId => store => next => action => {
  if (action.type === EventActions.EVENT_FIRED) {
    if (action.event.id !== lastSeenEventId) {
      lastSeenEventId = action.event.id
       const message = action.event.returnValues._message
       const display = `${message}`
       toast.info(display, { position: toast.POSITION.TOP_RIGHT })
    }
  }
  return next(action)
}

////////////////////////////////////////


///////////////////        CONTRIBUTE MODAL 12/19/20 ///////////////////////



import React, { Component, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { CardFooter, Button, Progress, Slider } from "shards-react";
import Web3 from "web3";
import CppContribSlider from '../sliders/CppContributeSlider';
import ContributeForm from '../forms/ContributeForm';


const ContributeModal = ( {drizzle, assetData, state, handleSlide} ) => {


  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let value  = state.value;
  let valueSlider = state.valueSlider;

  return ( 
  
        <>
          <CardFooter className="p-0">
            <button type="button" className="btn btn-lg btn-block card-footer-btn" onClick={handleShow}>Fund Purchase</button>
          </CardFooter>
          
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Fund Asset Purchase</Modal.Title>   
            </Modal.Header>
            <Modal.Body>
            <div>
                  {assetData.sell_orders.map((subOne)=> 
                      {if(subOne.payment_token_contract.id === 1){
                        let maxRanger = Web3.utils.fromWei(subOne.current_price,'ether')
                        let maxRange = parseInt(maxRanger);
                        let minRange = 3;
                        let progressMax = maxRange-minRange;

                        return (
                        <div key={subOne.created_date.toString()}>
                          <div className="current-price">
                            <Progress value={minRange} max={Web3.utils.fromWei(subOne.current_price,'ether')} >{minRange}</Progress>
                            <p className="mt-2 mb-1" >Current Price:&nbsp;{Web3.utils.fromWei(subOne.current_price,'ether')}&nbsp;ETH</p>
                          </div>
                          <div>
                          <p className="mt-4 mb-1" >Current Pool Depth: {minRange} ETH</p>
                            <Slider
                              theme="success"
                              step={.01}
                              pips={{ mode: "range", stepped: true, density: 3 }}
                              onSlide={handleSlide}
                              connect={[true, false]}
                              start={[valueSlider]}
                              range={{ min: 0, max: progressMax }}
                            />
                          </div>  
                        <div className="mt-4">{valueSlider} ETH </div>                 
                        </div>
                        )
                      }
                    }
                  )}
                </div>
            </Modal.Body>
            <div className="modal-footer">
              <ContributeForm state={state} valueSlider={valueSlider} drizzle ={drizzle} handleSlide={handleClose} />
            </div>
          </Modal>
        </>
         );    
        } 

    export default ContributeModal;      

//////////////////////////////

import React from "react";
import { Button } from "shards-react";
import Web3 from "web3";
import { toast } from 'react-toastify';
import Modal from 'react-bootstrap/Modal';
import ContributionButton from '../buttons/ContributionButton';
import { newContextComponents } from "@drizzle/react-components";
const { AccountData, ContractData, ContractForm } = newContextComponents;

const Input = ({ value, onChange }) => (
  <div>
    <input type="hidden" className="form-control form-control-sm" value={value} onChange={onChange} /> 
  </div>
) 

class ContributeForm extends React.Component {
  constructor(props) {
  super(props);
    this.state = { 
      value:''
    };
  this.handleChange = this.handleChange.bind(this);
  this.contribute = this.contribute.bind(this);
  };
handleChange = (event) => {
  this.setState({
    value: event.target.value,
  });
}   

contribute = async (e) => {
  e.preventDefault();
  for (let key in this.state) {    
    if (!this.state[key]) {
      return toast.warning(`You must fill in your ${key}!`,{ position: toast.POSITION.TOP_RIGHT })
    }
  }
  console.log(this.props.state)
  const { drizzle, drizzleState, propAddress, userManaBalance } = this.props;
  //const { value } = this.props.state.valueSlider;
  const { value } = this.state;
  console.log(value)
  const account = drizzleState.accounts[0];
  const memberBool = await drizzle.contracts.UserStorage.methods.addresses(account).call();
  const listPrice = this.props.assetPrice;
  
  if(memberBool) {
  //if(!currentProp && memberBool) {
    const user = await drizzle.contracts.UserStorage.methods.profiles(account).call();
    const { userId } = user;
    const contract = drizzle.contracts.ProposalStorage;

    //const contribution =  Web3.utils.toWei(intialContribution, 'ether')
  try {

    contract.methods["contribute"].cacheSend(value, {from:`${account}`});
  } catch (err) {
      return toast.error(`Sorry, we couldn't create asset nomination: ${err}`,{ position: toast.POSITION.TOP_RIGHT })
  }
}
  else {
    return toast.warning( `Join the Consortium and nominate this asset`, { position: toast.POSITION.TOP_RIGHT });
  }

}

  render() {
    
    return (
      <div>
        
        <form onSubmit={this.contribute}>
          <div className="contribute-form-dialog ">
          <textarea className="form-control form-control-sm" value={this.state.value} onChange={this.handleChange} /> 
          {/* <Input 
            title="Desired Contribution" 
            value={this.props.state.valueSlider}
            onChange={this.handleChange}
          />   */}
          </div> 
          <div>
            <Button className="btn btn-block btn-success contribute-form-btn" key="submit" type="button" onClick={this.contribute} theme="success" >
              <p className="mb-0">Fund&nbsp;&nbsp;{this.props.state.valueSlider}&nbsp;MANA</p>
            </Button>

          </div>
        </form>
    
        <style jsx>
          {`  .contribute-form-btn {font-family: Poppins;letter-spacing:5.5px;}
              .contribute-form-dialog {font-family: Poppins; font-size:1rem;}
          `}                
        </style>
      </div>
    )
  }
  
}

export default ContributeForm; 



/////////////////////////////////////////////////////////////

contribute = async (e) => {
  e.preventDefault();
  for (let key in this.state) {    
    if (!this.state[key]) {
      return toast.warning(`You must fill in your ${key}!`,{ position: toast.POSITION.TOP_RIGHT })
    }
  }
  console.log(this.props.state)
  const { drizzle, drizzleState, propAddress, userManaBalance } = this.props;
  //const { value } = this.props.state.valueSlider;
  const { value } = this.state;
  console.log(value)
  const account = drizzleState.accounts[0];
  const memberBool = await drizzle.contracts.UserStorage.methods.addresses(account).call();
  const listPrice = this.props.assetPrice;
  
  if(memberBool) {
  //if(!currentProp && memberBool) {
    const user = await drizzle.contracts.UserStorage.methods.profiles(account).call();
    const { userId } = user;
    const contract = drizzle.contracts.ProposalStorage;

    //const contribution =  Web3.utils.toWei(intialContribution, 'ether')
  try {

    contract.methods["contribute"].cacheSend(value, {from:`${account}`});
  } catch (err) {
      return toast.error(`Sorry, we couldn't create asset nomination: ${err}`,{ position: toast.POSITION.TOP_RIGHT })
  }
}
  else {
    return toast.warning( `Join the Consortium and nominate this asset`, { position: toast.POSITION.TOP_RIGHT });
  }

}


////////////////////////////////////////////////////////////

import React from "react";
import { Button } from "shards-react";
import Web3 from "Web3";
import { toast } from 'react-toastify';
import Modal from 'react-bootstrap/Modal';
import ContributionButton from '../buttons/ContributionButton';
import Contribute from './Contribute.js';
import ManaToken from '../../artifacts/contracts/ManaToken.json'
//import TestCard from "./cards/TestCard.js";


const newAbi = ManaToken.abi;



const Input = ({ value, onChange, title, placeholder }) => (
  <div>
    <label className="mt-4">
      {title}   
    </label>
    <input className="form-control form-control-sm" value={value} onChange={onChange} placeholder={placeholder}  /> 
  </div>
) 

class ContributeForm extends React.Component {

  constructor(props){
    super(props);

    //this.handleChange = this.handleChange.bind(this);
    this.contribute = this.contribute.bind(this);
    this.state = {
      contribution:""
    }
  }

updateField = (fieldName, e) => {
  const newState = {}
  newState[fieldName] = e.target.value
  this.setState(newState)
}

contribute = async (e) => {
  e.preventDefault();
  // for (let key in this.state) {    
  //   if (!this.state[key]) {
  //     return toast.warning(`You must fill in your ${key}!`,{ position: toast.POSITION.TOP_RIGHT })
  //   }
  // }
  //console.log(this.props.drizzle)
  const { drizzle, drizzleState, propAddress, userManaBalance, assetPrice } = this.props;
  const { contribution } = this.state;
 
  const account = drizzleState.accounts[0];
  const memberBool = await drizzle.contracts.UserStorage.methods.addresses(account).call();
  const listPrice = assetPrice;
  
  if(memberBool && propAddress !== null) {
  //if(!currentProp && memberBool) {
    const user = await drizzle.contracts.UserStorage.methods.profiles(account).call();
    const { userId } = user;
    //const contract = drizzle.contracts.ProposalStorage;
    const contract = await drizzle.contracts.MANAToken;
  try {

const tokenContractAddress = '0x2BA2B6D42e950e141bbc0363D98f52117d5CBA17';
console.log(propAddress)
// Instantiate contract
let web3 = new Web3("HTTP://127.0.0.1:7545");
   const tokenContract = new web3.eth.Contract(newAbi, '0x2BA2B6D42e950e141bbc0363D98f52117d5CBA17');
   const tokenDecimals = web3.utils.toBN(18);
   const tokenAmountToApprove = web3.utils.toBN(999000000000);
    const calculatedApproveValue = web3.utils.toHex(tokenAmountToApprove.mul(web3.utils.toBN(10).pow(tokenDecimals)));
    console.log(calculatedApproveValue)

    web3.eth.getAccounts().then((accounts) => {
      // Send ERC20 transaction with Web3
      tokenContract.methods.approve(propAddress, calculatedApproveValue).send({from: accounts[0]})
      .once('transactionHash', (hash) => { console.log(hash); })
      .once('receipt', (receipt) => { console.log(receipt); });
    });
    
    //   tokenContractInstance.approve(propAddress, calculatedApproveValue,{
    //     from:   Web3.eth.accounts[0],
    //     gasPrice: "20000000000",
    //     gas: "21000",
    //     data: ""
    //  },function(error, result){
    //      if(!error)
    //          console.log(result);
    //      else
    //          console.error(error);
    // });
   
       
    //drizzle.contracts.MANAToken.methods.transfer(propAddress, contribution).send({from:`${account}`, gas:100000});
    //drizzle.contracts.MANAToken.methods.approve.cacheSend(`${propAddress}`, contribution, {from:account, gas:100000});
    //contract.methods["appo"].cacheSend(contribution, {from:`${account}`});
  } catch (err) {
      return toast.error(`Sorry, no contribution made: ${err}`,{ position: toast.POSITION.TOP_RIGHT })
  }
}
  else {
    return toast.warning( `Join the Consortium and nominate this asset`, { position: toast.POSITION.TOP_RIGHT });
  }

}

  render() {
    const { drizzleState, assetPrice, propAddress } = this.props;
    let contractBalance = drizzleState.appReducers.balance;
    let valueSlider = this.state.valueSlider;
    let maxRanger = `${assetPrice}`;
    let maxRange = parseInt(maxRanger);
    let minRange = contractBalance;
    let progressMax = maxRange-minRange;

    return (
      <div>
      {/* <Contribute drizzle={this.props.drizzle} drizzleState={this.props.drizzleState} accounts={this.props.drizzleState.accounts} /> */}
      <div className="contribution-modal">
        <div>
          <p className="mt-4 mb-1" >Current Pool Depth: {minRange} MANA</p>
        </div>  
      </div>
      <div className="modal-footer">
        <form onSubmit={this.contribute}>
          <div className="contribute-form-dialog ">
          <Input 
              title="Contribution"
              placeholder="Minimium 100 MANA" 
              onChange={e => this.updateField("contribution", e)} 
            />
          </div> 
          <div>
            <Button className="btn btn-block btn-success contribute-form-btn" type="submit" onClick={this.contribute} theme="success" >
              <p className="mb-0">Fund</p>
            </Button>
          </div>
        </form>
        </div>  
        <style jsx>
          {`  
          .contribution-modal{font-family: Poppins;}
          .min-amount-text {font-size:.7rem;}
          .mana-balance{font-size:.9rem;color:#007bff;}
          .contribute-form-btn {font-family: Poppins;letter-spacing:5.5px;}
          .contribute-form-dialog {font-family: Poppins; font-size:1rem;}
          `}                
        </style>
      </div>
    )
  }
  
}

export default ContributeForm; 






///////////////////////////////////////////



    //export default ProposalForm;      


    //////////////////////////////////////////////////////
    pragma solidity ^0.5.17;

    import '../helpers/BaseStorage.sol';
    import "../../node_modules/@openzeppelin/contracts/token/ERC20/IERC20.sol";
    import "../../node_modules/@openzeppelin/contracts/lifecycle/Pausable.sol";
    
    contract ProposalStorage is Pausable, BaseStorage  {
    
      uint public contractBalance;
      uint public tokenId;
      event ContributionSuccess(string _message, uint _contribution, uint contractTotal);
    
      mapping (uint => Proposal) public proposals;
    
      struct Proposal {
          uint id;
          uint userId;
          uint listPrice;
          uint reSalePrice;
          string text;
          uint tokenId;
          uint postedAt;
          uint balance;
          mapping(address => bool) contributors;
      } 
    
    
      constructor(uint latestProposalId, uint _userId, uint _listPrice, uint _reSalePrice, string memory _text, uint _tokenId) public {
          
        proposals[_tokenId] = Proposal({
          id: latestProposalId,
          userId: _userId,
          listPrice: _listPrice,
          reSalePrice: _reSalePrice,
          text: _text,
          tokenId: _tokenId,
          postedAt: now,
          balance: 0
        }); 
        tokenId = _tokenId;    
      }
    
    
      function contribute(uint _contribution) public returns(address) {
        uint currentBalance = proposals[tokenId].balance;
        uint remainder = proposals[tokenId].listPrice - currentBalance;
        require(_contribution <= remainder);
        proposals[tokenId].balance = currentBalance + _contribution;
        proposals[tokenId].contributors[msg.sender] = true; 
        emit ContributionSuccess("Your Contribution has been accepted:", _contribution, proposals[tokenId].balance);
      }
        
        
      function getSummary(uint _tokenId) external returns(uint) {
        contractBalance = proposals[_tokenId].balance;
        return contractBalance;
      }
    
    }   
    
    
    
    
    
    
    
    ////////////////////////////////////////////////

    import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Loader } from 'rimble-ui';
import InitialContributeModal from '../modals/InitialContibModal';
import InnerPropForm  from './InnerPropForm'

const ProposalForm = ({ drizzle, drizzleState, props, propAddress, getCurrentProp, tokenId, assetPrice, userManaBalance }) => {     

const [tokenIdState, setTokenId] = useState(null);

const fetchProposalAddress = async () => {
  setTokenId(tokenId);

  if(!tokenIdState){
    <div className="mx-auto align-items-center">   
    <div>!tokenIdState</div>
      <Loader color="#007bff" size="40px" />
    </div>
  }
  
  if(tokenIdState){
    const proposalAddress = await drizzle.contracts.ProposalController.methods.getPropTokenIdMap(`${tokenIdState}`).call(); 
    getCurrentProp(proposalAddress);
    }
  };

useEffect(() => {
  fetchProposalAddress();
}, [tokenIdState]);

// if(!propAddress){
// return (
//   <div className="mx-auto align-items-center">   
//     <Loader color="#007bff" size="40px" />
//   </div>
//   )
// }
if(propAddress){
 return (
    <InnerPropForm
      assetPrice={assetPrice}  
      props={props}
      drizzle={drizzle}
      drizzleState={drizzleState}
      tokenId={tokenId}
      userManaBalance={userManaBalance}
    />
    )
  }
if(!propAddress){
return (
  <div className="mx-auto align-items-center">   
    <Loader color="#007bff" size="40px" />
  </div>
  )
}

  // {!propAddress ?
  //   <div className="mx-auto align-items-center">   
  //     <Loader color="#007bff" size="40px" />
  //   </div>
  // :
  //   <InnerPropForm
  //     assetPrice={assetPrice}  
  //     props={props}
  //     drizzle={drizzle}
  //     drizzleState={drizzleState}
  //     tokenId={tokenId}
  //     userManaBalance={userManaBalance}
  //   />
      
  // }
}

const mapStateToProps = (state) => ({
  //propAddress: state.appReducers.propAddress
})

const mapDispatchToProps = (dispatch) => ({
  getCurrentProp: (proposalAddress) =>  dispatch({ type: "GOT_PROP_ADDRESS", proposalAddress:proposalAddress })
});
      
      
export default connect(mapStateToProps, mapDispatchToProps)(ProposalForm);
    
    
    
    
    
    
    

//////////////////////////////

  componentDidMount() {
    const { drizzleState } = this.props;
 
    this.setState({
      currentBalance: this.props.contractBalance
    });
   
  }


  componentDidUpdate(prevProps) {
    if (prevProps.propAddress !== this.props.propAddress) {

      const { drizzle, propAddress, tokenId, gotContractBalance } = this.props;

      const CurrentBalance = async () => {
        if(drizzle.contracts[`${propAddress}`]){
          const proposalContract = drizzle.contracts[`${propAddress}`];
          const propBalance = await proposalContract.methods.getSummary(`${tokenId}`).call();
          gotContractBalance(propBalance)
         console.log('componentdidupdate', propBalance)
          //this.setState({currentBalance: propBalance})
        }
      }
      CurrentBalance();
 }
  }

componentWillUnmount() {
  const { drizzleState } = this.props;

    this.props.propAddress,
    this.handleStatusChange

}
handleStatusChange(props) {
  this.setState({
    currentBalance: props.contractBalance
  });
}


////////////////////////////////////////////






export const contractEventSaga = lastSeenEventId => store => next => action => {
  if (action.type === EventActions.EVENT_FIRED) {
    if (action.event.id !== lastSeenEventId) {
      lastSeenEventId = action.event.id
      if(action.event.returnValues._proposalAddress){
       const propAddress = action.event.returnValues._proposalAddress
       const proposalAddress = `${propAddress}`
       const display = `${message}`
       store.dispatch({type:"GOT_PROP_ADDRESS", proposalAddress:proposalAddress})
       toast.info(display, { position: toast.POSITION.TOP_RIGHT })
       }
       if(action.event.returnValues._contribution){
        const message = action.event.returnValues._message
        const contribution = action.event.returnValues._contribution
        const poolDepth = action.event.returnValues.currentContractBalance
        store.dispatch({type:"PROPOSAL_BALANCE", balance:`${poolDepth}`})
        toast.info(`${message} ${contribution} MANA has been accepted.`, { position: toast.POSITION.TOP_RIGHT })
       }
    }
  }
  return next(action)
}

/////////////////////////////////////////////



contract ProposalStorage is Pausable, BaseStorage  {

  uint public tokenId;
  uint public currentContractBalance;

  mapping (uint => Proposal) public proposals;

  struct Proposal {
      uint id;
      uint userId;
      uint listPrice;
      uint reSalePrice;
      string text;
      uint tokenId;
      uint postedAt;
      uint balance;
      mapping(address => bool) contributors;
  } 

  constructor(uint latestProposalId, uint _userId, uint _listPrice, uint _reSalePrice, string memory _text, uint _tokenId) public {
      
    proposals[_tokenId] = Proposal({
      id: latestProposalId,
      userId: _userId,
      listPrice: _listPrice,
      reSalePrice: _reSalePrice,
      text: _text,
      tokenId: _tokenId,
      postedAt: now,
      balance: 0
    }); 
    tokenId = _tokenId;    
  }

  function contribute(uint _contribution) public {
    uint currentBalance = proposals[tokenId].balance;
    uint remainder = proposals[tokenId].listPrice - currentBalance;
    require(_contribution <= remainder);
    currentContractBalance = currentBalance + _contribution;
    proposals[tokenId].balance = currentContractBalance;
    proposals[tokenId].contributors[msg.sender] = true;
  }


    
    
  function getSummary(uint _tokenId) public view returns(uint) {
    uint contractBalance = proposals[_tokenId].balance;
    return contractBalance;
  }

}   



///////////////////////////////////

const crap = async () => {
// this returns the provider, or null if it wasn't detected
const provider = await detectEthereumProvider();

if (provider) {
const web3Provider = new Web3(Web3.provider);
return web3Provider;
  
} else {
  console.log('Please install MetaMask!');
}
}
let web3 = new Web3(
  // Replace YOUR-PROJECT-ID with a Project ID from your Infura Dashboard
  new Web3.providers.WebsocketProvider("wss://ropsten.infura.io/v3/5ee399b76fea4821a1fcc71a0ff87e60")
)
const web3 = crap();
const web3 = new Web3("https://ropsten.infura.io/v3/5ee399b76fea4821a1fcc71a0ff87e60");
console.log(web3);
const host = "https://ropsten.infura.io/v3/5ee399b76fea4821a1fcc71a0ff87e60";
const customProvider = new Web3.providers.HttpProvider(host);
const webProvider = new Web3.providers.WebsocketProvider('wss://ropsten.infura.io/v3/5ee399b76fea4821a1fcc71a0ff87e60');

//////////////////////////////////////////////////
    MANAToken.methods.approve(propAddress, convertedContribution).send({from:`${account}`, gas:100000})
    manaContract.methods.approve(propAddress, convertedContribution).send({from:`${account}`, gas:100000})
    proposalStorage.methods.contribute(`${contribution}`, nftAddress).send({from:`${account}`, gas:100000}) 

/////////////////////////////////////////////////
pragma solidity ^0.5.17;

import '../helpers/BaseStorage.sol';
import "../helpers/MarketPlaceInterface.sol";
import "../../node_modules/@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "../../node_modules/@openzeppelin/contracts/lifecycle/Pausable.sol";

contract MarketPlace {
function executeOrder(address nftAddress, uint256 assetId, uint256 price) public;
}


contract ProposalStorage is Pausable, BaseStorage {

  uint public tokenId;
  uint public currentContractBalance;
  address internal _marketAddr = 0x805CD928BB453eAf61CdeDcB954AbF4fc1e11952;
  MarketPlaceInterface market = MarketPlaceInterface(_marketAddr);

  event ContributionSuccess(string _message, uint _contribution, uint currentContractBalance);
  event AssetFunded(string _message, bool fundComplete);

  mapping (uint => Proposal) public proposals;

  struct Proposal {
      uint id;
      uint userId;
      uint listPrice;
      uint reSalePrice;
      string text;
      uint tokenId;
      uint postedAt;
      uint balance;
      bool fundingComplete;
      mapping(address => bool) contributors;
  } 

  constructor(uint latestProposalId, uint _userId, uint _listPrice, uint _reSalePrice, string memory _text, uint _tokenId) public {
      
    proposals[_tokenId] = Proposal({
      id: latestProposalId,
      userId: _userId,
      listPrice: _listPrice,
      reSalePrice: _reSalePrice,
      text: _text,
      tokenId: _tokenId,
      postedAt: now,
      balance: 0,
      fundingComplete: false
    }); 
      tokenId = _tokenId;    
  }

  function contribute(uint _contribution, address _nftAddress) public returns (bool){
    uint currentBalance = proposals[tokenId].balance;
    uint remainder = proposals[tokenId].listPrice - currentBalance;
    require(_contribution <= remainder);
    currentContractBalance = currentBalance + _contribution;
    proposals[tokenId].balance = currentContractBalance;
    proposals[tokenId].contributors[msg.sender] = true;
    emit ContributionSuccess("Your contribution has been accepted!", _contribution, currentContractBalance);
    if(currentContractBalance == proposals[tokenId].listPrice){
     proposals[tokenId].fundingComplete = true;
      bool fundComplete =  proposals[tokenId].fundingComplete;
      emit AssetFunded("Funding complete!", fundComplete);
      return _purchaseAsset(_nftAddress, tokenId, currentContractBalance);
    }
  }


function _purchaseAsset(address nftAddress, uint256 assetId, uint256 price) internal returns (bool){
  require(proposals[tokenId].fundingComplete);
  require(proposals[tokenId].contributors[msg.sender]);
  market.executeOrder(nftAddress,  assetId,  price);
  return true;
}
    
  function getSummary(uint _tokenId) public view returns(uint) {
    uint contractBalance = proposals[_tokenId].balance;
    return contractBalance;
  }
}   





/////////////////////////////////////////////////////



function contribute(uint _contribution, address _nftAddress) public returns (bool){
  uint currentBalance = proposals[tokenId].balance;
  uint remainder = proposals[tokenId].listPrice - currentBalance;
  require(_contribution <= remainder);
  currentContractBalance = currentBalance + _contribution;
  proposals[tokenId].balance = currentContractBalance;
  proposals[tokenId].contributors[msg.sender] = true;
  emit ContributionSuccess("Your contribution has been accepted!", _contribution, currentContractBalance);
  if(currentContractBalance == proposals[tokenId].listPrice){
   proposals[tokenId].fundingComplete = true;
    bool fundComplete =  proposals[tokenId].fundingComplete;
    emit AssetFunded("Funding complete!", fundComplete);
    return _purchaseAsset(_nftAddress, tokenId, currentContractBalance);
  }
}








//////////////////////////////////////////////////


<ContractForm
drizzle={this.props.drizzle}
drizzleState={this.props.drizzleState}
contract="MANAToken"
method="approve"
sendArgs={{ from:fromAddr, to:name.to, value:name.value}}
labels={["Deposit Address", "Approve Deposit Amount"]}
/>

<ContractForm
drizzle={this.props.drizzle}
drizzleState={this.props.drizzleState}
contract="Escrow"
method="deposit"
sendArgs={{ from:fromAddr, _to:name._to, _value:name._value}}

/>

////////////////////////////////////////////////////


  function contribute(uint _contribution) public {
    uint currentBalance = proposals[tokenId].balance;
    uint remainder = proposals[tokenId].listPrice - currentBalance;
    require(_contribution <= remainder);
    currentContractBalance = currentBalance + _contribution;
    proposals[tokenId].balance = currentContractBalance;
    proposals[tokenId].contributors[msg.sender] = true;
  }

  function transfer(address _to, uint _value) external {
    acceptedToken = ERC20Interface(0x2BA2B6D42e950e141bbc0363D98f52117d5CBA17);
    acceptedToken.transfer(_to, _value);
  }


function deposit(uint _value) external {
    acceptedToken = ERC20Interface(0x2BA2B6D42e950e141bbc0363D98f52117d5CBA17);
    acceptedToken.transfer(address(this), _value);
  }



function transferFrom(address _to, uint _value) external {
    acceptedToken = ERC20Interface(0x2BA2B6D42e950e141bbc0363D98f52117d5CBA17);
    acceptedToken.transferFrom(msg.sender,address(this), _value);
  }


  ///////////////////////////////////////////////////


  
    //graphql call
    const graphql= JSON.stringify({ query: 
      `{
        orders(first:4,where: {status:open, category:parcel}) {
       
          nft{
              name
              tokenId
              activeOrder{
                  Order:
                  nftAddress
                  price
                  expiresAt
              }
         
          }
        }
      }`
    })
  
  
    //graphql call
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/',
    targetUrl = 'https://api.thegraph.com/subgraphs/name/decentraland/marketplace'
  
    fetch(proxyUrl + targetUrl, {
      method: "POST",
      headers:myHeaders,  
      body:graphql, variables:{},
      redirect: 'follow'
    })
      .then(res => res.json())
      .then((result) => {
        const parcelData = result.data.parcels[0];
        return parcelData;
      })
      .then((result) => { 
        const { nft } = result;
        const { tokenId } = nft;
        //const nftAddress = nft.activeOrder.Order
        const nftAddress = '0x3f27363c9f86E8ac151a0D332abC2C3b60B7bCf5';
        setTokenId(tokenId);
        getNftAddress(nftAddress);
      })

      






      ////////////////////////////////////////////////////////////


****************NominationAssetCards********************************


import React, { useState, useEffect } from 'react';
import Pagination from '../../components/Pagination';
import Nominations from '../../components/Nominations'

const NominationAssetCards = ({ props, userManaBalance }) => {

  const [parcels, setParcels] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [parcelsPerPage] = useState(6);
  const [totalParcels, setTotalParcels] = useState();

  useEffect(
    () => {
        const fetchParcels = async () => {
        const proxyUrl = 'https://cors-anywhere.herokuapp.com/',
        targetUrl = 'https://api.decentraland.org/v2/parcels?status=open&sort_by=price&sort_order=desc&limit=4&offset=0'
        fetch(proxyUrl + targetUrl)
          .then(res => res.json())
          .then(
            (result) => {
              setParcels(result.data.parcels);
              setTotalParcels(result.data.parcels.length)
              setLoading(false); 
            },
            (error) => {
              setLoading(true),
              error;
            }
        ) 
      }

    fetchParcels();  
  }, []);


  // Get current Parcels
  const indexOfLastParcel = currentPage * parcelsPerPage;
  const indexOfFirstParcel = indexOfLastParcel - parcelsPerPage;
  const currentParcels = parcels.slice(indexOfFirstParcel, indexOfLastParcel);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (   
    <>
      <Nominations 
        parcels={currentParcels} 
        loading={loading} 
        props={props} 
        userManaBalance={userManaBalance}
      />
      <Pagination
        currentPage ={currentPage }
        parcelsPerPage={parcelsPerPage}
        totalParcels={totalParcels}
        paginate={paginate}
      />
    </>
  );
};

export default NominationAssetCards;

//////////////////////////////////////////////////
useEffect(
  () => {
  const graphql= JSON.stringify({ query: 
    `{
      orders(first: 5, orderBy: searchOrderPrice,where: {status:open, category:parcel}) {
        nft{
            name
            tokenId
            parcel{          
                    x
                    y
                }
            activeOrder{
            
                nftAddress
                price
                expiresAt
                txHash
            }
        }
      }
    }`
  })

//////////////////////////////////

          <ContractForm
              drizzle={drizzle}
              drizzleState={drizzleState}
              contract="ProposalStorage"
              method="transfer"
            />
            <ContractForm
              drizzle={drizzle}
              drizzleState={drizzleState}
              contract="ProposalStorage"
              method="deposit"
            />
            <ContractForm
              drizzle={drizzle}
              drizzleState={drizzleState}
              contract="ProposalStorage"
              method="transferFrom"
            /> 





///////////////////////////////////

import React from "react";
import { connect } from 'react-redux';
import { Button, Progress, Row } from "shards-react";
import Web3 from "web3";
import { toast } from 'react-toastify';
import { Loader } from 'rimble-ui';
import { newContextComponents } from "@drizzle/react-components";
const { ContractData } = newContextComponents;

const Input = ({ value, onChange, placeholder }) => (
  <div>
    <input className="form-control form-control-sm" value={value} onChange={onChange} placeholder={placeholder}  /> 
  </div>
) 

class ContributeForm extends React.Component {
  constructor(props){
    super(props);
    this.contribute = this.contribute.bind(this);
    this.state = {
      contribution:""
    }
  }
  

updateField = (fieldName, e) => {
  const newState = {}
  newState[fieldName] = e.target.value
  this.setState(newState)
}

contribute = async (e) => {
  e.preventDefault();
  //let web3 = new Web3(Web3.givenProvider);
  const { drizzle, drizzleState, propAddress, proposalStorage, tokenId, assetPrice, nftAddress } = this.props;
  const { contribution } = this.state;
  const account = await drizzleState.accounts[0];
  const memberBool = await drizzle.contracts.UserStorage.methods.addresses(account).call();
  const propBalance = await proposalStorage.methods.getSummary(`${tokenId}`).call();
  const currentPropBalance = Web3.utils.fromWei(`${propBalance}`,'ether');
  const remainingBalance =  `${assetPrice}` - `${currentPropBalance}`;
  const convertedContribution =  Web3.utils.toWei(`${contribution}`,'ether');

  for (let key in this.state) {    
    if (!this.state[key]) {
      return toast.warning(`You must fill in an amount ${key}!`,{ position: toast.POSITION.TOP_RIGHT })
    } 
    else if (this.state[key] > remainingBalance) {
      return toast.warning(`Your contribution of ${contribution} is greater than the amount required.`,{ position: toast.POSITION.TOP_RIGHT })
    }
  }
  if(memberBool && propAddress !== null) {

    const manaContract = await drizzle.contracts.MANAToken; 
    const propContract = await drizzle.contracts[`${propAddress}`];

    const manaContribution = async () => await (manaContract.methods["approve"].cacheSend(propAddress,convertedContribution,{from:`${account}`, gas:300000}));
  try { 
    manaContribution()
    .then(() => {
      propContract.methods["contribute"].cacheSend(convertedContribution, nftAddress,{from:`${account}`, gas:3000000}) 
    })
    .catch(function(err) {
      return toast.error(`Sorry, contribution did not go through: ${err.message}`,{ position: toast.POSITION.TOP_RIGHT })
    })
  } 
  catch (err) {
    return toast.error(`Sorry, contribution did not go through: ${err}`,{ position: toast.POSITION.TOP_RIGHT })
  }
}
}

  render() {
    const { drizzle, drizzleState, assetPrice, contractBalance, transactionProcessing, propAddress } = this.props;

    if(contractBalance === null){
      return (
      <div className="mx-auto">  
       ContributeForm 105
        <Loader className="mx-auto" color="#007bff" size="40px" />
      </div>
      )
    }
    if(contractBalance && propAddress){
      let maxRanger = `${assetPrice}`;
      let currentContractBalance = Web3.utils.fromWei(`${contractBalance}`,'ether');
      let minRange = currentContractBalance;
      let fundsNeeded = maxRanger - minRange;
      return (
        <div>
          <div className="contribution-modal">
            {propAddress === 'undefined' || propAddress === null ? 
            <div className="mx-auto">   
              <Loader className="mx-auto" color="#007bff" size="40px" />
            </div>
          :
            <div>
              <ContractData drizzle={drizzle} drizzleState={drizzleState} contract="MANAToken" method="allowance" methodArgs={[drizzleState.accounts[0], `${propAddress}`]} 
                render={data => (
                  <>
                    <p>Your Locked Funds: <span className="locked-amount-number">{Web3.utils.fromWei(`${data}`,'ether')}</span> MANA</p>
                  </>
                )}
              />
              {/* <ContractData drizzle={drizzle} drizzleState={drizzleState} contract={propAddress} method="currentContractBalance"  
              render={data => (
                <>
                  <p className="mt-4 mb-1 text-center" >Current Pool Depth: {Web3.utils.fromWei(`${data}`,'ether')} MANA</p>
                  <Progress value={Web3.utils.fromWei(`${data}`,'ether')}  max={maxRanger} ></Progress>
                </>
              )}
                /> */}
              <p className="amount-text mt-3 mb-1 text-left" >Funds Needed: <span className="amount-number">{fundsNeeded}</span> MANA</p>
              <p className="amount-text mt-1 mb-1 text-left" >Pool Depth: <span className="amount-number">{minRange}</span> MANA</p>
              <Progress value={minRange} max={maxRanger} ></Progress>
            </div>
          } 
          </div>
          <form onSubmit={this.contribute}>
            <Row className="mt-3 justify-content-center contribute-form-dialog">
              <div className="modal-footer justify-content-center">
                <div className="contribute-form-dialog ">
                <Input 
                    title="Contribute"
                    placeholder="MANA" 
                    onChange={e => this.updateField("contribution", e)} 
                  />
                </div> 
                <div>
                  {/* <Button className="contribute-form-btn btn btn-block btn-success" type="submit" onClick={this.contribute} theme="success" >
                    Contribute
                  </Button> */}
                  {!transactionProcessing ? 
                    <Button className="contribute-form-btn btn btn-block btn-success" type="submit" onClick={this.contribute} theme="success" >
                      Contribute
                    </Button>
                  :   
                    <div className="mx-auto">   
                      <Loader className="mx-auto" color="#007bff" size="40px" />
                    </div>       
                  }
                  {/* {txSuccessful || transactionProcessing == false ? 
                  <Button className="contribute-form-btn btn btn-block btn-success" type="submit" onClick={this.contribute} theme="success" >
                    Complete Contribution
                  </Button>
                  : 
                    <div className="mx-auto">   
                      <Loader className="mx-auto" color="#007bff" size="40px" />
                    </div>
                  } */}
                </div>
              </div>
            </Row>
          </form>
          <style jsx>
              {`  
              .contribution-modal{font-family: Poppins;}
              .amount-text {font-size:.9rem;color:#000;font-family: Poppins;}
              .amount-number {font-size:.9rem;color:#66a3ff;font-family: Poppins}
              .locked-amount-number {font-size:1rem;color:#66a3ff;font-family: Poppins}
              .contribute-form-btn {font-family: Poppins;letter-spacing:5.5px;}
              .contribute-form-dialog {font-family: Poppins; font-size:1rem;}
              `}                
          </style>
        </div>
      )
  }
  else{
    return(
          <div className="mx-auto">   
            ContributeForm 171
            <Loader color="#007bff" size="40px" />
          </div>
        )
      }
   }
}

const mapStateToProps = (state) => ({
  contribComplete: state.appReducers.contribComplete,
  proposalStorage: state.appReducers.proposalStorage,
  contractBalance: state.appReducers.contractBalance,
  nftAddress: state.appReducers.nftAddress,
  transactionProcessing: state.appReducers.transactionProcessing,
  //txSuccessful: state.appReducers.txSuccessful
})

const mapDispatchToProps = (dispatch) => ({
  //gotContractBalance: (proposalBalance) => dispatch({ type:'PROPOSAL_BALANCE', balance:`${proposalBalance}` }),
  contributionComplete: () => dispatch({ type: "CONTRIB_COMPLETE", contribComplete: true }),
});


export default connect(mapStateToProps, mapDispatchToProps)(ContributeForm);


//////////////////


       <div>{moment(parcel.activeOrder.expiresAt.toString()).format("h:mma M/DD/YY")}</div>  
                      {(typeof(`${parcel.activeOrder.expiresAt}`)== 'number')?
                      <div>{moment(parcel.activeOrder.expiresAt).format("h:mma M/DD/YY")}</div>            
                    :
                    'no end date'
              
                      }

////////////////////////////



       <ContractData drizzle={drizzle} drizzleState={drizzleState} contract={propAddress} method="currentContractBalance"  
              render={data => (
                <>
                  <p className="mt-4 mb-1 text-center" >Current Pool Depth: {Web3.utils.fromWei(`${data}`,'ether')} MANA</p>
                  <Progress value={Web3.utils.fromWei(`${data}`,'ether')}  max={maxRanger} ></Progress>
                </>
              )}
                /> 


////////////////////////////////


import React from "react";
import { connect } from 'react-redux';
import { Button, Progress, Row } from "shards-react";
import Web3 from "web3";
import { toast } from 'react-toastify';
import { Loader } from 'rimble-ui';
import { newContextComponents } from "@drizzle/react-components";
const { ContractData } = newContextComponents;

const Input = ({ value, onChange, placeholder }) => (
  <div>
    <input className="form-control form-control-sm" value={value} onChange={onChange} placeholder={placeholder}  /> 
  </div>
) 

class ContributeForm extends React.Component {
  constructor(props){
    super(props);
    this.contribute = this.contribute.bind(this);
    this.state = {
      contribution:""
    }
  }
  

updateField = (fieldName, e) => {
  const newState = {}
  newState[fieldName] = e.target.value
  this.setState(newState)
}

contribute = async (e) => {
  e.preventDefault();
  let web3 = new Web3(Web3.givenProvider);
  const { drizzle, drizzleState, propAddress, proposalStorage, tokenId, assetPrice, nftAddress } = this.props;
  const { contribution } = this.state;
  state = { stackId: null };
  const account = await drizzleState.accounts[0];
  const memberBool = await drizzle.contracts.UserStorage.methods.addresses(account).call();
  const propBalance = await proposalStorage.methods.getSummary(`${tokenId}`).call();
  const currentPropBalance = Web3.utils.fromWei(`${propBalance}`,'ether');
  const remainingBalance =  `${assetPrice}` - `${currentPropBalance}`;
  const convertedContribution =  web3.utils.toWei(`${contribution}`,'ether');

  for (let key in this.state) {    
    if (!this.state[key]) {
      return toast.warning(`You must fill in an amount ${key}!`,{ position: toast.POSITION.TOP_RIGHT })
    } 
    else if (this.state[key] > remainingBalance) {
      return toast.warning(`Your contribution of ${contribution} is greater than the amount required.`,{ position: toast.POSITION.TOP_RIGHT })
    }
  }
  if(memberBool && propAddress !== null) {

    const manaContract = await drizzle.contracts.MANAToken; 
    const propContract = await drizzle.contracts[`${propAddress}`];

    const manaContribution = async () => await (manaContract.methods["approve"].cacheSend(propAddress,convertedContribution,{from:`${account}`, gas:300000}));
  try { 
    const stackId = manaContribution()
    this.setState({ stackId })
    .then(() => {
      propContract.methods["contribute"].cacheSend(convertedContribution, nftAddress,{from:`${account}`, gas:3000000}) 
    })
    .catch(function(err) {
      return toast.error(`Sorry, contribution did not go through: ${err.message}`,{ position: toast.POSITION.TOP_RIGHT })
    })
  } catch (err) {
    return toast.error(`Sorry, contribution did not go through: ${err}`,{ position: toast.POSITION.TOP_RIGHT })
  }
}
}


getTxStatus = () => {
  // get the transaction states from the drizzle state
  const { transactions, transactionStack } = this.props.drizzleState;

  // get the transaction hash using our saved `stackId`
  const txHash = transactionStack[this.state.stackId];

  // if transaction hash does not exist, don't display anything
  if (!txHash) return null;

  // otherwise, return the transaction status
  return `Transaction status: ${transactions[txHash] && transactions[txHash].status}`;
};


  render() {
    const { drizzle, drizzleState, assetPrice, contractBalance, transactionProcessing, propAddress } = this.props;

    if(contractBalance === null){
      return (
      <div className="mx-auto">  
       ContributeForm 105
        <Loader className="mx-auto" color="#007bff" size="40px" />
      </div>
      )
    }
    if(contractBalance && propAddress){
      let maxRanger = `${assetPrice}`;
      let currentContractBalance = Web3.utils.fromWei(`${contractBalance}`,'ether');
      let minRange = currentContractBalance;
      let fundsNeeded = maxRanger - minRange;
      return (
        <div>
          <div className="contribution-modal">
            {propAddress === 'undefined' || propAddress === null ? 
            <div className="mx-auto">   
              <Loader className="mx-auto" color="#007bff" size="40px" />
            </div>
          :
            <div>
              <ContractData drizzle={drizzle} drizzleState={drizzleState} contract="MANAToken" method="allowance" methodArgs={[drizzleState.accounts[0], `${propAddress}`]} 
                render={data => (
                  <>
                    <p>Your Locked Funds: <span className="locked-amount-number">{Web3.utils.fromWei(`${data}`,'ether')}</span> MANA</p>
                  </>
                )}
              />
              <p className="amount-text mt-3 mb-1 text-left" >Funds Needed: <span className="amount-number">{fundsNeeded}</span> MANA</p>
              <p className="amount-text mt-1 mb-1 text-left" >Pool Depth: <span className="amount-number">{minRange}</span> MANA</p>
              <Progress value={minRange} max={maxRanger} ></Progress>
            </div>
          } 
          </div>
          <form onSubmit={this.contribute}>
            <Row className="mt-3 justify-content-center contribute-form-dialog">
              <div className="modal-footer justify-content-center">
                <div className="contribute-form-dialog ">
                <Input 
                    title="Contribute"
                    placeholder="MANA" 
                    onChange={e => this.updateField("contribution", e)} 
                  />
                </div> 
                <div>
                  {!transactionProcessing ? 
                    <Button className="contribute-form-btn btn btn-block btn-success" type="submit" onClick={this.contribute} theme="success" >
                      Contribute
                    </Button>
                  :   
                    <div className="mx-auto">   
                      <Loader className="mx-auto" color="#007bff" size="40px" />
                    </div>       
                  }
                </div>
              </div>
            </Row>
          </form>
          <style jsx>
              {`  
              .contribution-modal{font-family: Poppins;}
              .amount-text {font-size:.9rem;color:#000;font-family: Poppins;}
              .amount-number {font-size:.9rem;color:#66a3ff;font-family: Poppins}
              .locked-amount-number {font-size:1rem;color:#66a3ff;font-family: Poppins}
              .contribute-form-btn {font-family: Poppins;letter-spacing:5.5px;}
              .contribute-form-dialog {font-family: Poppins; font-size:1rem;}
              `}                
          </style>
        </div>
      )
  }
  else{
    return(
          <div className="mx-auto">   
            ContributeForm 171
            <Loader color="#007bff" size="40px" />
          </div>
        )
      }
   }
}

const mapStateToProps = (state) => ({
  contribComplete: state.appReducers.contribComplete,
  proposalStorage: state.appReducers.proposalStorage,
  contractBalance: state.appReducers.contractBalance,
  nftAddress: state.appReducers.nftAddress,
  transactionProcessing: state.appReducers.transactionProcessing,
  //txSuccessful: state.appReducers.txSuccessful
})

const mapDispatchToProps = (dispatch) => ({
  //gotContractBalance: (proposalBalance) => dispatch({ type:'PROPOSAL_BALANCE', balance:`${proposalBalance}` }),
  contributionComplete: () => dispatch({ type: "CONTRIB_COMPLETE", contribComplete: true }),
});


export default connect(mapStateToProps, mapDispatchToProps)(ContributeForm);

////////////////////////////////////////////


export const depositCurrency = store => next => action => {
  if (action.type === "GOT_STACK_ID") {
    const { drizzle, drizzleState } = store.getState();
    console.log(drizzle, drizzleState)
    const { transactions, transactionStack } = drizzleState;
    const account = drizzleState.accounts[0];
    let state = drizzle.store.getState();
    const { stackId, convertedContribution, propAddress } = action;
    if (state.transactionStack[stackId]) {
      const txHash = transactionStack[stackId];
      if (!txHash) {
        return(
          console.log("loading from capMiddleWare 32")
          // <div className="mx-auto">  
          //   ContributeForm 96
          //   <Loader className="mx-auto" color="#007bff" size="40px" />
          // </div>
        )
      }
      else if(transactions[txHash] && transactions[txHash].status){
        const propContract = drizzle.contracts[`${propAddress}`];
        propContract.methods["contribute"].cacheSend(convertedContribution,{from:`${account}`, gas:3000000}) 
        toast('you', { position: toast.POSITION.BOTTOM_LEFT,className:'successful-stackId' })
      }
      else{
        console.log("loading from capMiddleWare 44")
      }
      return(
        console.log("loading from capMiddleWare 49")
        // <div className="mx-auto">  
        //   ContributeForm 96
        //   <Loader className="mx-auto" color="#007bff" size="40px" />
        // </div>
      )
      }
      
   
  }
  return next(action)
}

////////////////////////////////////////////////////



getTxStatus = () => {
  const { drizzle, drizzleState, stackId, convertedContribution, propAddress } = this.props;
  const { transactions, transactionStack } = drizzleState;
  const account = drizzleState.accounts[0];
  let state = drizzle.store.getState();

  if (state.transactionStack[stackId]) {
  const txHash = transactionStack[stackId];

  if (!txHash) {
    return(
      <div className="mx-auto">  
        ContributeForm 96
        <Loader className="mx-auto" color="#007bff" size="40px" />
      </div>
    )
  }
  else if(transactions[txHash] && transactions[txHash].status){
    const propContract = drizzle.contracts[`${propAddress}`];
    propContract.methods["contribute"].cacheSend(convertedContribution,{from:`${account}`, gas:3000000}) 
  }
  else{
    console.log('ContributeForm 108')
  }

  }
  return(
    <div className="mx-auto">  
      ContributeForm 96
      <Loader className="mx-auto" color="#007bff" size="40px" />
    </div>
  )
};

////////////////////////////////////////////


<form >
<Row className="mt-3 justify-content-center contribute-form-dialog">
  <div className="modal-footer justify-content-center">
    <div className="contribute-form-dialog ">
    <Input 
        title="Contribute"
        placeholder="MANA" 
        onChange={e => this.updateField("contribution", e)} 
      />
    </div> 
    <div>
      {!transactionProcessing && !txHash ? 
        <Button className="contribute-form-btn btn btn-block btn-success" type="submit" onClick={this.contribute} theme="success" >
          Approve
        </Button>
      : (!processingDone  ?  
        <div className="mx-auto">   
          <Loader className="mx-auto" color="#007bff" size="40px" />
        </div>  
        : 
        <Button className="contribute-form-btn btn btn-block btn-success" type="submit" onClick={this.deposit} theme="success" >
          Deposit
        </Button>
      )     
      }
    </div>
  </div>
</Row>
</form>

//////////////////////////////////////////////////////////////

import React from "react";
import { connect } from 'react-redux';
import { Button, Progress, Row } from "shards-react";
import Web3 from "web3";
import { toast } from 'react-toastify';
import { Loader } from 'rimble-ui';
import { newContextComponents } from "@drizzle/react-components";
import { max } from "moment";
import appReducer from "../../middleware/reducers/appReducers";
import Approve from "./Approve.js";

const { ContractData } = newContextComponents;

const Input = ({ value, onChange, placeholder }) => (
  <div>
    <input className="form-control form-control-sm" value={value} onChange={onChange} placeholder={placeholder}  /> 
  </div>
) 

class ContributeForm extends React.Component {
  constructor(props){
    super(props);
    this.contribute = this.contribute.bind(this);
    this.deposit = this.deposit.bind(this);
    this.state = {
      contribution:""
    }
  }
  

updateField = (fieldName, e) => {
  const newState = {}
  newState[fieldName] = e.target.value
  this.setState(newState)
}

contribute = async (e) => {
  e.preventDefault();
  let web3 = new Web3(Web3.givenProvider);
  const { drizzle, drizzleState, propAddress, proposalStorage, tokenId, assetPrice, nftAddress, getStackId} = this.props;
  const { contribution } = this.state;
  const account = await drizzleState.accounts[0];
  const memberBool = await drizzle.contracts.UserStorage.methods.addresses(account).call();
  const propBalance = await proposalStorage.methods.getSummary(`${tokenId}`).call();
  const currentPropBalance = Web3.utils.fromWei(`${propBalance}`,'ether');
  const remainingBalance =  `${assetPrice}` - `${currentPropBalance}`;
  const convertedContribution =  web3.utils.toWei(`${contribution}`,'ether');

  for (let key in this.state) {    
    if (!this.state[key]) {
      return toast.warning(`You must fill in an amount ${key}!`,{ position: toast.POSITION.TOP_RIGHT })
    } 
    else if (this.state[key] > remainingBalance) {
      return toast.warning(`Your contribution of ${contribution} is greater than the amount required.`,{ position: toast.POSITION.TOP_RIGHT })
    }
  }
  if(memberBool && propAddress !== null) {
  //if(memberBool) {
    const manaContract = await drizzle.contracts.MANAToken; 
    const manaContribution = async () => await (manaContract.methods["approve"].cacheSend(propAddress,convertedContribution,{from:`${account}`, gas:300000}));
  try { 
    const stackId = await manaContribution();
    getStackId(stackId, convertedContribution);

  } catch (err) {
    return toast.error(`Sorry, contribution did not go through: ${err}`,{ position: toast.POSITION.TOP_RIGHT })
  }
}
else if(!memberBool) {
    return toast.error(`Sorry, you must join the Consortium to deposit MANA`,{ position: toast.POSITION.TOP_RIGHT })
  }
}


deposit = async () => {
  const { propAddress, drizzle, convertedContribution, drizzleState } = this.props;
  const account = await drizzleState.accounts[0];
  const propContract = await drizzle.contracts[`${propAddress}`];
  console.log('deposit');
  return propContract.methods["contribute"].cacheSend(convertedContribution,{from:`${account}`, gas:3000000}) 
 }

  render() {
    const { drizzle, drizzleState, assetPrice, contractBalance, transactionProcessing, propAddress, stackId, processingDone, convertedContribution, runContributeSaga } = this.props;
    const { transactionStack, transactions, accounts } = drizzleState;
    // const account = accounts[0];
    // const propContract = drizzle.contracts[`${propAddress}`];
  //   console.log(processingDone)

    const txHash = transactionStack[stackId];
  // if (!txHash) {
  //     console.log('Transaction processing...')
  //   }
  // if(txHash){
  //   if(processingDone){
  //     if(transactions[txHash] && transactions[txHash].status) {
  //       this.deposit();
  //     }
  //   }
  // }

    if(contractBalance === null){
      return (
      <div className="mx-auto">  
       ContributeForm 105
        <Loader className="mx-auto" color="#007bff" size="40px" />
      </div>
      )
    }
    if(contractBalance && propAddress){
      let maxRanger =  Web3.utils.fromWei(`${assetPrice}`,'ether');
      let currentContractBalance = Web3.utils.fromWei(`${contractBalance}`,'ether');
      let minRange = currentContractBalance;
      let fundsNeeded = maxRanger - minRange;

      return (
        <div>
          <div className="contribution-modal">
            {propAddress === 'undefined' || propAddress === null ? 
            <div className="mx-auto">   
              <Loader className="mx-auto" color="#007bff" size="40px" />
            </div>
          :
            <div>
              <ContractData drizzle={drizzle} drizzleState={drizzleState} contract="MANAToken" method="allowance" methodArgs={[drizzleState.accounts[0], `${propAddress}`]} 
                render={data => (
                  <>
                    <p>Your Locked Funds: <span className="locked-amount-number">{Web3.utils.fromWei(`${data}`,'ether')}</span> MANA</p>
                  </>
                )}
              />
              <p className="amount-text mt-3 mb-1 text-left" >Funds Needed: <span className="amount-number">{fundsNeeded}</span> MANA</p>
              <p className="amount-text mt-1 mb-1 text-left" >Pool Depth: <span className="amount-number">{minRange}</span> MANA</p>
              <Progress value={minRange} max={maxRanger} ></Progress>
            </div>
          } 
          </div>

          <form >
            <Row className="mt-3 justify-content-center contribute-form-dialog">
              <div className="modal-footer justify-content-center">
                <div className="contribute-form-dialog ">
                <Input 
                    title="Contribute"
                    placeholder="MANA" 
                    onChange={e => this.updateField("contribution", e)} 
                  />
                </div> 
                <div>
                  {!transactionProcessing && !txHash ? 
                    <Button className="contribute-form-btn btn btn-block btn-success" type="submit" onClick={this.contribute} theme="success" >
                      Approve
                    </Button>
                  : (!processingDone  ?  
                    <div className="mx-auto">   
                      <Loader className="mx-auto" color="#007bff" size="40px" />
                    </div>  
                    : 
                    <Button className="contribute-form-btn btn btn-block btn-success" type="submit" onClick={this.deposit} theme="success" >
                      Deposit
                    </Button>
                  )     
                  }
                </div>
              </div>
            </Row>
          </form>
          <style jsx>
              {`  
              .contribution-modal{font-family: Poppins;}
              .amount-text {font-size:.9rem;color:#000;font-family: Poppins;}
              .amount-number {font-size:.9rem;color:#66a3ff;font-family: Poppins}
              .locked-amount-number {font-size:1rem;color:#66a3ff;font-family: Poppins}
              .contribute-form-btn {font-family: Poppins;letter-spacing:5.5px;}
              .contribute-form-dialog {font-family: Poppins; font-size:1rem;}
              `}                
          </style>
        </div>
      )
  }
  else{
    return(
      <div className="mx-auto">   
        contributeform 202
        <Loader className="mx-auto" color="#007bff" size="40px" />
      </div>     
        )
      }
   }
}

const mapStateToProps = (state) => ({
  contribComplete: state.appReducers.contribComplete,
  proposalStorage: state.appReducers.proposalStorage,
  contractBalance: state.appReducers.contractBalance,
  nftAddress: state.appReducers.nftAddress,
  transactionProcessing: state.appReducers.transactionProcessing,
  stackId: state.appReducers.stackId,
  convertedContribution: state.appReducers.convertedContribution,
  processingDone: state.appReducers.processingDone
})

const mapDispatchToProps = (dispatch) => ({
  //gotContractBalance: (proposalBalance) => dispatch({ type:'PROPOSAL_BALANCE', balance:`${proposalBalance}` }),
  contributionComplete: () => dispatch({ type: "CONTRIB_COMPLETE", contribComplete: true }),
  getStackId: (stackId,convertedContribution) => dispatch({ type: "GOT_STACK_ID", stackId:stackId, convertedContribution:convertedContribution}),
  runContributeSaga: (propAddress,drizzle,convertedContribution) => dispatch({ type: "RUN_DEPOSIT_SAGA",convertedContribution:convertedContribution, propAddress:propAddress, drizzle:drizzle }),
});


export default connect(mapStateToProps, mapDispatchToProps)(ContributeForm);

///////////////////////////////////////

  if (!txHash) {
      console.log('Transaction processing...')
    }
  if(txHash){
    if(processingDone){
      if(transactions[txHash] && transactions[txHash].status) {
        this.deposit();
      }
    }
  }
/////////////////////////////////
"dev": "truffle migrate --reset --network ropsten && npm run artifacts && next client",
"artifacts": "cp -r ./build/contracts/ ./client/artifacts"


"dev": "truffle migrate --reset && npm run artifacts && next client",
"artifacts": "cp -r ./build/contracts/ ./client/artifacts"


"scripts": {
  "dev": "next client"
},
/////////////////////

/*******************WORKING PROPOSALCONTRACT BEFORE UPDATE 2/15/21************************************************** */

pragma solidity ^0.5.17;

import '../helpers/BaseStorage.sol';
import "../../node_modules/@openzeppelin/contracts/lifecycle/Pausable.sol";
import "../../node_modules/@openzeppelin/contracts/token/ERC20/IERC20.sol";


contract ProposalStorage is Pausable, BaseStorage  {

  uint public tokenId;
  uint public currentContractBalance;

  //address public tokenAddress;
  address public tokenAddress;
  address public marketAddr;
  IERC20 public acceptedToken = IERC20(tokenAddress);

  event ContributionSuccess(string _message, uint _contribution, uint currentContractBalance);
  event AssetFunded(string _message);

  mapping (uint => Proposal) public proposals;

  struct Proposal {
      uint id;
      uint userId;
      uint listPrice;
      uint reSalePrice;
      string text;
      uint tokenId;
      uint postedAt;
      uint balance;
      mapping(address => bool) contributors;
  } 

  constructor(uint latestProposalId, uint _userId, uint _listPrice, uint _reSalePrice, string memory _text, uint _tokenId, address  _marketAddr, address _tokenAddress) public {
      
    proposals[_tokenId] = Proposal({
      id: latestProposalId,
      userId: _userId,
      listPrice: _listPrice,
      reSalePrice: _reSalePrice,
      text: _text,
      tokenId: _tokenId,
      postedAt: now,
      balance: 0
    }); 
    tokenId = _tokenId;   
    marketAddr = _marketAddr;
    tokenAddress = _tokenAddress; 
  }

  


  function contribute(uint _contribution) public {
    uint currentBalance = proposals[tokenId].balance;
    uint remainder = proposals[tokenId].listPrice - currentBalance;
    require(_contribution <= remainder,
    "Contribution is greater than needed amount.");
    require(acceptedToken.transferFrom(msg.sender, address(this), _contribution));
    currentContractBalance = currentBalance + _contribution;
    proposals[tokenId].balance = currentContractBalance;
    proposals[tokenId].contributors[msg.sender] = true;
    emit ContributionSuccess("Your contribution has been accepted!", _contribution, currentContractBalance);
  }


    
    
  function getSummary(uint _tokenId) public view returns(uint) {
    uint contractBalance = proposals[_tokenId].balance;
    return contractBalance;
  }

}   

//////
pragma solidity ^0.5.17;

import '../helpers/BaseController.sol';
import '../ContractManager.sol';
import "./ProposalStorage.sol";
import "../../node_modules/@openzeppelin/contracts/lifecycle/Pausable.sol";


contract ProposalController is BaseController, Pausable {

  event AssetNomination(string _message, address _proposalAddress);
  address proposalAddress;
  address public _marketAddr;
   address public _tokenAddress;

  ContractManager _manager = ContractManager(managerAddr);
  address[] public deployedProposalsArray;    
  uint latestProposalId = 0;
  mapping (uint => uint[]) userProposalIds;
  mapping(uint256 => bool) deployedProposals;
  mapping(uint256 => address) proposalTokenIdMap;
  
  constructor() public {_marketAddr = 0x805CD928BB453eAf61CdeDcB954AbF4fc1e11952; _tokenAddress = 0x73d821F789597753831f2aB16eC64a71141437cc;}

  function createProposal(uint _userId, uint _listPrice, uint _reSalePrice, string calldata _text, uint _tokenId) external {
    latestProposalId++;
    userProposalIds[_userId].push(latestProposalId);
    latestProposalId;
    require(!deployedProposals[_tokenId]);
    deployedProposals[_tokenId] = true;
    ProposalStorage proposal = new ProposalStorage(latestProposalId, _userId, _listPrice, _reSalePrice, _text, _tokenId, _marketAddr, _tokenAddress);
    proposalAddress = address(proposal);
    deployedProposalsArray.push(proposalAddress);
    proposalTokenIdMap[_tokenId]=proposalAddress;
    emit AssetNomination("Asset Successfully Nominated", proposalAddress);
  }
  
  function updateMarketAddr(address _currentMarketAddr) public onlyOwner {
     _marketAddr = _currentMarketAddr; 
  }

    function updateTokenAddr(address _currentTokenAddr) public onlyOwner {
     _tokenAddress = _currentTokenAddr; 
  }

  function getDeployedProposal() public view returns (address[] memory) {
      return deployedProposalsArray;
  }

 function getPropTokenIdMap(uint _tokenId) public view returns (address) {
      return proposalTokenIdMap[_tokenId];
  }
      
  function getProposalIdsFromUser(uint _userId) public view returns(uint[] memory) {
  return userProposalIds[_userId];
  }

  function numberOfProposals() public view returns (
    uint
    ) {
      return (
      deployedProposalsArray.length
      );
  }
}





////////////////////////////

/* Before taking out mapping calls and replacing with just struct call */



function contribute(uint _contribution) public {
  uint currentBalance = proposals[tokenId].balance;
  uint remainder = proposals[tokenId].listPrice - currentBalance;
  require(_contribution <= remainder,
  "Contribution is greater than needed amount.");

  require(acceptedToken.transferFrom(msg.sender, address(this), _contribution));
  
  //update user balance
  uint prevUserBalance = proposal.deposits[msg.sender];
  uint newBalance = prevUserBalance + _contribution;
  proposal.deposits[msg.sender] = newBalance;

  //update proposal balance
  currentContractBalance = currentBalance + _contribution;
  require(currentContractBalance == acceptedToken.balanceOf(address(this)),
  "Proposal contract balance does not match ERC20 contract balance for this address");
  proposals[tokenId].balance = currentContractBalance;
  proposals[tokenId].contributors[msg.sender] = true;




  emit ContributionSuccess("Your contribution has been accepted!", _contribution, currentContractBalance);
}



////////////////////////////////

3/4/21 Before random number generate.

pragma solidity ^0.5.17;

import '../helpers/BaseController.sol';
import '../ContractManager.sol';
import "./ProposalStorage.sol";
import "../../node_modules/@openzeppelin/contracts/lifecycle/Pausable.sol";



contract ProposalController is BaseController, Pausable {

  event AssetNomination(string _message, address _proposalAddress);
  address proposalAddress;
  address public _marketAddr;
  address public _tokenAddress;
  
  ContractManager _manager = ContractManager(managerAddr);
  address[] public deployedProposalsArray;    
  uint latestProposalId = 0;
  mapping (uint => uint[]) userProposalIds;
  mapping(uint256 => bool) deployedProposals;
  mapping(uint256 => address) proposalTokenIdMap;
  
constructor() public {_marketAddr = 0x86692d1b16c132026292C8F7dF9Bb15b549F2c89; _tokenAddress = 0x2BA2B6D42e950e141bbc0363D98f52117d5CBA17;}
      
  function createProposal(uint _userId, uint _listPrice, uint _reSalePrice, string calldata _text, uint _tokenId) external {
    latestProposalId++;
    userProposalIds[_userId].push(latestProposalId);
    latestProposalId;
    require(!deployedProposals[_tokenId]);
    deployedProposals[_tokenId] = true;
    ProposalStorage proposal = new ProposalStorage(latestProposalId, _userId, _listPrice, _reSalePrice, _text, _tokenId, _marketAddr, _tokenAddress);
    proposalAddress = address(proposal);
    deployedProposalsArray.push(proposalAddress);
    proposalTokenIdMap[_tokenId]=proposalAddress;
    emit AssetNomination("Asset Successfully Nominated", proposalAddress);
  }
  
  function updateMarketAddr(address _currentMarketAddr) public onlyOwner {
     _marketAddr = _currentMarketAddr; 
  }
  
    function updateCurrencyAddr(address _currentCurrencyAddr) public onlyOwner {
     _tokenAddress = _currentCurrencyAddr; 
  }

  function getDeployedProposal() public view returns (address[] memory) {
      return deployedProposalsArray;
  }

 function getPropTokenIdMap(uint _tokenId) public view returns (address) {
      return proposalTokenIdMap[_tokenId];
  }
      
  function getProposalIdsFromUser(uint _userId) public view returns(uint[] memory) {
  return userProposalIds[_userId];
  }

  function numberOfProposals() public view returns (
    uint
    ) {
      return (
      deployedProposalsArray.length
      );
  }
}





pragma solidity ^0.5.17;

import '../helpers/BaseStorage.sol';
import "../../node_modules/@openzeppelin/contracts/lifecycle/Pausable.sol";
import "../../node_modules/@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "../../node_modules/@openzeppelin/contracts/token/ERC721/ERC721Holder.sol";
import "../../node_modules/@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "../../node_modules/@openzeppelin/contracts/math/SafeMath.sol";

//Use the ProposalStatus number for the switch render in react. 0,1,2 ... to determine the button - Sell, Refund, Dispurse Proceeds, Rafeal
interface MarketPlaceInterface {
    function executeOrder(address nftAddress, uint assetId, uint price) external;
    function createOrder(address nftAddress, uint256 assetId, uint256 priceInWei, uint256 expiresAt) external;
}

contract ProposalStorage is ERC721Holder   {
    
  enum ProposalStatus { FUNDING, FUNDED, WITHDRAWING, PURCHASED, FOR_SALE, SOLD, DISPURSED, SALE_FAILED, AWARDED }
  ProposalStatus constant defaultChoice = ProposalStatus.FUNDING;  
 
  address public nftAddress;
  address public tokenAddress;
  address public marketAddr;

  uint public tokenId;
  uint public currentContractBalance;
  uint public fundingRemainder;

  event ContributionSuccess(string _message, uint _contribution, uint currentContractBalance);
  event AssetFunded(string _message);
  event PaymentComplete(string _message);
  event WithDrawalComplete(string _message);
  event PriceUpdate(string _message);

  mapping (uint => Proposal) public proposals;
 
  struct Proposal {
      uint id;
      uint userId;
      uint listPrice;
      uint reSalePrice;
      string text;
      uint tokenId;
      uint postedAt;
      uint balance;
      uint remainder;
      bool fundingComplete;
      ProposalStatus status;
      mapping(address => bool) contributors;
      mapping(address => uint256) deposits;
  } 


  constructor(uint latestProposalId, uint _userId, uint _listPrice, uint _reSalePrice, string memory _text, uint _tokenId, address  _marketAddr, address _tokenAddress, address _nftaddress) public {
      
   proposals[_tokenId] = Proposal({
      id: latestProposalId,
      userId: _userId,
      listPrice: _listPrice,
      reSalePrice: _reSalePrice,
      text: _text,
      tokenId: _tokenId,
      postedAt: now,
      balance: 0,
      remainder: _listPrice,
      fundingComplete: false,
      status: ProposalStatus.FUNDING
    }); 
    tokenId = _tokenId;   
    fundingRemainder = _listPrice;
    nftAddress = _nftaddress;
    marketAddr = _marketAddr;
    tokenAddress = _tokenAddress; 
  }


  modifier onlyBuyer()  {
    Proposal storage proposal = proposals[tokenId];
    uint currentDeposit =  proposal.deposits[msg.sender];
  require(
     currentDeposit > 0, "Must have funds deposited to initiate purchase.");
  _;
}

modifier notWithdrawing()  {
  Proposal storage proposal = proposals[tokenId];
  require(proposal.status != ProposalStatus.WITHDRAWING, "Withdrawal is proccessing.");
  _;
}

modifier funding()  {
  Proposal storage proposal = proposals[tokenId];
  require(proposal.status == ProposalStatus.FUNDING, "Asset is not funding.");
  _;
}


modifier purchased()  {
  Proposal storage proposal = proposals[tokenId];
  require(proposal.status == ProposalStatus.PURCHASED, "Asset is not funding.");
  _;
}


 function deposit(uint _contribution) public returns(bool) {
    Proposal storage proposal = proposals[tokenId];
    uint currentBalance = proposal.balance;
    uint list_price = proposal.listPrice;
    proposal.remainder = list_price - currentBalance;
    require(_contribution <= proposal.remainder,
    "Contribution is greater than needed amount.");
    IERC20 acceptedToken = IERC20(tokenAddress);
    require(acceptedToken.transferFrom(msg.sender,address(this), _contribution),
    "Transfer of tokens failed");
    
    uint prevUserBalance = proposal.deposits[msg.sender];
    uint newBalance = prevUserBalance + _contribution;
    proposal.deposits[msg.sender] = newBalance;
    
    currentContractBalance = currentBalance + _contribution;
    fundingRemainder = list_price - currentContractBalance;
    require(currentContractBalance == acceptedToken.balanceOf(address(this)),
    "Proposal contract balance does not match ERC20 contract balance for this address");
    proposal.balance = currentContractBalance;
    proposal.remainder = fundingRemainder;
    proposal.contributors[msg.sender] = true;
    depositers.push(Deposit({ depositer: msg.sender, amount: _contribution}));
    if (list_price == currentContractBalance){
      proposal.fundingComplete = true;
      proposal.status = ProposalStatus.FUNDED;
      _completePurchase(list_price);
      emit ContributionSuccess("Funding Complete!", _contribution, currentContractBalance);
      return true;
  }
    else {
      emit ContributionSuccess("Your contribution has been accepted!", _contribution, currentContractBalance);
      return true;
      }
    }
    

    function _completePurchase(uint list_price) internal onlyBuyer notWithdrawing  {
      Proposal storage proposal = proposals[tokenId];
      IERC20 acceptedToken = IERC20(tokenAddress);
      require(acceptedToken.approve(marketAddr, list_price),
      "Token approval failed");
      MarketPlaceInterface market = MarketPlaceInterface(marketAddr);
      market.executeOrder(nftAddress, tokenId, list_price);
      proposal.status = ProposalStatus.PURCHASED;
      currentContractBalance = 0;
      proposal.balance = currentContractBalance;
      uint expiresAt = 20000000000000000;
      _sellAsset(expiresAt);
      emit PaymentComplete("Asset Purchase complete!");
  }
  
  
   function _sellAsset(uint256 expiresAt) internal purchased {
      Proposal storage proposal = proposals[tokenId];
      IERC721 nftContract = IERC721(nftAddress);
      nftContract.approve(marketAddr,tokenId);
      MarketPlaceInterface market = MarketPlaceInterface(marketAddr);
      uint newPrice = proposal.reSalePrice;
      market.createOrder(nftAddress, tokenId, newPrice, expiresAt);
      proposal.status = ProposalStatus.FOR_SALE;
      emit PaymentComplete("Asset Purchase complete!");
  }
  

  function withdrawal() public onlyBuyer notWithdrawing returns(bool){
    Proposal storage proposal = proposals[tokenId];
    proposal.status = ProposalStatus.WITHDRAWING;
    uint depositedAmount = proposal.deposits[msg.sender];
    proposal.deposits[msg.sender] = 0;
    proposal.contributors[msg.sender] = false;
    proposal.balance = currentContractBalance - depositedAmount;
    currentContractBalance = proposal.balance;
    fundingRemainder = proposal.listPrice - currentContractBalance;
    proposal.remainder = proposal.listPrice - currentContractBalance;
    IERC20 acceptedToken = IERC20(tokenAddress);
    acceptedToken.transfer(msg.sender, depositedAmount);
    emit WithDrawalComplete("Withdrawal complete!");
    proposal.status = ProposalStatus.FUNDING;
    return true;
}


function updatePrice(uint newPrice) external returns(bool){
     Proposal storage proposal = proposals[tokenId];
     proposal.listPrice = newPrice;
     proposal.remainder = proposal.listPrice - currentContractBalance;
     fundingRemainder = proposal.remainder;
     emit PriceUpdate("Asset Price Updated!");
     return true;
}


}


/////////////////////////////////////////////////////////


Modifiers before internal functions





modifier onlyBuyer()  {
  Proposal storage proposal = proposals[tokenId];
  uint currentDeposit = proposal.deposits[msg.sender];
  require(
     currentDeposit > 0, "Must have funds deposited.");
  _;
}

modifier notWithdrawing()  {
  Proposal storage proposal = proposals[tokenId];
  require(proposal.status != ProposalStatus.WITHDRAWING, "Withdrawal is proccessing.");
  _;
}


modifier funding()  {
  Proposal storage proposal = proposals[tokenId];
  require(proposal.status == ProposalStatus.FUNDING, "Asset is funding.");
  _;
}



modifier notExpired()  {
  Proposal storage proposal = proposals[tokenId];
  uint256 timeMilli = block.timestamp * 1000;
  require (proposal.expiresAt > timeMilli,
  "Asset sale has expired.");
  _;
}

//////////////////////////////////////////////


/*********************************CONTRIBUTE FORM BEFORE SWITCH CASE */

import React from "react";
import { connect } from 'react-redux';
import { Button, Progress, Row } from "shards-react";
import Web3 from "web3";
import { toast } from 'react-toastify';
import { Loader } from 'rimble-ui';
import { newContextComponents } from "@drizzle/react-components";

//import Approve from "./Approve.js";

const { ContractData } = newContextComponents;

const Input = ({ value, onChange, placeholder }) => (
  <div>
    <input className="form-control form-control-sm" value={value} onChange={onChange} placeholder={placeholder}  /> 
  </div>
) 

class ContributeForm extends React.Component {
  constructor(props){
    super(props);
    this.approve = this.approve.bind(this);
    this.state = {
      contribution:""
    }
  }
  

updateField = (fieldName, e) => {
  const newState = {}
  newState[fieldName] = e.target.value
  this.setState(newState)
}

approve = async (e) => {
  e.preventDefault();
  let web3 = new Web3(Web3.givenProvider);
  const { drizzle, drizzleState, propAddress, proposalStorage, tokenId, assetPrice, nftAddress, getStackId} = this.props;
  const { contribution } = this.state;
  const account = await drizzleState.accounts[0];
  const memberBool = await drizzle.contracts.UserStorage.methods.addresses(account).call();
  const propBalance = await proposalStorage.methods.getSummary(`${tokenId}`).call();
  const currentPropBalance = Web3.utils.fromWei(`${propBalance}`,'ether');
  const convertedPrice =  Web3.utils.fromWei(`${assetPrice}`,'ether');
  const remainingBalance =  `${convertedPrice}` - `${currentPropBalance}`;
  const convertedContribution =  web3.utils.toWei(`${contribution}`,'ether');

  for (let key in this.state) {    
    if (!this.state[key]) {
      return toast.warning(`You must fill in an amount ${key}!`,{ position: toast.POSITION.TOP_RIGHT })
    } 
    else if (this.state[key] > remainingBalance) {
      return toast.warning(`Your contribution of ${contribution} is greater than the amount required.`,{ position: toast.POSITION.TOP_RIGHT })
    }
  }
  if(memberBool && propAddress !== null) {
  //if(memberBool) {
    const manaContract = await drizzle.contracts.MANAToken; 
    const manaContribution = async () => await (manaContract.methods["approve"].cacheSend(propAddress,convertedContribution,{from:`${account}`, gas:300000}));
  try { 
    const stackId = await manaContribution();
    getStackId(stackId, convertedContribution);

  } catch (err) {
    return toast.error(`Sorry, MANA Approval did not go through: ${err}`,{ position: toast.POSITION.TOP_RIGHT })
  }
}
else if(!memberBool) {
    return toast.error(`Sorry, you must join the Consortium to deposit MANA`,{ position: toast.POSITION.TOP_RIGHT })
  }
}

deposit = async () => {
  const { propAddress, drizzle, convertedContribution, drizzleState, stackId, processingDone, getStackId } = this.props;
  const account = await drizzleState.accounts[0];
  const { transactionStack, transactions } = drizzleState;

  const txHash = transactionStack[stackId];
  if (!txHash) {
      console.log('Transaction processing...')
    }
  if(txHash){
    if(processingDone){
      if(transactions[txHash] && transactions[txHash].status) {
        const propContract = await drizzle.contracts[`${propAddress}`];
        propContract.methods["deposit"].cacheSend(convertedContribution,{from:`${account}`, gas:3000000});


        //NEW create txHash
        // const manaDeposit = async () => await  propContract.methods["deposit"].cacheSend(convertedContribution,{from:`${account}`, gas:3000000});
        // try { 
        //   const stackId = await manaDeposit();
        //   getStackId(stackId);
      
        // } catch (err) {
        //   return toast.error(`Sorry, deposit did not go through: ${err}`,{ position: toast.POSITION.TOP_RIGHT })
        // }
        ///////
        

      }
      else {
        toast(`Approval Transaction: ${transactions[txHash].status}`, { position: toast.POSITION.BOTTOM_LEFT})
      }
    }
  }

 }

  render() {
    const { drizzle, drizzleState, assetPrice, contractBalance, transactionProcessing, propAddress, stackId, processingDone, convertedContribution } = this.props;
    const { transactionStack } = drizzleState;
    console.log(propAddress)
    const txHash = transactionStack[stackId];
    console.log(drizzleState.transactions[txHash] )
 
    

    // const status = <ContractData drizzle={drizzle} drizzleState={drizzleState} contract={propAddress} method="proposals" methodArgs={[this.props.tokenId]} 
    //   render={data => (
    //     <>
    //       {data.status}
    //     </>
    //   )}
    // />

    if(contractBalance === null){
      return (
      <div className="mx-auto">  
       ContributeForm 105
        <Loader className="mx-auto" color="#007bff" size="40px" />
      </div>
      )
    }
    if(contractBalance && propAddress){
      let maxRanger =  Web3.utils.fromWei(`${assetPrice}`,'ether');
      let currentContractBalance = Web3.utils.fromWei(`${contractBalance}`,'ether');
      let minRange = currentContractBalance;
      let fundsNeeded = maxRanger - minRange;

      return (
        <div>
          <div className="contribution-modal">
            {propAddress === 'undefined' || propAddress === null ? 
            <div className="mx-auto">   
              <Loader className="mx-auto" color="#007bff" size="40px" />
            </div>
          :
            <div>
              {/* <ContractData drizzle={drizzle} drizzleState={drizzleState} contract="MANAToken" method="allowance" methodArgs={[drizzleState.accounts[0], `${propAddress}`]} 
                render={data => (
                  <>
                    <p>Your Approved Funds: <span className="locked-amount-number">{Web3.utils.fromWei(`${data}`,'ether')}</span> MANA</p>
                  </>
                )}
              /> */}
              <p className="amount-text mt-3 mb-1 text-left" >Funds Needed: <span className="amount-number">{fundsNeeded}</span> MANA</p>
              <p className="amount-text mt-1 mb-1 text-left" >Pool Depth: <span className="amount-number">{minRange}</span> MANA</p>
              <Progress value={minRange} max={maxRanger} ></Progress>
            </div>
          } 
          </div>

        {!txHash ?
        //start of txHash
            <form onSubmit={this.approve}>
              <Row className="mt-3 justify-content-center contribute-form-dialog">
                <div className="modal-footer justify-content-center">
                  <div className="contribute-form-dialog ">
                  <Input 
                      title="Contribute"
                      placeholder="MANA" 
                      onChange={e => this.updateField("contribution", e)} 
                    />
                  </div> 
                  <div>
                    {!transactionProcessing ? 
                    //start of !transact
                      <div>
                        <Button className="contribute-form-btn" type="submit" onClick={this.approve} theme="success" >
                          Approve
                        </Button>
                      </div>
                    : 
                      <div className="mx-auto">   
                        <Loader className="mx-auto" color="#007bff" size="40px" />
                      </div>  
                      //end of !transactionProc
                    }
                  </div>
                </div>
              </Row>
            </form>
          :
          //once txhash produced
          <div>
            <Row className="mt-2 justify-content-center contribute-form-dialog">
              <ContractData drizzle={drizzle} drizzleState={drizzleState} contract="MANAToken" method="allowance" methodArgs={[drizzleState.accounts[0], `${propAddress}`]} 
                render={data => (
                  <>
                    <p className="mb-1 contribute-form-dialog">Approved For Deposit: <span className="locked-amount-number">{Web3.utils.fromWei(`${data}`,'ether')}</span> MANA</p>
                  </>
                  //end of !txhash
                )}
              />
            </Row>
            <form onSubmit={this.deposit}>
              <Row className="mt-1 justify-content-center contribute-form-dialog">
                <div className="modal-footer justify-content-center">
                  <div>
                    {!transactionProcessing && processingDone ? 
                      <Button className="btn-block btn-success contribute-form-btn"  onClick={this.deposit} theme="success" >
                        Deposit&nbsp;{Web3.utils.fromWei(`${convertedContribution}`,'ether')}&nbsp;MANA
                      </Button>
                    : (transactionProcessing ?  
                      <div className="mx-auto">   
                        <Loader className="mx-auto" color="#007bff" size="40px" />
                      </div>   
                    : 
                    <div>
                      Deposit of&nbsp;{Web3.utils.fromWei(`${convertedContribution}`,'ether')}&nbsp;MANA Complete
                    </div>
                    )}
                  </div>
                </div>
              </Row>
            </form>
          </div>
        }

          <style jsx>
              {`  
              .contribution-modal{font-family: Poppins;}
              .amount-text {font-size:.9rem;color:#000;font-family: Poppins;}
              .amount-number {font-size:.9rem;color:#66a3ff;font-family: Poppins}
              .locked-amount-number {font-size:1rem;color:#66a3ff;font-family: Poppins}
              .contribute-form-btn {font-family: Poppins;letter-spacing:5.5px;padding:.6rem;}
              .contribute-form-dialog {font-family: Poppins; font-size:1rem;}
              `}                
          </style>
        </div>
      )
  }
  else{
    return(
      <div className="mx-auto">   
        contributeform 202
        <Loader className="mx-auto" color="#007bff" size="40px" />
      </div>     
        )
      }
   }
}

const mapStateToProps = (state) => ({
  contribComplete: state.appReducers.contribComplete,
  proposalStorage: state.appReducers.proposalStorage,
  contractBalance: state.appReducers.contractBalance,
  nftAddress: state.appReducers.nftAddress,
  transactionProcessing: state.appReducers.transactionProcessing,
  stackId: state.appReducers.stackId,
  convertedContribution: state.appReducers.convertedContribution,
  processingDone: state.appReducers.processingDone
})

const mapDispatchToProps = (dispatch) => ({
  //gotContractBalance: (proposalBalance) => dispatch({ type:'PROPOSAL_BALANCE', balance:`${proposalBalance}` }),
  contributionComplete: () => dispatch({ type: "CONTRIB_COMPLETE", contribComplete: true }),
  getStackId: (stackId,convertedContribution) => dispatch({ type: "GOT_STACK_ID", stackId:stackId, convertedContribution:convertedContribution}),
  runContributeSaga: (propAddress,drizzle,convertedContribution) => dispatch({ type: "RUN_DEPOSIT_SAGA",convertedContribution:convertedContribution, propAddress:propAddress, drizzle:drizzle }),
});


export default connect(mapStateToProps, mapDispatchToProps)(ContributeForm);

/////////////////////////////// 
import React from "react";
import { connect } from 'react-redux';
import { Button, Progress, Row } from "shards-react";
import Web3 from "web3";
import { toast } from 'react-toastify';
import { Loader } from 'rimble-ui';
import { newContextComponents } from "@drizzle/react-components";

//import Approve from "./Approve.js";

const { ContractData } = newContextComponents;

const Input = ({ value, onChange, placeholder }) => (
  <div>
    <input className="form-control form-control-sm" value={value} onChange={onChange} placeholder={placeholder}  /> 
  </div>
) 

class ContributeForm extends React.Component {
  constructor(props){
    super(props);
    this.approve = this.approve.bind(this);
    this.state = {
      contribution:""
    }
  }
  

updateField = (fieldName, e) => {
  const newState = {}
  newState[fieldName] = e.target.value
  this.setState(newState)
}

approve = async (e) => {
  e.preventDefault();
  let web3 = new Web3(Web3.givenProvider);
  const { drizzle, drizzleState, propAddress, proposalStorage, tokenId, assetPrice, nftAddress, getStackId, getDepStackId} = this.props;
  const { contribution } = this.state;
  const account = await drizzleState.accounts[0];
  const memberBool = await drizzle.contracts.UserStorage.methods.addresses(account).call();
  const propBalance = await proposalStorage.methods.getSummary(`${tokenId}`).call();
  const currentPropBalance = Web3.utils.fromWei(`${propBalance}`,'ether');
  const remainingBalance =  `${assetPrice}` - `${currentPropBalance}`;
  const convertedContribution =  web3.utils.toWei(`${contribution}`,'ether');
  //  toWei(price.toString(), 'ether'),
  for (let key in this.state) {    
    if (!this.state[key]) {
      return toast.warning(`You must fill in an amount ${key}!`,{ position: toast.POSITION.TOP_RIGHT })
    } 
    else if (this.state[key] > remainingBalance) {
      return toast.warning(`Your contribution of ${contribution} is greater than the amount required.`,{ position: toast.POSITION.TOP_RIGHT })
    }
  }
  if(memberBool && propAddress !== null) {
  //if(memberBool) {
    const manaContract = await drizzle.contracts.MANAToken; 
    const manaContribution = async () => await (manaContract.methods["approve"].cacheSend(propAddress,convertedContribution,{from:`${account}`, gas:300000}));
  try { 
    const stackId = await manaContribution();
    getStackId(stackId, convertedContribution);

  } catch (err) {
    return toast.error(`Sorry, MANA Approval did not go through: ${err}`,{ position: toast.POSITION.TOP_RIGHT })
  }
}
else if(!memberBool) {
    return toast.error(`Sorry, you must join the Consortium to deposit MANA`,{ position: toast.POSITION.TOP_RIGHT })
  }
}

deposit = async () => {
  const { propAddress, drizzle, convertedContribution, drizzleState, stackId, processingDone, getStackId } = this.props;
  const account = await drizzleState.accounts[0];
  const { transactionStack, transactions } = drizzleState;

  const txHash = transactionStack[stackId];
  if (!txHash) {
      console.log('Transaction processing...')
    }
  if(txHash){
    if(processingDone){
      if(transactions[txHash] && transactions[txHash].status) {
        const propContract = await drizzle.contracts[`${propAddress}`];
        propContract.methods["deposit"].cacheSend(convertedContribution,{from:`${account}`, gas:3000000});


        //NEW create txHash
        const manaDeposit = async () => await  propContract.methods["deposit"].cacheSend(convertedContribution,{from:`${account}`, gas:3000000});
        try { 
          const stackId = await manaDeposit();
          getDepStackId(depStackId);
      
        } catch (err) {
          return toast.error(`Sorry, deposit did not go through: ${err}`,{ position: toast.POSITION.TOP_RIGHT })
        }
        ///////
        

      }
      else {
        toast(`Approval Transaction: ${transactions[txHash].status}`, { position: toast.POSITION.BOTTOM_LEFT})
      }
    }
  }

 }

  render() {
    const { drizzle, drizzleState, assetPrice, contractBalance, transactionProcessing, propAddress, stackId, processingDone, convertedContribution, depStackId } = this.props;
    const { transactionStack } = drizzleState;
    const txHash = transactionStack[stackId];
    const depTxHash = transactionStack[depStackId];
    // const status = <ContractData drizzle={drizzle} drizzleState={drizzleState} contract={propAddress} method="proposals" methodArgs={[this.props.tokenId]} 
    //   render={data => (
    //     <>
    //       {data.status}
    //     </>
    //   )}
    // />

    if(contractBalance === null){
      return (
      <div className="mx-auto">  
       ContributeForm 105
        <Loader className="mx-auto" color="#007bff" size="40px" />
      </div>
      )
    }
    if(contractBalance && propAddress){
      let maxRanger =  Web3.utils.fromWei(`${assetPrice}`,'ether');
      let currentContractBalance = Web3.utils.fromWei(`${contractBalance}`,'ether');
      let minRange = currentContractBalance;
      let fundsNeeded = maxRanger - minRange;

      return (
        <div>
          <div className="contribution-modal">
            {propAddress === 'undefined' || propAddress === null ? 
            <div className="mx-auto">   
              <Loader className="mx-auto" color="#007bff" size="40px" />
            </div>
          :
            <div>
              {/* <ContractData drizzle={drizzle} drizzleState={drizzleState} contract="MANAToken" method="allowance" methodArgs={[drizzleState.accounts[0], `${propAddress}`]} 
                render={data => (
                  <>
                    <p>Your Approved Funds: <span className="locked-amount-number">{Web3.utils.fromWei(`${data}`,'ether')}</span> MANA</p>
                  </>
                )}
              /> */}
              <p className="amount-text mt-3 mb-1 text-left" >Funds Needed: <span className="amount-number">{fundsNeeded}</span> MANA</p>
              <p className="amount-text mt-1 mb-1 text-left" >Pool Depth: <span className="amount-number">{minRange}</span> MANA</p>
              <Progress value={minRange} max={maxRanger} ></Progress>
            </div>
          } 
          </div>

        {!txHash ?
        //start of txHash
            <form onSubmit={this.approve}>
              <Row className="mt-3 justify-content-center contribute-form-dialog">
                <div className="modal-footer justify-content-center">
                  <div className="contribute-form-dialog ">
                  <Input 
                      title="Contribute"
                      placeholder="MANA" 
                      onChange={e => this.updateField("contribution", e)} 
                    />
                  </div> 
                  <div>
                    <Button className="contribute-form-btn" type="submit" onClick={this.approve} theme="success" >
                      Approve
                    </Button>
                  </div>
                </div>
              </Row>
            </form>
          :
          //once txhash produced
          <div>
            {(() => {
              if(drizzleState.transactions[txHash]) {
              const status = drizzleState.transactions[txHash].status;
              switch (status) {
                case 'pending':
                return(
                  <div className="mx-auto">   
                    <Loader className="mx-auto" color="#007bff" size="40px" />
                  </div>    
                )
                case 'success':
                  return (
                    <div>
                      <Row className="mt-2 justify-content-center contribute-form-dialog">
                        <ContractData drizzle={drizzle} drizzleState={drizzleState} contract="MANAToken" method="allowance" methodArgs={[drizzleState.accounts[0], `${propAddress}`]} 
                          render={data => (
                            <>
                              <p className="mb-1 contribute-form-dialog">Approved For Deposit: <span className="locked-amount-number">{Web3.utils.fromWei(`${data}`,'ether')}</span> MANA</p>
                            </>
                            //end of !txhash
                          )}
                        />
                      </Row>
                      <form onSubmit={this.deposit}>
                      <Row className="mt-1 justify-content-center contribute-form-dialog">
                        <div className="modal-footer justify-content-center">
                          <div>
                            {!transactionProcessing ? 
                              <Button className="btn-block btn-success contribute-form-btn"  onClick={this.deposit} theme="success" >
                                Deposit&nbsp;{Web3.utils.fromWei(`${convertedContribution}`,'ether')}&nbsp;MANA
                              </Button>
                            :  
                              <div className="mx-auto">   
                                <Loader className="mx-auto" color="#007bff" size="40px" />
                              </div>   
                            }
                          </div>
                        </div>
                      </Row>
                    </form>  
                    <div className="modal-footer justify-content-center">
                      Deposit of&nbsp;{Web3.utils.fromWei(`${convertedContribution}`,'ether')}&nbsp;MANA Complete
                    </div>
                  </div>
                  )
                case 'error':
                  return 'error';
                default:
                  return null;
              }
            }
            {
              return(
                <div className="mx-auto">   
                  <Loader className="mx-auto" color="#007bff" size="40px" />
                </div>   
              )
            }
            })()}

          </div>
        }

          <style jsx>
              {`  
              .contribution-modal{font-family: Poppins;}
              .amount-text {font-size:.9rem;color:#000;font-family: Poppins;}
              .amount-number {font-size:.9rem;color:#66a3ff;font-family: Poppins}
              .locked-amount-number {font-size:1rem;color:#66a3ff;font-family: Poppins}
              .contribute-form-btn {font-family: Poppins;letter-spacing:5.5px;padding:.6rem;}
              .contribute-form-dialog {font-family: Poppins; font-size:1rem;}
              `}                
          </style>
        </div>
      )
  }
  else{
    return(
      <div className="mx-auto">   
        contributeform 202
        <Loader className="mx-auto" color="#007bff" size="40px" />
      </div>     
        )
      }
   }
}

const mapStateToProps = (state) => ({
  contribComplete: state.appReducers.contribComplete,
  proposalStorage: state.appReducers.proposalStorage,
  contractBalance: state.appReducers.contractBalance,
  nftAddress: state.appReducers.nftAddress,
  transactionProcessing: state.appReducers.transactionProcessing,
  stackId: state.appReducers.stackId,
  depStackId: state.appReducers.depStackId,
  convertedContribution: state.appReducers.convertedContribution,
  processingDone: state.appReducers.processingDone
})

const mapDispatchToProps = (dispatch) => ({
  //gotContractBalance: (proposalBalance) => dispatch({ type:'PROPOSAL_BALANCE', balance:`${proposalBalance}` }),
  contributionComplete: () => dispatch({ type: "CONTRIB_COMPLETE", contribComplete: true }),
  getStackId: (stackId,convertedContribution) => dispatch({ type: "GOT_STACK_ID", stackId:stackId, convertedContribution:convertedContribution}),
  getDepStackId: (depStackId,convertedContribution) => dispatch({ type: "GOT_DEP_STACK_ID", depStackId:depStackId, convertedContribution:convertedContribution}),
  runContributeSaga: (propAddress,drizzle,convertedContribution) => dispatch({ type: "RUN_DEPOSIT_SAGA",convertedContribution:convertedContribution, propAddress:propAddress, drizzle:drizzle }),
});


export default connect(mapStateToProps, mapDispatchToProps)(ContributeForm);

///////////////////////////////////////////////////////////////         

            {(() => {
              if(!drizzleState.transactions[depTxHash]) {
                <div>
                <Row className="mt-2 justify-content-center contribute-form-dialog">
                  <ContractData drizzle={drizzle} drizzleState={drizzleState} contract="MANAToken" method="allowance" methodArgs={[drizzleState.accounts[0], `${propAddress}`]} 
                    render={data => (
                      <>
                        <p className="mb-1 contribute-form-dialog">Approved For Deposit: <span className="locked-amount-number">{Web3.utils.fromWei(`${data}`,'ether')}</span> MANA</p>
                      </>
                      //end of !txhash
                    )}
                  />
                </Row>
                <form onSubmit={this.deposit}>
                <Row className="mt-1 justify-content-center contribute-form-dialog">
                  <div className="modal-footer justify-content-center">
                    <div>
                      {!transactionProcessing ? 
                        <Button className="btn-block btn-success contribute-form-btn"  onClick={this.deposit} theme="success" >
                          Deposit&nbsp;{Web3.utils.fromWei(`${convertedContribution}`,'ether')}&nbsp;MANA
                        </Button>
                      :  
                        <div className="mx-auto">   
                          <Loader className="mx-auto" color="#007bff" size="40px" />
                        </div>   
                      }
                    </div>
                  </div>
                </Row>
              </form>  
            </div>
              }
              {
                const status = drizzleState.transactions[depTxHash].status;
                switch (status) {
                  case 'pending':
                  return(
                    <div className="mx-auto">   
                      <Loader className="mx-auto" color="#007bff" size="40px" />
                    </div>    
                  )
                  case 'success':
                    return ( 
                      <div className="modal-footer justify-content-center">
                        Deposit of&nbsp;{Web3.utils.fromWei(`${convertedContribution}`,'ether')}&nbsp;MANA Complete
                      </div>
                    )
                  case 'error':
                    return 'error';
                  default:
                    return null;
                }
              }
              })()}

              ///////////////////////////////////////////////////////////////////

              async componentDidMount() {   
                const { drizzle, propAddress, drizzleState } = this.props;
             
                const drizzleState = drizzle.store.getState();
            
                this.unsubscribe = drizzle.store.subscribe(() => {
                  let state = drizzle.store.getState();
                  if (state.drizzleStatus.initialized) {
                    this.setState({ loading: false, drizzleState });
                  }
                });
            
                const account = drizzleState.accounts[0];
                const manaContract = drizzle.contracts.MANAToken; 
            
                const dataKey = manaContract.methods['allowance'].cacheCall(account,propAddress);
                this.setState({
                  dataKey
                });
            
                const manaContract = drizzleState.contracts.MANAToken; 
                const tokenApproved = manaContract.allowance[this.state.dataKey];
            
              }
            
              componentWillUnmount() {
                this.unsubscribe();
              }
              ///////////////////////////////////////////////////////////////////////

render() {    
const { approvedMana, stackId, drizzleState, drizzle, propAddress } = this.props;
const { transactionStack } = drizzleState;
const txHash = transactionStack[stackId];

const manaContract = drizzleState.contracts.MANAToken; 
const tokenApproved = manaContract.allowance[this.state.dataKey];
const currentApproved = tokenApproved && tokenApproved.value;
console.log(currentApproved)
let state = drizzle.store.getState();
  const account = drizzleState.accounts[0];
  const manaContract = drizzle.contracts.MANAToken; 
  const dataKey = manaContract.methods.allowance.cacheCall(account,propAddress);
  const approveMana = state.contracts.MANAToken.allowance[dataKey];



if(currentApproved == 0){
  return (
    <ApproveDeposit props={this.props} approve={this.approve} updateField={this.updateField} deposit={this.deposit} />
  )
}
  else if(!drizzleState.transactions[txHash]){
    return(
      <Approved props={this.props} deposit={this.deposit}/>
    )
}
else {
  return 'not working'
}

// }



              //////////////////////////////////////////////


              {!txHash && approvedAmount == 0 ?
                //start of txHash
                    <form onSubmit={this.approve}>
                      <Row className="mt-3 justify-content-center contribute-form-dialog">
                        <div className="modal-footer justify-content-center">
                          <div className="contribute-form-dialog ">
                          <Input 
                            title="Contribute"
                            placeholder="MANA" 
                            onChange={e => this.updateField("contribution", e)} 
                          />
                          </div> 
                          <div>
                            <Button className="contribute-form-btn" type="submit" onClick={this.approve} theme="success" >
                              Approve
                            </Button>
                          </div>
                        </div>
                      </Row>
                    </form>
                  :
                  //Once MANA Approve txhash produced
                  <div>
                    {(() => {
                      if(drizzleState.transactions[txHash]) {
                      const status = drizzleState.transactions[txHash].status;
                      switch (status) {
                        case 'pending':
                        return(
                          <div className="mx-auto">   
                            <Loader className="mx-auto" color="#007bff" size="40px" />
                          </div>    
                        )
                        case 'error':
                          return 'error';
                        default:
                          return null;
                      }
                    }
                    //If Token Already Approved
                   else if(approvedAmount != 0) {
                      return(
                        <div className="modal-footer text-deposit-complete justify-content-center">
                          {(() => {
                            if(drizzleState.transactions[depTxHash]) {
                            const depStatus = drizzleState.transactions[depTxHash].status;
                            switch (depStatus) {
                              case 'pending':
                                return (
                                  <div className="mx-auto">   
                                    <Loader className="mx-auto" color="#007bff" size="40px" />
                                  </div>   
                                )
                              case 'success':
                                return  (
                                  <div className="modal-footer text-deposit-complete text-center justify-content-center">
                                    2Deposit of&nbsp;{Web3.utils.fromWei(`${approvedAmount}`,'ether')}&nbsp;MANA Complete
                                  </div>
                                )
                              case 'error':
                                return'error'
                              default:
                                return null;
                            }
                          }
                          else {
                            return (
                                <div>
                                  <Row className="mt-2 justify-content-center contribute-form-dialog">
                                    <ContractData drizzle={drizzle} drizzleState={drizzleState} contract="MANAToken" method="allowance" methodArgs={[drizzleState.accounts[0], `${propAddress}`]} 
                                      render={data => (
                                        <>
                                          <p className="mb-1 contribute-form-dialog">2Approved For Deposit: <span className="locked-amount-number">{Web3.utils.fromWei(`${data}`,'ether')}</span> MANA</p>
                                        </>
                                      )}
                                    />
                                  </Row>
                                  <Row>
                                  <Button className="btn-block btn-success contribute-form-btn"  onClick={this.deposit} theme="success" >
                                    2Deposit&nbsp;{Web3.utils.fromWei(`${approvedAmount}`,'ether')}&nbsp;MANA
                                  </Button>
                                </Row>    
                                </div>
                              )
                            }
                          //End MANA Deposit depTxHash produced
                          })()}
                        </div>   
                      )
                    }
                    })()}
                  </div>
                }

                /////////////////////////////////////////////////////////////////////////////////////////////////////////


                {!txHash && approvedAmount == 0 ?
                  //start of txHash
                      <form onSubmit={this.approve}>
                        <Row className="mt-3 justify-content-center contribute-form-dialog">
                          <div className="modal-footer justify-content-center">
                            <div className="contribute-form-dialog ">
                            <Input 
                              title="Contribute"
                              placeholder="MANA" 
                              onChange={e => this.updateField("contribution", e)} 
                            />
                            </div> 
                            <div>
                              <Button className="contribute-form-btn" type="submit" onClick={this.approve} theme="success" >
                                Approve
                              </Button>
                            </div>
                          </div>
                        </Row>
                      </form>
                    :
                    //Once MANA Approve txhash produced
                    <div>
                      {(() => {
                        if(drizzleState.transactions[txHash]) {
                        const status = drizzleState.transactions[txHash].status;
                        switch (status) {
                          case 'pending':
                          return(
                            <div className="mx-auto">   
                              <Loader className="mx-auto" color="#007bff" size="40px" />
                            </div>    
                          )
                          case 'success':
                            return (
                              <div>
                                <Row className="mt-2 justify-content-center contribute-form-dialog">
                                  <ContractData drizzle={drizzle} drizzleState={drizzleState} contract="MANAToken" method="allowance" methodArgs={[drizzleState.accounts[0], `${propAddress}`]} 
                                    render={data => (
                                      <>
                                        <p className="mb-1 contribute-form-dialog">1Approved For Deposit: <span className="locked-amount-number">{Web3.utils.fromWei(`${data}`,'ether')}</span> MANA</p>
                                      </>
                                      //End of MANA Approve!txhash
                                    )}
                                  />
                                </Row>
                                <form onSubmit={this.deposit}>
                                <Row className="mt-1 justify-content-center contribute-form-dialog">
                                  <div className="modal-footer justify-content-center">
                                    <div>
                                      {!transactionProcessing && !depTxHash ? 
                                        <Button className="btn-block btn-success contribute-form-btn"  onClick={this.deposit} theme="success" >
                                          1Deposit&nbsp;{Web3.utils.fromWei(`${convertedContribution}`,'ether')}&nbsp;MANA
                                        </Button>
                                      :
                                      //MANA Deposit depTxHash produced
                                      <div>
                                        {(() => {
                                          if(drizzleState.transactions[depTxHash]) {
                                          const depStatus = drizzleState.transactions[depTxHash].status;
                                          switch (depStatus) {
                                            case 'pending':
                                              return (
                                                <div className="mx-auto">   
                                                  <Loader className="mx-auto" color="#007bff" size="40px" />
                                                </div>   
                                              )
                                            case 'success':
                                              return  (
                                                <div className="modal-footer text-deposit-complete justify-content-center">
                                                  1Deposit of&nbsp;{Web3.utils.fromWei(`${convertedContribution}`,'ether')}&nbsp;MANA Complete
                                                </div>
                                              )
                                            case 'error':
                                              return'error'
                                            default:
                                              return null;
                                          }
                                        }
                                        //End MANA Deposit depTxHash produced
                                        })()}
                                      </div>
                                      }
                                    </div>
                                  </div>
                                </Row>
                              </form>  
                            </div>
                            )
                          case 'error':
                            return 'error';
                          default:
                            return null;
                        }
                      }
                      //If Token Already Approved
                     else if(approvedAmount != 0) {
                        return(
                          <div className="modal-footer text-deposit-complete justify-content-center">
                           {/* <Row className="mt-2 justify-content-center contribute-form-dialog">
                            <ContractData drizzle={drizzle} drizzleState={drizzleState} contract="MANAToken" method="allowance" methodArgs={[drizzleState.accounts[0], `${propAddress}`]} 
                              render={data => (
                                <>
                                  <p className="mb-1 contribute-form-dialog">Approved For Deposit: <span className="locked-amount-number">{Web3.utils.fromWei(`${data}`,'ether')}</span> MANA</p>
                                </>
                              )}
                            />
                          </Row>
                          <Row>
                          <Button className="btn-block btn-success contribute-form-btn"  onClick={this.deposit} theme="success" >
                            Deposit&nbsp;{Web3.utils.fromWei(`${approvedAmount}`,'ether')}&nbsp;MANA
                          </Button>
                          </Row>       */}
          
                            {(() => {
                              if(drizzleState.transactions[depTxHash]) {
                              const depStatus = drizzleState.transactions[depTxHash].status;
                              switch (depStatus) {
                                case 'pending':
                                  return (
                                    <div className="mx-auto">   
                                      <Loader className="mx-auto" color="#007bff" size="40px" />
                                    </div>   
                                  )
                                case 'success':
                                  return  (
                                    <div className="modal-footer text-deposit-complete text-center justify-content-center">
                                      2Deposit of&nbsp;{Web3.utils.fromWei(`${approvedAmount}`,'ether')}&nbsp;MANA Complete
                                    </div>
                                  )
                                case 'error':
                                  return'error'
                                default:
                                  return null;
                              }
                            }
                            else {
                              return (
                                  <div>
                                    <Row className="mt-2 justify-content-center contribute-form-dialog">
                                      <ContractData drizzle={drizzle} drizzleState={drizzleState} contract="MANAToken" method="allowance" methodArgs={[drizzleState.accounts[0], `${propAddress}`]} 
                                        render={data => (
                                          <>
                                            <p className="mb-1 contribute-form-dialog">2Approved For Deposit: <span className="locked-amount-number">{Web3.utils.fromWei(`${data}`,'ether')}</span> MANA</p>
                                          </>
                                        )}
                                      />
                                    </Row>
                                    <Row>
                                    <Button className="btn-block btn-success contribute-form-btn"  onClick={this.deposit} theme="success" >
                                      2Deposit&nbsp;{Web3.utils.fromWei(`${approvedAmount}`,'ether')}&nbsp;MANA
                                    </Button>
                                  </Row>    
                                  </div>
                                )
                              }
                            //End MANA Deposit depTxHash produced
                            })()}
                          </div>   
                        )
                      }
                      })()}
                    </div>
                  }

                  /////////////////////////////////////////////////////////////////////


           /// ONLY NOMINATED PARCELS             
          const ordersFiltered = ordersGQL.filter((order) => {
            return tokenIdArray.some((id) => {
              return id === order.parcel.tokenId;
            });
          });
                   /////////////////////////////////////////////////////////////////////


  switch (proposalStatus.toString()) {

      //0-FUNDING
      case '0':
        return (
            <ContributeForm drizzle={drizzle} drizzleState={drizzleState} assetPrice={assetPrice} propAddress={propAddress} tokenId={tokenId} />
        )
      //FUNDED
      case '1':
        return (
            <div className="modal-body text-deposit-complete justify-content-center">
              <Purchase drizzle={drizzle} drizzleState={drizzleState} assetPrice={assetPrice} propAddress={propAddress} tokenId={tokenId} />
            </div>
        )
      //WITHDRAWING
      case '2':
        return  (
          <>
           <div className="mx-auto modal-body justify-content-center"> 
            <p className="text-center">
              Withdrawal in progress...
            </p>  
              <Loader className="mx-auto" color="#007bff" size="40px" />
          </div>
          </>
        )
     //PURCHASED
      case '3':
        return  (
          <div className="modal-body text-deposit-complete justify-content-center">
            <SellAsset drizzle={drizzle} drizzleState={drizzleState} propAddress={propAddress} tokenId={tokenId} />
          </div>
        )
      //FOR_SALE
      case '4':
      return  (
        <>
          <div className="modal-body text-deposit-complete justify-content-center">
            <ForSaleInnerModal 
              drizzle={drizzle}
              drizzleState={drizzleState} 
              assetPrice={assetPrice} 
              propAddress={propAddress}
            />
          </div>     
        </>
       
      )
      //SOLD
      case '5':
      return  (
        <>
         <div className="modal-body text-deposit-complete justify-content-center">
            <SoldAsset drizzle={drizzle} drizzleState={drizzleState} propAddress={propAddress} tokenId={tokenId} />
          </div>
        </>
      )
      //PAYINGOUT
      case '6':
      return  (
        <>
        <div className="modal-bodyr text-deposit-complete justify-content-center">
        'for sale'
        </div>
        </>
      )
      //PAIDOUT
      case '7':
        return  (
          <>
          <div className="modal-body text-deposit-complete justify-content-center">
          'for sale'
          </div>
          </>
        )
      //EXPIRED  
      case '8':
        return  (
          <>
          <div className="modal-body text-deposit-complete justify-content-center">
          'for sale'
          </div>
          </>
        )
      //SALE_FAILED  
      case '9':
        return  (
          <>
          <div className="modal-body text-deposit-complete justify-content-center">
          'for sale'
          </div>
          </>
        )
      //AWARDED  
      case '10':
        return  (
          <>
          <div className="modal-body text-deposit-complete justify-content-center">
          'for sale'
          </div>
          </>
        )     
      case 'error':
        return'error'
      default:
        return null;
    }
  }



                   /////////////////////////////////////////////////////////////////////////


                     
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Web3 from 'web3';
import { Loader } from 'rimble-ui';
import { CardTitle, Row } from "shards-react";

const ForSaleInnerModal = ({ drizzle, propAddress, listPrice, startPay }) => {
  const [deposits, setDespositInfo] = useState([]);

  useEffect(() => {
    fetchProposalInfo();
  }, [])

  const fetchProposalInfo = async () => { 
      let state = drizzle.store.getState()
      if(state.drizzleStatus.initialized){
      const proposalContract = await drizzle.contracts[`${propAddress}`];
      const depositInfoLength = await proposalContract.methods.countDepositers().call();

      let i;
      let depositerArray = [];
      for (i = 0; i < depositInfoLength; i++) {
      const depositInfo = await proposalContract.methods.depositers([i]).call();
      depositerArray.push([i, depositInfo.depositer, depositInfo.amount]);
      setDespositInfo(depositerArray);
    }
   
  }
   return 'Loading....'
  }

if(!startPay){
return (   
      <>   
        {deposits ?   
            <Row className="card-text justify-content-center mt-1"> 
              <div>
                <Row>
                  <h5 className="mb-1">
                    Owners:
                  </h5>
                </Row>
              {deposits.map(deposit => (
                <div className="deposit-info" key={deposit[0]} >
                  <Row className="border-top"> 
                    <div>  
                      <p className="mb-1">
                        {deposit[1]} 
                      </p>
                      <p className="deposit-text mb-1">
                        Contribution:&nbsp;<span className="purchase-price">{Web3.utils.fromWei(deposit[2],'ether')}</span>&nbsp;MANA
                      </p>
                    </div>
                  </Row>
                </div>
              ))}
               <Row className="border-top justify-content-center">
                  <div className="mt-2">
                    Purchase Price:&nbsp;<span className="purchase-price">{Web3.utils.fromWei(`${listPrice}`,'ether')}</span>&nbsp;MANA
                  </div>
                </Row>
              </div>
            </Row>
          :
            <div className="align-items-center">   
              <Loader className="mx-auto" color="#007bff" size="40px" />
            </div>
          } 
        <style jsx>
          {` 
            .card-text{font-family:Poppins;font-size:1rem;}
            .purchase-price{color:#007bff;}
            .deposit-info{color:#000;font-weight:400;}
            .deposit-text{font-size:.9rem;color:#000;}
          `}                
        </style>
      </>
        );    
      }   
      else if(startPay){
      return(
        <>
        {deposits ?   
          <Row className="card-text justify-content-center mt-1"> 
            <div>
              <Row>
                <h5 className="mb-1">
                  Owners:
                </h5>
              </Row>
            {deposits.map(deposit => (
              <div className="deposit-info" key={deposit[0]} >
                <Row className="border-top"> 
                  <div>  
                    <p className="mb-1">
                      {deposit[1]} 
                    </p>
                    <p className="deposit-text mb-1">
                      Contribution:&nbsp;<span className="purchase-price">{Web3.utils.fromWei(deposit[2],'ether')}</span>&nbsp;MANA
                    </p>
                  </div>
                </Row>
              </div>
            ))}
            </div>
          </Row>
        :
          <div className="align-items-center">   
            <Loader className="mx-auto" color="#007bff" size="40px" />
          </div>
        } 
      <style jsx>
        {` 
          .card-text{font-family:Poppins;font-size:1rem;}
          .purchase-price{color:#007bff;}
          .deposit-info{color:#000;font-weight:400;}
          .deposit-text{font-size:.9rem;color:#000;}
        `}                
      </style>
      </>
      )
    }

  } 

const mapStateToProps = (state) => ({
  listPrice:state.appReducers.listPrice
})

export default connect(mapStateToProps, null)(ForSaleInnerModal);
      


/////////////////////////////////////////////////////////////////////////////

pragma solidity ^0.5.17;

import "../../node_modules/@openzeppelin/contracts/token/ERC721/ERC721Holder.sol";
import "../../node_modules/@openzeppelin/contracts/math/SafeMath.sol";
import "../../Div.sol";
import "../helpers/provableAPI.sol";


interface MarketPlaceInterface {
    function executeOrder(address nftAddress, uint assetId, uint price) external;
    function createOrder(address nftAddress, uint256 assetId, uint256 priceInWei, uint256 expiresAt) external;
}

interface IERC721 {
    function approve(address to, uint256 tokenId) external;
    function transferFrom(address from, address to, uint256 tokenId) external;
}

interface IERC20 {
    function approve(address spender, uint256 value) external returns (bool);
    function transfer(address to, uint256 value) external returns (bool);
    function transferFrom(address from, address to, uint256 value) external returns (bool);
    function balanceOf(address who) external view returns (uint256);
}

interface Controller {
    function updateStatus(address _proposalAddress, uint128 _status) external;
}

//contract ProposalStorage is ERC721Holder, usingProvable {
contract ProposalStorage is ERC721Holder {
   using SafeMath for uint256;
   Controller public controller;
    
  enum ProposalStatus { FUNDING, FUNDED, WITHDRAWING, PURCHASED, FOR_SALE, SOLD, PAYINGOUT, PAIDOUT, EXPIRED, SALE_FAILED, AWARDED }
  ProposalStatus constant defaultChoice = ProposalStatus.FUNDING;  
  uint256 constant NUM_RANDOM_BYTES_REQUESTED = 7;
  
  IERC721 nftContract;
  IERC20 acceptedToken;
  MarketPlaceInterface market;

  address public winningContributor;  
  uint256 public randomNumber;
  uint256 public reSaleExpiresAt;
  
  address public nftAddress;
  address public tokenAddress;
  address public marketAddr;
  uint256 public tokenId;

  event ContributionSuccess(string _message, uint256 _contribution, uint256 currentContractBalance);  
  event ProposalEvent(string _message);
  event LogNewProvableQuery(string description);
  event RandomFailure(string _message);

  mapping (uint256 => Proposal) public proposals;

  struct Proposal {
      uint128 id;
      uint128 userId;
      uint256 expiresAt;
      uint256 listPrice;
      uint256 reSalePrice;
      string text;
      uint256 tokenId;
      uint256 postedAt;
      uint256 balance;
      uint256 remainder;
      bool fundingComplete;
      ProposalStatus status;
      mapping(address => bool) contributors;
      -mapping(address => uint256) deposits;
  } 

  struct Deposit {
    address depositer;
    uint256 amount;
  }

  address[] weightedDepositers;
  
  Deposit[] public depositers;

  address[] public depositersArray;

  constructor(uint128 latestProposalId, uint128 _userId, uint256 _expiresAt, uint256 _listPrice, uint256 _reSalePrice, string memory _text, uint256 _tokenId, address  _marketAddr, address _tokenAddress, address _nftaddress) public {
    //provable_setProof(proofType_Ledger);

   controller = Controller(msg.sender); 
   proposals[_tokenId] = Proposal({
      id: latestProposalId,
      userId: _userId,
      postedAt: now,
      expiresAt: _expiresAt,
      listPrice: _listPrice,
      reSalePrice: _reSalePrice,
      text: _text,
      tokenId: _tokenId,
      balance: 0,
      remainder: _listPrice,
      fundingComplete: false,
      status: ProposalStatus.FUNDING
    }); 
      tokenId = _tokenId;   
      nftAddress = _nftaddress;
      marketAddr = _marketAddr;
      tokenAddress = _tokenAddress; 
      nftContract = IERC721(_nftaddress);
      acceptedToken =  IERC20(_tokenAddress);
      market = MarketPlaceInterface(_marketAddr);
  }


modifier onlyBuyer()  {
  _onlyDepositer();
  _;
}

function _onlyDepositer() internal view {
  Proposal storage proposal = proposals[tokenId];
  -uint currentDeposit = proposal.deposits[msg.sender];
  require(
     currentDeposit > 0, "Must have funds deposited.");
}

modifier notWithdrawing()  {
 _notWithDrawing();
  _;
}

function _notWithDrawing() internal view {
  Proposal storage proposal = proposals[tokenId];
  require(proposal.status != ProposalStatus.WITHDRAWING, "Withdrawal is proccessing.");
}

modifier funding()  {
 _propFunding();
  _;
}

function _propFunding() internal view {
  Proposal storage proposal = proposals[tokenId];
  require(proposal.status == ProposalStatus.FUNDING, "Asset is funding.");
}

modifier notExpired()  {
  _propNotExpired();
  _;
}

function _propNotExpired() internal view {
  Proposal storage proposal = proposals[tokenId];
  uint256 timeMilli = block.timestamp * 1000;
  require (proposal.expiresAt > timeMilli,
  "Asset sale has expired.");
}

function deposit(uint _contribution) public notExpired returns(bool) {
    Proposal storage proposal = proposals[tokenId];
    require(_contribution <= proposal.remainder,
    "Greater than needed.");
    require(acceptedToken.transferFrom(msg.sender,address(this), _contribution),
    "Transfer of tokens failed");
    -proposal.deposits[msg.sender] += _contribution;
    proposal.balance += _contribution;
    proposal.remainder = proposal.listPrice - proposal.balance;
    depositers.push(Deposit({depositer: msg.sender, amount: _contribution}));
    depositersArray.push(msg.sender);
    require(proposal.balance == acceptedToken.balanceOf(address(this)),
    "Balance not equal to ERC20 balance");
    proposal.contributors[msg.sender] = true;
    if(proposal.listPrice == proposal.balance){
       proposal.fundingComplete = true;
       proposal.status = ProposalStatus.FUNDED;
       completePurchase();
       emit ContributionSuccess("Funding Complete!", _contribution,  proposal.balance);
       return true;
    }
    else {
      emit ContributionSuccess("Contribution accepted!", _contribution,  proposal.balance);
      return true;
    }
}
    
function completePurchase() public onlyBuyer notWithdrawing notExpired {
  Proposal storage proposal = proposals[tokenId];
  require(acceptedToken.approve(marketAddr, proposal.listPrice),
  "Token approval failed");
  market.executeOrder(nftAddress, tokenId, proposal.listPrice);
  proposal.status = ProposalStatus.PURCHASED;
  proposal.balance = 0;
  controller.updateStatus(address(this), 1);
  sellAsset();
  emit ProposalEvent("Asset Purchase complete!");
}

function sellAsset() public onlyBuyer {
  Proposal storage proposal = proposals[tokenId];
  require(proposal.status == ProposalStatus.PURCHASED,
  "Asset has not been purchased");
  nftContract.approve(marketAddr,tokenId);
  uint256 newPrice = proposal.reSalePrice;
  uint256 expireYear = now + (365 * 1 days); 
  reSaleExpiresAt = expireYear * 1000;
  market.createOrder(nftAddress, tokenId, newPrice, reSaleExpiresAt);
  controller.updateStatus(address(this), 4);
  proposal.status = ProposalStatus.FOR_SALE;
  emit ProposalEvent("Asset has been placed on sale!");
 }
 
function payOut() external onlyBuyer {
    Proposal storage proposal = proposals[tokenId];
    proposal.balance = acceptedToken.balanceOf(address(this));
    -uint256 depositedAmount = proposal.deposits[msg.sender];
    uint256 percentage = Div.mulDiv(depositedAmount, 100, proposal.listPrice);
    uint256 userSaleShare = Div.mulDiv(percentage,proposal.reSalePrice,100);
    proposal.balance -= userSaleShare;
    -proposal.deposits[msg.sender] = 0;
    acceptedToken.transfer(msg.sender, userSaleShare);
    proposal.contributors[msg.sender] = false;
    proposal.status = ProposalStatus.PAYINGOUT;
    controller.updateStatus(address(this), 6);
    emit ProposalEvent("Your payout is complete!");
    if(proposal.balance == 0){
         proposal.status = ProposalStatus.PAIDOUT;
         emit ProposalEvent("Total payout is complete!");
    } 
 }

 function withdraw() external onlyBuyer notWithdrawing returns(bool){
    Proposal storage proposal = proposals[tokenId];
    uint256 timeMilli = block.timestamp * 1000;
    require(proposal.status == ProposalStatus.FUNDING || timeMilli > proposal.expiresAt, "Withdrawal failed.");
    proposal.status = ProposalStatus.WITHDRAWING;
    -uint256 depositedAmount = proposal.deposits[msg.sender];
    -proposal.deposits[msg.sender] = 0;
    proposal.contributors[msg.sender] = false;
    proposal.balance -= depositedAmount;
    proposal.remainder = proposal.listPrice - proposal.balance;
    acceptedToken.transfer(msg.sender, depositedAmount);
    emit ProposalEvent("Withdrawal complete!");
    if(timeMilli > proposal.expiresAt) {
      proposal.status = ProposalStatus.EXPIRED;
    }
    else{
      proposal.status = ProposalStatus.FUNDING;
    }
    return true;
}

function updatePrice(uint256 newPrice) external onlyBuyer funding returns(bool){
    Proposal storage proposal = proposals[tokenId];
    proposal.listPrice = newPrice;
    proposal.remainder = proposal.listPrice - proposal.balance;
    emit ProposalEvent("Asset Price Updated!");
    return true;
}

function updateExpiration(uint256 expiresAt) external onlyBuyer funding returns(bool){
    Proposal storage proposal = proposals[tokenId];
    proposal.expiresAt = expiresAt;
    emit ProposalEvent("End of sale date updated.");
    return true;
}

function weightContributors() onlyBuyer public {
      uint256 timeMilli = block.timestamp * 1000;
      require(timeMilli > reSaleExpiresAt,
      "Asset resale not expired.");
      for(uint16 i = 0; i < depositers.length; i++) {
      address _depositer = depositers[i].depositer;
      uint256 _amount = depositers[i].amount;
      uint256 reducedAmount = Div.mulDiv(_amount, 1, 100000000000000000000);
      for(uint256 j = 0; j < reducedAmount; j++) {
        weightedDepositers.push(_depositer);
      }
    }
    //generateRandom();
    _randomModulo();
}


 function _randomModulo() public {
       uint256 modulo = weightedDepositers.length - 1;
       uint256 _randomNumber = uint256(keccak256(abi.encodePacked(block.timestamp, block.difficulty))) % modulo;
       _selectWinner(_randomNumber);
    }

function weigDepositers() public view returns (address[] memory) {
  return weightedDepositers;
}

function _selectWinner(uint _randomNumber) internal {
    winningContributor = weightedDepositers[_randomNumber];
}

// function generateRandom() payable public  {
//     uint8 QUERY_EXECUTION_DELAY = 0; 
//     uint32 GAS_FOR_CALLBACK = 200000;
//     provable_newRandomDSQuery(
//         QUERY_EXECUTION_DELAY,
//         NUM_RANDOM_BYTES_REQUESTED,
//         GAS_FOR_CALLBACK
//     );
//     emit LogNewProvableQuery("Query sent, standing by...");
// }

// function __callback(bytes32 _queryId, string memory _result, bytes memory _proof) public {
//     require(msg.sender == provable_cbAddress());
//     if (provable_randomDS_proofVerify__returnCode(_queryId, _result, _proof) != 0) {    
//         emit RandomFailure("Random generation failed");
//     } else {
//         uint256 maxNumber = weightedDepositers.length - 1;
//         randomNumber = uint256(keccak256(abi.encodePacked(_result))) % maxNumber;
//         _selectWinner(randomNumber);
//     }
// }

function claimAsset() external {
  require(msg.sender == winningContributor, "Only Winner can call.");    
  nftContract.transferFrom(address(this), winningContributor, tokenId);
  emit ProposalEvent("You recieved the Asset!");
}

function depositedAmount(address _depositer) public view returns(uint256) {
  Proposal storage proposal = proposals[tokenId];
  -uint256 depositAmount = proposal.deposits[_depositer];
  return depositAmount;
}

function countDepositers() view public returns (uint) {
      return depositersArray.length;
  }
    

function getSummary(uint _tokenId) public view returns(uint) {
  uint contractBalance = proposals[_tokenId].balance;
  return contractBalance;
}

}


/////////////////////////////////////////////////////////////////////////////////
function payOut() external onlyBuyer {
  Proposal storage proposal = proposals[tokenId];
  controller.updateStatus(address(this), 6);
  proposal.status = ProposalStatus.PAYINGOUT;
  for(uint16 i = 0; i < depositers.length; i++) {
    address _depositer = depositers[i].depositer;
    uint256 depositedAmount = depositers[i].amount;
    uint256 percentage = Div.mulDiv(depositedAmount, 100, proposal.listPrice);
    uint256 userSaleShare = Div.mulDiv(percentage,proposal.reSalePrice,100);
    acceptedToken.transfer(_depositer, userSaleShare);
    proposal.contributors[_depositer] = false;
    proposal.balance = acceptedToken.balanceOf(address(this));
    depositers.push(Deposit({depositer: _depositer, amount: 0}));
    if(proposal.balance == 0){
        proposal.status = ProposalStatus.PAIDOUT;
        emit ProposalEvent("Payout is complete!");
    } 
  }
}

function withdraw() external onlyBuyer notWithdrawing returns(bool){
  Proposal storage proposal = proposals[tokenId];
  uint256 timeMilli = block.timestamp * 1000;
  require(proposal.status == ProposalStatus.FUNDING || timeMilli > proposal.expiresAt, "Withdrawal failed.");
  proposal.status = ProposalStatus.WITHDRAWING;
  uint256 depositedAmount = depositers[msg.sender].amount;
  depositers.push(Deposit({depositer: msg.sender, amount: 0}));
  proposal.contributors[msg.sender] = false;
  proposal.balance -= depositedAmount;
  proposal.remainder = proposal.listPrice - proposal.balance;
  acceptedToken.transfer(msg.sender, depositedAmount);
  emit ProposalEvent("Withdrawal complete!");
  if(timeMilli > proposal.expiresAt) {
    proposal.status = ProposalStatus.EXPIRED;
  }
  else{
    proposal.status = ProposalStatus.FUNDING;
  }
  return true;
}   




//////////////////////////////////////////////////////////////////////////////////
useEffect(() => {
  fetchProposalInfo();
}, [])

const fetchProposalInfo = async () => { 
    let state = drizzle.store.getState()
    if(state.drizzleStatus.initialized){

    const proposalContract = await drizzle.contracts[`${propAddress}`];
    const depositInfoLength = await proposalContract.methods.countDepositers().call();

    let i;
    let depositerArray = [];
    for (i = 0; i < depositInfoLength; i++) {
    const depositInfo = await proposalContract.methods.depositers([i]).call();
    depositerArray.push([i, depositInfo.depositer, depositInfo.amount]);
    setDespositInfo(depositerArray);
  }
 
}
 return 'Loading....'
}



//////////////////////////////

pragma solidity ^0.5.17;

import '../helpers/BaseController.sol';
import '../ContractManager.sol';
import "./ProposalStorage.sol";
import "../../node_modules/@openzeppelin/contracts/lifecycle/Pausable.sol";

contract ProposalController is BaseController, Pausable {

  event AssetNomination(string _message, address _proposalAddress);
  address proposalAddress;
  address public _marketAddr;
  address public _tokenAddress;
  
  ContractManager _manager = ContractManager(managerAddr); 
  //uint256[] public deployedProposalsArray;  

  address[] public deployedAddresses;   

  uint128 latestProposalId = 0;

  struct Proposals {
    uint128 propStatus;
    uint256 tokenId;
    uint256 expiresAt_gt;
  }
 
  mapping (address => Proposals) public propData;

  //mapping(address => uint128) public propStatus;
  mapping (uint128  => uint128[]) userProposalIds;
  mapping(uint256 => bool) public deployedProposals;
  mapping(uint256 => address) public proposalTokenIdMap; 
  
constructor() public {_marketAddr = 0xB2799e42d75AE8E0CbC1103d47b7d84517355326; _tokenAddress = 0xfb74efe49b81Bc37B5F3bf77e16eE18238fEe895;}
                                                                                                                                     
  function createProposal(uint128  _userId, uint256 _expiresAt, uint256 _listPrice, uint256 _reSalePrice, string calldata _text, uint256 _tokenId, address _nftaddress) external {
    uint256 timeMilli = block.timestamp * 1000;
    require(_expiresAt > timeMilli,
    "Asset Sale Has Expired.");  
    latestProposalId++;
    userProposalIds[_userId].push(latestProposalId);
    latestProposalId;
    require(!deployedProposals[_tokenId]);
    deployedProposals[_tokenId] = true;
    ProposalStorage proposal = new ProposalStorage(latestProposalId, _userId, _expiresAt, _listPrice, _reSalePrice, _text, _tokenId, _marketAddr, _tokenAddress, _nftaddress);
    proposalAddress = address(proposal);
    //deployedProposalsArray.push(_tokenId);
    deployedAddresses.push(proposalAddress);
    proposalTokenIdMap[_tokenId]=proposalAddress;
    Proposals storage proposals = propData[proposalAddress];
    proposals.propStatus = 0;
    proposals.tokenId = _tokenId;
    proposals.expiresAt_gt = _expiresAt;
    //propStatus[proposalAddress] = 0;
    emit AssetNomination("Asset Successfully Nominated", proposalAddress);
  }

  // function getDeployedProposal() public view returns (uint256[] memory) {
  //     return deployedProposalsArray;
  // }

//  function updateStatus(address _proposalAddress, uint128 _status) public returns (bool){
//     propStatus[_proposalAddress] = _status;
//     return true;
//  }

  function getDeployedAddresses() public view returns (address[] memory) {
      return deployedAddresses;
  }

 function getPropTokenIdMap(uint256 _tokenId) public view returns (address) {
      return proposalTokenIdMap[_tokenId];
  }

 function updatePropData(address _proposalAddress, uint128 _status) public returns (bool){
    Proposals storage proposals = propData[_proposalAddress];
    proposals.propStatus = _status;
    return true;
 }

 function getPropData(address _proposalAddress) public view returns(uint128, uint256) {
  uint128 currentStatus = propData[_proposalAddress].propStatus;
  uint256 currentTokenId = propData[_proposalAddress].tokenId;
  return (currentStatus, currentTokenId);
}



}


////////////////////////////////

//NOMINATIONSASSETSCARD BEFORE FILTERING BY JUST ORDER ID OF CANCELED

import React, { useState, useEffect } from 'react';
import Pagination from '../../components/Pagination';
import Nominations from '../../components/Nominations'
//import Moment from "react-moment";
import moment from "moment";




const NominationAssetCards = ({ props, userManaBalance }) => {

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [parcelsPerPage] = useState(6);
  const [totalOrders, setTotalOrders] = useState();

  const nowUnix = moment().valueOf();;

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  const currentTime= moment().valueOf();
  const graphql= JSON.stringify({ query: 
      `{
        nfts(first: 8, orderBy: searchOrderPrice, where:{ category: parcel, searchOrderStatus: open,searchOrderExpiresAt_gt:${currentTime}}) {
          
          parcel {
            x,
            y, 
            tokenId
          }
          activeOrder {
            price
            expiresAt
            nftAddress
            txHash
          }
        }
      }`
    })


  useEffect(
    () => {
    
    const fetchParcels = async () => {
    //const proxyUrl = 'https://cors-anywhere.herokuapp.com/',
    const targetUrl = 'https://api.thegraph.com/subgraphs/name/decentraland/marketplace'
  
    fetch(targetUrl, {
      method: "POST",
      headers:myHeaders,  
      body:graphql, variables:{},
      redirect: 'follow'
    })
      .then(res => res.json())
      .then( async (result) => {
          const ordersGQL = await result.data.nfts;
          const ordersFiltered = await result.data.nfts;
          //FILTER OUT NOMINATED PROPS
          //const tokenIdArray = await props.drizzle.contracts.ProposalController.methods.getDeployedProposal().call();
          //const ordersFiltered = ordersGQL.filter(item => !tokenIdArray.includes(item.parcel.tokenId));
          ///
       
         const proposalContract = await props.drizzle.contracts.ProposalController;
         const deployedAddresses = await proposalContract.methods.getDeployedAddresses().call();
     
         let i;
         let fundingArray = [];
         let fundingArrayExpired = [];
         let fundedArray = [];
         let purchasedArray = [];
         let forSaleArray = [];
         let forSaleArrayExpired = [];
         let soldArray = [];
         let paidOutArray = [];
       
         for (i = 0; i < deployedAddresses.length; i++) {
           const address = deployedAddresses[i];
           const propData = await proposalContract.methods.getPropData(`${address}`).call();

           if(propData[0] == 0 && propData[2] > nowUnix) {
             fundingArray.push(propData[1]);
           }
           else if(propData[0] == 0 && propData[2] < nowUnix){
            fundingArrayExpired.push(propData[1]);
          }
           else if(propData[0] == 1){
             fundedArray.push(propData[1]);
           }
           else if(propData[0] == 3){
             purchasedArray.push(propData[1]);
           }
           else if(propData[0] == 4){
             forSaleArray.push(propData[1]);
           }
           else if(propData[0] == 5 && propData[2] < nowUnix){
            forSaleArrayExpired.push(propData[1]);
           }
           else if(propData[0] == 4){
            soldArray.push(propData[1]);
          }
           else if(propData[0] == 7){
             paidOutArray.push(propData[1]);
           }
       }
      //Old Example
      //  else if(propData[0] == 7){
      //   paidOutArray.push([i, propData[1], propData[2]]);
      // }

       //const ordersFiltered = ordersGQL.filter(item => !fundingArray.includes(item.parcel.tokenId));
       const fundingFilter = ordersGQL.filter(item => fundingArray.includes(item.parcel.tokenId));
       const fundedFilter = ordersGQL.filter(item => fundedArray.includes(item.parcel.tokenId));
       const purchasedFilter = ordersGQL.filter(item =>  purchasedArray.includes(item.parcel.tokenId));
       const forSaleFilter = ordersGQL.filter(item => forSaleArray.includes(item.parcel.tokenId));
       const soldFilter = ordersGQL.filter(item => soldArray.includes(item.parcel.tokenId));
       const paidOutFilter = ordersGQL.filter(item => paidOutArray.includes(item.parcel.tokenId));
      
       
    
        console.log(ordersFilter, ordersFiltered)
        
          setOrders(ordersFiltered);
          setTotalOrders(ordersFiltered.length)
          setLoading(false); 
        },
        (error) => {
          setLoading(true),
          error;
        }
    ) 
  }
    fetchParcels();  
  }, []);


  // Get current orders
  const indexOfLastParcel = currentPage * parcelsPerPage;
  const indexOfFirstParcel = indexOfLastParcel - parcelsPerPage;
  const currentParcels = orders.slice(indexOfFirstParcel, indexOfLastParcel);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (   
    <>
      <Nominations 
        orders={currentParcels} 
        loading={loading} 
        props={props}   
        userManaBalance={userManaBalance}
      />
       <Pagination
        currentPage ={currentPage }
        parcelsPerPage={parcelsPerPage}
        totalParcels={totalOrders}
        paginate={paginate}
      />
    </>
  );
};


export default NominationAssetCards;










///////////////////////////////////////////////////////////

import React, { useState, useEffect } from 'react';
import Pagination from '../../components/Pagination';
import Nominations from '../../components/Nominations'
//import Moment from "react-moment";
import moment from "moment";
import { Card } from 'react-bootstrap';




const NominationAssetCards = ({ props, userManaBalance, orders }) => {

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [parcelsPerPage] = useState(6);
  const [totalOrders, setTotalOrders] = useState();

  const nowUnix = moment().valueOf();;

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  const currentTime= moment().valueOf();
  const graphql= JSON.stringify({ query: 
      `{
        nfts(first: 8, orderBy: searchOrderPrice, where:{ category: parcel, searchOrderStatus: open,searchOrderExpiresAt_gt:${currentTime}}) {
          
          parcel {
            x,
            y, 
            tokenId
          }
          activeOrder {
            price
            expiresAt
            nftAddress
            txHash
          }
        }
      }`
    })


  useEffect(
    () => {
    
    const fetchParcels = async () => {
    //const proxyUrl = 'https://cors-anywhere.herokuapp.com/',
    const targetUrl = 'https://api.thegraph.com/subgraphs/name/decentraland/marketplace'
  
    fetch(targetUrl, {
      method: "POST",
      headers:myHeaders,  
      body:graphql, variables:{},
      redirect: 'follow'
    })
      .then(res => res.json())
      .then( async (result) => {
          const ordersGQL = await result.data.nfts;
          
          //All Active Array
          const ordersFiltered = await result.data.nfts;
          //FILTER OUT NOMINATED PROPS
          //const tokenIdArray = await props.drizzle.contracts.ProposalController.methods.getDeployedProposal().call();
          //const ordersFiltered = ordersGQL.filter(item => !tokenIdArray.includes(item.parcel.tokenId));
          ///
       
         const proposalContract = await props.drizzle.contracts.ProposalController;
         const deployedAddresses = await proposalContract.methods.getDeployedAddresses().call();
     
         let i;
         let fundingArray = [];
         let fundedArray = [];
         let forSaleArray = [];
  
         for (i = 0; i < deployedAddresses.length; i++) {
           const address = deployedAddresses[i];
           const propData = await proposalContract.methods.getPropData(`${address}`).call();

           if(propData[0] == 0 && propData[2] > nowUnix) {
             fundingArray.push(propData[1]);
           }
           else if(propData[0] == 1){
             fundedArray.push(propData[1]);
           }
           else if(propData[0] == 4){
             forSaleArray.push(propData[1]);
           }
       }
      //Old Example
      //  else if(propData[0] == 7){
      //   paidOutArray.push([i, propData[1], propData[2]]);
      // }
    
      //FILTER OUT NOMINATED PROPS
       const ordersFiltered = ordersGQL.filter(item => !fundingArray.includes(item.parcel.tokenId));

      //Just Funding Array
       const fundingFilter = ordersGQL.filter(item => fundingArray.includes(item.parcel.tokenId));

       //Just Funded Array where purchase or resale failed
       const fundedFilter = ordersGQL.filter(item => fundedArray.includes(item.parcel.tokenId));

      //Just For Sale Array
       const forSaleFilter = ordersGQL.filter(item => forSaleArray.includes(item.parcel.tokenId));


      

      
      - 'on contributers page of contibuted propsals run this'
      -'in UserStorage make mapping mapping (uint128(userId)  => uint128[(proposalAddress)]) userContributedProposals'
      -'const propData = await proposalContract.methods.getPropData(`${address}`).call();'
     - 'const orderId = propData[3];'
     - 'query graphql with orderId;'
     - 'get back object to display Card;'


      'let expiredArray = [array of order ids];'
      'get all order ids asscociated with proposals and do a for loop with graphQl then do if statements to create'
       'an array of cancled orders(expired and cancled by seller or sold. then have NominateAssetCard and CancledAssetCard)'
       'or have NominateAssetCard, ExpiredAssetCard, CancledAsset Card'
       
    
        console.log(ordersFilter, ordersFiltered)
        
          setOrders(ordersFiltered);
          setTotalOrders(ordersFiltered.length)
          setLoading(false); 
        },
        (error) => {
          setLoading(true),
          error;
        }
    ) 
  }
    fetchParcels();  
  }, []);


  // Get current orders
  const indexOfLastParcel = currentPage * parcelsPerPage;
  const indexOfFirstParcel = indexOfLastParcel - parcelsPerPage;
  const currentParcels = orders.slice(indexOfFirstParcel, indexOfLastParcel);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (   
    <>
      <Nominations 
        orders={currentParcels} 
        loading={loading} 
        props={props}   
        userManaBalance={userManaBalance}
      />
       <Pagination
        currentPage ={currentPage }
        parcelsPerPage={parcelsPerPage}
        totalParcels={totalOrders}
        paginate={paginate}
      />
    </>
  );
};


export default NominationAssetCards;



///////////////////////////////////////


import React, { useState, useEffect } from 'react';
import Pagination from '../../components/Pagination';
import Nominations from '../../components/Nominations'
//import Moment from "react-moment";
import moment from "moment";
import { Card } from 'react-bootstrap';

const NominationAssetCards = ({ props, userManaBalance, ordersActive }) => {
  
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [parcelsPerPage] = useState(6);
  const [totalOrders, setTotalOrders] = useState();
  console.log(ordersActive)
  const nowUnix = moment().valueOf();;
  const fetchParcels = () => {
    setOrders(ordersActive);
    setTotalOrders(orders.length)
    setLoading(false); 
  }
  // const totalOrders = ordersActive.length;
  // const parcelsPerPage = 6;
  // const currentPage = 1;

  useEffect(() => {

  fetchParcels();  
}, []);



  // Get current orders
  const indexOfLastParcel = currentPage * parcelsPerPage;
  const indexOfFirstParcel = indexOfLastParcel - parcelsPerPage;
  const currentParcels = ordersActive.slice(indexOfFirstParcel, indexOfLastParcel);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (   
    <>
      <Nominations 
        orders={currentParcels} 
        props={props}   
        userManaBalance={userManaBalance}
      />
       <Pagination
        currentPage ={currentPage }
        parcelsPerPage={parcelsPerPage}
        totalParcels={totalOrders}
        paginate={paginate}
      />
    </>
  );
};


export default NominationAssetCards;



/////////////////////////////////////////////////////////////////////



`{
  nfts(first: 8, orderBy: searchOrderPrice, where:{ category: parcel, searchOrderStatus: open,searchOrderExpiresAt_gt:${currentTime}}) {
    
    parcel {
      x,
      y, 
      tokenId
    }
    activeOrder {
      price
      expiresAt
      nftAddress
      txHash
    }
  }
}`

//////////////////////////////////


import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const App = () => {
  const [theValue, setTheValue] = useState("test");
  const [theArray, setTheArray] = useState([1, "stan"]);
  const [theObject, setTheObject] = useState({
    food: "gyoza"
  });
  const [theArrayOfObjects, setTheArrayOfObjects] = useState([
    { color: "blue" }
  ]);

  const [theObjectOfArrays, setTheObjectOfArrays] = useState({
    power: ["Lightning", "God strength"]
  });

  const handleChangeValue = event => {
    setTheValue(event.target.value);
  };

  const handleChangeArray = event => {
    event.persist();
    const name = event.target.name;
    const value = event.target.value;
    console.log("handleChangeArray: ", event.target.name, event.target.value);
    console.log("handleChangeArray name: ", name);
    setTheArray(prev => [...prev, value]);
  };

  const handleChangeUpdateAddObject = event => {
    const name = event.target.name;
    const value = event.target.value;
    console.log("handleChangeObject: ", name, value);

    setTheObject(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleChangeArrayAddObject = event => {
    const name = event.target.name;
    const value = event.target.value;
    console.log("handleChangeAddAddObject: ", name, value);

    setTheArrayOfObjects(prevState => [...prevState, { [name]: value }]);
  };

  const handleChangeObjectAddArray = (event, index) => {
    const name = event.target.name;
    const value = event.target.value;
    let specificArrayInObject = theObjectOfArrays.power.slice();
    specificArrayInObject.push(value);
    const newObj = { ...theObjectOfArrays, [name]: specificArrayInObject };
    setTheObjectOfArrays(newObj);
  };

  return (
    <div className="App">
      <div>
        <input
          type="text"
          placeholder="enter a value"
          value={theValue.code}
          onChange={handleChangeValue}
        />{" "}
      </div>
      <div>{theValue}</div>
      <div>
        <input
          type="text"
          placeholder="enter a value"
          name={theArray}
          value={theArray.code}
          onChange={handleChangeArray}
        />{" "}
      </div>
      <div>{JSON.stringify(theArray)}</div>
      <div>
        <input
          type="text"
          placeholder="enter a value"
          name={Object.keys(theObject)}
          value={theObject.code}
          onChange={handleChangeUpdateAddObject}
        />
      </div>
      <div>{JSON.stringify(theObject)}</div>

      <div>
        <input
          type="text"
          placeholder="enter a value"
          name="newKey"
          value={theObject.code}
          onChange={handleChangeUpdateAddObject}
        />
      </div>
      <div>{JSON.stringify(theObject)}</div>

      <div>
        <input
          type="text"
          placeholder="enter a value"
          name="newKey"
          value={theArrayOfObjects.code}
          onChange={handleChangeArrayAddObject}
        />
      </div>
      <div>{JSON.stringify(theArrayOfObjects)}</div>
      <div>
        <input
          type="text"
          placeholder="enter a value"
          name={Object.keys(theObjectOfArrays)}
          value={theObjectOfArrays.code}
          onChange={handleChangeObjectAddArray}
        />
      </div>
      <div>{JSON.stringify(theObjectOfArrays)}</div>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);







const [theValue, setTheValue] = useState("test");
setTheValue(event.target.value);


const [theArray, setTheArray] = useState([1, "stan"]);
setTheArray(prev => [...prev, value]);


const [theObject, setTheObject] = useState({food: "gyoza"});
setTheObject(prev => ({...prev, [name]: value}));


const [theArrayOfObjects, setTheArrayOfObjects] = useState([{ color: "blue" }]);
setTheArrayOfObjects(prevState => [...prevState, { [name]: value }]);


const [theObjectOfArrays, setTheObjectOfArrays] = useState({power: ["Lightning", "God strength"]});
const newObj = { ...theObjectOfArrays, [name]: specificArrayInObject };
setTheObjectOfArrays(newObj);


// To expand a little further, here are some common examples. Starting with:

// const [theArray, setTheArray] = useState(initialArray);
// const [theObject, setTheObject] = useState(initialObject);

// Push element at end of array

// setTheArray(prevArray => [...prevArray, newValue])
// Push/update element at end of object

// setTheObject(prevState => ({ ...prevState, currentOrNewKey: newValue}));
// Push/update element at end of array of objects

// setTheArray(prevState => [...prevState, {currentOrNewKey: newValue}]);
// Push element at end of object of arrays

// let specificArrayInObject = theObject.array.slice();
// specificArrayInObject.push(newValue);
// const newObj = { ...theObject, [event.target.name]: specificArrayInObject };
// theObject(newObj);


pragma solidity ^0.5.17;

import '../helpers/BaseController.sol';
import '../ContractManager.sol';
import "./ProposalStorage.sol";
import "../../node_modules/@openzeppelin/contracts/lifecycle/Pausable.sol";

contract ProposalController is BaseController, Pausable {

  event AssetNomination(string _message, address _proposalAddress);
  address proposalAddress;
  address public _marketAddr;
  address public _tokenAddress;
  
  ContractManager _manager = ContractManager(managerAddr); 

  address[] public deployedAddresses;   



  struct Proposals {
    uint256 orderId;
    address propAddress;
    uint128 propStatus;
  }
  //mapping (address => Proposals) public propData;
  mapping (uint256 => Proposals) public propData;
 
  mapping (uint128  => uint128[]) userProposalIds;
  mapping(uint256 => bool) public deployedProposals;
  mapping(uint256 => address) public proposalTokenIdMap; 
  
constructor() public {_marketAddr = 0xB2799e42d75AE8E0CbC1103d47b7d84517355326; _tokenAddress = 0xfb74efe49b81Bc37B5F3bf77e16eE18238fEe895;}
                                                                                                                                     
  function createProposal(uint128  _userId, uint256 _expiresAt, uint256 _listPrice, uint256 _reSalePrice, string calldata _text, uint256 _tokenId, uint256 _orderId, address _nftaddress) external {
    uint256 timeMilli = block.timestamp * 1000;
    require(_expiresAt > timeMilli,
    "Asset Sale Has Expired.");  
    // latestProposalId++;
    // userProposalIds[_userId].push(latestProposalId);
    // latestProposalId;
    require(!deployedProposals[_tokenId]);
    deployedProposals[_tokenId] = true;
    //ProposalStorage proposal = new ProposalStorage(latestProposalId, _userId, _expiresAt, _listPrice, _reSalePrice, _text, _tokenId, _marketAddr, _tokenAddress, _nftaddress);
    ProposalStorage proposal = new ProposalStorage(_orderId, _userId, _expiresAt, _listPrice, _reSalePrice, _text, _tokenId, _marketAddr, _tokenAddress, _nftaddress);
    proposalAddress = address(proposal);
    //deployedProposalsArray.push(_tokenId);
    deployedAddresses.push(proposalAddress);
    //proposalTokenIdMap[_tokenId]=proposalAddress;
    Proposals storage proposals = propData[proposalAddress];
    proposals.orderId = _orderId;
    proposals.propAddress = proposalAddress;
    proposals.propStatus = 0;
    emit AssetNomination("Asset Successfully Nominated", proposalAddress);
  }


//  function updateStatus(address _proposalAddress, uint128 _status) public returns (bool){
//     propStatus[_proposalAddress] = _status;
//     return true;
//  }

  function getDeployedProposal() public view returns (uint256[] memory) {
      return deployedProposalsArray;
  }


  function getDeployedAddresses() public view returns (address[] memory) {
      return deployedAddresses;
  }

 function getPropTokenIdMap(uint256 _tokenId) public view returns (address) {
      return proposalTokenIdMap[_tokenId];
  }

 //function updatePropData(address _proposalAddress, uint128 _status, uint256 _expiresAt) public returns (bool){
 function updatePropData(address _proposalAddress, uint128 _status, uint256 _orderId) public returns (bool){
    Proposals storage proposals = propData[_proposalAddress];
    proposals.propStatus = _status;
    proposals.orderId = _orderId;
    //proposals.expiresAt_gt = _expiresAt;
    return true;
 }

 //function getPropData(address _proposalAddress) public view returns(uint128, uint256, uint256) {
 function getPropData(address _proposalAddress) public view returns(uint256, address, uint128) {
  uint128 currentStatus = propData[_proposalAddress].propStatus;
  uint256 currentTokenId = propData[_proposalAddress].tokenId;
  uint256 currentOrderId = propData[_proposalAddress].orderId;


  return (currentOrderId, currentTokenId,currentStatus );
  //uint256 currentExpiration = propData[_proposalAddress].expiresAt_gt;
  //return (currentStatus, currentTokenId, currentExpiration, currentOrderId);
}



}
















//////////////////////
const targetUrl = 'https://api.thegraph.com/subgraphs/name/decentraland/marketplace'
fetch(targetUrl, {
  method: "POST",
  headers:myHeaders,  
  body:graphql, variables:{},
  redirect: 'follow'
})
  .then(res => res.json())
  .then( async (result) => {
    if(!result.data.orders.length){
      console.log(console.log('empty cancelled array'))
    }
    else{
      expiredOrdersArray.push(result.data.orders);
      setTotalOrders(expiredOrdersArray.length)
      console.log(result.data.orders)
      setOrders(expiredOrdersArray);
      setLoading(false); 
    }
  },
  (error) => {
  return error;
  }
) 
}

}


///////////////////////////////////////



switch (isStatus) {
  //switch ('6') {
    //0-FUNDING
    case '0':
      return (
        <CardFooter className="p-0">  
          stored:{isStoredOrderId}<br></br>
          current:{orderId}
          <FundingModal 
            nftAddress={nftAddress}
            tokenId={tokenId}
            assetPrice={assetPrice}
            expiresAt={expiresAt}  
            props={props} 
            userManaBalance={userManaBalance}
          />
        </CardFooter> 
      )
      case '0' && orderId !== isStoredOrderId:
      return (
        <CardFooter className="p-0">  
          <NominationModal
              nftAddress={nftAddress}
              tokenId={tokenId}
              assetPrice={assetPrice}
              expiresAt={expiresAt} 
              props={props} 
              orderId={orderId}
              userManaBalance={userManaBalance}
              orderStatus={orderStatus}
            />
        </CardFooter> 
      )
    //FUNDED
    case '1':
      return (
        <CardFooter className="p-0">
          <PurchaseModal 
            nftAddress={nftAddress}
            tokenId={tokenId}
            assetPrice={assetPrice}
            expiresAt={expiresAt} 
            props={props} 
            userManaBalance={userManaBalance}
          />
        </CardFooter> 
      )
    //FOR_SALE
    case '4':
      return  (
        <CardFooter className="p-0">
          <SaleModal 
            nftAddress={nftAddress}
            tokenId={tokenId}
            assetPrice={assetPrice}
            expiresAt={expiresAt} 
            props={props} 
            userManaBalance={userManaBalance}
          />
        </CardFooter> 
      )
  //PAYINGOUT
    case '6':
      return  (
        <>
          <CardFooter className="p-0">
            <SoldModal 
              nftAddress={nftAddress}
              tokenId={tokenId}
              assetPrice={assetPrice}
              expiresAt={expiresAt} 
              props={props} 
              userManaBalance={userManaBalance}
            />
          </CardFooter> 
        </>
      )
      case '7':
        return  (
          <>
            <CardFooter className="p-0">
              <PaidOutModal
                nftAddress={nftAddress}
                tokenId={tokenId}
                assetPrice={assetPrice}
                expiresAt={expiresAt} 
                props={props} 
                userManaBalance={userManaBalance}
              />
            </CardFooter> 
          </>
      )
      case null:
        return  (
          <>
            <CardFooter className="p-0">
              <NominationModal
                nftAddress={nftAddress}
                tokenId={tokenId}
                assetPrice={assetPrice}
                expiresAt={expiresAt} 
                props={props} 
                orderId={orderId}
                userManaBalance={userManaBalance}
                orderStatus={orderStatus}
              />
            </CardFooter> 
          </>
      )
    case 'error':
      return'error'
    default:
      return (
        <CardFooter className="p-0">
          <NominationModal
            nftAddress={nftAddress}
            tokenId={tokenId}
            assetPrice={assetPrice}
            expiresAt={expiresAt} 
            props={props} 
            orderId={orderId}
            userManaBalance={userManaBalance}
            orderStatus={orderStatus}
          />
        </CardFooter> 
      );
  }
}
)()}
</>
)
}



///////////////////////////////////



const oderStatusCall (orderId) => {

  const graphql = JSON.stringify({ query: 
    `{
      orders(where: {id:"${orderIdsArray[j]}", status:cancelled, category:parcel }) {
        status
        id
        nft{
          parcel {          
                  x,
                  y,
                  tokenId
              }
    
          activeOrder {
              price
              expiresAt
              txHash
              nftAddress
          }
      }
      }
    }`
})

const targetUrl = 'https://api.thegraph.com/subgraphs/name/decentraland/marketplace'
fetch(targetUrl, {
  method: "POST",
  headers:myHeaders,  
  body:graphql, variables:{},
  redirect: 'follow'
})
  .then(res => res.json())
  .then( async (result) => {
    if(!result.data.orders.length){
      console.log(result.data.orders)
      console.log(console.log('empty cancelled array'))
    }
    else{
      expiredOrdersArray.push(result.data.orders);
      setTotalOrders(expiredOrdersArray.length)
      console.log(result.data.orders)
      setOrders(expiredOrdersArray);
      setLoading(false); 
    }
  },
  (error) => {
  return error;
  }
) 
}
}
}


////////////////////////////////////////////////////

function updatePrice(uint256 newPrice) external onlyBuyer funding returns(bool){
  Proposal storage proposal = proposals[tokenId];
  proposal.listPrice = newPrice;
  proposal.remainder = proposal.listPrice - proposal.balance;
  emit ProposalEvent("Asset Price Updated!");
  return true;
}

function updateExpiration(uint256 expiresAt) external onlyBuyer funding returns(bool){
  Proposal storage proposal = proposals[tokenId];
  proposal.expiresAt = expiresAt;
  controller.updatePropData(address(this), 0, proposal.orderId);
  emit ProposalEvent("End of sale date updated.");
  return true;
}

function updateContract(uint256 _newPrice, uint256 _expiresAt, bytes32 _orderId) external onlyBuyer funding returns(bool){
  Proposal storage proposal = proposals[tokenId];
  if(proposal.listPrice != _newPrice){
    proposal.listPrice = _newPrice;
    proposal.remainder = proposal.listPrice - proposal.balance;
    emit ProposalEvent("Asset Price Updated!");
    return true;
  }
  if(proposal.expiresAt != _expiresAt){
    proposal.expiresAt = _expiresAt;
    controller.updatePropData(address(this), 0, proposal.orderId);
    emit ProposalEvent("End of sale date updated.");
    return true;
  }
   if(proposal.orderId != _orderId){
    proposal.orderId = _orderId;
    proposal.expiresAt = _expiresAt;
    proposal.listPrice = _newPrice;
    controller.updatePropData(address(this), 0, _orderId);
    emit ProposalEvent("End of sale date updated.");
    return true;
  }
}


function payOut() external onlyBuyer {
  Proposal storage proposal = proposals[tokenId];
  controller.updatePropData(address(this), 5, proposal.orderId);
  proposal.status = ProposalStatus.PAYINGOUT;
  for(uint16 i = 0; i < depositersArray.length; i++) {
    address _depositer = depositersArray[i];
    uint256 depositedAmount = deposits[_depositer];
    uint256 percentage = Div.mulDiv(depositedAmount,100, proposal.listPrice);
    uint256 userSaleShare = Div.mulDiv(percentage,proposal.reSalePrice,100);
    acceptedToken.transfer(_depositer, userSaleShare);
    proposal.contributors[_depositer] = false;
    proposal.balance = acceptedToken.balanceOf(address(this));
    deposits[_depositer] = 0;
    //if(proposal.balance == 0){
    controller.updatePropData(address(this), 7, proposal.orderId);
    proposal.status = ProposalStatus.PAIDOUT;
    //} 
  }
   emit ProposalEvent("Payout is complete!");
}

///////////////////////////////////////////////////////



import React, { useState, useEffect } from 'react';
import Pagination from '../Pagination';
import Nominations from '../Nominations'
//import Moment from "react-moment";
import moment from "moment";

const ForSaleAssetCard = ({ props, userManaBalance }) => {

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [parcelsPerPage] = useState(6);
  const [totalOrders, setTotalOrders] = useState();

  const nowUnix = moment().valueOf();

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  const currentTime= moment().valueOf();
  const graphql= JSON.stringify({ query: 
      `{
        orders(first:20,orderBy: price,where:{status:open, category:parcel,expiresAt_gt:${currentTime}}) {
         status 
         nft{
          parcel {
            x,
            y, 
            tokenId
          }
          activeOrder {
            id
            price
            expiresAt
            nftAddress
            txHash
          }
        }
      }
      }`
    })

  useEffect(() => {
    const fetchParcels = async () => {
    //const proxyUrl = 'https://cors-anywhere.herokuapp.com/',
    const targetUrl = 'https://api.thegraph.com/subgraphs/name/decentraland/marketplace'
  
    fetch(targetUrl, {
      method: "POST",
      headers:myHeaders,  
      body:graphql, variables:{},
      redirect: 'follow'
    })
      .then(res => res.json())
      .then( async (result) => {
        const ordersGQL = await result.data.orders;
        const proposalContract = await props.drizzle.contracts.ProposalController;
        const deployedAddresses = await proposalContract.methods.getDeployedAddresses().call();
      
        let i;
        let fundingArray = [];
        let fundedArray = [];
        let forSaleArray = [];
        let activeArray = [];

        for (i = 0; i < deployedAddresses.length; i++) {
          const address = deployedAddresses[i];
          const propData = await proposalContract.methods.getPropData(`${address}`).call();
          if(propData[0] == 0 || propData[0] == 1 || propData[0] == 4) {
          activeArray.push(propData[1]);
        }
          if(propData[0] == 0) {
            fundingArray.push(propData[1]);
          }
          if(propData[0] == 1){
            fundedArray.push(propData[1]);
          }
          if(propData[0] == 4){
            forSaleArray.push(propData[1]);
          }
       }
    
      //FILTER OUT NOMINATED PROPS
      const ordersFiltered = ordersGQL.filter(item => forSaleArray.includes(item.nft.parcel.tokenId))
          setOrders(ordersFiltered);
          setTotalOrders(ordersFiltered.length)
          setLoading(false); 
        },
        (error) => {
          setLoading(true),
          error;
        }
    ) 
  }
    fetchParcels();  
  }, []);


  // Get current orders
  const indexOfLastParcel = currentPage * parcelsPerPage;
  const indexOfFirstParcel = indexOfLastParcel - parcelsPerPage;
  const currentParcels = orders.slice(indexOfFirstParcel, indexOfLastParcel);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (   
    <>
      <Nominations 
        orders={currentParcels} 
        loading={loading} 
        props={props}   
        userManaBalance={userManaBalance}
      />
       <Pagination
        currentPage ={currentPage}
        parcelsPerPage={parcelsPerPage}
        totalParcels={totalOrders}
        paginate={paginate}
      />
    </>
  );
};


export default ForSaleAssetCard;









///////////////////////////////////////////////////////////////

BEFORE ADDING SECOND SALE
function sellAsset() public onlyBuyer {
  Proposal storage proposal = proposals[tokenId];
  require(proposal.status == ProposalStatus.PURCHASED,
  "Asset has not been purchased");
  nftContract.approve(marketAddr,tokenId);
  uint256 newPrice = proposal.reSalePrice;
  uint256 expireYear = now + (365 * 1 days); 
  reSaleExpiresAt = expireYear * 1000;
  market.createOrder(nftAddress, tokenId, newPrice, reSaleExpiresAt);
  controller.updatePropData(address(this), 4, proposal.orderId);
  proposal.status = ProposalStatus.FOR_SALE;
  emit ProposalEvent("Asset has been placed on sale!");
 }
 
////////////////////////////////






import React, { useState, useEffect } from 'react';
import Pagination from '../Pagination';
import Nominations from '../Nominations'
//import Moment from "react-moment";
import moment from "moment";

const ForSaleAssetCard = ({ props, userManaBalance }) => {


  
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [parcelsPerPage] = useState(6);
  const [totalOrders, setTotalOrders] = useState();

  let ordersArray = [];

  const orderSaleCall = (address) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const graphql = JSON.stringify({ query: 
      `{
        orders(where: {category:parcel, status:open, owner:"${address}"}) {
          status 
          nft{
           parcel {
             x,
             y, 
             tokenId
           }
           activeOrder {
             id
             price
             expiresAt
             nftAddress
             txHash
           }
         }
        }
      }`
  })


  const targetUrl = 'https://api.thegraph.com/subgraphs/name/decentraland/marketplace'
  fetch(targetUrl, {
    method: "POST",
    headers:myHeaders,  
    body:graphql, variables:{},
    redirect: 'follow'
  })
    .then(res => res.json())
    .then((result) => {
      ordersArray.push(...result.data.orders);
    },
    (error) => {
    return error;
    }
  )
  .then(() => {
    setOrders(ordersArray);
    setTotalOrders(ordersArray.length);
    setLoading(false); 
  },
  (error) => {
    return error;
    }
  )
}


  useEffect(() => {
    const fetchParcels = async () => {
      const proposalContract = await props.drizzle.contracts.ProposalController;
      //const deployedAddresses = await proposalContract.methods.getDeployedAddresses().call();
      const deployedAddresses = ["0xd608bc8B87d8ab9B409C8409800487A1D8b14F6d", "0x15790BcDB4dE080854510C6474834850843b41DF"]
     
      let i;
      for (i = 0; i < deployedAddresses.length; i++) {
        const address = deployedAddresses[i];
    
        const propData = await proposalContract.methods.getPropData(`${address}`).call();
       //Add For MainNet
        //if(propData[0] == 4){
        orderSaleCall(address);
     //}
    }
}
  fetchParcels();  
}, []);

  // Get current orders
  const indexOfLastParcel = currentPage * parcelsPerPage;
  const indexOfFirstParcel = indexOfLastParcel - parcelsPerPage;
  const currentParcels = orders.slice(indexOfFirstParcel, indexOfLastParcel);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (   
    <>
      <Nominations 
        orders={currentParcels} 
        loading={loading} 
        props={props}   
        userManaBalance={userManaBalance}
      />
       <Pagination
        currentPage ={currentPage}
        parcelsPerPage={parcelsPerPage}
        totalParcels={totalOrders}
        paginate={paginate}
      />
    </>
  );
};


export default ForSaleAssetCard;
























//////////////////////////////////////////////


const [isPitch, setPitch] = useState();
const [show, setShow] = useState(false);
const handleShow = () => setShow(true);
const handleClose = () => setShow(false);

//const [reSalePrice, setReSalePrice] = useState(null);

useEffect(() => {
  fetchProposalInfo();
}, [])

const fetchProposalInfo = async () => { 
    let state = drizzle.store.getState()
    if(state.drizzleStatus.initialized){
    const proposalContract = await drizzle.contracts[`${propAddress}`];
    const propData = await proposalContract.methods["proposals"](`${tokenId}`).call();
    //const convertedReSalePrice = Web3.utils.fromWei(`${propData.reSalePrice}`,'ether');
    const pitch = Web3.utils.fromWei(`${propData.pitch}`,'ether');
    setPitch(pitch);
    }  
}


////////////////////////////////////////////////////////////////

import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import { connect } from 'react-redux';
import Form from 'react-bootstrap/Form';
import {Formik} from 'formik';
import  * as Yup from 'yup';
import { Col } from "shards-react";
import { toast } from 'react-toastify';
import NominationButton from '../buttons/NominateButton';
import { Loader } from 'rimble-ui';
import InitialContributeModal from '../modals/InitialContibModal';
import Web3 from "web3";
      
  

const InnerPropForm = ({ drizzle, drizzleState, prevOrderStatus, props, propAddress, tokenId, assetPrice, userManaBalance, expiresAt, orderId, orderStatus, storedOrderId }) => {
  let web3 = new Web3(Web3.givenProvider);
  const [currentProp, setCurrentProp] = useState(null);
  const listPrice = web3.utils.fromWei(`${assetPrice}`,'ether');

  //Test network address
  const nftAddress = '0x804516C4c64E3D2a78ef5eAc0E6a57A0b6bB96B3';
           
  useEffect(() => {
    setCurrentProp(propAddress);
  }, [propAddress])

  const nominateAsset = async (values) => {
    const { text, salePrice } = values;

    const reSalePrice = web3.utils.toWei(`${salePrice}`,'ether');
  
    const account = drizzleState.accounts['0'];
    const memberBool = await drizzle.contracts.UserStorage.methods.addresses(account).call();
   
    if(memberBool) {
      const user = await drizzle.contracts.UserStorage.methods.profiles(account).call();
      const { userId } = user;
      const contract = await drizzle.contracts.ProposalController;
    try {
      contract.methods["createProposal"].cacheSend(orderId, userId, expiresAt, assetPrice, reSalePrice, text, tokenId, nftAddress );
 
    } catch (err) {
        return toast.error(`Sorry, we couldn't create asset nomination: ${err}`,{ position: toast.POSITION.TOP_RIGHT })
    }
  }
    else {
      return toast.warning( `Join the Consortium and nominate this asset`, { position: toast.POSITION.TOP_RIGHT });
  }
}

let yup = require('yup');
const schema = yup.object({
  text: yup.string()
  .max(100, 'To many characters')
  .required('Required'),
  salePrice: yup.number()
  .typeError("Must be a number")
  .moreThan(listPrice.toString(), 'Must be more than current price.')
  .required('Required'),
  termsOfService: yup.bool().oneOf([true], "You must accept the terms and conditions")
});

if(currentProp === null) {
  return (
    <div className="align-items-center">   
      {currentProp} InnerPropForm 65  
      <Loader className="mx-auto" color="#007bff" size="40px" />
    </div>
  )
}

//if(currentProp === '0x0000000000000000000000000000000000000000' || prevOrderStatus === 'cancelled' ) {
if(currentProp === '0x0000000000000000000000000000000000000000' && orderStatus != 'sold') {
  return (   
    <>      

      <Formik
        initialValues={{
        text: '',
        salePrice: '',
        termsOfService:false,
        }}
        validationSchema={schema}
        onSubmit={(values, actions) => {
        nominateAsset(values);
        addReview(values);
        }}
      >
        {({   
          handleSubmit,
          handleChange,
          handleBlur,
          values,
          touched,
          errors,
        }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <Form.Row>
              <Form.Group as={Col} md="6" controlId="validationFormik01">
                {/* <Form.Label className="fw-bolder">Pitch</Form.Label> */}
                <Form.Control
                  type="text"
                  as="textarea" 
                  rows={3}
                  name="text"
                  placeholder='Pitch - 100 character max'
                  value={values.text}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isValid={values.text}
                  isInvalid={touched.text && !!errors.text}
                  />
                <Form.Control.Feedback type="invalid">
                  {errors.text}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationFormik02">
                {/* <Form.Label>Resale Price</Form.Label> */}
                <Form.Control
                  type="text" 
                  name="salePrice"
                  placeholder="Resale Price"
                  value={values.salePrice}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isInvalid={touched.salePrice && !!errors.salePrice}
                  isValid={values.salePrice}
                />
                <Form.Control.Feedback type="invalid">  
                {errors.salePrice}
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <Form.Group>
              <Form.Check
                required
                name="termsOfService"
                label="Agree to terms and conditions"
                onChange={handleChange}
                isInvalid={!!errors.termsOfService}
                feedback={errors.termsOfService}
                id="validationFormik0"
              />
            </Form.Group>
            <Modal.Footer>
              <NominationButton props={props} tokenId={tokenId} />
            </Modal.Footer>
          </Form>
        )}
      </Formik>
    </>
  );   
}        
 if(currentProp !== 'undefined'){
    return (
        <div>
          <InitialContributeModal 
            propAddress={currentProp} 
            userManaBalance={userManaBalance}
            assetPrice={assetPrice} 
            drizzleState={drizzleState} 
            drizzle={drizzle} 
            tokenId={tokenId} 
            currentExpiresAt={expiresAt}
            orderStatus={orderStatus}
            orderId={orderId}
            prevOrderStatus={prevOrderStatus}
            storedOrderId={storedOrderId}
          />
        </div>
    )
  }
  else{
    return(
      <div>InnerPropFor 167</div>
    )
  }
} 

const mapStateToProps = (state) => ({
  propAddress: state.appReducers.propAddress
})
     
export default connect(mapStateToProps, null)(InnerPropForm);


///////////////////////////////////////////////////////
ProposalStorage.sol BEFORE REMOVING REQUIRES FOR TESTING



pragma solidity ^0.5.17;

import "../../node_modules/@openzeppelin/contracts/token/ERC721/ERC721Holder.sol";
import "../../node_modules/@openzeppelin/contracts/math/SafeMath.sol";
import "../../Div.sol";
//import "../helpers/provableAPI.sol";


interface MarketPlaceInterface {
    function executeOrder(address nftAddress, uint assetId, uint price) external;
    function createOrder(address nftAddress, uint256 assetId, uint256 priceInWei, uint256 expiresAt) external;
}

interface IERC721 {
    function approve(address to, uint256 tokenId) external;
    function transferFrom(address from, address to, uint256 tokenId) external;
}

interface IERC20 {
    function approve(address spender, uint256 value) external returns (bool);
    function transfer(address to, uint256 value) external returns (bool);
    function transferFrom(address from, address to, uint256 value) external returns (bool);
    function balanceOf(address who) external view returns (uint256);
}

interface Controller {
    function updatePropData(address _propAddress,uint128 _propStatus, bytes32 _orderId) external;
}

//contract ProposalStorage is ERC721Holder, usingProvable {
contract ProposalStorage is ERC721Holder {
   using SafeMath for uint256;
   Controller public controller;
    
  enum ProposalStatus { FUNDING, FUNDED, WITHDRAWING, PURCHASED, FOR_SALE, SOLD, PAYINGOUT, PAIDOUT, EXPIRED, SALE_FAILED, SECOND_SALE, AWARDED }
  ProposalStatus constant defaultChoice = ProposalStatus.FUNDING;  
  uint256 constant NUM_RANDOM_BYTES_REQUESTED = 7;
  
  IERC721 nftContract;
  IERC20 acceptedToken;
  MarketPlaceInterface market;

  address public winningContributor;  
  uint256 public randomNumber;
  uint256 public reSaleExpiresAt;
  
  address public owner;
  address public nftAddress;
  address public tokenAddress;
  address public marketAddr;
  uint256 public tokenId;


  event ContributionSuccess(string _message, uint256 _contribution, uint256 currentContractBalance);  
  event ProposalEvent(string _message);
  event LogNewProvableQuery(string description);
  event RandomFailure(string _message);

  mapping (uint256 => Proposal) public proposals;

  struct Proposal {
      //uint128 id;
      bytes32 orderId;
      uint128 userId;
      uint256 expiresAt;
      uint256 listPrice;
      uint256 reSalePrice;
      uint256 tokenId;
      uint256 postedAt;
      uint256 balance;
      uint256 remainder;
      bool fundingComplete;
      ProposalStatus status;
      mapping(address => bool) contributors;
  } 

  address[] weightedDepositers;
  
  mapping(address => uint256) public deposits;

  address[] public depositersArray;

  //constructor(uint128 latestProposalId, uint128 _userId, uint256 _expiresAt, uint256 _listPrice, uint256 _reSalePrice, string memory _text, uint256 _tokenId, address  _marketAddr, address _tokenAddress, address _nftaddress) public {
  constructor(bytes32 _orderId, uint128 _userId, uint256 _expiresAt, uint256 _listPrice, uint256 _reSalePrice, uint256 _tokenId, address  _marketAddr, address _tokenAddress, address _nftaddress) public {
    //provable_setProof(proofType_Ledger);

   controller = Controller(msg.sender); 
   proposals[_tokenId] = Proposal({
      //id: latestProposalId,
      orderId: _orderId,
      userId: _userId,
      postedAt: now,
      expiresAt: _expiresAt,
      listPrice: _listPrice,
      reSalePrice: _reSalePrice,
      tokenId: _tokenId,
      balance: 0,
      remainder: _listPrice,
      fundingComplete: false,
      status: ProposalStatus.FUNDING
    }); 
      owner = msg.sender;
      tokenId = _tokenId;   
      nftAddress = _nftaddress;
      marketAddr = _marketAddr;
      tokenAddress = _tokenAddress; 
      nftContract = IERC721(_nftaddress);
      acceptedToken =  IERC20(_tokenAddress);
      market = MarketPlaceInterface(_marketAddr);
  }


modifier onlyBuyer()  {
  _onlyDepositer();
  _;
}

function _onlyDepositer() internal view {
  Proposal storage proposal = proposals[tokenId];
  require(
     proposal.contributors[msg.sender] == true, "Must have funds deposited.");
}

modifier notWithdrawing()  {
 _notWithDrawing();
  _;
}

function _notWithDrawing() internal view {
  Proposal storage proposal = proposals[tokenId];
  require(proposal.status != ProposalStatus.WITHDRAWING, "Withdrawal is proccessing.");
}

modifier funding()  {
 _propFunding();
  _;
}

function _propFunding() internal view {
  Proposal storage proposal = proposals[tokenId];
  require(proposal.status == ProposalStatus.FUNDING, "Asset is funding.");
}

modifier notExpired()  {
  _propNotExpired();
  _;
}


uint256 saleShareAmount = 0;
uint256 ownerCutPerMillion = 100000;

function _propNotExpired() internal view {
  Proposal storage proposal = proposals[tokenId];
  uint256 timeMilli = block.timestamp * 1000;
  require (proposal.expiresAt > timeMilli,
  "Asset sale has expired.");
}

function deposit(uint _contribution) public notExpired returns(bool) {
    Proposal storage proposal = proposals[tokenId];
    require(_contribution <= proposal.remainder,
    "Greater than needed.");
    require(acceptedToken.transferFrom(msg.sender,address(this), _contribution),
    "Transfer of tokens failed");
    deposits[msg.sender] += _contribution;
    proposal.balance += _contribution;
    proposal.remainder = proposal.listPrice - proposal.balance;
    bool alreadyAdded = false;
    for(uint i = 0; i < depositersArray.length; i++) {
      if(depositersArray[i] == msg.sender) {
        alreadyAdded = true;
      }
    }
    if(alreadyAdded == false) {
      depositersArray.push(msg.sender);
    }
    require(proposal.balance == acceptedToken.balanceOf(address(this)),
    "Balance not equal to ERC20 balance");
    proposal.contributors[msg.sender] = true;
    if(proposal.listPrice == proposal.balance){
       proposal.fundingComplete = true;
       proposal.status = ProposalStatus.FUNDED;
       controller.updatePropData(address(this), 1, proposal.orderId);
       completePurchase();
       emit ContributionSuccess("Funding Complete!", _contribution,  proposal.balance);
       return true;
    }
    else {
      emit ContributionSuccess("Contribution accepted!", _contribution,  proposal.balance);
      return true;
    }
}
    
function completePurchase() public onlyBuyer notWithdrawing notExpired {
  Proposal storage proposal = proposals[tokenId];
  require(acceptedToken.approve(marketAddr, proposal.listPrice),
  "Token approval failed");
  market.executeOrder(nftAddress, tokenId, proposal.listPrice);
  proposal.status = ProposalStatus.PURCHASED;
  proposal.balance = 0;
  controller.updatePropData(address(this), 3, proposal.orderId);
  sellAsset();
  emit ProposalEvent("Asset Purchase complete!");
}

function sellAsset() public onlyBuyer {
  Proposal storage proposal = proposals[tokenId];
  uint256 timeMilli = block.timestamp * 1000;
  require(proposal.status == ProposalStatus.PURCHASED,
  "Asset has not been purchased");
  //Second Sale Attempt
  if(proposal.status == ProposalStatus.FOR_SALE){
    uint256 expireYear = now + (365 * 1 days); 
    reSaleExpiresAt = expireYear * 1000;
    uint256 newPrice = proposal.listPrice;
    market.createOrder(nftAddress, tokenId, newPrice, reSaleExpiresAt);
    controller.updatePropData(address(this), 10, proposal.orderId);
    proposal.status = ProposalStatus.SECOND_SALE;
    emit ProposalEvent("Asset has been placed on sale again!");
  }
  else{
    nftContract.approve(marketAddr,tokenId);
    uint256 newPrice = proposal.reSalePrice;
    uint256 expireYear = now + (365 * 1 days); 
    reSaleExpiresAt = expireYear * 1000;
    market.createOrder(nftAddress, tokenId, newPrice, reSaleExpiresAt);
    controller.updatePropData(address(this), 4, proposal.orderId);
    proposal.status = ProposalStatus.FOR_SALE;
    emit ProposalEvent("Asset has been placed on sale!");
  }
 }
 
function payOut() external onlyBuyer {
  Proposal storage proposal = proposals[tokenId];
  controller.updatePropData(address(this), 5, proposal.orderId);
  proposal.status = ProposalStatus.PAYINGOUT;
  for(uint16 i = 0; i < depositersArray.length; i++) {
    address _depositer = depositersArray[i];
    uint256 depositedAmount = deposits[_depositer];
    uint256 totalAmount = acceptedToken.balanceOf(address(this));
    if (ownerCutPerMillion > 0) {
      // Calculate sale share
      saleShareAmount = totalAmount.mul(ownerCutPerMillion).div(1000000);
      // Transfer share amount for marketplace Owner
      require(
        acceptedToken.transfer(owner, saleShareAmount),
        "Transfering the cut to the Marketplace owner failed"
      );
    }
    uint256 payOutTotal = totalAmount - saleShareAmount;
    uint256 percentage = Div.mulDiv(depositedAmount,100, proposal.listPrice);
    uint256 userSaleShare = Div.mulDiv(percentage,payOutTotal,100);
    require (
      acceptedToken.transfer(_depositer, userSaleShare),
      "Transfering the sale amount to the sellers failed"
    );
    proposal.contributors[_depositer] = false;
    proposal.balance = acceptedToken.balanceOf(address(this));
    deposits[_depositer] = 0;
    controller.updatePropData(address(this), 7, proposal.orderId);
    proposal.status = ProposalStatus.PAIDOUT;
  }
   emit ProposalEvent("Payout is complete!");
}

function withdraw() external onlyBuyer notWithdrawing returns(bool){
  Proposal storage proposal = proposals[tokenId];
  uint256 timeMilli = block.timestamp * 1000;
  require(proposal.status == ProposalStatus.FUNDING || timeMilli > proposal.expiresAt, "Withdrawal failed.");
  proposal.status = ProposalStatus.WITHDRAWING;
  uint256 depositedAmount = deposits[msg.sender];
  // depositers.push(Deposit({depositer: msg.sender, amount: 0}));
  deposits[msg.sender] = 0;
  proposal.contributors[msg.sender] = false;
  proposal.balance -= depositedAmount;
  proposal.remainder = proposal.listPrice - proposal.balance;
  acceptedToken.transfer(msg.sender, depositedAmount);
  emit ProposalEvent("Withdrawal complete!");
  if(timeMilli > proposal.expiresAt) {
    proposal.status = ProposalStatus.EXPIRED;
  }
  else{
    proposal.status = ProposalStatus.FUNDING;
  }
  return true;
}   

function updateContract(uint256 _newPrice, uint256 _expiresAt, bytes32 _orderId) external funding returns(bool){
    Proposal storage proposal = proposals[tokenId];
    if(proposal.listPrice != _newPrice || proposal.expiresAt != _expiresAt || proposal.orderId != _orderId){
      proposal.orderId = _orderId;
      proposal.expiresAt = _expiresAt;
      proposal.listPrice = _newPrice;
      proposal.remainder = proposal.listPrice - proposal.balance;
      controller.updatePropData(address(this), 0, _orderId);
      emit ProposalEvent("Contract updated.");
      return true;
    }
    else{
       emit ProposalEvent("Error! Contract is not update.");
        return false;
    }
}

function weightContributors() onlyBuyer public {
      Proposal storage proposal = proposals[tokenId];
      uint256 timeMilli = block.timestamp * 1000;
      require(timeMilli > reSaleExpiresAt && proposal.status == ProposalStatus.SECOND_SALE,
      "Asset resale not expired.");
      controller.updatePropData(address(this), 8, proposal.orderId);
      for(uint16 i = 0; i < depositersArray.length; i++) {
        address _depositer = depositersArray[i];
        uint256 depositedAmount = deposits[_depositer];
        uint256 reducedAmount = Div.mulDiv(depositedAmount, 1, 100000000000000000000);
        for(uint256 j = 0; j < reducedAmount; j++) {
          weightedDepositers.push(_depositer);
      }
    }
    //generateRandom();
    _randomModulo();
}

 function _randomModulo() public {
       uint256 modulo = weightedDepositers.length - 1;
       uint256 _randomNumber = uint256(keccak256(abi.encodePacked(block.timestamp, block.difficulty))) % modulo;
       _selectWinner(_randomNumber);
    }

function weigDepositers() public view returns (address[] memory) {
  return weightedDepositers;
}

function _selectWinner(uint _randomNumber) internal {
    Proposal storage proposal = proposals[tokenId];
    winningContributor = weightedDepositers[_randomNumber];
    controller.updatePropData(address(this), 10, proposal.orderId);
}

// function generateRandom() payable public  {
//     uint8 QUERY_EXECUTION_DELAY = 0; 
//     uint32 GAS_FOR_CALLBACK = 200000;
//     provable_newRandomDSQuery(
//         QUERY_EXECUTION_DELAY,
//         NUM_RANDOM_BYTES_REQUESTED,
//         GAS_FOR_CALLBACK
//     );
//     emit LogNewProvableQuery("Query sent, standing by...");
// }

// function __callback(bytes32 _queryId, string memory _result, bytes memory _proof) public {
//     require(msg.sender == provable_cbAddress());
//     if (provable_randomDS_proofVerify__returnCode(_queryId, _result, _proof) != 0) {    
//         emit RandomFailure("Random generation failed");
//     } else {
//         uint256 maxNumber = weightedDepositers.length - 1;
//         randomNumber = uint256(keccak256(abi.encodePacked(_result))) % maxNumber;
//         _selectWinner(randomNumber);
//     }
// }

function claimAsset() external {
  require(msg.sender == winningContributor, "Only Winner can call.");    
  nftContract.transferFrom(address(this), winningContributor, tokenId);
  emit ProposalEvent("You recieved the Asset!");
}

function depositedAmount(address _depositer) public view returns(uint256) {
  uint256 depositAmount = deposits[_depositer];
  return depositAmount;
}

function countDepositers() view public returns (uint) {
      return depositersArray.length;
  }
    
function balanceOf() view public returns(uint) {
  return acceptedToken.balanceOf(address(this));
}

function getSummary(uint _tokenId) public view returns(uint) {
  uint contractBalance = proposals[_tokenId].balance;
  return contractBalance;
}

}







/////////////////////////////////////////

import React, { useState, useEffect } from 'react';
import Pagination from '../Pagination';
import Nominations from '../Nominations'
import moment from "moment";
import Web3 from "web3";
import InnerAbCard from './InnerAbCard';
//import { OpenSeaPort, Network, OpenSeaAsset  } from 'opensea-js'

const AbPreNomCard = ({ props, userManaBalance }) => {

  const [projectTokenIds, setprojectTokenIds] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [parcelsPerPage] = useState(6);
  const [totalTokens, setTotalTokens] = useState();

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  const graphql= JSON.stringify({ query: 
      ` {
        projects(where: {projectId: "23", contract_in: ["0x059edd72cd353df5106d2b9cc5ab83a52287ac3a", "0xa7d8d9ef8d8ce8992df33d8b8cf4aebabd5bd270"]}) {
          invocations
          tokens{
         tokenId
         }
        }
        
       }`
    })

  useEffect(() => {
    const fetchTokenIds = async () => {
    const targetUrl = 'https://api.thegraph.com/subgraphs/name/artblocks/art-blocks';
  
    fetch(targetUrl, {
      method: "POST",
      headers:myHeaders,  
      body:graphql, variables:{}, 
      redirect: 'follow'
    })
      .then(res => res.json())
      .then( async (result) => {
       
        const projectTotal = await result.data.projects[0].invocations;
        const callsPerProject = Math.ceil(projectTotal / 100);
        
        let i;
        let j;
        let tokenIdArray = [];

        for (i = 0; i < callsPerProject; i++) {
          for (j = 0; j < 100; j++) {
            const tokenIdObject = result.data.projects[0].tokens[j];
            tokenIdArray.push(tokenIdObject.tokenId)
          }             
        } 
          setTotalTokens(projectTotal)
          setprojectTokenIds(tokenIdArray);
      },
        (error) => {
          setLoading(true),
          error;
        }
    ) 
  }
    fetchTokenIds();  
  }, []);

  

  return (
    <>
      <InnerAbCard props={props} projectTokenIds={projectTokenIds} totalTokens={totalTokens}   />
    </>


  
  );
};

export default AbPreNomCard;



////////////////////////////////////////////

import React, { useState, useEffect } from 'react';
import Pagination from '../Pagination';
import Nominations from '../Nominations'
import moment from "moment";
import Web3 from "web3";
import InnerAbCard from './InnerAbCard';
//import { OpenSeaPort, Network, OpenSeaAsset  } from 'opensea-js'

const AbPreNomCard = ({ props, userManaBalance }) => {
  const [orders, setOrders] = useState([]);
  const [projectTokenIds, setprojectTokenIds] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [parcelsPerPage] = useState(6);
  const [totalTokens, setTotalTokens] = useState();

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  let offset = 0;
  //useEffect(() => {
    const fetchPosts = async () => { 
   
    var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
    targetUrl = 'https://api.opensea.io/api/v1/assets?';
    let contractAddress = 'asset_contract_address=0x1A92f7381B9F03921564a437210bB9396471050C&order_by=token_ids&order_direction=desc&offset='
    
    let i;
    let artArray = [];
    console.log(orders)
    const callsPerProject = 2;
    console.log(offset)
    for (i = 0; i < callsPerProject; i++) {

    fetch(targetUrl + contractAddress + offset,{header:'x-api-key:2f2a0900458f4bdfbb489680a58e7526'})
      .then(res => res.json())
      .then(
        (res) => {

           console.log(res.length);
          //if(result.length >= 20){
      
          artArray.push(...res.assets);
          // }
          // else{
          //   //break;
          // }

        },
        (error) => {
          setLoading(true),
          error;
        }
      )
      .then(() => {
        offset += 20;
        setOrders(artArray);
        setLoading(false);
      },
      (error) => {
        return error;
        }
      )          
  } 
}
   fetchPosts();
 //}, []);

  

  return (
    <>
      <div>Hello</div>
      {/* <InnerAbCard props={props}   /> */}
    </>


  
  );
};

export default AbPreNomCard;



///////////////////////////////////////////

Working asset call with sale orders but also non sale orders

import * as Web3 from 'web3';
import { OpenSeaPort, Network, OpenSeaAsset  } from 'opensea-js';
import React, { Component } from 'react';
import OpenSeaApi from "./OpenSeaApi.js";


const OsSdk = () => {

const provider = new Web3.providers.HttpProvider('https://mainnet.infura.io');

const seaport = new OpenSeaPort(provider, {
  networkName: Network.Main,
  apiKey: '2f2a0900458f4bdfbb489680a58e7526'
});

let orderArray = [];
console.log(orderArray)

let i;
let offsetNum=0;
const callsPerProject = 3;
console.log(offsetNum)
for (i = 0; i < callsPerProject; i++, offsetNum+=20) {
seaport.api.getAssets({
  asset_contract_address: '0x8a90CAb2b38dba80c64b7734e58Ee1dB38B8992e',
  offset: offsetNum,
  limit: 20,
  include_orders:true,
})
.then(function(res) {
    orderArray.push(...res.assets);
},
  (error) => {
   //setLoading(true),
    error;
  }
)   
}
return (
    <div className="container2">
    <div className="container1">
        Hi Joe
    </div>

    </div>
)
}

export default OsSdk;

////////////////////////////////////////////////////////


WORKING OPENSEA SDK ORDERS CALL 

import * as Web3 from 'web3';
import { OpenSeaPort, Network, OpenSeaAsset  } from 'opensea-js';
import React, { Component, useEffect } from 'react';
import OpenSeaApi from "./OpenSeaApi.js";
import { OrderSide } from 'opensea-js/lib/types';


const OsSdk =  () => {

const provider = new Web3.providers.HttpProvider('https://mainnet.infura.io');

const seaport = new OpenSeaPort(provider, {
  networkName: Network.Main,
  apiKey: '2f2a0900458f4bdfbb489680a58e7526'
});

useEffect(() => {
const fetchParcels = async () => {
const  { orders, count } = await seaport.api.getOrders({
    asset_contract_address: '0x8a90CAb2b38dba80c64b7734e58Ee1dB38B8992e',
    token_ids: [3396,9998,7024,6508],
    side: 0,
    sale_kind: 0,
  })

  console.log(orders);
    }
    fetchParcels();
}, []);

return (
    <div className="container2">
    <div className="container1">
        Hi Joe
    </div>

    </div>
)
}

export default OsSdk;




//////////////////////////////////////////////////////////////////////////////////////////////////////////


  WORKING ASSET CALL WITH CURSOR FOR Pagination
  //import ReactPaginate from "react-paginate";
import OsPagination from '../OsPagination.js';
import * as Web3 from 'web3';
import { OpenSeaPort, Network, OpenSeaAsset  } from 'opensea-js';
import React, { Component, useEffect, useState } from 'react';
import OpenSeaApi from "./OpenSeaApi.js";
import { OrderSide } from 'opensea-js/lib/types';
import { Button, Form } from "shards-react";

function TestOsSdk({tokenIdArray, projectTotal}) {
  const [items, setItems] = useState([]);
  const [cursor, setCursor] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [ordersPerPage] = useState(6);
  const [totalOrders, setTotalOrders] = useState();

const options = {
  method: 'GET',
  headers: {Accept: 'application/json', 'X-API-KEY': '2f2a0900458f4bdfbb489680a58e7526'}
};

  let limit = 5;
  

  useEffect(() => {
 
    const getorders = async (projectTotal) => {
  
      const res = await fetch(
         `https://api.opensea.io/api/v1/assets?collection=doodles-official&order_direction=desc&limit=${limit}&cursor=${cursor}&include_orders=true`,options
        
      );
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));
      //const data = await res.json();

      //setpageCount(Math.ceil(projectTotal / limit));
      // console.log(Math.ceil(total/12));
      setCursor(data.next)
      console.log(data.assets.sell_orders)
      setItems(data.assets);
    };

    getorders();
  }, [limit]);

  const fetchorders = async (cursor) => {
    const res = await fetch(
       `https://api.opensea.io/api/v1/assets?collection=doodles-official&order_direction=desc&limit=50&cursor=${cursor}&include_orders=true`,options
   
    );
    const data = await res.json();
    return data;
  };

  const handlePageClick = async (cursor) => {
   
    const ordersFormServer = await fetchorders(cursor);
    setItems(ordersFormServer.assets);
    setCursor(ordersFormServer.next)
    console.log(ordersFormServer.assets.sell_orders)
  };


  
  return (
    <div className="container">
      <button className="btn btn-block btn-success join-form-btn" key="submit" type="button" onClick={() => handlePageClick(cursor)} style={{ fontSize: 16 }} > 
          Button
      </button>
      <div className="row m-2">
        {items.map((item) => {
          return (
            <div key={item.id} className="col-sm-6 col-md-4 v my-2">
              <div className="card shadow-sm w-100" style={{ minHeight: 25 }}>
                <div className="card-body">
                  <h5 className="card-title text-center h2">Id :{item.token_id} </h5>
                  <h6 className="card-subtitle mb-2 text-muted text-center">
                    {item.email}
                  </h6>
                  <p className="card-text">{item.body}</p>
                </div>
              </div>
             
            </div>
          );
        })}
      </div>


    </div>
  );
}

export default TestOsSdk;

///////////////////////////////////////////////////////////////////////////////////////////
WORKING COMPONENT DID MOUNT 

state = { dataKey: null };

    async componentDidMount() {
 

            var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
            targetUrl = 'https://api.opensea.io/api/v1/collection/';
            `https://api.opensea.io/api/v1/assets?order_direction=desc&asset_contract_address=0x8a90CAb2b38dba80c64b7734e58Ee1dB38B8992e&limit=50&include_orders=true`, options
            const collectionSlug= 'doodles-official/';
            const collection='stats';
           '0x8a90CAb2b38dba80c64b7734e58Ee1dB38B8992'
            let i;
            let tokenIdArray = [];
            // console.log(tokenIdArray)
            //setprojectTokenIds(tokenIdArray);
            try {
            fetch(targetUrl + collectionSlug + collection,{header:'x-api-key:2f2a0900458f4bdfbb489680a58e7526'})
              .then(res => res.json())
              .then(
                (res) => {
                   const projectTotal =  res.stats.count;
           
                   this.setState({ projectTotal})
   
                   for (i = 0; i < projectTotal; i++) {
                   tokenIdArray.push(i)
                  }           
                  (error) => {
                    setLoading(true),
                    error;
                  }
                })   
                .then( () => {
                    const dataKey = tokenIdArray;
                    this.setState({ dataKey });
                      (error) => {
                        setLoading(true),
                        error;
                      }
                })     
                
    
     // this.setState({ dataKey });
      }
      catch (err) {
        this.setState({ errorMessage: err.message });
      }
     }
  

//////////////////////////////////////////////////////////////////////////////////////////