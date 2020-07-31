# Inserting sequence diagrams in MkDocs with pymdownx.superfences  

## Steps

* Run `pip install mkdocs` (MkDocs installed with Homebrew doesn't work)
* Run `pip install markdown`
* Run `pip install pymdown-extensions`
* Make changes in umlconvert
- document.querySelectorAll("pre.highlight,div." + className)
- convertUML('language-uml-sequence-diagram', Diagram, {theme: 'simple'}); you can change the theme here
* Insert `umlconvert.js` in the same folder as docs/. Here I included the js folder for clarity.

## Sample sequence diagram

Here is a Hello World example.

```uml-sequence-diagram
Title: Hello World
Bob->Alice: Hello
Alice-->Bob: How are you?
Note left of Bob: Bob thinks
Bob->>Alice: I'm good, thanks! How about you?
Alice-->Bob: I'm doing great, thank you!
```
You can change the themes in the js file. 'simple' and 'hand'

## Commands

* `mkdocs new [dir-name]` - Create a new project.
* `mkdocs serve` - Start the live-reloading docs server.
* `mkdocs build` - Build the documentation site.
* `mkdocs -h` - Print help message and exit.

## Project layout

    mkdocs.yml    # The configuration file.
    docs/
        index.md  # The documentation homepage.
        ...       # Other markdown pages, images and other files.
