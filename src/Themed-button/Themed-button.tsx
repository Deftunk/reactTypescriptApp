import React from "react";
import { ThemeContext } from './Theme-context'
import { Button } from "@material-ui/core";

function ThemeTogglerButton() {
  // Le Theme Toggler Button reçoit non seulement le thème
  // mais aussi une fonction toggleTheme du contexte
  return (
    <ThemeContext.Consumer>
      {({ toggleTheme }) => (
        <Button
          onClick={toggleTheme}>
          DarkMode
        </Button>
      )}
    </ThemeContext.Consumer>
  );
}

export default ThemeTogglerButton;