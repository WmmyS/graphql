import { Resolver, Query, Mutation, Arg, Ctx } from 'type-graphql';
import { User } from '../models/User';
import { randomUUID } from 'crypto';

@Resolver()
export class UserResolver {
    private data: User[] = [];

    @Query(() => [User])
    async users() {
        return this.data;
    }

    @Mutation(() => User)
    async createUser(
        @Arg('name') name: string) {

        const user = new User();
        user.id = randomUUID();
        user.name = name;

        this.data.push(user);
        return user;
    }
}