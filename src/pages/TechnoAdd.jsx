import { useState } from "react";

export default function TechnoAdd(props) {
  const [techno, setTechno] = useState({
    technoname: '',
    technocategory: '',
    technodescription: ''
  });
  
  const { handleAddTechno } = props

  // gestion de la soumission du formulaire
  function handleSubmit(evt) {
    evt.preventDefault();
    if(techno.technoname === '' || techno.technocategory === '' || techno.technodescription ==='') { 
      alert("Remplisez tout les champs")
    } else {
      handleAddTechno(techno);
      // Réinitialisation de l'état de techno après l'ajout
      setTechno({
        technoname: '',
        technocategory: '',
        technodescription: ''
      });
    }
  }

  // Gére les changements de valeur des inputs
  function handleChange(evt) {
    const { name, value } = evt.target;
    setTechno({...techno, [name]: value})
  };

    return (
        <div className="techno-add">
        <h1>Ajoutez votre techno</h1>
        <div>
            <form onSubmit={(evt) => handleSubmit(evt)}> 
            <label htmlFor="technoname">Nom:</label>
            <br />
            <input type="text" name="technoname" id="technoname" value={techno.technoname} onChange={(evt) => handleChange(evt)} />
            <br />
            <label htmlFor="technocategory">Categorie:</label>
            <br />
            <select name="technocategory" id="technocategory" value={techno.technocategory} onChange={(evt) => handleChange(evt)}>
                <option value="">Choisissez une catégorie</option>
                <option value="front">Front</option>
                <option value="back">Back</option>
                <option value="fullstack">Fullstack</option>
                <option value="other">Autre</option>
          </select>
          <br />
          <label htmlFor="technodescription">Description:</label>
          <br />
          <textarea
            name="technodescription"
            id="technodescription"
            cols="30"
            rows="10"
            value={techno.technodescription}
            onChange={(evt) => handleChange(evt)}
          ></textarea>
          <br />
          <input type="submit" value="Add Techno" className="btn"/>
        </form>
      </div>
    </div>
  );
}

