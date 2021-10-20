# No Handler project reproduces a problem where an error message should be better when an event handler implementation is missing
# To reproduce:
- Deploy the components to an org
- Add noHandlerWrapper to a record home flexipage
- Load a record
- Click on the "click me" button

Observe the error popup with limited information on what happened.  The error message should tell the user that the handler specified does not exist.
