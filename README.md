# DFX Staging Environment Example

## Dfx.json

Dfx.json contains a config that points sets up a staging environment, on the IC mainnet. By deploying with `dfx deploy --network staging`, you can deploy to the staging environment, using a different canister than when you deploy to `dfx deploy --network ic`.

## Before deploying

You will need to configure DFX to use your mainnet cycles wallet for the staging environment. Run this command to configure DFX automatically:

```
dfx identity --network staging set-wallet $(dfx identity --network ic get-wallet)
```

> Note - this workflow is broken in 0.9.x releases. You can upgrade to 0.10.x to fix this. As of today, 0.10.0-beta.0 is available to test.

## Frontend

By using the `DFX_NETWORK` environment variable in webpack, you can determine which environment you are in during development.

in index.js, we can use that to perform a check to see if we are in a staging or local environment, and we can then conditionally reveal a header banner that identifies the website as a staging environment.
