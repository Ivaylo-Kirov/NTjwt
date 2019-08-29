const jwt = require('jsonwebtoken');

const mockUser = {
    id: 1,
    name: "Ivaylo"
}

let signedToken;

jwt.sign({mockUser: mockUser}, 'secret', (err, token) => {
    if (err) console.log(err);
    if (token) {
        console.log(token);
        signedToken = token;
        compare();
    }
});

// this prints out the hashed token

// usually it's returned after making an /api/login call and stored in localStorage so that subsequent API calls can include it

// those subsequent calls then grab the "Bearer xxxxx" and compare the xxxxx with jwt.verify(xxxx, 'secret', (err, authData)))

function compare() {
    jwt.verify(signedToken, 'secret', (err, authData) => {
        if (err) {
            console.log(err);
        } else {
            console.log(authData);
        }
    });

}

// authData now is the mockUser json from above ({ mockUser: { id: 1, name: 'Ivaylo' }})

// The SIGN will happen on the server, and the client will only receive the actual token in the RESPONSE

// Then client includes token in BEARER xxxx to get access to protected routes, and the server does the VERIFY

// The whole thing is meant to compete with SESSION MANAGEMENT essentially.. JWT howerver has nice features like inherent expiration option