export default function TechnoItem(props) {

    const { techno, handleDeleteTechno } = props;

    return (
        <div key={techno.technoid} className = "card">
            <h2>{techno.technoname}</h2>
            <h3>Catégorie</h3>
            <p>{techno.technocategory}</p>
            <h3>Description</h3>
            <p>{techno.technodescription}</p>
            <button className="btn-delete" onClick={() => handleDeleteTechno(techno.technoid)}>Supprimer</button>
      </div>
    );
}