module.exports = function() {

  // begin jquery UI
  $(function() {
    $(".selectbox-ui")
      .selectmenu()
  });
  // end jquery UI

  $( ".search-res-tabs__header-select" )
    .selectmenu()
    .selectmenu( "menuWidget" )
    .addClass( "search-res-tabs__header-select-option" );

};