# sdaosubgraph
subgraph for SDAO token


The Graph exposes a GraphQL endpoint to query the events and entities within the SingularityDao ecosytem.

Master Chef: Indexes all MasterChef staking data: https://thegraph.com/studio/subgraph/singularity/

To build and deploy
Install graph-CLI : yarn global add @graphprotocol/graph-cli or npm install -g @graphprotocol/graph-cli
Authenticate within the CLI, build and deploy your subgraph to the Studio : graph auth --studio [API_KEY]
Build the Subgraph graph codegen && graph build
Deploy the Subgraph graph deploy --studio [SUBGRAPH_NAME].

graph endpoint
https://api.studio.thegraph.com/query/6691/sdao-token/v0.0.7

Example Queries

{
  users(first: 5) {
    id
    address
    balance
    transactionCount
  }
  userCounters(first: 5) {
    id
    count
  }
}
