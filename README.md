# khoji
## About The Project
Lightweight JavaScript library for DOM manipulation

### Usage

1. Initiate 'ZAction' objects
```JS
    // For single element
    
    // Direct search
    khoj("body").phir((element) => { element.setAttribute("checked", true); return element.querySelector("input"); }).phir((inputElement) => { console.log(inputElement.value); });

    // Scoped search
    document.body.khoj("section").phir((element) => { element.setAttribute("checked", true); return element.querySelector("input"); }).phir((inputElement) => { console.log(inputElement.value); });

    // For multiple elements
    document.body.sabKhoj("div").phir((elements) => { console.log(elements); });
```
