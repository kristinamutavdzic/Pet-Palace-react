import {RiQuestionnaireFill} from "react-icons/ri"
import './ONama.css';

function ONama() {
    return (
      <div  className='onama'>

      <div className="onama-text">
          <> O nama <RiQuestionnaireFill></RiQuestionnaireFill></>
      </div>

      <br /><br /><br /><br /><br />

      <div className="flex-container">
          <div className="kontejner">
              <h2 className="naslov">Cilj sajta:</h2>
              <p className="tekst"> Pet Palace je online prodavnica koja nudi širok asortiman proizvoda za vaše ljubimce. 
              Na ovom sajtu možete pronaći hranu, igračke, krevete, odeću i mnogo drugih proizvoda za pse, mačke, ptice, 
              glodare i ribice. Svaki proizvod je pažljivo odabran i kvalitetan, tako da možete biti sigurni da ćete naći 
              nešto što će odgovarati vašem ljubimcu i vašem budžetu. Pored toga, Pet Palace nudi brzu i pouzdanu dostavu. 
              Zato posetite Pet Palace i pružite svom ljubimcu najbolje!
                 </p>
          </div>
          <div className="onama-slika">
            <img className="slika"src="https://assets.dmagstatic.com/wp-content/uploads/2021/06/CutestPets21_Top20_BlogPostImage.jpg" alt="ljubimci" />
          </div>

        </div>  

    </div>

    );
  }

export default ONama