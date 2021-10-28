window.configInfo = {
	load: function (pnlDiv, addon) {
        var highlightColor = app.getValue('MonkeyGroove_highlightColor', '#346dcf');
        
        var UI = getAllUIElements(pnlDiv);
        UI.themeColorPicker.controlClass.value = highlightColor;
        
        // Reset to the default color
        localListen(UI.btnResetThemeColor, 'click', () => {
            UI.themeColorPicker.controlClass.value = '#346dcf';
        });
	},
	save: function(pnlDiv, addon) {
        
        var UI = getAllUIElements(pnlDiv);
        var highlightColor = UI.themeColorPicker.controlClass.value;
        app.setValue('MonkeyGroove_highlightColor', highlightColor);
        
        if (UI.themeColorPicker.controlClass.isSimilarTo('#FFFFFF')) {
            messageDlg(_('The color combination you chose would result in text being unreadable. Please choose a different color combination.'), 
            'Error',
            ['btnOK'], 
            {defaultButton: 'btnOK'},
            undefined);
        }
        else {
            setLessValues({'warningColor': highlightColor}, addon.ext_id);
        }
	}
}