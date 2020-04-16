const typeDefs = `
  type Query {
    presets(published: Boolean, limit: Int, skip: Int): [Preset!]!
    preset(id: ID, shortId: String): Preset
  }

  type Mutation {
    createPreset(textType: String!, settings: String!): Preset
    deletePreset(id: ID!): Preset
    publishPreset(id: ID!): Preset
    unpublishPreset(id: ID!): Preset
    likePreset(id: ID!, likes: Int!): Preset
    unlikePreset(id: ID!, likes: Int!): Preset

    login(username: String!, password: String!): User
  }

  type Preset {
    id: ID!
    published: Boolean!
    textType: String!
    dateCreated: String!
    likes: Int!
    settings: String!
    shortId: String
  }

  type User {
    email: String!
    id: ID!
    username: String!
  }

  extend type User {
    token: String
  }
`;

export default typeDefs;
