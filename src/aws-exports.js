const dev = {
  Auth: {
    identityPoolId: 'eu-west-2:06c92ab8-3994-408a-8cd7-3f7a85669d40',
    region: 'eu-west-2',
    userPoolId: 'eu-west-2_Cu3HQIN1H',
    userPoolWebClientId: '1v4i4f7pourkoi4pnm2v7cu529',
    oauth: {
      domain: 'int-platform.auth.eu-west-2.amazoncognito.com',
      scope: ['phone', 'email', 'profile'],
      redirectSignIn: 'http://localhost:3000',
      redirectSignOut: 'http://localhost:3000',
      responseType: 'code'
    }
  },
  API: {
    endpoints: [
      {
        name: 'backend',
        region: 'eu-west-2',
        endpoint: 'https://6smehzhm0a.execute-api.eu-west-2.amazonaws.com/int/'
      }
    ]
  }
};

const prod = {
  Auth: {
    identityPoolId: 'eu-west-2:06c92ab8-3994-408a-8cd7-3f7a85669d40',
    region: 'eu-west-2',
    userPoolId: 'eu-west-2_Cu3HQIN1H',
    userPoolWebClientId: '1v4i4f7pourkoi4pnm2v7cu529',
    oauth: {
      domain: 'int-platform.auth.eu-west-2.amazoncognito.com',
      scope: ['phone', 'email', 'profile'],
      redirectSignIn: 'https://platform.tooling.dvla.gov.uk',
      redirectSignOut: 'https://platform.tooling.dvla.gov.uk',
      responseType: 'code'
    }
  },
  API: {
    endpoints: [
      {
        name: 'backend',
        region: 'eu-west-2',
        endpoint: 'https://6smehzhm0a.execute-api.eu-west-2.amazonaws.com/int/'
      }
    ]
  }
};

const awsmobile = process.env.REACT_APP_STAGE === 'production' ? prod : dev;

export default awsmobile;
