import { useContext,createContext, useState } from "react";


const TestModeContext = createContext()
//default props - childrens props
export const TestModeContextProvider = ({children})=>{


    const [testTime,setTestTime] = useState(15)

    const values = {
        testTime,
        setTestTime
    }

    return(<TestModeContext.Provider value={values}>{children}</TestModeContext.Provider>)
}

//self made hook for dont want to get createContext to every component
export const useTestMode = () => useContext(TestModeContext)

// the children prop is a special prop that allows you to pass content between opening and closing tags when you use a component. 
// It's a way to pass components, elements, or text to another component and have that content rendered within the component's structure.
// <TestModeContextProvider>
//  <App />
// </TestModeContextProvider> 
// In this case, 
// <App /> is the children of TestModeContextProvider. 
// It will be rendered within the context provider's structure, 
// and any component that uses the useTestMode hook will have access to the context values provided by TestModeContextProvider. 
