const awsmobile = {
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

export default awsmobile;
