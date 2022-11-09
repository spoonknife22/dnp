import { generateStore } from "@drizzle/store";
import drizzleOptions from "../EthComponents/drizzleOptions";
import appRootSaga from './sagas/appSagas';
//import appRootSaga from './sagas/root.js';
import appReducer from './reducers/appReducers.js'
//import { contractEventSaga, joinTransactionSaga, fetchPropAddr } from './capMiddleWare';
import { contractEventSaga, joinTransactionSaga, depositCurrency } from './capMiddleWare';

const contractEventNotifier = contractEventSaga;
const joinTransactionComplete = joinTransactionSaga;
//const fetchProposalAddress = fetchPropAddr;
//const appMiddlewares = [ contractEventNotifier(), joinTransactionComplete, fetchProposalAddress ];
const appMiddlewares = [ contractEventNotifier(), joinTransactionComplete, depositCurrency ];
//GENERATE STORE
const appReducers = {appReducers: appReducer};
const appSagas = [appRootSaga];
 
const store = generateStore({
  drizzleOptions,
  appReducers,
  appSagas,
  appMiddlewares,
  disableReduxDevTools: false 
})



export default store; 