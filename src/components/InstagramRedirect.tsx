import { useEffect } from 'react';

const InstagramRedirect = () => {
    useEffect(() => {
        window.location.href = 'https://www.instagram.com/deva_nandan_09/';
    }, []);

    return (
        <div className="min-h-screen flex items-center justify-center bg-background">
            <div className="text-center">
                <h1 className="text-2xl font-bold mb-4">Redirecting to Instagram...</h1>
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary mx-auto"></div>
            </div>
        </div>
    );
};

export default InstagramRedirect;
