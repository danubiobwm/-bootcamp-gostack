import { uuid } from 'uuidv4';
import { isEqual } from 'date-fns';

import ICreateAppointmentDTO from '@modules/appointments/dtos/ICreateAppointmentDTO';
import Appointment from '../../infra/typeorm/entities/Appointment';
import IAppointmentsRepository from '../IAppointmentsRepository';
import IFindAllInDayFromProviderDTO from '@modules/appointments/dtos/IFindAllInDayFromProviderDTO';
import IFindAllInMonthFromProviderDTO from '@modules/appointments/dtos/IFindAllInMonthFromProviderDTO';


class FakeAppointmentsRepository implements IAppointmentsRepository {
  findAllInMonthFromProvider(data: IFindAllInMonthFromProviderDTO): Promise<Appointment[]> {
    throw new Error('Method not implemented.');
  }
  findAllInDayFromProvider(data: IFindAllInDayFromProviderDTO): Promise<Appointment[]> {
    throw new Error('Method not implemented.');
  }
  private appointments: Appointment[] = [];

  public async findByDate(date: Date): Promise<Appointment | undefined> {
    const findAppointment = this.appointments.find(
      appointment => isEqual(appointment.date, date),
    );

    return findAppointment;
  }

  public async create({
    provider_id,
    date,
  }: ICreateAppointmentDTO): Promise<Appointment> {
    const appointment = new Appointment();

    Object.assign(appointment, { id: uuid(), date, provider_id });

    this.appointments.push(appointment);

    return appointment;
  }
}

export default FakeAppointmentsRepository;
