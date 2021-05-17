import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchAppointments from '../redux/appointments/get/appointmentActions';

const Appointments = () => {
  const [loadingComplete, setLoadingComplete] = useState(false);
  const dispatch = useDispatch();
  const authToken = useSelector((state) => state.signup.user.auth_token);
  useEffect(() => {
    setTimeout(() => {
      (async () => {
        await dispatch(fetchAppointments(authToken));
      })();
      setLoadingComplete(true);
    }, 2000);
  }, []);

  const appointments = useSelector((state) => state.appointments.appointments);
  return (
    <div>
      {!loadingComplete ? (
        <div>
          <h2>Loading....</h2>
        </div>
      ) : (
        <div>{JSON.stringify(appointments)}</div>
      )}
    </div>
  );
};

export default Appointments;
