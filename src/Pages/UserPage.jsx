

import React, { useEffect, useState } from 'react';
import { db, auth } from '../firebaseConfig';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { CircularProgress } from '@mui/material';
import UserTableData from '../Components/UserTableData';
import Graph from '../Components/Graph';
import UserInfo from '../Components/UserInfo';

const UserPage = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const [user, loading] = useAuthState(auth);
  const [dataLoading,setDataLoading] = useState(true)

  const [graphData, setGraphData] = useState([])

  const fetchUserData = () => {
    const { uid } = auth.currentUser;
    const resultsRef = db.collection("Results");

    let tempData = [];
    let tempGraphData = [];

    resultsRef.where('uid', '==', uid)
      .orderBy('timeStamp', 'desc')
      .get()
      .then((snapshot) => {
        snapshot.docs.map((doc) => {
          tempData.push({ ...doc.data() });
          tempGraphData.push([doc.data().timeStamp.toDate().toLocaleString().split(',')[0], doc.data().wpm])
          return null;
        });
        setData(tempData);
        setGraphData(tempGraphData.reverse())
        setDataLoading(false)
        
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });
  };


  useEffect(() => {
    if (!loading) {
      if (!user) {
        navigate('/');
      } else {
        fetchUserData();
      }
    }
  }, [loading,navigate, user]);

  if (loading || dataLoading) {
    return < CircularProgress size={70}  style={{position:'absolute',top:'50%',left:'50%',tranformTranslate:'(-50%,-50%)'}}/>
  }


  return (
    <div className='canvas'>
      <UserInfo totalTests={data.length} />
      <div className="graph-user-page">
        <Graph graphData={graphData} />
      </div>
      <UserTableData data={data} />
    </div>
  );
};

export default UserPage;

