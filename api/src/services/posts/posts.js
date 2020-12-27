import { request } from 'src/lib/db'
import { gql } from 'graphql-request'

export const posts = async () => {
  const query = gql `
  {
    posts {
      data {
        title
        body
      }
    }
  }
  `
  console.log(request)
  console.log(query)
  const data = await request(query)

  return data['posts']
}
