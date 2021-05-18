import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchAppointments from '../redux/appointments/get/appointmentActions';
import ReactLoading from 'react-loading';
import styles from '../assets/scss/appointments.module.scss';

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
    }, 3000);
  }, []);

  const appointments = useSelector((state) => state.appointments.appointments);
  return (
    <div>
      {!loadingComplete ? (
        <div className={`${styles.loading}`}>
          <ReactLoading type="bars" color="grey" height={70} width={80} />
        </div>
      ) : (
        <div>{JSON.stringify(appointments)}</div>
      )}
    </div>
  );
};

export default Appointments;
