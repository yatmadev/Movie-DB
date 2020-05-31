/**
 * @description Display alert with text whenever called.
 * @param customString Message That you want to display.
 */
export function customAlert(customString) {
  setTimeout(() => {
    alert(customString);
  }, 5);
}



export function renderIf(condition, content) {
  if (condition) {
    return content;
  } else {
    return null;
  }
}
