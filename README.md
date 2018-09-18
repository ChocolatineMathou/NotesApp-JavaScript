
Notes App in Pure JavaScript
=================

A simple single-page web notes app in pure JavaScript. Built using a TDD approach in JavaScript only, tested using a bespoke framework.

Tags: JavaScript (only!)


## Domain Model

OOP principles were used when designing the app:

```
 
╔════════════╗  
║            ║ 
║  Browser   ║ User enters new note     
║            ║
╚════════════╝
(no dynamic display on our html yet)
 
╔════════════╗  
║            ║ Takes NoteList object as a constructor argument
║ Controller ║ Instantiates new Note with hard-coded text    
║            ║ Instantiates new NoteListView
╚════════════╝ Method to update display   
      |
      |
      |
      |
	  |					╔════════════╗
	  |					║  Note List ║
	  |-----------------║    View    ║ Creates an HTML string for all note texts
	  |					║            ║ 
	  |					╚════════════╝
      |
      |
      |  
╔════════════╗   
║            ║ Returns all Note objects   
║    Note    ║ Creates a new Note object and pushes it to a list of all notes
║    List    ║     
╚════════════╝
      |
      |
      |
      |                    ╔════════════╗
      |                    ║            ║ Instantiates with a text value           
      |--------------------║    Note    ║ Returns the note text
                           ║            ║
                           ╚════════════╝
       
                         
```
