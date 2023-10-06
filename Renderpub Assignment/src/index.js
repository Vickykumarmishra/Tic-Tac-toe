import React from 'react';
import ReactDOM from 'react-dom';
import './design/index.css';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';
ReactDOM.render(

  <Auth0Provider
    domain="dev-s1lln40lmbm6it54.us.auth0.com"
    clientId="tsrSkOaslUELHzpf0ExqM5kf8jsDetDv"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
	
		<App /></Auth0Provider>,
  
	document.getElementById('root')
);
