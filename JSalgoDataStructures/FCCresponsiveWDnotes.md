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

## flexbox

Flexbox has a main and cross axis. The main axis is defined by the flex-direction property, which has four possible values:

row (default): horizontal axis with flex items from left to right
row-reverse: horizontal axis with flex items from right to left
column: vertical axis with flex items from top to bottom
column-reverse: vertical axis with flex items from bottom to top

Note: The axes and directions will be different depending on the text direction. The values shown are for a left-to-right text direction.

The flex-wrap property determines how your flex items behave when the flex container is too small. Setting it to wrap will allow the items to wrap to the next row or column. nowrap (default) will prevent your items from wrapping and shrink them if needed.

The align-items property positions the flex content along the cross axis. In this case, with your flex-direction set to row, your cross axis would be vertical.

Rather than setting each aspect ratio individually, you can use the object-fit property to determine how images should behave. Cover

## accesibility quiz
SEO and viewport
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta name="description" content="freeCodeCamp Accessibility Quiz practice project" />
```

header used to house the navigation bar
main is for content. useful for screen readers


To increase the page accessibility, the role attribute can be used to indicate the purpose behind an element on the page to assistive technologies. The role attribute is a part of the Web Accessibility Initiative (WAI), and accepts preset values.

Every region role requires a visible label, which should be referenced by the aria-labelledby attribute.
