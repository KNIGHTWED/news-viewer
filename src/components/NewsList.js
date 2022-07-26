import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';
import axios from 'axios';

const NewsListBlock = styled.div`
  box-sizing: border-box;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px){
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  };
`;

const NewsList = ( category ) => {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // async 사용 함수 따로 선언
    const fetchData = async () => {
      setLoading(true);
      try {
        // setQCategory(category === 'all' ? '' : `&category=${qcategory.category}`);
        // const parseword = JSON.parse(category);
        const query = category.category === 'all' ? '' : `&category=${category.category}`;
        console.log(category.category);

        const response = await axios.get(
          // 현재는 카테고리 선택이 없어진 것 같음
          `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=887b66f4f0ca475696ca309844b1273b`,
          // `https://newsapi.org/v2/top-headlines?country=kr&apiKey=887b66f4f0ca475696ca309844b1273b`,
        );
        setArticles(response.data.articles);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, [category]);

  if(loading) {
    return <NewsListBlock>Loading...</NewsListBlock>;
  }

  if(!articles){
    return null;
  }

  return (
    <NewsListBlock>
      {articles.map((article) => (
        <NewsItem key={article.url} article={article} />
      ))}
    </NewsListBlock>
  );
};

export default NewsList;