import '../styles/App.css';

const Footer = () => {
    const currentDate = new Date();
    const currentyear = currentDate.getFullYear();
    
    return (
        <>
            <section className="row border-top p-3">
                <div className="col-10 mx-auto d-flex justify-content-center ">
                   <div className="row d-flex justify-content-center">
                          <div className="col-12 ">
                            <p className="text-center fs-5">Designed & Developed by  Asim Rai
                            </p>
                        </div>
                        <div className="col-12 ">
                            <p className="text-center fs-6">
                                All rights reserved @{currentyear}
                            </p>
                        </div>
                   </div>
                        
                    
                 
                </div>
            </section>
        </>
    );
}

export default Footer;
