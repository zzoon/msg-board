$(function() {		
	//Accordion
	var icons = {
		header: "ui-icon-circle-arrow-e",
		headerSelected: "ui-icon-circle-arrow-s"
	};
	
	$(".accordion").accordion( 
		{ 
			collapsible: true, 
			icons: icons, 
			autoHeight: false,
			active:-1, 
//			fillSpace: true
		}
	);
		
	$(".accordion").accordion("option", "icons", false);
	$(".accordion").accordion("resize");
		
	$("#write_button").button(
		{
			icons: {
				primary: 'ui-icon-pencil'
			},
			text: false
		}
	);
	$("#prev_button").button(
		{
			icons: {
				primary: 'ui-icon-triangle-1-w'
			},
			text: false
		}
	);
	$("#next_button").button(
		{
			icons: {
				primary: 'ui-icon-triangle-1-e'
			},
			text: false
		}
	);
		
	$('#write_button').button().click(function(){
				$('#write_dialog').dialog('open');
				return false;
			});
		
	// Dialog			
	$('#write_dialog').dialog({
		autoOpen: false,
		width: 400,
		buttons: {
			"Save": function() { 
				$(this).dialog("close"); 
			}, 
			"Cancel": function() { 
				$(this).dialog("close"); 
			} 
		},
		modal: true
	});
});

