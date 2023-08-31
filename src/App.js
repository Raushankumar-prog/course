import './App.css';
import  Home from './Components/Home';
import Web_dev from './Components/Web_dev';
import DSA from './Components/DSA';
import Cyber_security from './Components/Cyber_security';
import AI from './Components/AI';
import War from './Components/War';
import DensitySmallIcon from '@mui/icons-material/DensitySmall';
import { Routes, Route, Link } from 'react-router-dom';
import {Box,Stack,Typography,ButtonGroup,Button } from '@mui/material';
import TextField from '@mui/material/TextField';

import HomeIcon from '@mui/icons-material/Home';
function App() {
  
      
         const dropdownonclick=()=>{
         const dropdownnavvar=document.getElementById('drop-down-box');
         const computedStyle=window.getComputedStyle(dropdownnavvar);
         const displayStyle=computedStyle.getPropertyValue('display');

         if(displayStyle==='none'){
            dropdownnavvar.style.display='flex';
         }
         else{
         dropdownnavvar.style.display='none';
          
         }
 };
 
         const login=()=>{
            const dropdownnavvar=document.getElementById('user-data');
         const computedStyle=window.getComputedStyle(dropdownnavvar);
         const displayStyle=computedStyle.getPropertyValue('display');

         if(displayStyle==='flex'){
            dropdownnavvar.style.display='none';
         }
         
         const dropdownnavvar1=document.getElementById('login-form');
         const computedStyle1=window.getComputedStyle(dropdownnavvar1);
         const displayStyle1=computedStyle1.getPropertyValue('display');

         if(displayStyle1==='none'){
            dropdownnavvar1.style.display='flex';
         }
         else{
         dropdownnavvar1.style.display='none';
          
         }
 };
 
 const user_data=()=>{
   const dropdownnavvar1=document.getElementById('login-form');
         const computedStyle1=window.getComputedStyle(dropdownnavvar1);
         const displayStyle1=computedStyle1.getPropertyValue('display');

         if(displayStyle1==='flex'){
            dropdownnavvar1.style.display='none';
         }
         
         const dropdownnavvar=document.getElementById('user-data');
         const computedStyle=window.getComputedStyle(dropdownnavvar);
         const displayStyle=computedStyle.getPropertyValue('display');

         if(displayStyle==='none'){
            dropdownnavvar.style.display='flex';
         }
         else{
         dropdownnavvar.style.display='none';
          
         }
 };
 

  return (
    <>
     <div className="topheader">
    
       <ButtonGroup sx={{width:'100%'}} >
         <Button  variant='text' onClick={dropdownonclick} sx={{fontSize:'20px',color:'white',borderRadius:'20px',
         width:'3%',marginLeft:'10%'}} className='logo_button'aria-label="it is logo button"  disableRipple>
       
         <div className='logo_button'><DensitySmallIcon/></div></Button>
         <Button  variant='text' size='small' sx={{marginLeft:'11%'}}>
         <Typography className='unique' sx={{fontFamily:'cursive',fontSize:'2.5vw',paddingLeft:'4px'}}>COURSE</Typography>
         <Typography  sx={ {transform:'rotateZ(90deg)', color:'yellow', fontFamily:'cursive',fontSize:'1.5vw'}}>SKY</Typography>
         <Typography sx={{fontFamily:'cursive',fontSize:'1.5vw'}}>.com</Typography></Button>
         <div className='icon'  >
          <ButtonGroup>
          
          <Button variant='contained' fontSize="large" onClick={login} sx={{marginRight:'5px'}} color="success">LOGIN</Button>
         <Button variant='contained' fontSize="large" onClick={user_data} sx={{marginLeft:'5px'}} color="success">SIGN_IN</Button>
           </ButtonGroup>
           </div>
      </ButtonGroup>
     
      </div>
    
          


       <div className="header">
        
        <nav id="heading">
       
         <Link to="/course/" className='remove'><HomeIcon color='alert' size='medium' ></HomeIcon><span className="separator"></span></Link>
         <Link to="/Web_dev" className='remove'>WEB_DEV<span className="separator"></span></Link>
         <Link to="/DSA" className="remove">DSA<span className="separator"></span></Link>
      
         <Link to="/Cyber_security" className="remove">CYBER_SECURITY<span className="separator"></span></Link>
         <Link to="/AI" className="remove">AI_AND_ML<span className="separator"></span></Link>
          
         <Link to="/wars" className="remove">ANDROID_DEVELOPMENT<span className="separator"></span></Link>
        
        
      </nav>
      </div>
        <form id="login-form"><div id="box" >
<label id="label1">We are excited to join you in our community</label><br/><br/>
<label className='label'>Name:</label><br/><br/>
<input  label="Student name" className="input" type="text"/><br/><br/>
<label className='label'>Email ID:</label><br/><br/>
<input label="Email ID" className="input" type="email"/> <br/><br/>    
<label className='label'>Password:</label><br/><br/>
<input label="Password" className="input"  type="password" /><br></br>
<Button id="button"  color="success" variant="contained">SUBMIT</Button>
                     
          </div></form>
           <form id="user-data"><div id="box" >
<label id="label1">We are excited to join you in our community</label><br/><br/>
<label className='label'>Name:</label><br/><br/>
<input  label="Student name" className="input" type="text"/><br/><br/>
<label className='label'>Email ID:</label><br/><br/>
<input label="Email ID" className="input" type="email"/> <br/><br/>    
<label className='label'>Enter Your Password:</label><br/><br/>
<input label="Password" className="input"  type="password" /><br></br>
<label className='label'> Your address :</label><br/><br/>
<input label="Password" className="input"  type="text" /><br></br>
<label className='label'>Course starting date</label><br/><br/>
<input label="Password" className="input"  type="date" /><br></br>
<label className='label'>Your Target</label><br/><br/>
<input label="Password" className="input"  type="text" /><br></br>
<label className='label'>Remark for this website</label><br/><br/>
<input label="Password" className="input"  type="text" /><br></br>
<Button id="button"  color="error" variant="contained">SUBMIT</Button>
                     
          </div></form>

 <Box sx={{width:'100%',height:'80%',border:'3px solid red',float:'left',backgroundColor:'black',display:'none'}}  id="drop-down-box" >
          <ButtonGroup orientation="vertical" className="navboss" >
            <Button variant='text' id="navbutton"  href="/course/">home</Button>
             <Button variant='text'  id="navbutton" href="/Web_dev" disableRipple>WEBESITE DEVELOPMENT</Button>
              <Button variant='text'  id="navbutton" href="/DSA"disableRipple>DSA</Button>
               <Button  variant='text'  id="navbutton"href="/Cyber_security"disableRipple>CYBER SECURITY</Button>
                <Button variant='text'  id="navbutton" href="/AI" disableRipple>AI AND ML</Button>
                 <Button variant='text' id="navbutton"href="/wars"disableRipple>ANDROID DEVLOPMENT</Button>
                 
          
</ButtonGroup>
  </Box>

      <Routes>
        

        <Route path="/course/" element={<Home/>}/>
        <Route path="website-template" element={<Home/>}/>
      
        
        <Route path="Web_dev" element={<Web_dev/>} />
        <Route path="DSA" element={<DSA/>} />
        <Route path="Cyber_security" element={<Cyber_security/>} />
        <Route path="AI" element={<AI/>} />
        <Route path="wars" element={<War/>} />
        
      </Routes>
      
      <div className="footer" >
         <div id="using">you can see about us and our privacy policy in the footer section.</div>
         <hr className="footer_hr"></hr>
          <nav className='footer_navigation'>
       
         <Link to="/course/" className='foot_remove'>About_us</Link>
         <Link to="/World_news" className='foot_remove'>Terms_and_condition</Link>
         <Link to="/DSA" className="foot_remove">Privacy_policy</Link>
      
         <Link to="/Cyber_security" className="foot_remove">Cookies_policy</Link>
         <Link to="/AI" className="foot_remove">Advertise_with_us</Link>

        </nav>
        <hr className="footer_hr" ></hr>
      </div>
     
    </>

  );
}

export default App;
