# CharazayPositionSkills

GreaseMonkey script for enhancing player's page in Charazay Basketball Manager (Firefox Only)

Inspired by CharazayMonkey 
(author Lukasz Wachowicz, http://userscripts-mirror.org/scripts/show/67081) 

The player's page(both main and youth team players) receives additional tab with
skill distribution ans um of skills for all positions - PG, SG, SF, PF, C, 
both offensive and defensive according to the manual
http://www.charazay.com/index.php?act=manual&id=15
(see "offensive potential" and "defensive potential").

#Installation
1. Download GreaseMonkey Extension for Firefox 
https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/

2. Click "Create script" in GreaseMonkey menu

3. Enter the name of the script ("CharazayPositionSkills", for example),
namespace ("Charazay"), description (optional), inclusions:
*charazay.com*act=player*code=1*
*charazay.com*act=youthplayer*code=1*

4. Press "OK" and the editor will be opened with some text in it
(information from the previous step).

5. Copy and paste script from
https://github.com/antisergey/CharazayPositionSkills/blob/master/PositionSkills.user.js

Save it. Now it's ready. Additional information will appear for players of your main team, 
your youth team and players on transfer market/offer market (all those, whose skills
are visible).

PS. Script processes information used by skill chart.





 
