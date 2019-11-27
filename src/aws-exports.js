const awsmobile = {	
    "Auth": {	
        "identityPoolId": "eu-west-2:06c92ab8-3994-408a-8cd7-3f7a85669d40",	
        "region": "eu-west-2",	
        "userPoolId": "eu-west-2_Cu3HQIN1H",	
        "userPoolWebClientId": "1v4i4f7pourkoi4pnm2v7cu529",	
        "oauth": {	
            "domain": "int-platform.auth.eu-west-2.amazoncognito.com",	
            "scope": [	
                "phone",	
                "email",	
                "profile"	
            ],	
            "redirectSignIn": "http://localhost:3000",	
            "redirectSignOut": "http://localhost:3000",	
            "responseType": "code"	
        }	
    }	
};	


export default awsmobile;