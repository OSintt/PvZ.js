"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "schema", {
    enumerable: true,
    get: ()=>schema
});
const _graphqlYoga = require("graphql-yoga");
const _query = /*#__PURE__*/ _interopRequireDefault(require("./controllers/Query"));
const _schemaGraphQL = /*#__PURE__*/ _interopRequireDefault(require("./controllers/Schema.GraphQL"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const schema = (0, _graphqlYoga.createSchema)({
    typeDefs: _schemaGraphQL.default,
    resolvers: {
        Query: _query.default
    }
});
