import FeatureCard from "./FeaturesCard";

const features = [
    {
        image: "/sword_shield.webp",
        title: "Weapons & Shields",
        alt: "Weapons",
    },
    {
        image: "/castillo_invert.jpg",
        title: "Inverted Castle",
        alt: "Inverted Castle",
    },
    {
        image: "/reliquias.jpg",
        title: "Relics of Power",
        alt: "Relics",
    },
    {
        image: "/death2.jpg",
        title: "Boss Battles",
        alt: "Boss Battles",
    },

];

function Features({onNavigate}){
    return(
        <div className="features-section">
            <h2>Explore the Castle</h2>
            <div className="cards-container">
                {features.map((feature)=>(
                    <FeatureCard
                    key={feature.title}
                    image={feature.image}
                    title={feature.title}
                    alt={feature.alt}
                    onClick={
                        feature.title === "Inverted Castle"
                        ? () => onNavigate("bestiary", {inverted:true})
                        : undefined
                    }
                    />
                ))}
            </div>
        </div>
    );
}

export default Features;