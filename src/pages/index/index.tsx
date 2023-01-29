import * as React from 'react';
import AlphabeticSearch from '../../components/alphabeticSearch/AlphabeticSearch';
import HeaderTable from '../../components/headerTable/HeaderTable';
import MainNavbar from '../../components/navbar/MainNavbar';
import ServiceTable from '../../components/serviceTable/ServiceTable';
import './index.scss';

const Index = () => {
    return (
        <>
            <header>
                <MainNavbar />
            </header>
            <main>
                <div className='header-table'>
                    <HeaderTable />
                </div>
                <div className='table-body-container'>
                    <h2 className='secondary-title'>
                        Busca un Análisis
                    </h2>
                    <div className="search-container">
                        <p className='input-title'>
                            Búsqueda específica
                        </p>
                        <input 
                            type="text"
                            placeholder='Buscar análisis'
                            className='text-search-input'
                        />
                    </div>
                    <div className='alphabetical-search-main-container'>
                        <div className='alphabetical-search-title-container'>
                             <p className='input-title'>
                                Búsqueda alfabética
                             </p>                        
                            <button>
                                Todos
                            </button>
                        </div>
                        <AlphabeticSearch />
                    </div>
                </div>
                <div className='result-table'>
                    <ServiceTable />
                </div>

            </main>
        </>
    )
}

export default Index;