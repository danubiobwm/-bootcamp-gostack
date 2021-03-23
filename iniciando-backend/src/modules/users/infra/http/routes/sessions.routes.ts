import { Router } from 'express';
import { container } from 'tsyringe';

import AuthenticateUserService from '@modules/users/services/AuthenticateUserService'

const sessionsRouter = Router();


sessionsRouter.post('/', async (resquest, response) => {

  const {email, password} = resquest.body;


  const authenticateUser = container.resolve(AuthenticateUserService);

  const {user, token} = await authenticateUser.execute({ email, password});

  const userWithoutPassword={
    id:user.id,
    name:user.name,
    email:user.email,
    created_at: user.created_at,
    updated_at: user.updated_at,
  }

    return response.json({user: userWithoutPassword, token});


});

export default sessionsRouter;
