let backendHost;

// const apiVersion = 'v1';

// const hostname = window && window.location && window.location.hostname;

// if(hostname === 'realsite.com') {
//   backendHost = 'https://api.realsite.com';
// } else if(hostname === 'staging.realsite.com') {
//   backendHost = 'https://staging.api.realsite.com';
// } else if(/^qa/.test(hostname)) {
//   backendHost = `https://api.${hostname}`;
// } else {
  backendHost = process.env.REACT_APP_SERVICE_HOST;
// }

// export const API_ROOT = `${backendHost}/api/${apiVersion}`;



export const BACKEND_URL = `${backendHost}`;