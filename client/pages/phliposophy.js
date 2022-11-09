import * as Web3 from 'web3'
import { OpenSeaSDK, Network } from 'opensea-js'
import React, { Component, useEffect, useState } from 'react';
import OsSdkPhlip from '../components/api/OsSdkPhlip.js';

import { Page, Center } from '../components/layout/Layout.js';
import { DrizzleContext } from "@drizzle/react-plugin";
import {  Loader } from 'rimble-ui';
import NewTest from '../components/cards/NewTest';
import { Container  } from "shards-react";


function SdkPage () {
return (    
    <div>
      <Page>
        <Center>       
          <DrizzleContext.Consumer>
            {drizzleContext => {
             const {drizzle, drizzleState, initialized } = drizzleContext;
                if(!initialized) {
                  return (
                    <div className="justify-content-center align-items-center mt-3">   
                      <Loader className="mx-auto" color="#007bff" size="40px" />
                    </div>
                    )
                  }                       
                  return(
                    <Container fluid className="d-flex justify-content-center main-container-pp">                               
                      <OsSdkPhlip drizzleState={drizzleState} drizzle={drizzle}  /> 
                    </Container>
                  )
               }
              }  
          </DrizzleContext.Consumer>
        </Center>
      </Page>    
    </div>

);


}
export default SdkPage;