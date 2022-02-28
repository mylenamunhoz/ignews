/* eslint-disable import/no-anonymous-default-export */
import { NextApiRequest, NextApiResponse } from 'next';

export default (request: NextApiRequest, response: NextApiResponse) => {
  const users = [
    {id: 1, name: 'Mylena'},
    {id: 2, name: 'Mel'},
    {id: 3, name: 'Edleusa'}
  ]

  return response.json(users)
}