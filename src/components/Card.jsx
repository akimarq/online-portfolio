
function Card(project) {
    return (   
        <div className="project-card">
            <div className="card-visual">
                <div className="card-placeolder-div">

                </div>
            </div>
            <div className="card-info">
                <h2>{project.name}</h2>
                <p>{project.desc}</p>
                <p>{project.env}</p>
            </div>
        </div>
    );
}
export default Card;    