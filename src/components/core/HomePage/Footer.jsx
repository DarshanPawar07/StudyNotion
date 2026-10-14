

import Logo from "../../../assets/Logo/Logo-Full-Light.png"
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer=()=>{

    return(
   

     <div className="">

     

        <div className=" mt-2  flex  ">
                 
                 <div className="mt-2 bg-yellow-300 ">

                      <img src={Logo}></img>
                     
                      <h2 className="place-self-start">Company</h2>

                      <Link to={""}>
                            <p className="place-self-start">About</p>
                      </Link>

                      <Link to={""}>
                            <p className="place-self-start">Careers</p>
                      </Link>

                      <Link to={""}>
                            <p className="place-self-start">Affiliates</p>
                      </Link>

                      <div className="flex gap-4 place-self-start">
                          <img src={FaFacebook}></img>
                          <img src={FaInstagram}></img>
                          <img src={FaTwitter}></img>
                          <img src={FaYoutube}></img>
                      </div>
                 </div>

                
                 <div className="bg-pink-300 text-start">

                        <h2> Resources</h2> 

                        <Link to={""}>
                            <p>Articles</p>
                       </Link>

                       <Link to={""}>
                            <p>Blog</p>
                       </Link>

                       <Link to={""}>
                            <p>Chart Sheet</p>
                       </Link>
                       
                       <Link to={""}>
                            <p>Code challenges</p>
                       </Link>

                         <Link to={""}>
                            <p>Docs</p>
                       </Link>

                       <Link to={""}>
                            <p>Projects</p>
                       </Link>

                       <Link to={""}>
                            <p>Videos</p>
                       </Link>
                       
                       <Link to={""}>
                            <p>Workspaces</p>
                       </Link>

                        <h2>Support</h2>

                        <Link to={""}>
                            <p>Help Center</p>
                       </Link>

                 </div>
              
                 <div className=" bg-caribbeangreen-300 text-start">
                  
                      <h2>Plans</h2>

                        <Link to={""}>
                            <p>Paid memberships</p>
                       </Link>

                       <Link to={""}>
                            <p>For students</p>
                       </Link>

                       <Link to={""}>
                            <p>Business solutions</p>
                       </Link>
                       
                       <h2> Community</h2> 
                       
                       <Link to={""}>
                            <p>Forums</p>
                       </Link>

                        <Link to={""}>
                            <p>Chapters</p>
                        </Link>

                        <Link to={""}>
                            <p>Events</p>
                        </Link>

                     
                 </div>
                    
                 <div className="bg-blue-300 text-start">

                          <h2> Subjects</h2> 
                        
                          <Link to={""}>
                                <p>Al</p>
                          </Link>

                          <Link to={""}>
                                 <p>Cloud Computing</p>
                          </Link>

                          <Link to={""}>
                             <p>Code Foundations</p>
                          </Link>

                          <Link to={""}>
                                <p>Computer Science</p>
                          </Link>

                          <Link to={""}>
                                 <p>Cybersecurity</p>
                          </Link>

                          <Link to={""}>
                              <p>Data Analytics</p>
                          </Link>

                          <Link to={""}>
                                <p>Data Science</p>
                          </Link>

                          <Link to={""}>
                                <p>Data Visualization</p>
                          </Link>

                          <Link to={""}>
                                 <p>Developer Tools</p>
                          </Link>

                          <Link to={""}>
                                <p>DevOps</p>
                          </Link>

                          <Link to={""}>
                                <p>Game Development</p>
                          </Link>

                          <Link to={""}>
                                <p>IT</p>
                          </Link>

                          <Link to={""}>
                                  <p>Machine Learning</p>
                          </Link>

                          <Link to={""}>
                               <p>Math</p>
                          </Link>

                          <Link to={""}>
                                <p>Mobile Development</p>
                          </Link>

                          <Link to={""}>
                               <p>Web Design</p>
                          </Link>

                          <Link to={""}>
                                 <p>Web Development</p>
                          </Link>

                 </div>

                 <div className="bg-brown-300 text-start">

                          <h2>Languages</h2>  

                          <Link to={""}>
                                <p>Bash</p>
                          </Link>

                          <Link to={""}>
                                 <p>C++</p>
                          </Link>

                          <Link to={""}>
                             <p>C#</p>
                          </Link>

                          <Link to={""}>
                                <p>Go</p>
                          </Link>

                          <Link to={""}>
                                 <p>HTML & CSS</p>
                          </Link>

                          <Link to={""}>
                              <p>Java</p>
                          </Link>

                          <Link to={""}>
                                <p>JavaScript</p>
                          </Link>

                          <Link to={""}>
                                <p>Kotlin</p>
                          </Link>

                          <Link to={""}>
                                 <p>PHP</p>
                          </Link>

                          <Link to={""}>
                                <p>Python</p>
                          </Link>

                          <Link to={""}>
                                <p>R</p>
                          </Link>

                          <Link to={""}>
                                <p>Ruby</p>
                          </Link>

                           <Link to={""}>
                                <p>SQL</p>
                          </Link>

                           <Link to={""}>
                                <p>Swift</p>
                          </Link>

                 </div>
                 

                  <div className="bg-pink-300 text-start">
                       
                         <h2>Career building</h2>

                         <Link to={""}>
                                <p>Career paths</p>
                          </Link>

                          <Link to={""}>
                                 <p>Career services</p>
                          </Link>

                          <Link to={""}>
                                <p>Interview prep</p>
                          </Link>

                          <Link to={""}>
                                <p>Professional certification</p>
                          </Link>

                          <Link to={""}>
                                <p>-</p>
                          </Link>

                           <Link to={""}>
                                <p>Full Catalog</p>
                          </Link>

                           <Link to={""}>
                                <p>Beta Content</p>
                          </Link>
                 </div>
             
              
        </div>
   </div>

    )
}

export default Footer;