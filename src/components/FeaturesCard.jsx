function FeatureCard({image, title, alt}){
    return(
        <div className="card">
            <div className="card-box">
                <img src={image} alt={alt} className="card-img" />
            </div>
            <p>{title}</p>
        </div>
    );
}
export default FeatureCard