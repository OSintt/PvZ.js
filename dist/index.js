"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const _nodeHttp = require("node:http");
const _graphqlYoga = require("graphql-yoga");
const _indexJs = require("./schemas/index.js");
const yoga = (0, _graphqlYoga.createYoga)({
    schema: _indexJs.schema
});
const server = (0, _nodeHttp.createServer)(yoga);
server.listen(3001, ()=>{
    console.log('Server runnin on port 3001');
});
