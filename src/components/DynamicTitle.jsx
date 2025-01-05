import React, { useEffect } from 'react';
import {  useLocation } from 'react-router-dom';

const DynamicTitle = () => {
    const location = useLocation();


    
    const titles = {
        '/': 'EcoTrek Asia',
        '/profile': 'My Profile - EcoTrek Asia',
        '/update-pro': 'Update Profile - EcoTrek Asia',
        '/register': 'Register - EcoTrek Asia',
        '/login': 'Login - EcoTrek Asia',
        '/adventure':'Adventure -EcoTrek Asia',
        '/about':'About - EcoTrek Asia',
    };

    useEffect(() => {
        const currentPath = location.pathname;
        const pageTitle = titles[currentPath] || 'EcoTrek Asia';
        document.title = pageTitle;
    }, [location]);

    return null; 
};

export default DynamicTitle;
