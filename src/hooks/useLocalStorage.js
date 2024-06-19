import { useState } from "react";

export default function useLocalStorage(key, initialValue) {

    const [storedValue, setStoredValue] = useState(() => {
      // Vérification si le code s'exécute côté serveur
      if (typeof window === "undefined") {
        return initialValue;
      }
      try { // Tentative de récupération de la valeur du localStorage
     
        const item = window.localStorage.getItem(key); // Récupère l'item du localStorage avec la clé fournie
        
        return item ? JSON.parse(item) : initialValue; // Si l'item existe, le parse et le retourne, sinon retourne la valeur initiale
      } catch (error) {
       
        console.log(error);
        return initialValue;
      }
    });
 
    const setValue = (value) => {
      try { // Tentative de mise à jour de l'état et du localStorage
        // Si la valeur est une fonction, on l'exécute avec l'état actuel en paramètre ; sinon, on utilise directement cette valeur.
        const valueToStore = value instanceof Function ? value(storedValue) : value;
      
        setStoredValue(valueToStore);
    
        if (typeof window !== "undefined") {
          window.localStorage.setItem(key, JSON.stringify(valueToStore)); // Stocke la nouvelle valeur dans le localStorage
        }
      } catch (error) {
      
        console.log(error);
      }
    };
    // Retourne l'état actuel et la fonction setValue
    return [storedValue, setValue];
  }