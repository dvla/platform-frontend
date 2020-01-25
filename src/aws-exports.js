const dev = {
  Auth: {
    identityPoolId: 'eu-west-2:f6bc2a55-25f4-4844-b308-47afcd12a577',
    region: 'eu-west-2',
    userPoolId: 'eu-west-2_0W6smmkSs',
    userPoolWebClientId: '3307n637gdg6ood5jvd1n8btpq',
    oauth: {
      domain: 'auth-ss-platform.auth.eu-west-2.amazoncognito.com',
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
        endpoint:
          'https://jd2ms9t2v1.execute-api.eu-west-2.amazonaws.com/auth/nonprod/'
      }
    ]
  }
};

const prod = {
  Auth: {
    identityPoolId: 'eu-west-2:f6bc2a55-25f4-4844-b308-47afcd12a577',
    region: 'eu-west-2',
    userPoolId: 'eu-west-2_0W6smmkSs',
    userPoolWebClientId: '3307n637gdg6ood5jvd1n8btpq',
    oauth: {
      domain: 'auth-ss-platform.auth.eu-west-2.amazoncognito.com',
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
        endpoint:
          'https://jd2ms9t2v1.execute-api.eu-west-2.amazonaws.com/auth/nonprod/'
      }
    ]
  }
};

const awsmobile = process.env.REACT_APP_STAGE === 'production' ? prod : dev;

export default awsmobile;
