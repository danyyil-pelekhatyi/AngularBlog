module.exports = function() {
	var themes = {
		'theme-classic': true
	};
	var service = {

		getThemeMap: function() {
			return themes;
		},

		getCurrentTheme: function() {
			for(var theme in themes){
				if(themes[theme])
					return theme;
			}
		}
	}

	return service;
}
