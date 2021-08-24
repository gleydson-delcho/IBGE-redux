import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import Styles from './styles.module.scss';

interface CountieItem {
  id: number
  nome: string
}

interface CountieProps {
  counties: CountieItem[]
}


const IbgeCounties = () => {

  const [counties, setCounties] = useState([])

  useEffect(() => {
    const uf = JSON.parse(String(localStorage.getItem('State')))
    const request = async () => {
      const response = await api.get(`estados/${uf}/municipios`);
      const counties = response.data;
      setCounties(counties)
    }
    request()
  },[counties])

  const handleChange = (e: any) => {
    const countie = (e.target.value);
    localStorage.setItem('Countie', JSON.stringify(countie))    
    return countie;
  }
  return (
    <>
    {
      counties ?
      <>

      <label className={Styles.label} htmlFor="select">Selecione um estado: </label>
      <select onChange={handleChange}>
        <option value="">Selecionar</option>
        {counties.map((countie: CountieItem) => (
          <option key={countie.id} value={countie.id}>{countie.nome}</option>
        ))}
      </select>
      </>
      :
      <p>Aguarde...</p>
    }
    </>
  );
}


export default IbgeCounties;
