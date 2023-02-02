import { createServer } from 'node:http';
import { createYoga } from 'graphql-yoga';
import { schema } from './schemas/index.js';


const yoga = createYoga({ schema })
const server = createServer(yoga);

server.listen(3001, () => {
    console.log('Server runnin on port 3001');
});