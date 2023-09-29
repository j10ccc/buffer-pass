import { nanoid } from "nanoid";
import Popover from "./components/popup";

customElements.define("buffer-pass-popup", Popover);
const popup = document.createElement("buffer-pass-popup") as Popover;
document.body.appendChild(popup);

function generatePassword() {
  return nanoid(12);
}

function matchPasswordInputs() {
  const inputs = document.querySelectorAll<HTMLInputElement>("input[type='password']");
  return inputs;
}

let isPasswordNeverVisit = true;
const isUseUserPassword = false;

const passwordInputs = matchPasswordInputs();

function takeOverPasswordElement() {
  const password = generatePassword();
  passwordInputs.forEach(element => {
    element.value = password;
    element.style.backgroundColor = "lightyellow";
    element.type = "text";
    element.style.fontFamily = "monospace";
  });
}

function handleFocus(e: FocusEvent) {
  const element = e.target as HTMLInputElement;
  popup.attachInput(element);
  if (isPasswordNeverVisit) {
    takeOverPasswordElement();
    isPasswordNeverVisit = false;
  }
  if (!isUseUserPassword) {
    element.blur();
  }
}

passwordInputs.forEach(input => {
  input.onfocus = handleFocus;
  input.addEventListener("onfocus", handleFocus);
});