// The SIGN will happen on the server, and the client will only receive the actual token in the RESPONSE

// Then client includes token in BEARER xxxx to get access to protected routes, and the server does the VERIFY

// The whole thing is meant to compete with SESSION MANAGEMENT essentially.. JWT however has nice features like inherent expiration option

* Round 2 - 
// Article (http://cryto.net/~joepie91/blog/2016/06/13/stop-using-jwt-for-sessions/) suggests some other pros and cons, but, while interesting, didn't change my perspective much 

// When server "unpacks" the token from the BEARER Auth header, it gets access to that object so it can make DB calls with it or whatever else is neeed to give the user a pertinent response