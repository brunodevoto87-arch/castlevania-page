function Header({onNavigate}){
    return(
        <div className="header">
            <h1 className="logo" onClick={() => onNavigate("home")} style={{cursor:"pointer"}}>Castlevania: Simphony of the Night</h1>
            <nav className="menu-nav">
                <ul>
                    <li>
                        <span onClick={()=> onNavigate("history")} style={{cursor:"pointer"}}>
                        History
                        </span>
                    </li>
                    <li>
                        <span onClick={()=> onNavigate("alucard")} style={{cursor:"pointer"}}>About Alucard
                        </span>
                    </li>
                    <li>
                        <span onClick={()=>onNavigate("castle")} style={{cursor:"pointer"}}>Dracula´s Castle
                        </span>
                    </li>
                    <li>
                        <span 
                            id="btn-bestiario" 
                            onClick={()=>onNavigate("bestiary")}
                            style={{cursor:"pointer"}}
                        >
                            Bestiary
                        </span>
                    </li>
                    <li>
                        <span
                            onClick={()=> onNavigate("relics")}
                            style= {{cursor: "pointer"}}>
                                Relics
                        </span>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
export default Header