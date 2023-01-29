import React from 'react';
import './ServiceTable.scss';

const ServiceTable = () => {
    return (
        <div className='service-table-container'>
            <table className='service-table'>
                <tr className='service-table-header'>
                    <th>Identificador</th>
                    <th>Nombre de análisis</th>
                    <th>Estado</th>
                    <th>Detalle</th>
                </tr>
                <tr className='service-table-body'>
                    <td>123</td>
                    <td>(4;14) TRANSLOCACION CROMOSOMICA (FGFR3/IGH), FISH MEDULA OSEA	</td>
                    <td>Disponible</td>
                    <td>
                        <button>
                            Ver
                        </button>
                    </td>
                </tr>          
            </table>
        </div>
    )
}

export default ServiceTable;