import '../styles/App.css';

const Footer = () => {
    const currentDate = new Date();
    const currentyear = currentDate.getFullYear();
    
    return (
        <>
            <section className="row border-top p-4">
                <div className="col-10 mx-auto d-flex justify-content-center ">
                   <div className="row d-flex justify-content-center">
                          <div className="col-12 mb-2">
                            <p className="text-center fs-4">Designed & Developed by  Asim Rai
                            </p>
                        </div>
                        <div className="col-12 ">
                            <p className="text-center fs-5">
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
