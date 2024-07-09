import React from 'react';
import s from './style.module.css';
import TVShowListItem from '../TVShowListItem/TVShowListItem';

const TVShowList = ({ tvShowList, onClickItem }) => {
  return (
    <div>
      <div className={s.title}>You'll probably Like:</div>
      <div className={s.list}>
        {tvShowList.map((tvShowItem) => (
          <span className={s.tv_show_item} key={tvShowItem.id}>
            <TVShowListItem
              tvShow={tvShowItem}
              onTVShowClick={onClickItem}
            />
          </span>
        ))}
      </div>
    </div>
  );
};

export default TVShowList;
