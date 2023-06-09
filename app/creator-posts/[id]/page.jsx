'use client'
import {useState, useEffect} from 'react';
import {  useParams} from 'next/navigation';

import Profile from '@components/profile';

const Creator = () => {

  const params = useParams();

    const [posts, setPosts] = useState([]);

    const fetchPost = async () => {
        const response = await fetch(`/api/users/${params.id}/posts`);
        const data = await response.json();
        setPosts(data);
      };
    
      useEffect(() => {
       fetchPost();
      },[]);


  return (
    <Profile
    name= "Creator"
    desc="Post publicate"
    data={posts}
    />
  )
}

export default Creator