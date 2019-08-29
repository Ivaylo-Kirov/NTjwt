// The SIGN will happen on the server, and the client will only receive the actual token in the RESPONSE

// Then client includes token in BEARER xxxx to get access to protected routes, and the server does the VERIFY

// The whole thing is meant to compete with SESSION MANAGEMENT essentially.. JWT howerver has nice features like inherent expiration option