const { AuthenticationError } = require('apollo-server-express');
const { Matchup, Tech } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        matchups: async () => {
            return Matchup.find();
        },

        matchup: async (parent, { _id }) => {
            return Matchup.findOne({ _id });
        },

        techs: async () => {
            return Tech.find();
        },
    },

    Mutation: {
        addVote: async (parent, {})
    }
}