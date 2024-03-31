const z = require('zod')

const schema = z.string().email()

const response = schema.parse("araj053@gmail")

console.log(response)
