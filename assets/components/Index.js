import React, { useEffect, useState } from 'react';
import { Button, Rating, Spinner } from 'flowbite-react';

const Index = props => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchMovies = (field = '') => {
    setLoading(true);
    return fetch('/api/movies' + '?' + field)
      .then(response => response.json())
      .then(data => {
        setMovies(data.movies);
        setLoading(false);
      });
  }

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <Layout>
      <Heading onOrderClick={(field) => fetchMovies(field)} />
      <MoviesForm />

      <MovieList loading={loading} movies={movies}>
        {movies.map((item, key) => (
          <MovieItem key={key} {...item} />
        ))}
      </MovieList>
    </Layout>
  );
};

const MoviesForm = props => {
  const [selectValue, setSelectValue] = useState('');
  const [movies, setMovies] = useState([]);
  const [responseData, setResponseData] = useState(null);
  const [loading, setLoading] = useState(false);
  
  const handleSubmit = (event) => {
    event.preventDefault();
  
    // Imposta la variabile di stato 'loading' su true per mostrare uno spinner
    setLoading(true);
  
    // Crea un oggetto FormData con il valore selezionato nella select
    const formData = new FormData();
    formData.append('genres_select', selectValue);
  
    // Invia i dati al controller tramite richiesta Fetch
    fetch('/api/genres', {
      method: 'POST',
      body: formData,
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Errore nella richiesta');
      }
      return response.json();
    })
    .then(data => {
      // Imposta i dati della risposta nello stato
      setResponseData(data);

      setMovies(data.movies);
      setLoading(false); // Imposta la variabile di stato 'loading' su false per nascondere lo spinner
    })
    .catch(error => {
      console.log(error);
      setLoading(false); // Imposta la variabile di stato 'loading' su false per nascondere lo spinner
    });
  };


  const handleSelectChange = (event) => {
    setSelectValue(event.target.value);
  };

  return (
    <div>
      <h3>Ordina per genere</h3>
      <form onSubmit={handleSubmit} className='my-5'>
      <select name="genres_select" value={selectValue} onChange={handleSelectChange}>
      <option value="">Seleziona genere</option>
      <option value="Action">Azione</option>
      <option value="Adventure">Avventura</option>
      <option value="Animation">Animazione</option>
      <option value="Comedy">Commedia</option>
      <option value="Crime">Crimine</option>
      <option value="Drama">Drammatico</option>
      <option value="Family">Famiglia</option>
      <option value="Fantasy">Fantasia</option>
      <option value="History">Storia</option>
      <option value="Horror">Orrore</option>
      <option value="Music">Musica</option>
      <option value="Mystery">Mistero</option>
      <option value="Romance">Romanzo</option>
      <option value="Sci-Fi">Fantascienza</option>
      <option value="Sport">Sport</option>
      <option value="Thriller">Thriller</option>
      <option value="War">Guerra</option>
      </select>
      <button type="submit" className='ml-2 border p-3'>Invia</button>
    </form>
    

    {loading &&
        <div>Sto caricando...</div>
      }


    {responseData &&
        <div>
          <p>Ecco i film di questi genere:</p>
          <pre>{JSON.stringify(responseData, null, 2)}</pre>
          <MovieList movies={movies} />
        </div>
      }
    </div>

    
  );
}

const Layout = props => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        {props.children}
      </div>
    </section>
  );
};

const Heading = ({ onOrderClick }) => {
  const onFilterClick = event => {
    console.log(event.target.value);
    onOrderClick('rating', event.target.value)
  }
  return (
    <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
      <h1 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
        Movie Collection
      </h1>

      <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
        Explore the whole collection of movies
      </p>
      
      <Button className='my-8' onClick={() => onOrderClick('rating')}>Ordina per rating</Button>
      <Button onClick={() => onOrderClick('')}>Ordina per più recenti</Button>
    </div>
  );
};

const MovieList = props => {
  if (props.loading) {
    return (
      <div className="text-center">
        <Spinner size="xl" />
      </div>
    );
  }

  return (
    <div className="grid gap-4 md:gap-y-8 xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3">
      {props.children}
    </div>
  );
};

const MovieItem = props => {
  return (
    <div className="flex flex-col w-full h-full rounded-lg shadow-md lg:max-w-sm">
      <div className="grow">
        <img
          className="object-cover w-full h-60 md:h-80"
          src={props.image}
          alt={props.title}
          loading="lazy"
        />
      </div>

      <div className="grow flex flex-col h-full p-3">
        <div className="grow mb-3 last:mb-0">
          {props.year || props.rating
            ? <div className="flex justify-between align-middle text-gray-900 text-xs font-medium mb-2">
                <span>{props.year}</span>

                {props.rating
                  ? <Rating>
                      <Rating.Star />

                      <span className="ml-0.5">
                        {props.rating}
                      </span>
                    </Rating>
                  : null
                }
              </div>
            : null
          }

          <h3 className="text-gray-900 text-lg leading-tight font-semibold mb-1">
            {props.title}
          </h3>

          <p className="text-gray-600 text-sm leading-normal mb-4 last:mb-0">
            {props.plot.substr(0, 80)}...
          </p>
        </div>

        {props.wikipedia_url
          ? <Button
              color="light"
              size="xs"
              className="w-full"
              onClick={() => window.open(props.wikipedia_url, '_blank')}
            >
              More
            </Button>
          : null
        }
      </div>
    </div>
  );
};

export default Index;
