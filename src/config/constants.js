const COGNITO = {
  REGION: 'us-east-1',
  USER_POOL_ID: 'us-east-1_kOuqOxe1b',
  APP_CLIENT_ID: '4rsvc75ra5l090h1bcfem9al55'
};

const APIS = {
  PLAYERSTARS: 'playerstars-api'
};

const STAGES = {
  dev: {
    COGNITO,
    APIS,
    DOMAIN: "https://mb45dn63b2.execute-api.us-east-1.amazonaws.com/dev/admin/"
  },
  stg: {
    COGNITO,
    APIS,
    DOMAIN: 'https://sgag9twe0k.execute-api.us-east-1.amazonaws.com/stg/admin/',
  },
  prd: {
    COGNITO,
    APIS,
    DOMAIN: "https://mb45dn63b2.execute-api.us-east-1.amazonaws.com/dev/admin/",
  }
};

const env = process.env.REACT_APP_STAGE || 'stg';
const config = STAGES[env];

export default config; 