/*    _           _    _                     _ 
     | |         | |  | |                   | |
  ___| | ___  ___| | _| |     ___   __ _  __| |
 / __| |/ _ \/ _ \ |/ / |    / _ \ / _` |/ _` |
 \__ \ |  __/  __/   <| |___| (_) | (_| | (_| |
 |___/_|\___|\___|_|\_\______\___/ \__,_|\__,_|
    version 2.04
*/

/*URL for the server logo
Leave it blank to use text instead*/
var l_serverImage = "images/dir-logo.png";

/*Custom server name configuration
Leave it blank for automatic server name*/
var l_serverName = "";

/*Use a video for the background?
Otherwise it will just use images*/
var l_bgVideo = false;

/*Video background
Avaiable options:
"backgrounds/videos/aurora.webm"
"backgrounds/videos/bluefall.webm"
"backgrounds/videos/bluetilefloor.webm"
"backgrounds/videos/bluewhitecircles.webm"
"backgrounds/videos/bokehlens.webm"
"backgrounds/videos/cleanbokeh.webm"
"backgrounds/videos/coldnight.webm"
"backgrounds/videos/colorfulburst.webm"
"backgrounds/videos/dancingstars.webm"
"backgrounds/videos/dropsflares.webm"
"backgrounds/videos/focusorangebokeh.webm"
"backgrounds/videos/glimmering.webm"
"backgrounds/videos/glowingrings.webm"
"backgrounds/videos/greencircles.webm"
"backgrounds/videos/hues.webm"
"backgrounds/videos/inthedeep.webm"
"backgrounds/videos/modernflourish.webm"
"backgrounds/videos/orangeaura.webm"
"backgrounds/videos/warminside.webm"
"backgrounds/videos/yellowgreen.webm"

You can add custom backgrounds
Just make sure it is at webm VP8 format */
var l_background = "backgrounds/videos/glimmering.webm";

/*(Image-background only)
Place one or more images
Multiple images will automatically shuffle between them*/
var l_bgImages = [
        "backgrounds/images/w1.jpg",
	"backgrounds/images/w2.jpg",
	"backgrounds/images/w3.jpg",
	"backgrounds/images/w4.jpg",
	"backgrounds/images/w5.jpg",
	"backgrounds/images/w6.jpg",
	"backgrounds/images/w7.jpg",
	"backgrounds/images/w8.jpg",	
	"backgrounds/images/w9.jpg",	
	"backgrounds/images/w10.jpg",
	"backgrounds/images/w11.jpg"
	
];

/*Random background images order?*/
var l_bgImagesRandom = true;

/*(Image-background only)
Delay between background images changes
in milliseconds*/
var l_bgImageDuration = 20000;

/*(Image-background only)
Image background fade velocity
in milliseconds*/
var l_bgImageFadeVelocity = 3000;

/*Enable background overlay?*/
var l_bgOverlay = true;

/*Background darkening amount
0 for none (0%), 100 for pitch black (100%)*/
var l_bgDarkening = 50;

/*Music player
'true' or 'false' to enable music in the background*/
var l_music = true;

/*Display actual song's name?*/
var l_musicDisplay = true;

/*Music playlist
Place how much Youtube IDs/.ogg you want*/
var l_musicPlaylist = [
	{youtube: "1a9-s23Rz6w", name: "Neue deutsche Welle (Remix)"},
	{youtube: "6YQfj3TXUXo", name: "Adolf Hitler Mother Führer Gentleman"},
	{youtube: "aaf81eUz05A", name: "Two Steps From Hell - Victory"}
];

/*Random music order?*/
var l_musicRandom = true;

/*Music volume
Choose a value between 0 and 100*/
var l_musicVolume = 8;

/*Enable custom messages?*/
var l_messagesEnabled = true;

/*Enter your custom messages below*/
var l_messages = [
"I saw my enemies in Munich, and they're worms. - Adolf Hitler",
"Never in the field of human conflict has so much been owed by so many to so few. - Winston Churchill",
"Which would your men rather be, tired, or dead? - Erwin Rommel",
"If everyone is thinking alike, then somebody isn't thinking. - George S. Patton",
"If we have power, we'll never give up unless we're carried out of our offices as corpses. - Joseph Goebbels",
"The mediterranean will be turned into an Italian lake. - Benito Mussolini",
"I have nothing to offer but blood, toil, tears and sweat. - Winston Churchill",
"Today we rule Germany, tomorrow, the world. - Adolf Hitler",
"Strength lies not in defence but in attack. - Adolf Hitler", 
"One death is a tragedy; one million is a statistic. - Joseph Stalin",
"This war is a new kind of war. It is warfare in terms of every continent, every island, every sea, every air lane in the world. - Franklin D. Roosevelt",
"The great leaders have always stage-managed their effects. - Charles de Gaulle"	


];

/*Random message order?*/
var l_messagesRandom = true;

/*Delay between message changes
in milliseconds*/
var l_messagesDelay = 10000;

/*Messages fade time
in milliseconds*/
var l_messagesFade = 2000;
