import {hash} from 'bcryptjs';
import AppError from '@shared/errors/AppError';
import User from '../infra/typeorm/entities/User';
import IUsersRepository from '../repositories/IUsersRepository';

interface IRequest{
  name:string;
  email:string;
  password:string;
}

class CreacteUserService{
  constructor(private usersRepository: IUsersRepository) {}

 public async execute({name, email, password}:IRequest):Promise<User>{
  const checkUserExist=await this.usersRepository.findByEmail(email);

  if(checkUserExist){
    throw new AppError('email address already used' )
  }

  const hashPassword = await hash(password, 8);

  const user = await this.usersRepository.create({
    name,
    email,
    password:hashPassword
  });

  return user
 }
}

export default CreacteUserService;
