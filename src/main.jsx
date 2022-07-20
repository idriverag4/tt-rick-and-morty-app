import { ApolloProvider } from '@apollo/client'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { clientApollo } from './apollo/clientApollo'
import './index.css'
import { RickAndMortyApp } from './RickAndMortyApp'

ReactDOM.createRoot(document.getElementById('root')).render(
   <React.StrictMode>
      <ApolloProvider client={clientApollo}>
         <BrowserRouter>
            <RickAndMortyApp />
         </BrowserRouter>
      </ApolloProvider>
   </React.StrictMode>
)
