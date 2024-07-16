import React from 'react';
import CardVideo from '../../components/Cards';
import Modal from '../../components/Modal';
import { useVideoContext } from '../../context';
import { InicioContainer, Categoria, Nombre, Video } from './InicioPageStyles';

const colorPorDefecto = '#CCCCCC';

const categoriasColores = {
    'Front End': 'var(--color-frontend)',
    'BackEnd': 'var(--color-backend)',
    'Innovacion y Gestion': 'var(--color-innovacionygestion)',
};

const InicioPage = () => {
    const { videos } = useVideoContext();

    return (
        <InicioContainer>
            {Object.keys(categoriasColores).map(categoriaNombre => (
                <Categoria key={categoriaNombre}>
                    <Nombre style={{ backgroundColor: categoriasColores[categoriaNombre] || colorPorDefecto }}>
                        {categoriaNombre}
                    </Nombre>
                    <Video>
                        {videos
                            .filter(video => video.categoria === categoriaNombre)
                            .map(video => (
                                <CardVideo
                                    key={video.id}
                                    video={video}
                                    categoriaColor={categoriasColores[categoriaNombre]}
                                />
                            ))}
                    </Video>
                </Categoria>
            ))}
            <Modal />
        </InicioContainer>
    );
};

export default InicioPage;
