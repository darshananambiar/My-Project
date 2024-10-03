import React from 'react'

const FocusContext = createContext();

const FocusProvider = ({ children }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div>
       <FocusContext.Provider value={{ isFocused, setIsFocused }}>
      {children}
    </FocusContext.Provider>
    </div>
  )
}

export default FocusProvider
