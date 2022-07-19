


import {
  LeaderWrap,
  LeaderName,
  LeaderInfoWrap,
} from './StyledLeaderInfo';


function formatDate(string){
  var options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(string).toLocaleDateString([],options);
}


function LeaderInfo(props) {

  const {selectedCard, ...other} = props;

  return (
      <LeaderWrap>
        <LeaderInfoWrap>
          <LeaderName>
              <img alt="leader_image" src={`https://picsum.photos/70?random=${props.id}`} 
              style={{
                height: "30px",
                marginRight: "10px",
                borderRadius: "50%",
              }}/>

            {props.selectedCard.discord}
          </LeaderName>

        <h6>
        <p>Submitted: {formatDate(props.selectedCard.created_at)}</p>
        <p>Contact</p>
          <p>email: {props.selectedCard.email}</p>
          <p>discord: {props.selectedCard.discord}</p>
        </h6>
        </LeaderInfoWrap>
      </LeaderWrap>
  )
}

export default LeaderInfo;