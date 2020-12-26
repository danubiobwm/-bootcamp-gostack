import { Router } from 'express';
import AuthenticateUserService from '../services/AuthenticateUserService'

const sessionsRouter = Router();



sessionsRouter.post('/', async (resquest, response) => {

  const {email, password} = resquest.body;
  const authenticateUser= new AuthenticateUserService();

  const {user, token} = await authenticateUser.execute({ email, password});

  const userInSessin={
    id:user.id,
    name:user.name,
    email:user.email,
    created_at: user.created_at,
    updated_at: user.updated_at,
  }

    return response.json({userInSessin, token});


});

export default sessionsRouter;
