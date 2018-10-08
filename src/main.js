
import { getTeaser, getVowelsCount, getConsonantsCount } from './journal';

import './styles.css';

$(document).ready(function() {
  $('#journalform').submit(function(event) {
    event.preventDefault();
    var body = $('#body').val();
    var teaser = getTeaser(body);

    $('#solution').append("<li>" + teaser + " --- vowels: " + getVowelsCount(body) + " consonants : " + getConsonantsCount(body) + "</li>");
  });
});