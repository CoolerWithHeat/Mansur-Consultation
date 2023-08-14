import React, {forwardRef} from 'react';
import {
    consultation,
    teamwork,
    codeImage,
    goalsImage,
    firstImage,
    secondImage,
    thirdImage,
    forthImage,
    fifthImage,
    sixthImage,
    seventhImage,
    eighthImage,
    tenthImage,
    eleventhImage,
    twelvethImage,
    thirteenthImage,
    fifteenthImage,
} from './images';

import './MainPage/css/style.css'
import './MainPage/css/bootstrap.min.css'
import Popup from './PopupMessage';

const NotificationEndpoint = "https://telegram-botserver-3fccedd8685f.herokuapp.com/consulting-registration/"

export function MainPage(){

    var [successSignal, Update_successSignal] = React.useState(false)
    var [Errors_State, Update_Errors_State] = React.useState('')
    const UsersName = React.useRef(null) 
    const UsersEmailAddress = React.useRef(null)    
    const ServiceType = React.useRef(null) 
    const TriggerButton = React.useRef(null)

    function SendQuoteRequest(ButtonProperties){
        
        const Users_Name = UsersName.current.value
        const Users_EmailAdress = UsersEmailAddress.current.value
        const Selected_ServiceType = ServiceType.current.value
        const valid_Data = Data_isValid(Users_Name, Users_EmailAdress, Selected_ServiceType)

        if (valid_Data){
            const QuoteRequest = {sender: Users_Name, email:Users_EmailAdress, selectedService: serviceIndex[Selected_ServiceType], consulting:true}

            const request = fetch(NotificationEndpoint, {
                method: "POST", 
                body: JSON.stringify(QuoteRequest)
            }).then(Response=>{
                if (Response.status == 200){
                    Update_successSignal(MAin=>"success")
                    document.addEventListener("click", ()=>{
                        Update_successSignal(MAin=>"")
                    })
                }
            })
    
        }

    }

    const serviceIndex = {

        0: "Tech Consultancy",  
        1: "Project Planning",
        2: "Code Review",

    }

    function ScrollForRegisteration(Base){
        
        const page = document.getElementById("root")
        page.scrollIntoView({ behavior: 'smooth', block:'end'})

    }

    function PopContactDetails(BaseDetails){
    
        setTimeout(() => {
            Update_successSignal(Main=>"contact")
        }, 0);


        setTimeout(() => {
            document.addEventListener('click', ClosePopup);
        }, 111);

     
    }

    function Data_isValid(first_name, email, serviceType){

        if (first_name && email && serviceType && (email.endsWith("@gmail.com"))){
            Update_Errors_State(Initial=>``)
            return true
        }

        else{
            const error = !UsersName.current.value ? UsersName.current.placeholder : UsersEmailAddress.current.placeholder
            Update_Errors_State(Initial=>`${error} should be present and valid please`)
            return false
        }

    }

    function ClosePopup(base){
        if (!base.target.classList.contains("contact-details")){
            Update_successSignal(Main=>null)
            document.removeEventListener('click', ClosePopup)}
        else
            Update_successSignal(Main=>"contact")
            
    }

    React.useEffect(Main=>{
        const SendOnEnter = (event) => {
            if (event.key === 'Enter') {
                TriggerButton.current.click()
            }
          };

        document.addEventListener('keypress', SendOnEnter)
    }, [])
    
    return (
        <div>
        <div className="container-fluid bg-secondary ps-5 pe-0 d-none d-lg-block">
            <div className="row gx-0">
                <div className="col-md-6 text-center text-lg-start mb-2 mb-lg-0">
                    <div className="d-inline-flex align-items-center">
                        <a className="text-body py-2 px-3 border-end" href=""><small>Web Developement Consultation by Mansur for newbies</small></a>
                    </div>
                </div>
                <div className="col-md-6 text-center text-lg-end">
                    <div className="position-relative d-inline-flex align-items-center bg-primary text-white top-shape px-5">
                        <div className="me-3 pe-3 border-end py-2">
                            <p className="m-0"><i className="fa fa-envelope-open me-2"></i>mansurdavlatov@webster.edu</p>
                        </div>
                        <div className="py-2">
                            <p className="m-0"><i className="fa fa-phone-alt me-2"></i>+998 99 045 1768</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            <nav className="navbar navbar-expand-lg bg-white navbar-light shadow-sm px-5 py-3 py-lg-0">
                <a className="navbar-brand p-0">
                    <h1 className="m-0 text-uppercase text-primary"><i className="far fa-smile text-primary me-2"></i>consult</h1>
                </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav ms-auto py-0 me-n3">

                    
                    <div className="nav-item dropdown">
                        <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Contact</a>
                        <div className="dropdown-menu m-0">

                            <a className="dropdown-item">+998 99 045 1768</a>
                            <a className="dropdown-item">mansurdavlatov@webster.edu</a>

                        </div>
                    </div>
                    
                    <div className="nav-item dropdown">
                        <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Service</a>
                        <div className="dropdown-menu m-0">

                            <a onClick={ScrollForRegisteration} className="dropdown-item">Consultation</a>
                            <a onClick={ScrollForRegisteration} className="dropdown-item">Code Review</a>
                            <a onClick={ScrollForRegisteration} className="dropdown-item">Project Planning</a>

                        </div>
                    </div>
           
           
                </div>
            </div>
        </nav>

        <div className="container-fluid p-0">
            <div id="header-carousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="w-100" src={firstImage} alt="Image"/>
                        <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                            <div className="p-3" style={{maxWidth: "900px"}}>
                                <h5 className="text-white text-uppercase">Programming Consultancy</h5>
                                <h1 className="display-1 text-white mb-md-4">I Provide Solutions On Your Programming journey</h1>
                                <button onClick={ScrollForRegisteration} className="btn btn-primary py-md-3 px-md-5 me-3 rounded-pill">Get Quote</button>
                                <button onClick={PopContactDetails} className="btn btn-secondary py-md-3 px-md-5 rounded-pill">Contact Me</button>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="w-100" src={secondImage} alt="Image"/>
                        <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                            <div className="p-3" style={{maxWidth: "900px"}}>
                                <h5 className="text-white text-uppercase">Planning Consultancy</h5>
                                <h1 className="display-1 text-white mb-md-4">Take My Help To Reach The Top Level</h1>
                                <button onClick={ScrollForRegisteration} className="btn btn-primary py-md-3 px-md-5 me-3 rounded-pill">Get Quote</button>
                                <button onClick={PopContactDetails} className="btn btn-secondary py-md-3 px-md-5 rounded-pill">Contact Me</button>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel"
                    data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#header-carousel"
                    data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>

        <div className="container-fluid bg-secondary p-0">
            <div className="row g-0">
                <div className="col-lg-6 py-6 px-5">
                    <h1 className="display-5 mb-4">Welcome to</h1>
                    <h1 className="display-5 mb-4"><span className="text-primary">MANSUR</span> consulting</h1>
                    <h4 className="text-primary mb-4">Are you ready to turn your programming visions into reality? Look no further. I'm Mansur, and I'm here to guide you through every step of your programming journey.</h4>
                    <a onClick={ScrollForRegisteration} className="btn btn-primary py-md-3 px-md-5 rounded-pill">Get A Quote</a>
                </div>
                <div className="col-lg-6">
                    <div className="h-100 d-flex flex-column justify-content-center bg-primary p-5">
                        <div className="d-flex text-white mb-5">
                            <div className="d-flex flex-shrink-0 align-items-center justify-content-center bg-white text-primary rounded-circle mx-auto mb-4" style={{width: "60px", height: "60px"}}>
                                <i className="fa fa-chart-line fs-4">
                                    <div id='imagePoint'>
                                        <img id='DesctiptionImage' src='https://clickup.com/blog/wp-content/uploads/2021/12/goals.png'/>
                                    </div>
                                </i>
                            </div>
                            <div className="ps-4">
                                <h3>Tailored Solutions for Your Goals</h3>
                                <p className="mb-0">Get programming solutions tailored to your unique goals. I work closely with you to understand your challenges and deliver personalized strategies that propel your projects forward.</p>
                            </div>
                        </div>
                        <div className="d-flex text-white mb-5">
                            <div className="d-flex flex-shrink-0 align-items-center justify-content-center bg-white text-primary rounded-circle mx-auto mb-4" style={{width: "60px", height: "60px"}}>
                                <i className="fa fa-chart-line fs-4">
                                    <div id='imagePoint'>
                                        <img id='DesctiptionImage' src='https://www.globalsign.com/application/files/1116/8783/6402/Code_Signing.png'/>
                                    </div>
                                </i>
                                
                            </div>
                            <div className="ps-4">
                                <h3>Expertise in Cutting-Edge Technologies</h3>
                                <p className="mb-0">Leverage my deep expertise in cutting-edge programming technologies. I stay ahead of industry trends to provide you with state-of-the-art solutions that deliver exceptional results</p>
                            </div>
                        </div>
                        <div className="d-flex text-white">
                            <div className="d-flex flex-shrink-0 align-items-center justify-content-center bg-white text-primary rounded-circle mx-auto mb-4" style={{width: "60px", height: "60px"}}>
                                <i className="fa fa-chart-line fs-4">
                                    <div id='imagePoint'>
                                        <img id='DesctiptionImage' src={teamwork}/>
                                    </div>
                                </i>
                            </div>
                            <div className="ps-4">
                                <h3>Collaborative Approach and Timely Delivery</h3>
                                <p className="mb-0">Experience a collaborative partnership where your project's success is my priority. I work closely with you or your team to ensure seamless integration and timely delivery, giving you peace of mind every step of the way</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div className="container-fluid pt-6 px-5">
            <div className="text-center mx-auto mb-5" style={{maxWidth: "600px"}}>
                <h1 className="display-5 mb-0">What I Offer</h1>
                <hr className="w-25 mx-auto bg-primary"/>
            </div>
            <div className="row g-5">
                <div className="col-lg-4 col-md-6">
                    <div className="service-item bg-secondary text-center px-5">


                            <img id='DesctiptionImageOffer' src={codeImage}/>
                            <br/>

                        <h3 className="mb-3">Code Review and Analysis</h3>
                        <p className="mb-0">in-depth code reviews to identify bugs, inefficiencies, and areas for improvement</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="service-item bg-secondary text-center px-5">

       
                                <img id='DesctiptionImageOffer' src={goalsImage}/>
                                <br/>

                         
                        <h3 className="mb-3">Project Planning and Architecture</h3>
                        <p className="mb-0">Assistance in planning software projects</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="service-item bg-secondary text-center px-5">
         
                            
                                <img id='DesctiptionImageOffer' src={consultation}/>
                            <br/>

                         
                        <h3 className="mb-3">Technical Consultation</h3>
                        <p className="mb-0">expert advice on technical challenges, such as selecting the right technology stack, resolving compatibility issues, you will be charged $0.99 for every minute</p>
                    </div>
                </div>
            </div>
        </div>

        <br/>
        <br/>
        <br/>
        <br/>

        <div className="container-fluid bg-secondary px-0">
            
            <div className="row g-0">
                <div className="col-lg-6 py-6 px-5">
                    <h1 className="display-5 mb-4">Request A Quote</h1>

                    <form>
                        <div id={Errors_State ? 'ErrorField' : null}>{Errors_State}</div>
                        <br/>
                        <div className="row gx-3">
                            <div className="col-6">
                                <div className="form-floating">
                                    <input required ref={UsersName} type="text" className="form-control" id="form-floating-1" placeholder="Your Name"/>
                                    <label htmlFor="form-floating-1">Full Name</label>
                                </div> 
                            </div>
                            <div className="col-6">
                                <div className="form-floating mb-3">
                                    <input required ref={UsersEmailAddress} type="email" className="form-control" id="form-floating-2" placeholder="Your Email Adress"/>
                                    <label htmlFor="form-floating-2">Email address</label>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-floating">
                                    <select required ref={ServiceType} className="form-select" id="floatingSelect">
                                        <option value="0">Tech Consultancy</option>
                                        <option value="1">Project Planning</option>
                                        <option value="2">Code Review</option>
                                    </select>
                                    <label htmlFor="floatingSelect">Service Type</label>
                                </div>
                            </div>
                            <div className="col-6">
                                <button ref={TriggerButton} onClick={SendQuoteRequest} className="btn btn-primary w-100 h-100" type="button">Request A Quote</button>
                            </div>
                        </div>  
                    </form>
                </div>
                <br/>
                <br/>
                <div className="col-lg-6" style={{minHeight: "400px"}}>
                    <div className="position-relative h-100">
                        <img className="position-absolute w-100 h-100" src={forthImage} style={{objectFit: "cover"}}/>
                    </div>
                </div>
            </div>
        </div>

        {successSignal ? <Popup type={successSignal}/> : null}

        </div>
        

    )
}
