import React from 'react'

const Footer = () => {
    return (
        <footer className="text-black py-8 px-4 mt-12">
            <div className="max-w-4xl mx-auto flex flex-col items-center space-y-4 sm:space-y-6 md:space-y-8">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-300">Workami</h1>
                <div>
                    <p className="text-gray-500 text-base sm:text-lg md:text-xl font-crimson-text text-center">
                        Your go-to platform for job searching.
                    </p>
                </div>
                <p className="text-gray-400 text-base sm:text-lg md:text-xl text-center">
                    Crafted with <span className="text-red-500">❤️</span>
                </p>
            </div>
        </footer>
    )
}

export default Footer