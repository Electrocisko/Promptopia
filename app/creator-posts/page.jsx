'use client'
import {useState, useEffect} from 'react';
import { useRouter } from 'next/navigation';

import Profile from '@components/profile';


const Creator = ({id}) => {

    console.log('ID del usuario',id)

  const creatorId = '6478db582a880477c371dac4'

    const [posts, setPosts] = useState([]);

    const fetchPost = async () => {
        const response = await fetch(`/api/users/${creatorId}/posts`);
        const data = await response.json();
        setPosts(data);
      };
    
      useEffect(() => {
       fetchPost();
      },[]);

    
  return (
    <Profile
    name="Creator"
    desc="Post page"
    data={posts}
    />
  )
}

export default Creator