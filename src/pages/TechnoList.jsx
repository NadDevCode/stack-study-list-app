import TechnoItem from '../components/TechnoItem';

export default function TechnoList(props) {
  const { technos, handleDeleteTechno} = props;

  const numbOfTasks = technos.length;

  const agreementOfTheWordTask = numbOfTasks > 1 ? "tâches" : "tâche";

  return (
    <div className="techno-list">
      <h1>Mon tableau de {agreementOfTheWordTask}</h1>
      <div>
        {/* Itération sur chaque technologie dans le tableau technos */}
        {technos.map((techno) => (
          <TechnoItem techno={techno} key={techno.technoid} handleDeleteTechno={handleDeleteTechno} />
        ))}
      </div>
    </div>
  );
}
