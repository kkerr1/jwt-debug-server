# JWT Debug Server

A very barebones implementation of an endpoint that expects authentication via a JWT Authorization Bearer header.

If auth fails, an error will be returned. If auth succeeds a success message with the JWT Token's payload will be returned. 
