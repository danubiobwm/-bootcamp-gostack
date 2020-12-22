import { Router } from 'express';
import { parseISO } from 'date-fns';
import { getCustomRepository } from 'typeorm';
import AppointmentsRepository from '../repositories/AppointmentsRepository';
import CreateAppointmentService from '../services/CreateAppointmentService';
import ensureAuthenticated from '../middlewares/ensureAuthenticated'

const appointmentsRouter = Router();

appointmentsRouter.use(ensureAuthenticated);

appointmentsRouter.get('/',async (resquest, response) => {



  const appointmentsRepository = getCustomRepository(AppointmentsRepository)

  const appointments = await appointmentsRepository.find();
  return response.json(appointments);
});

appointmentsRouter.post('/', async (resquest, response) => {

  try {
    const { provider_id, date } = resquest.body;
    const parsedDate = parseISO(date);

    const createAppointment = new CreateAppointmentService();

    const appointment = await createAppointment.execute({ date: parsedDate, provider_id })

    return response.json(appointment);

  } catch (err) {
    return response.status(400).json({ error: err.message })
  }

});

export default appointmentsRouter;
