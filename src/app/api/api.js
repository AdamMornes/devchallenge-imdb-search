import axios from 'axios';

const url = 'https://www.omdbapi.com/?apikey=586d0240';

const movieIds = [
    'tt0389790',
    'tt1375666',
    'tt0076759',
    'tt0242423',
    'tt0120591'
];

export const queryMovies = query => {
    return new Promise((resolve, reject) => {
        axios.post(`${url}&t=${query}`)
            .then(({ data }) => resolve(data))
            .catch(err => reject(err));
    })
}

export const getMovies = new Promise((resolve, reject) => {
    Promise.all( movieIds.map(id => axios.post(`${url}&i=${id}`) ))
        .then(values => resolve(values.map(response => response.data)))
        .catch(err => reject(err));
});
