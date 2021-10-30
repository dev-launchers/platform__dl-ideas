import React, { useState } from 'react';


function SubmitIdea() {

  const [selected, setSelected] = useState('');


  if (selected === '') {
    return (
      <div>hello world</div>
    );
  }

  if (selected === 'PSI') {
    return (
      <div>provlem solving idea</div>
    )
  }

  if (selected === 'Non-PSI') {
    return (
      <div> Non problem solving</div>
    )
  }

}

export default SubmitIdea;