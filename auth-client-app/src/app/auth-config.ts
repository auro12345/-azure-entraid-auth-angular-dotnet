import { 
  PublicClientApplication, 
  Configuration, 
  BrowserCacheLocation 
} from '@azure/msal-browser';

// First, add the relevant configuration for the Azure application
export const msalConfig: Configuration = {
  auth: {
    clientId: 'bfb13fa9-40fc-4e44-9618-675d09249b57', // Azure App Registration (auth-client-app) client ID
    authority: 'https://login.microsoftonline.com/b41b72d0-4e9f-4c26-8a69-f949f367c91d', // Azure App Registration (auth-client-app) tenant ID
    redirectUri: 'http://localhost:4200', // local client app URLs
  },
  cache: {
    cacheLocation: BrowserCacheLocation.LocalStorage,
    storeAuthStateInCookie: true,
  },
};

// THEN, DEFINE THE SCOPES YOU NEED FOR THE APPLICATION (Items.Read is the backend app scope to access the items endpoints, 
// this type of scopes control the actions over the backend app)
export const loginRequestData = {
    scopes: ["User.Read", "api://d6bd5a1f-82dd-44e0-8823-1800199ba7c4/Items.Read"]
};

// Scopes for the request to the backend app
export const loginRequestItemsData = {
    scopes: ["api://d6bd5a1f-82dd-44e0-8823-1800199ba7c4/Items.Read"]
};

export const appMsalInstance = new PublicClientApplication(msalConfig);