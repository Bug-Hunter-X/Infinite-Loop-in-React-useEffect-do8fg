# React useEffect Infinite Loop Bug
This repository demonstrates a common error in React's `useEffect` hook: causing an infinite loop by incorrectly updating state within the effect itself without dependencies. 

The `bug.js` file contains the erroneous code. The `bugSolution.js` shows the corrected version.

## How to Reproduce
1. Clone this repository.
2. Run `npm install` to install dependencies (if any).
3. Run the application using your preferred React development server (e.g., `npm start`).
4. Observe the counter infinitely incrementing in the `bug.js` example.