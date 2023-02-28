# coding-test-ui

Steps to follow for coding test

1. Open a cmd terminal and run the command `yarn install` to install the dependencies
2. Run the command `yarn start` to start the app
3. Verify that app opens up in the browser
4. Click on the tile that is suggested by the interviewer
5. On the left side, you will see the test requirements, on the right side you will see the corresponding component that you have to implement
6. The corresponding component is under `src/{TileName}` directory

# Possible Bugs

There is a known issue where your app may fail to start if you're using a certain version of Node. In that case, the instructur should direct you here. Please do the following:

1. Delete node_modules through the command line (using VS Code will take years)
2. Set the following environment variable `NODE_OPTIONS=--openssl-legacy-provider`
3. Rerun `yarn install` and attempt to run the app again
