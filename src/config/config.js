const API_URL =
  process.env.NODE_ENV === 'production'
    ? process.env.REACT_APP_API_URL
    : process.env.REACT_APP_LOCAL_API_URL;

// console.log('API URL JE:?', API_URL);

const REGEXFOREMAIL =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const PROFILEIMAGEURLPATH = `data[0].attributes.profilePhoto.data.attributes.url`;
const PROFILEIMAGEID = `data[0].attributes.profilePhoto.data.id`;
const PROFILEIMAGENAME = `data[0].attributes.name`;
const COMPANYLOGOID = `data[0].attributes.logo.data.id`;
export {
  API_URL,
  REGEXFOREMAIL,
  PROFILEIMAGEURLPATH,
  PROFILEIMAGENAME,
  PROFILEIMAGEID,
  COMPANYLOGOID,
};
// create .env file in at the root folder(same folder where package.json is) and write following two lines and restart the app
// REACT_APP_API_URL = 'https://uteam-api-7nngy.ondigitalocean.app/'
// REACT_APP_LOCAL_API_URL = 'http://localhost:1337/'
