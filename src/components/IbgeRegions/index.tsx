import React, { useEffect, useState } from 'react';
import api from '../../services/api';

interface Micro {
    id?: number
    nome?: string
}
interface Meso {
    id?: number
    nome?: string
}

interface RegionItem {
    id?: number
    nome?: string
    municipio?: Micro[]
    microrregiao?: Micro[]
    mesoregiao?: Meso[]
}



const IbgeRegions = () => {

    const [districts, setDistricts] = useState([])

    useEffect(() => {
        const countie = JSON.parse(String(localStorage.getItem('Countie')))
        const request = async () => {
            const response = await api.get(`municipios/${countie}/distritos`);
            const counties = response.data;
            setDistricts(counties);
        }
        request()
    }, [districts])

    return (
        <div className="dados">
            <h1>Dados:</h1>
            {
                districts.map((item: RegionItem) => {
                    return <ul key={item.id}>
                        <li key={item.id}>
                            {item.id}
                        </li>
                        <li key={item.id}>
                            {item.nome}
                        </li>
                    </ul>
                })
            }
        </div>
    )
}
export default IbgeRegions;