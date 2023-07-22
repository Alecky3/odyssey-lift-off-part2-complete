import { Resolvers } from "./types"

export const resolvers: Resolvers = {
    Query: {
        tracksForHome: (parent, args, {datasources}, info) => {
            return datasources.trackAPI.getTracksForHome()
        }
    },
    Track : {
        author: ({authorId}, _, {datasources}) => {
            return datasources.trackAPI.getAuthor(authorId)
        }
    }
}