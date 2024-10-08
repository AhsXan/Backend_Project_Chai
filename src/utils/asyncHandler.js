///backend8
//Title: Asynchronous Error Handling Middleware for Express.js

const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  };
};

export default asyncHandler;
// export {asyncHandler}

// using try catch
// export const asyncHandler = (fn = async (req, res, next) => {
//   try {
//     await fn(req, res, next);
//   } catch (error) {
//     // res.send("Error aya Async Handler me : "+error)
//     res.status(err.code || 500).json({
//       sucess: false,
//       message: err.message,
//     });
//   }
// });

/*

This code defines a middleware function named asyncHandler that can be used to wrap asynchronous routes in Express.js applications. It provides a convenient way to handle errors that might occur within these routes.

Key Features:

Asynchronous Support: Handles asynchronous functions within routes.
Error Handling: Catches and gracefully handles errors that occur during the execution of the route handler.
Customizable Error Response: Allows you to customize the error response sent to the client.

How it Works:

Wraps Route Handler: The asyncHandler function takes a route handler function as an argument.
Asynchronous Execution: It calls the route handler function asynchronously using await.
Error Catching: If an error occurs during the execution of the route handler, it's caught and handled within the catch block.
Custom Error Response: The catch block sends a custom error response to the client, including a status code and an error message.
*/
