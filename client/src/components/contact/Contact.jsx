import Footer from "../footer/Footer"
import MailList from "../mailList/MailList"
import Navbar from "../navbar/Navbar"
import "./contact.css"
import rounak from "./images/Rounak.jpeg"



const Contact =()=>{

  
  
  
    
    return(
        <div>
            <Navbar/>
            
            
<hr/>
<div class="terms1">
<h1 class= "ls">Founders......</h1>
    <table  cellpadding="80" >
      <tr>
        <td>
          <ul>
             
             <img src={rounak}  className="pl" />
             <li class="lb">Rounak Chauhan.</li>
             <li class="lb">8744824329.</li>
             <li class="lb">rounakchauhan70@gmail.com</li>
             <li class="lb">Software Developer</li>
          </ul>
        </td>
        <td>
          
        </td>
        <td>
        </td>

      </tr>
    </table>
        
        </div>
        <MailList/>
        <br />
        <br />

        <div className="ft">
            <Footer/>
            </div>
        </div>
    )
        
        
}

export default Contact