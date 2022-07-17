import { Circles } from 'react-loader-spinner';
import { useSelector } from 'react-redux';
import s from './loader.module.css';

export function Loader() {
  const loader = useSelector(state => state.contacts.isLoading);
  return (
    <div className={s.contactsContainer}>
      {loader && <Circles ariaLabel="loading-indicator" />}
    </div>
  );
}
