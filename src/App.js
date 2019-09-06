import React,{useState, useEffect, useCallback} from 'react';



import './App.css';
import NewsList from './Components/NewsList';
import Axios from 'axios';




function App() {
  const [posts, setPosts] = useState([]);
  const [postID, setPostID] = useState(0);

  useEffect(() => {
    Axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=72d7ccd54ead4c8c812b9f2d6abd81ab&pageSize=39")
    .then((res)=>{
        setPosts(res.data.articles)
    })
    .catch((error)=>{
      console.log(error);
    })
  }, [])
 
  const isDisplay = useCallback((value)=>{
    setPostID(value)
  },[posts])

  return (
    <div className="App">
      <ul> 
        {
          posts.map((post,index)=>{
            return <NewsList  key={index} dataKey={index} displayPost={postID===index?true:false} details={post} onShowNews={isDisplay}/>
          })
        }
      </ul>
    </div>
  );
}

export default React.memo(App);
