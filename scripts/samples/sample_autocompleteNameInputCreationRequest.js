/**
 * The following fragment starts the auto-complete lbrary, for morre information and library docs, go to:
 * https://www.devbridge.com/sourcery/components/jquery-autocomplete/ 
 */

window.addEventListener('load', () => {
/*jslint  browser: true, white: true, plusplus: true */
/*global $, countries */
    $(function () {
        'use strict';
    
        // Initialize ajax autocomplete:
        $('#form_position').autocomplete({
            serviceUrl: 'http://127.0.0.1:5500/TO-testing/complete-sample.json',
            minChars: 1,
            showNoSuggestionNotice: false,
        /*lookupFilter: function(suggestion, originalQuery, queryLowerCase) {
                var re = new RegExp('\\b' + $.Autocomplete.utils.escapeRegExChars(queryLowerCase), 'gi');
                return re.test(suggestion.value);
            },
            onSelect: function(suggestion) {
                //$('#form_position').html('You selected: ' + suggestion.value + ', ' + suggestion.data);
            },
            onHint: function (hint) {
                //$('#form_position').val(hint);
            },
            onInvalidateSelection: function() {
            //$('#form_position').html('You selected: none');
            }*/
        });

        /**
         * sample for local use
         */

        /*var nhlTeams = ['Anaheim Ducks', 'Atlanta Thrashers', 'Boston Bruins', 'Buffalo Sabres', 'Calgary Flames', 'Carolina Hurricanes', 'Chicago Blackhawks', 'Colorado Avalanche', 'Columbus Blue Jackets', 'Dallas Stars', 'Detroit Red Wings', 'Edmonton OIlers', 'Florida Panthers', 'Los Angeles Kings', 'Minnesota Wild', 'Montreal Canadiens', 'Nashville Predators', 'New Jersey Devils', 'New Rork Islanders', 'New York Rangers', 'Ottawa Senators', 'Philadelphia Flyers', 'Phoenix Coyotes', 'Pittsburgh Penguins', 'Saint Louis Blues', 'San Jose Sharks', 'Tampa Bay Lightning', 'Toronto Maple Leafs', 'Vancouver Canucks', 'Washington Capitals'];
        var nbaTeams = ['Atlanta Hawks', 'Boston Celtics', 'Charlotte Bobcats', 'Chicago Bulls', 'Cleveland Cavaliers', 'Dallas Mavericks', 'Denver Nuggets', 'Detroit Pistons', 'Golden State Warriors', 'Houston Rockets', 'Indiana Pacers', 'LA Clippers', 'LA Lakers', 'Memphis Grizzlies', 'Miami Heat', 'Milwaukee Bucks', 'Minnesota Timberwolves', 'New Jersey Nets', 'New Orleans Hornets', 'New York Knicks', 'Oklahoma City Thunder', 'Orlando Magic', 'Philadelphia Sixers', 'Phoenix Suns', 'Portland Trail Blazers', 'Sacramento Kings', 'San Antonio Spurs', 'Toronto Raptors', 'Utah Jazz', 'Washington Wizards'];
        var nhl = $.map(nhlTeams, function (team) { return { value: team, data: { category: 'NHL' }}; });
        var nba = $.map(nbaTeams, function (team) { return { value: team, data: { category: 'NBA' } }; });
        var teams = nhl.concat(nba);

        // Initialize autocomplete with local lookup:
        $('#form_position').devbridgeAutocomplete({
            //serviceUrl: 'http://127.0.0.1:5500/TO-testing/complete-sample.json',
            lookup: teams,
            minChars: 1,
            onSelect: function (suggestion) {
                $('#selection').html('You selected: ' + suggestion.value + ', ' + suggestion.data.category);
            },
            showNoSuggestionNotice: false,
            noSuggestionNotice: 'Nunca creaste un pedido igual a este, pero estamos listos!',
        });*/
    });
});