$( function() {
	$( 'img' ).click( function( e ) {
		var $this = $( this )
		window.open(
			$this.attr( 'src' ),
			'csci4180-image',
			'height=' + ( $this[ 0 ].naturalHeight + 20 ) + ', ' +
			'width=' + ( $this[ 0 ].naturalWidth + 20 ) + ', ' +
			'menubar=no'
		)
	} )
} )
