import React from 'react';

export const MadeWithLove = () => {
    return (
        <div className="fixed bottom-4 left-0 right-0 flex justify-center z-50 pointer-events-none">
            <div className="bg-pink-500/10 text-pink-300 px-4 py-2 rounded-full 
                            flex items-center space-x-2 
                            shadow-md hover:bg-pink-500/20 transition-all duration-300
                            text-sm">
                <span>Made with</span>
                <span className="text-red-500 animate-pulse">❤️</span>
                <span>by Yalda</span>
            </div>
        </div>
    );
};