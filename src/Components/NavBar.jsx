import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../Lib/Routes/routes';

export default function NavBar() {
  return (
    <>
      <section>
        <ul className='nav-ul'>
          <li><Link className='nav-link' to={routes.home.fullPath}>Home</Link></li>
          <li><Link className='nav-link' to={routes.useForm.fullPath}>useForm</Link></li>
          <li><Link className='nav-link' to={routes.useFieldArray.fullPath}>useFieldArray</Link></li>
          <li><Link className='nav-link' to={routes.fileHandling.fullPath}>fileHandling</Link></li>
        </ul>
      </section>
    </>
  );
}
