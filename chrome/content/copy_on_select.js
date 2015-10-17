var copy_on_select = {
	
	clipboard : null,
	
	initialize : function() {
		copy_on_select.clipboard = Components.classes["@mozilla.org/widget/clipboardhelper;1"].getService(Components.interfaces.nsIClipboardHelper);
	},
	
	mouseup : function() {
		try {
			var selection = content.document.getSelection().toString();
			if (selection != '') {
				copy_on_select.clipboard.copyString(selection);
			}
		} catch(e) {}
	}
	
};

window.addEventListener('mouseup', function() { copy_on_select.mouseup(); }, false);
window.addEventListener('load', function() { copy_on_select.initialize(); }, false);
