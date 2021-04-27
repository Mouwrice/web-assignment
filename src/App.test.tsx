import { act, render } from '@testing-library/react'
import App from './App';
import i18n from 'i18next'

test('language switching', () => {
  render(<App />);

  // button for english
  const enButton = document.querySelector("#en");
  // en language button should be selected by default
  expect(enButton!).toHaveClass("selected");
  // frameworks and libraries should not be tested, we should however check if the button triggers a language switch
  expect(i18n.language).toBe("en")

  // button for french
  const frButton = document.querySelector("#fr");
  act(() => {
    frButton!.dispatchEvent(new MouseEvent("click", { bubbles: true})); // simulate click on fr button
  });
  // fr button should be selected
  expect(frButton!).toHaveClass("selected");
  // en button should no longer be selected
  expect(enButton!).not.toHaveClass("selected");
  // i18n current language should have switch to french
  expect(i18n.language).toBe("fr")

  // button for dutch
  const nlButton = document.querySelector("#nl");
  act(() => {
    nlButton!.dispatchEvent(new MouseEvent("click", { bubbles: true })) // simulate click on nl button
  });
  // nl button should be selected
  expect(nlButton!).toHaveClass("selected")
  // fr button should no longer be selected
  expect(frButton!).not.toHaveClass("selected")
  // i18n current language should have switch to french
  expect(i18n.language).toBe("nl")
});
