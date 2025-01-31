import { useState } from "react"
import './style.css'

const App = () => {
  const [notes, setNotes] = useState([])

  /*
    on definit un etat au composant et on l'initialise avec un tableau vide
    notes = on affecte la valeur initialise de state
    setNotes = on attribue une fonction pour modifier son etat
  */

  const [newNotes, setNewNotes] = useState('')

  /*
    on definit un etat au composant et on l'initialise avec un string vide
    newNotes = on affecte la valeur initialise de state
    setNewNotes = on attribue une fonction pour modifier son etat
  */

  const handleNewNotes = (event) => {
    setNewNotes(event.target.value)

    /*
      le gestionnaire d'event est appele chaque fois qu'on a un changement
      target = element d'entree controle
      event.target = il fait reference a la valeur d'entree de cet element
    */
  }

  const addNotes = (event) => {
    // cette ligne permet d'eviter la soumission du formulaire html
    event.preventDefault()

    // on defini un objet pour le format de la note
    const noteObjet = {
      name: newNotes
    }

    // on fusionne noteobjet dans l'element setnotes
    setNotes(notes.concat(noteObjet))

    // on remet vide l'element input
    setNewNotes('')
  }

  // on lui donne un parametre
  const suppression = (noteToDelete) => {
    // je lui demande de creer un nouveveau tableau sans l'id que l'utilisateur veut supprimer avec un filter et je l'attribue dans le composant setnotes
    setNotes(notes.filter(note => note.name !== noteToDelete.name))
  }

  return (
    <div class="p-[32px]">
      <h1 class="text-[32px] font-bold">Ajouter une note</h1>

     {/*on a un form pour ajouter une notes*/}

      <form class="py-[20px]" onSubmit={addNotes}>
        <p class="mb-[20px]">Ajouter une valeur</p>
        <input class="block border p-[16px] w-96" onChange={handleNewNotes}/>
        <button class="bg-green-700 px-[32px] py-[16px] text-white mt-[20px]" type="submit">Ajouter</button>
      </form>

      <h1 class="text-[32px] font-bold">Les notes</h1>

      {/* on affiche les notes sous avec map */}

      <div>
        {notes.map(note => 
          <div class="flex items-center justify-between bg-gray-200 mt-[20px] p-[20px]" key={note.name}>
            <p class="mr-[20px]">{note.name}</p>
            {/* on utilise la fonction suppression avec la note correspondant en argument */}
            <button onClick={() => suppression(note)} class="bg-red-700 p-[16px] text-white">supprimer</button>
          </div>
        )}
      </div>
    </div>
  )
}

export default App