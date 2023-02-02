"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "schema", {
    enumerable: true,
    get: ()=>schema
});
const _apolloServer = require("apollo-server");
const _graphqlYoga = require("graphql-yoga");
const _plantsControllers = require("./controllers/plants.controllers");
const _plants = /*#__PURE__*/ _interopRequireDefault(require("../models/Plants"));
const _graphql = require("graphql");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const typeDefs = (0, _apolloServer.gql)`
  type Query {
    zombie(name: String!): Zombie!
    plant(name: String!): Plant!
    area(name: String!): Area!
    achivement(name: String!): Achievement!
  }

  type Plant {
    _id: ID!
    name: String!
    image: String!
    sun_cost: Int!
    recharge: String
    boost: Boolean
    damage: String
    toughness: String
    range: String
    usage: String
  }

  type Zombie {
    _id: ID!
    name: String!
    image: String!
    toughness: String
    damage: Int
    absorbs: Int
    sun_cost: Int
    brain_cost: Int
  }

  type Area {
    _id: ID!
    name: String!
    image: String!
    number_of_levels: Int
    plants: [Plant]
    zombies: [Zombie]
    to_unlock: String!
  }

  type Achievement {
    _id: ID!
    name: String!
    description: String
    image: String!
  }
`;
const schema = (0, _graphqlYoga.createSchema)({
    typeDefs,
    resolvers: {
        Query: {
            plant: async (_, args)=>{
                const plant = await _plants.default.findOne({
                    name: args.name
                });
                if (!plant) throw new _graphql.GraphQLError(`Plant with name ${args.name} not found`);
                return plant;
            }
        }
    }
});
