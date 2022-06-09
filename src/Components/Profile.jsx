import Age from './Age'
import Pic from "./image/pic.jpg";

 export default function Profile(){
    
 
 return (
     <>
     <div id="pro">
    <img src={Pic} height={200} width={200}/>
<h3>Name : ABHIJEET SINHA </h3>
<Age />
</div>    

     </>
 )
 
 
 
    }