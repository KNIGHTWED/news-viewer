import React from 'react';
import Categories from '../components/Categories';
import NewsList from '../components/NewsList';


const NewsPage = ({match}) => {
  // 카테고리 기본값 all
  const category = match.params.category || 'all';

  return (
    <div>
      <Categories />
      <NewsList category={category} />
    </div>
  );
};

export default NewsPage;