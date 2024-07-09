import React from 'react';
import s from './style.module.css';
import { SMALL_IMG_COVER_BASE_URL } from '../../config';

const MAX_TITLE_CHAR = 25;
const TVShowListItem = ({tvShow, onTVShowClick}) => {
	const onClick_ = () => {
		onTVShowClick(tvShow);
	}
	return (
		<div onClick={onClick_} className={s.container}>
			<img className={s.img} alt={tvShow.name} src={SMALL_IMG_COVER_BASE_URL+tvShow.backdrop_path}/>
			<div className={s.title}>{tvShow.name.length > MAX_TITLE_CHAR ? tvShow.name.slice(0, MAX_TITLE_CHAR)+'...' : tvShow.name}</div>
		</div>
	)
}

export default TVShowListItem
