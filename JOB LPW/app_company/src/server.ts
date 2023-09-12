import fastify from 'fastify';

import { PrismaClient } from '@prisma/client';

 
const app = fastify();

const prisma = new PrismaClient();

app.get('/group', async () => {
    const group = await prisma.group.findMany();
    return group;

});

app.get('/storage', async () => {
    const storage = await prisma.storage.findMany()
    return storage
});

app.get('/products', async () => {
    const products = await prisma.products.findMany()
    return products
});

app.listen({
    port: 3333,
}).then(()=> {
    console.log('http server listening on port 3333')
})