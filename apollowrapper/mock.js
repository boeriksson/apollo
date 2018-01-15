import {
    graphql,
    print,
} from 'graphql';

export function mockNetworkInterfaceWithSchema(options) {
    return {
        query(request) {
            return graphql(options.schema, print(request.query), {}, {}, request.variables, request.operationName);
        },
    }
}
