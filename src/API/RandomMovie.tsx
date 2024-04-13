import {
    KinopoiskDev,
    MovieQueryBuilder,
    SPECIAL_VALUE,
    SORT_TYPE,
  } from '@openmoviedb/kinopoiskdev_client';
    

      const kp = new KinopoiskDev('604B581-WWF46E5-M3N0ZAA-Z49DH70');
    
  const getRandomMovieWithFilters = async () => {
      // Создаем билдер запросов для фильмов
  const queryBuilder = new MovieQueryBuilder();
    
      // Выбираем поля, которые мы хотим получить в ответе
  const baseQuery = queryBuilder
        .select(['id', 'name', 'rating', 'poster', 'year'])
        // Добавляем фильтр для поиска фильмов с постером
        .filterExact('poster.url', SPECIAL_VALUE.NOT_NULL)
        // Добавляем фильтр для поиска фильмов с трейлерами
        .filterExact('videos.trailers.url', SPECIAL_VALUE.NOT_NULL);
    
  const firstQuery = baseQuery
        // получим первую страницу, чтобы узнать сколько всего фильмов удовлетворяет нашим фильтрам
        .paginate(1, 1)
        // Собираем запрос
        .build();
    
      // Отправляем запрос на получение количества фильмов
  const firstRes = await kp.movie.getByFilters(firstQuery);
      if (firstRes.data) {
        const { pages } = firstRes.data;
        // Генерируем случайное число от 1 до pages
        const randomPage = Math.floor(Math.random() * 5) + 1;
        const query = baseQuery.paginate(randomPage, 1).build();
    
        const { data, error, message } = await kp.movie.getByFilters(query);
    
          if (data) {
          console.log(data.docs[0]);
        }
        // Если будет ошибка, то выведем ее в консоль
          if (error) console.log(error, message);
      }
    
      // Если будет ошибка, то выведем ее в консоль
      if (firstRes.error) console.log(firstRes.error, firstRes.message);
  };
