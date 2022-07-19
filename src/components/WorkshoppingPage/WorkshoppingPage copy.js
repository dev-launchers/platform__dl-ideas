import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'
import CommentList from './DisplayComments';
import CommentForm from './CommentForm';
import LeaderInfo from './LeaderInfo';
import { env } from '../../utils/EnvironmentVariables';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CircularIndeterminateLoader from '../Loader/CircularIndeterminateLoader'
import Grid from '@mui/material/Grid';
import Grid from '@mui/material/Container';

import {
  PageBackground,
  FormWrap,
  Comments,
  IdeaDescription,
  WorkshopCircule,
  WorkshopCompleted,
  WorkshopProgressBar,
  IdeaProgress,
  IdeaName,
  Idea,
} from './StyledWorkshoppingPage';



import './comments.css';
import axios from 'axios';

function WorkshoppingPage(props) {
  const [data, setData] = useState(
    {
      ideaName:'',
      discord:'',
      description:'',
      email:'',
      created_at: '',
      comments: [''],
    }
  );
  const location = useLocation();
  const pathname = location.pathname;
  const ideaId = pathname.slice(14, 19);

  const [handleChange, setHandleChange] = useState('');
  const [handleTextChange, setHandleTextChange] = useState('');
  const [loading, setLoading] = React.useState(true);


  useEffect(() => {

    axios.get(`${env().STRAPI_URL}/idea-cards/${ideaId}`)

      .then(response => {

        if (response.status === 200 ) {
          setLoading(false)
          setData(response.data)
        }
      })
  }, [])



  return (


    <Container>
      <Grid container 
        spacing={2} 
        direction="column"
        justifyContent="flex-start"
        alignItems="center" 
      >
      
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6} >
        </Grid>
      </Grid>
    </Container>



    // <div className="container">



<PageBackground>



  <Grid container 
    spacing={2} 
    direction="column"
    justifyContent="flex-start"
    alignItems="center" 
  >
    <Grid item xs={12} sm={12} md={6} lg={6} xl={6} >
      <div >

        {loading === true ? 
          <CircularIndeterminateLoader 
            text="Loading..."
            color="white"
          />
          : 
          ""
        }

        <Idea>
          <IdeaName>
            <h2>{data.ideaName}</h2>
              <p>{data.tagline}</p>
                <IdeaProgress>
                  <WorkshopProgressBar>
                    <WorkshopCircule> 
                      <WorkshopCompleted />  
                        <p>Idea Form</p>
                      </WorkshopCircule>
                      <WorkshopCircule> 
                      <WorkshopCompleted />
                        <p>Review</p>
                      </WorkshopCircule>
                      <WorkshopCircule> 
                      <WorkshopCompleted />
                        <p>Workshopping</p>
                      </WorkshopCircule>
                      <WorkshopCircule> 
                      <WorkshopCompleted />
                        <p>Recruitment</p>
                      </WorkshopCircule>
                      <WorkshopCircule> 
                      <WorkshopCompleted />
                        <p>Project</p>
                      </WorkshopCircule>      
                    </WorkshopProgressBar>
                  </IdeaProgress>
                </IdeaName>
                <IdeaDescription>
                  <h4>Description</h4>
                  <p>{data.description}</p>
                </IdeaDescription>
              </Idea>
              <FormWrap>
            
            <CommentForm setHandleChange={setHandleChange} data={data} setData={setData} handleChange={handleChange} setHandleTextChange={setHandleTextChange} handleTextChange={handleTextChange} selectedCard={data} />
            
            </FormWrap>
          {/* </div> */}

          <Comments>
            <CommentList data={data} selectedCard={data} />
          </Comments>
        </div>

      </Grid>

  <Grid item xs={12} sm={12} md={6} lg={6} xl={6}  align="left">
    <LeaderInfo selectedCard={data} />
  </Grid>


</Grid>



        





          {/* <div>
            <IdeaOverview selectedCard={data} />
          </div> */}


    
         








          {/* <div className="form"> */}


        </PageBackground>
  );
}

export default WorkshoppingPage;