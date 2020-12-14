import { response, Router } from 'express';
import { uuid } from 'uuidv4';
import { parseISO, startOfHour, isEqual } from 'date-fns'

interface IAppointment {
  id: string;
  provider: string;
  date: Date;

}

const appointmentsRouter = Router();

const appointments: IAppointment[] = [];

appointmentsRouter.post('/', (resquest, response) => {
  const { provider, date } = resquest.body;

  const parsedDate = startOfHour(parseISO(date));

  const findAppointmentInSameDate = appointments.find(appointment =>
    isEqual(parsedDate, appointment.date),
  );


  if (findAppointmentInSameDate) {
    return response.status(400).json({ message: 'this appointment is alreadt booked' })
  }

  const appointment = {
    id: uuid(),
    provider,
    date: parsedDate,
  }
  appointments.push(appointment)

  return response.json(appointment);
})

export default appointmentsRouter;


