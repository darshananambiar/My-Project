import React, { useState } from 'react';
import TodoContext from './ThemeContext';
// const TodoProvider = ({ children }) => {
    // Create a state variable 'theme' that starts with 'light'.
    const [isFocused, setIsFocused] = useState(false);
    // const addclick = () => {
    //     setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    //   };

      return (
        <TodoContext.Provider value={{ isFocused, setIsFocused }}>
          {children}
        </TodoContext.Provider>
      );
};
export default TodoProvider;
