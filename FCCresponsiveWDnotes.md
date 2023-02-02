main tag

section tag

figure and figcaption

form action = submit URL

input and submit are inline elements

type: text, placeholder, required (no value)

button will submit by default but it's good to add a type="submit"

nesting label around input will make it so that clicking the word will also select the radio

radio button with same name attribute will make it so that selecting one will deselect the other

value - data that will get submitted. set to ID for radio buttons

fieldset - groups parts of a form together

legend - acts as a caption

article - multiple elements that have related information

for attribute is used to attach a label to an input or nest input inside of label. should match element id


CSS
max-width


The "email" type only allows emails with a @ and a . in the domain. The "password" type obscures the input, and warns if the site does not use HTTPS.

The first input element with a type of submit is automatically set to submit its nearest parent form element.

To handle the form submission, after the last fieldset element add an input element with the type attribute set to submit and the value attribute set to Submit.
