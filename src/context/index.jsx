import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';

const VideoContext = React.createContext();

export const useVideoContext = () => {
    return useContext(VideoContext);
};

export const VideoProvider = ({ children }) => {
    const [videos, setVideos] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedVideo, setSelectedVideo] = useState(null);

    useEffect(() => {
        fetchVideos();
    }, []);

    const fetchVideos = async () => {
        try {
            const response = await axios.get('https://aluraflix-ca481-default-rtdb.firebaseio.com/videos.json');
            
            // Check if response.data is an object (Firebase format)
            if (response.data && typeof response.data === 'object') {
                // Convert object to array
                const videosArray = Object.keys(response.data).map(key => ({
                    id: key,
                    ...response.data[key]
                }));
    
                // Filter out null values if necessary
                const filteredVideos = videosArray.filter(video => video !== null);
    
                // Update state with filtered videos
                setVideos(filteredVideos);
            } else {
                console.error('Invalid response data format:', response.data);
            }
        } catch (error) {
            console.error('Error fetching videos:', error);
        }
    };
    

    const handleSaveVideo = async (editedVideo) => {
        try {
            // Actualizar el video en la base de datos (si es necesario)
            await axios.put(`https://aluraflix-ca481-default-rtdb.firebaseio.com/videos/${editedVideo.id}.json`, editedVideo);
    
            // Actualizar el estado local
            setVideos(prevVideos => {
                return prevVideos.map(video => video.id === editedVideo.id ? editedVideo : video);
            });
            fetchVideos();
            // Cerrar el modal
            closeModal();
            
        } catch (error) {
            console.error('Error updating video:', error);
        }
    };
    

    const handleAddVideo = (newVideo) => {
        const tempId = videos.length ? videos[videos.length - 1].id + 1 : 1;
        const videoConId = { ...newVideo, id: tempId };

        setVideos(prevVideos => [...prevVideos, videoConId]);
    };

    const handleDeleteVideo = async (videoId) => {
        try {
            // Verificar si el video existe en la base de datos
            const videoExistsInApi = videos.some(video => video.id === videoId);
    
            if (videoExistsInApi) {
                // Eliminar el video de la base de datos
                await axios.delete(`https://aluraflix-ca481-default-rtdb.firebaseio.com/videos/${videoId}.json`);
            }
           
            // Actualizar el estado local eliminando el video
            setVideos(prevVideos => prevVideos.filter(video => video.id !== videoId));

        } catch (error) {
            console.error('Error eliminando video:', error);
        }
    };
    

    const openModal = (video) => {
        setSelectedVideo(video);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setSelectedVideo(null);
        setIsModalOpen(false);
    };

    const videoContextValue = {
        videos,
        fetchVideos,
        handleSaveVideo,
        handleAddVideo,
        handleDeleteVideo,
        isModalOpen,
        openModal,
        closeModal,
        selectedVideo,
    };

    return (
        <VideoContext.Provider value={videoContextValue}>
            {children}
        </VideoContext.Provider>
    );
};
