import { useEffect, useState } from 'react';
import { TVShowAPI } from './api/tv-show';
import { BACKDROP_BASE_URL } from './config';
import s from './style.module.css';
import Logo from './components/Logo/Logo';
import logoImg from './assets/images/logo.png';
import TVShowDetail from './components/TVShowDetail/TVShowDetail';
import TVShowList from './components/TVShowList/TVShowList';
import SearchBar from './components/SearchBar/SearchBar';

export function App() {
  const [currentTVShow, setCurrentTVShow] = useState();

  const [recommendationList, setRecommendationList] = useState([]);

  // Fetch Popular TV Shows
  const fecthPopularTVShow = async () => {
    try {
      const popularShowList = await TVShowAPI.fetchPopulars();
      if (popularShowList.length > 0) {
        setCurrentTVShow(popularShowList[0]);
      }
    } catch (error) {
      alert(`Something went wrong while loading TV Shows ${error}`);
    }
  };

  // Fetch Recommendation List of TV Shows
  const fetchRecommendations = async (tvShowId) => {
    try {
      const recommendationListRespose = await TVShowAPI.fetchRecommendations(
        tvShowId
      );
      if (recommendationListRespose.length > 0) {
        setRecommendationList(recommendationListRespose.slice(0, 10));
      }
    } catch (error) {
      alert('Something went wrong while loading TV Shows recommendations');
    }
  };

  // Fetch TV Shows by Search term
  const fetchBySearchTitle = async (title) => {
    try {
      const searchResponse = await TVShowAPI.searchTVShow(title);
      if (searchResponse.length > 0) {
        setCurrentTVShow(searchResponse[0]);
      }
    } catch (error) {
      alert('Something went wrong while searching TV Show');
    }
  };

  // update current TV Show
  const updateCurrentTVShow = (tvShow) => {
    setCurrentTVShow(tvShow);
  };

  useEffect(() => {
    fecthPopularTVShow();
  }, []);

  useEffect(() => {
    if (currentTVShow) {
      fetchRecommendations(currentTVShow.id);
    }
  }, [currentTVShow]);

  return (
    <div
      className={s.main_container}
      style={{
        background: currentTVShow
          ? `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url("${BACKDROP_BASE_URL}${currentTVShow.backdrop_path}") no-repeat center / cover`
          : 'black',
      }}
    >
      <div className={s.header}>
        <div className='row'>
          <div className='col-4'>
            <Logo
              img={logoImg}
              title='Watowatch'
              subtitle='Find a show you may like'
            />
          </div>
          <div className='col-md-12 col-lg-4'>
            <SearchBar onSearchSubmit={fetchBySearchTitle} />
          </div>
        </div>
      </div>
      <div className={s.tv_show_detail}>
        {currentTVShow && <TVShowDetail tvShow={currentTVShow} />}
      </div>
      <div className={s.recommended_tv_shows}>
        {currentTVShow && (
          <TVShowList
            tvShowList={recommendationList}
            onClickItem={updateCurrentTVShow}
          />
        )}
      </div>
    </div>
  );
}

export default App;
