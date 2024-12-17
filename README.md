# Uninformative Error Handling in TypeScript Function

This repository demonstrates a common error in TypeScript where error handling is implemented but does not provide sufficient information to diagnose the issue. The `handleError` function in `bug.ts` only logs 'An error occurred:' followed by the error message, which may not be enough to understand the root cause.  The `bugSolution.ts` file shows how to improve this error handling.

## How to reproduce

1. Clone the repository.
2. Compile and run `bug.ts`.
3. Observe the uninformative error message.