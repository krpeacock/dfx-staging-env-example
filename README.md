# DFX Staging Environment Example

## Dfx.json

Dfx.json contains a config that points sets up a staging environment, on the IC mainnet. By deploying with `dfx deploy --network staging`, you can deploy to the staging environment, using a different canister than when you deploy to `dfx deploy --network ic`.

## Frontend

By using the `DFX_NETWORK` environment variable in webpack, you can determine which environment you are in during development.

in index.js, we can use that to perform a check to see if we are in a staging or local environment, and we can then conditionally reveal a header banner that identifies the website as a staging environment.
