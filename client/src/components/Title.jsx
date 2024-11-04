
function Title (props){
    return(
        <div className="border py-4">
            <h4 className="text-center text-secondary"> {props.subtitle} </h4>
        <h1 className='app-title-heading  text-center'>
             {props.title}
             </h1>
        </div>
    )
}


export default Title;