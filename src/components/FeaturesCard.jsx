function FeatureCard({image, title, alt, onClick}){
    return(
        <div 
        className="card"
        onClick={onClick}
        style={onClick ? {cursor:"pointer"}: undefined}
        >    
            <div className="card-box">
                <img src={image} alt={alt} className="card-img" />
            </div>
            <p>{title}</p>
        </div>
    );
}
export default FeatureCard