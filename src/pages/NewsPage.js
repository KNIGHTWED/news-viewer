import React from 'react';
import Categories from '../components/Categories';
import NewsList from '../components/NewsList';
import { useParams } from 'react-router-dom';


const NewsPage = ({match}) => {
  const params = useParams();
  const gategory = params.category || 'all';
  // 카테고리 기본값 all
  const category = match.params.category || 'all';
  console.log("category: " + category);
  console.log("gategory: " + gategory);

  return (
    <div>
      <Categories />
      <NewsList category={gategory} />
    </div>
  );
};

export default NewsPage;