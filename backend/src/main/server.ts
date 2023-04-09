import { buildSchema } from "type-graphql"
import path from "path"
import { ApolloServer } from "apollo-server"
import "reflect-metadata"

async function main() {
    const schema = await buildSchema({
        resolvers: [__dirname + "/../resolvers/*.ts"],
        emitSchemaFile: path.resolve(__dirname, "../../schema.gql")
    })

    const server = new ApolloServer({
        schema,
    })

    const { url } = await server.listen()
    console.log(`Servidor está rodando em ${url}`)

}

main();