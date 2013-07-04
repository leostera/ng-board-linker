# linker
## ng-board widget

Example widget that takes whatever you push thru the socket and extends the scope object with it.

### Installation

Can be installed using `$ bower i ng-board-linker`.

### Example of use

```html
<w-linker
  listen-to="messageCount"
  link-to="count">
  Hey! You've got {{count}} messages!
</w-linker>
```