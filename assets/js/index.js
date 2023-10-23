// click event on .clickable
// find the next .toggle
// remove the class .hidden from the .toggle we just found

const clickableRows = document.querySelectorAll( ".item" );

function toggleRow( clickedRow ) {

  // toggle highlight on current row
  clickedRow.classList.toggle( 'selected' );

  // loop through next rows as long as they have the content class ..
  let contentElement = clickedRow.nextElementSibling;

  while ( contentElement && contentElement.classList.contains( 'content' ) ) {

    // .. and toggle the hidden class'
    contentElement.classList.toggle( 'hidden' );

    contentElement = contentElement.nextElementSibling;
  }


  // deselect other rows
  clickableRows.forEach( function( clickableRow ) {
    if ( clickableRow != clickedRow 
      && clickableRow.classList.contains( 'selected' ) ) {
        clickableRow.classList.remove( 'selected' );

      contentElement = clickableRow.nextElementSibling;
      while ( contentElement && contentElement.classList.contains( 'content' ) ) {
        contentElement.classList.toggle( 'hidden' );
    
        contentElement = contentElement.nextElementSibling;
      }
    }
  } )
}

// add clickevent to clickable rows
clickableRows.forEach( function ( clickableRow ) {
  clickableRow.addEventListener( "click", function( ) {
    toggleRow( clickableRow );
  } );
} );