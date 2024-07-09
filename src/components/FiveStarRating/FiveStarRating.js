import React from 'react';
import { Star as StarEmpty, StarHalf, StarFill } from 'react-bootstrap-icons';

const FiveStarRating = ({ rating }) => {
  // declare star icon array
  const starList = [];

  // Store number of fill star
  const starFillCount = Math.floor(rating);

  // Store number of half star
  const hasHalfStar = rating - parseInt(rating) >= 0.5;

  // Store number of empty star
  const starEmptyCount = 5 - starFillCount - (hasHalfStar ? 1 : 0);

  // Push the filled star icons
  for (let i = 1; i <= starFillCount; i++) {
    starList.push(<StarFill key={'star-fill'+i}/>);
  }

  // Push half star icons
  if (hasHalfStar) {
    starList.push(<StarHalf key={'star-half'}/>);
  }

  // Push empty star icons
  for (let i = 1; i <= starEmptyCount; i++) {
    starList.push(<StarEmpty key={'star-empty'+i}/>);
  }

  return <div>
		{starList}
	</div>;
};

export default FiveStarRating;
