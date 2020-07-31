# Inserting js-sequence diagrams in MkDocs 

## Steps

1. Install MkDocs and PyMDown Extensions.
2. Create an MkDocs project.
3. Add a [javascript file](https://github.com/pinnareet/mkdocs-js-sequence-diagram-demo/blob/master/docs/js/umlconvert.js) to parse the js-sequence-diagrams syntax in the markdown.
4. Edit mkdocs.yml.
5. Edit your markdown file and build your docs.

Detailed tutorial written on [Medium](https://medium.com/@pinpinteamakorn/using-js-sequence-diagrams-in-mkdocs-4eeb0cb2c238?sk=47ab02b1a8a04093dca95c190bbdf2a1).

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
