import { createContext, useContext } from "react";

const BudgetContext = createContext();
const contatore = 0;

 function BudgetProvider({children}) {
    
    <Mycontext.Provider value={contatore}>
        {children}
    </Mycontext.Provider>
}
export{Myprovider} ;