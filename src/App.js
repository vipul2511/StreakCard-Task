
import React,{useEffect} from 'react'
import {Provider} from "react-redux";
import AppStack from './Navigator'
import {store} from "./Store";
const App = () => {

  return(
  <>

      <Provider store={store} >
        <AppStack />
      </Provider>
  </>
  )
  }

export default App
