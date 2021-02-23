import  { useState } from 'react';
import MyComponent from './mycomponent';


function App() {
  const [currentPage,changeCurrentPage]= useState();
  const [myInfo, setMyInfo] = useState();

  const updatePage=(pageName)=>{
    changeCurrentPage(pageName)
    setMyInfo(pageName === 'home' ? 'Shah Md Nuruddin' : 'Freelancer');
  }


  return (
   <>
      <button onClick={()=>updatePage('home')}>Home</button>
      <button onClick={()=>updatePage('contact')}>Contact</button>
      <MyComponent page={currentPage} information={myInfo}/>
   </>
  );
}

export default App;
