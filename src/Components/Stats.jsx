import React, { useEffect } from 'react'
import Graph from './Graph'
import { db, auth } from '../firebaseConfig';
import { toast } from 'react-toastify';
import { generate } from 'random-words';

const Stats = ({wpm, accuracy, correctChars, incorrectChars, missedChars, extraChars, graphData }) => {

    let timeSet = new Set();
    const newGraph = graphData.filter(i => {
        if (!timeSet.has(i[0])) {
            timeSet.add(i[0]);
            return i;
        }
    })
   

    const pushDataToDB = () => {

        //not even type single word correctly. 
        if (isNaN(accuracy)) {
            toast.error('Invalid test')
            return;
        }
        const resultRef = db.collection('Results') //firestore create database if there is not created.
        const { uid } = auth.currentUser;
        resultRef.add(
            {
                wpm: wpm,
                accuracy: accuracy,
                timeStamp: new Date(),
                Characters: `${correctChars}/${incorrectChars}/${missedChars}/${extraChars}`,
                uid: uid,
                // name : 'user name'
            }
        ).then((res) => {
            toast.success("Data saved to db")
        }).catch((err) => {
            toast.success("Not able to save results");
        })

    }

    //check user is logged in or not(existed or not)
    useEffect(() => {
        if (auth.currentUser) {
            pushDataToDB();
        } else {
            toast.warning('Login to save results')
        }
    })


    return (
        <div className="stats-box">
            <div className="left-stats">
                <div className="title">WPM</div>
                <div className="subtitle">{wpm}</div>
                <div className="title">Accuracy</div>
                <div className="subtitle">{accuracy}</div>
                <div className="title">Characters</div>
                <div className="subtitle">{correctChars}/{incorrectChars}/{missedChars}/{extraChars}</div>
            </div>
            <div className="right-stats">
                <Graph graphData={newGraph} />

            </div>
           
        </div>
    )
}

export default Stats
