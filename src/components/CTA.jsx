function CTA(){
    return(
        <div className="cta-section">
            <div className="cta-banner">
                <div className="left">
                    <h3>Join the hunt</h3>
                    <p>Sign up to receive news about Symphony of the Night</p>
                </div>
                <div className="right">
                    <form className="cta-form" onSubmit={(e) => e.preventDefault()}>
                        <input  
                            type="email"
                            placeholder="Enter your email..."
                            required
                            className="cta-input"
                        />
                        <button type="submit" className="btn-submit">
                            Sign up
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default CTA