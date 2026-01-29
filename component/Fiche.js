const Fiche = ({ nom, prenom, genre, competence}) => {
  return (
    <section className="fiche-section">
      <h1><strong>Nom:</strong> {nom}</h1>
      <h2><strong>Prénom:</strong> {prenom}</h2>
      <h3><strong>Genre:</strong> {genre}</h3>
      <div className="competence-container">
        <span className="competence-label"><strong>Compétences:</strong></span>
        <ul className="competence-list">
          {competence.map((comp)=>(
            <li >{comp}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Fiche;

