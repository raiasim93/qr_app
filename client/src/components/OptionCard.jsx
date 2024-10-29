
const OptionCard = ({label, onClick, icon: IconComponent}) => {
    return(
        <>
         {/* Facebook Option */}
         <div
                className="col-8 mb-3 d-flex justify-content-center align-items-center border border-secondary rounded p-2 option-container"
                onClick={onClick}
              >
                <input type="radio" id={label.toLowerCase()} name="fileType" value={label.toLowerCase()} className="d-none" />
                <label htmlFor={label.toLowerCase()} className="d-flex align-items-center fs-5 option-label">
                  <IconComponent className="me-2" />
                  <span>{label}</span>
                </label>
              </div>
        </>
    )
};

export default OptionCard;