import DBLocal from 'db-local';
import crypto from 'crypto';

import { Schema } = new DBLocal({path: './db' })

const User = Schema('User', {
  _id: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true }
})

export class UserRepository {
  static create ({ username, password }) {

    if(typeof username !== 'string') throw new Error('username debe ser un string')
    if(username.length  < 3) throw new Error('Username debe ser mayor de 3 caracteres')
    
    if(typeof password !== 'string') throw new Error('password debe ser un string')
    if(username.length  < 6) throw new Error('password debe ser mayor de 6 caracteres')
    
    const user = User.findOne({username})
    if(user) throw new Error('Usuario ya existe')

    const id = crypto.randomUUID();

    User.create({
        _id: id,
        username,
        password
    }).save()

    return id;

  }
  static login ({ username, password }) {}
}
