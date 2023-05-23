import { Elysia, t } from 'elysia'
import { swagger } from '@elysiajs/swagger'

const SignDTO = t.Object({
    username: t.String(),
    password: t.String()
})

function signIn(body: { username: string; password: string }) {
    console.log("body=", body)
    console.log("type=", typeof (body))
    console.log("username=", body.username)
    console.log("password=", body.password)

}

const app = new Elysia()
    .use(swagger())
    .get('/', () => 'Hello Elysia')
    .post('/sign-in', ({ body }) => signIn(body), {
        body: SignDTO
    })
    .listen(3000)

console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`)
