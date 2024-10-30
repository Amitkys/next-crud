const prisma = require('app/lib/prisma.ts')

async function main(){
   const todo = await prisma.todo.create({
        data: {
            title: 'first todo',
            description: 'desc of first todo',
            userId: '29542986-706f-42ee-9190-c3fc38e3c734'
        }
    })
}
main();