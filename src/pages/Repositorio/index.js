import React from 'react';


function Repositorio({match}) {
  return (
   <div>
     <h1 style={{color:'#fff' }}>
      {decodeURIComponent(match.params.repositorio)}
    </h1>
   </div>
  );
}

export default Repositorio;