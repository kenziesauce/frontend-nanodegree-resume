//$("#main").append(["Makenzie Van Vooren"]);

var name = "Makenzie Van Vooren";
var formattedName = HTMLheaderName.replace("%data%", name);
$("#header").append(formattedName);

var role = "Coder";
var formattedRole = HTMLheaderRole.replace("%data%", role);
$("#header").append(formattedRole);