import React from 'react';
import {Link} from 'react-router-dom';
import {FiPlus } from 'react-icons/fi';
import mapMarkerImg from '../images/mapMarker.svg';
import {Map, TileLayer} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import '../styles/pages/orphanages-map.css';
import { tileLayer } from 'leaflet';

function OrphanagesMap (){
    return(
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="Happy"/>
                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando sua visita :)</p>
                </header>
                <footer>
                    <strong>Belém do São Francisco</strong>
                    <span>Pernambuco</span>
                </footer>
            </aside>

            <Map 
                center={[-8.7508071,-38.9621533]} 
                zoom={19}
                style={ {width: '100%', height: '100%'}}>
                <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" ></TileLayer>
                </Map>

            <Link to="" className= "create-orphanage">
                <FiPlus size={32} color="#FFF"></FiPlus>
            </Link>

        </div>

    );
}

export default OrphanagesMap;