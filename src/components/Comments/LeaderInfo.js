
import './comments.css';


function formatDate(string){
  var options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(string).toLocaleDateString([],options);
}


function LeaderInfo(props) {

  return (
    <div className="leader">


        <div className="leader_info" align="right" >
          <div className="leader_name" align="right">
            <img alt="user_image" className="leader_image" src={`https://picsum.photos/70?random=${props.id}`} />
            {props.selectedCard.discord}
          </div>
        <h6>
        <p>Submitted: {formatDate(props.selectedCard.created_at)}</p>
        <p>Contact</p>
          <p>email: {props.selectedCard.email}</p>
          <p>discord: {props.selectedCard.discord}</p>
        </h6>
      </div>
    </div>
  )
}

export default LeaderInfo;