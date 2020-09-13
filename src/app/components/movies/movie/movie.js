import React from 'react';

const Movie = props => {
    return(
        <div className="grid grid-cols-3 gap-8 my-8 -mx-4">
            <div>
                <img
                    className="w-full border-2 border-gray-300 p-1"
                    src="https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg"
                    alt="Inception" />
            </div>

            <div className="col-span-2">
                <h1 className="text-3xl font-bold leading-tight mb-4">Inception</h1>

                <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae porttitor ante, at pharetra magna. Pellentesque eget nulla in elit elementum ultricies quis vel urna. Fusce purus lacus, sodales et convallis eu, euismod ac ipsum. In rutrum ex tincidunt, sodales leo vitae, commodo magna. Quisque gravida ante ipsum, ut ultrices diam convallis fermentum.</p>
                    
                <h2 className="font-bold text-lg">Ratings:</h2>

                <hr className="my-1" />

                <ul className="text-sm">
                    <li>
                        <span className="font-bold">Metascore:</span> 74
                    </li>
                    <li>
                        <span className="font-bold">IMDB:</span> 8.8
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Movie;
