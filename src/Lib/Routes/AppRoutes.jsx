import React from 'react';
import { Routes, Route } from 'react-router-dom';
import UseForm from '../../Components/Form/UseForm';
import UseFieldArray from '../../Components/Form/UseFieldArray';
import routes from './routes';
import NavBar from '../../Components/NavBar';
import FileHandling from '../../Components/Form/FileHandling';

export default function AppRoutes() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path={routes.home.fullPath} element={<><h1>Home</h1></>} />
        <Route path={routes.useForm.fullPath} element={<UseForm />} />
        <Route path={routes.useFieldArray.fullPath} element={<UseFieldArray />} />
        <Route path={routes.fileHandling.fullPath} element={<FileHandling />} />
      </Routes>
    </>
  );
}
