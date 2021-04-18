import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setLoadedNews, setNews} from "../../Redux/actions/newsActions";
import axios from "axios";
import Post from "./Post";
import Loader from "../../Tools/Loader";

export const Posts = () => {

    const dispatch = useDispatch()

    const selectNews = ({news}:any) => news.news.articles
    const news = useSelector(selectNews)
    const selectLoad = ({news}:any) => news.isLoadedNews
    const isLoaded = useSelector(selectLoad)

    useEffect(() => {
        dispatch(setLoadedNews(false))
        axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=1919931b4e874852a0dc7c9ecafdfe37').then(({data}) => {
            dispatch(setNews(data))
        })
    }, []);

        if(isLoaded){
    return news.map((news: any) => <Post news={news} key={news.id}/>).reverse()
        }else {
            return <Loader/>
        }

};





