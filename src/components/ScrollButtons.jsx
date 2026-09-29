import {useState, useEffect} from "react"

function ScrollButtons(){
    const [showTop, setShowTop] = useState(false);
    const [showBottom, setShowBottom] = useState(true);

    useEffect(()=>{
        const handleScroll = ()=>{
            const scrollY = window.scrollY;
            const windowHeight = window.innerHeight;
            const docHeight = document.documentElement.scrollHeight;

            setShowTop(scrollY > 300);

            setShowBottom(scrollY + windowHeight < docHeight - 300);
        };
        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return() => window.removeEventListener("scroll", handleScroll);
    }, []);
    const scrollToTop = () =>{
        window.scrollTo({top: 0, behavior: "smooth"});
    };
    const scrollToBottom = ()=>{
        window.scrollTo({
            top: document.documentElement.scrollHeight, 
            behavior: "smooth",
        });
    };
    return(
        <div className="scroll-buttons">
            {showTop && (
                <button 
                    className="scroll-btn scroll-btn-top"
                    onClick={scrollToTop}
                    aria-label="Volver arriba"
                >
                     ↑
                </button>
            )}
            {showBottom && (
                <button
                    className="scroll-btn scroll-btn-bottom"
                    onClick={scrollToBottom}
                    aria-label="Ir al final"
                >
                    ↓
                </button>
            )}
        </div>
    );
};

export default ScrollButtons