function hasVoted(cookieObj, answers)
{
	if (typeof cookieObj != 'undefined') // No cookies are set
	{
		var hasVoted = false;
		var answerId = [];

		$.each(answers, function(key, value) {
			answerId.push(value.id.toString()); // Treat id as a string as to be able to match.
		});

		$.each(cookieObj, function(key, value) {

			if ($.inArray(value, answerId) > -1)
			{
				hasVoted = true;
				return false;
			}	
				
		});

		return hasVoted;
	}
}