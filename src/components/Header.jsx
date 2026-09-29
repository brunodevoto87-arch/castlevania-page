function Header({onGoToBestiary}){
    return(
        <div className="header">
            <h1 className="logo">Castlevania: Simphony of the Night</h1>
            <nav className="menu-nav">
                <ul>
                    <li><a href="#">History</a></li>
                    <li><a href="#">About Alucard</a></li>
                    <li><a href="#">Dracula´s Castle</a></li>
                    <li>
                        <span 
                            id="btn-bestiario" 
                            style={{cursor: "pointer"}} onClick={onGoToBestiary}
                        >
                            Bestiary
                        </span>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
export default Header