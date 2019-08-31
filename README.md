## Creating your first Hero Pack!

Before starting, we suggest using a text editor other than the one that came with your computer. The only real reason is you'll be managing a lot of files at once, and that can get hectic with normal notepad.

Suggested Text Editors:

Atom (Full markdown Editor with support for all languages) - https://atom.io/

Notepad++ (Source code Editor to replace Notepad) - https://notepad-plus-plus.org/

We also suggest that you get some sort of photo editor other than MS Paint, there's plenty of free options out there, but if you'd like you could use some high end like Adobe Photoshop

Suggested Photo Editors:

Paint.net (Image and photo editing software for Windows) - https://www.getpaint.net/

Gimp (Image Manipulator) - https://www.gimp.org/
### Getting Started

The first thing you'll need for your heropack is a name. You can change this later, so it's not a big deal.

To start create a class called heropack.json and put in the following information. You can set the "My First Hero Pack" to the name of your choice, and you don't need to add the "alts" section if you do not want Alts.
(If you don't add the alts section make sure to remove the ',' after the name.)

heropack.json
```markdown
{
  # You can leave comments in these files if you'd like. Just use a # so it's ignored during runtime.
  "name": "My First Hero Pack",
  # You can leave this blank or remove it entirely if you don't plan on adding in any suit alts.
  "alts": {
  }
}
```

Afterword zip the directory and put it in your /fiskheroes/ directory. Then, run /fiskheroes reload

If you come across an issue check your game console for more information. Also, it's a good practice to make sure all of your JSON and JS files are valid.

You can use any checker you'd like. We suggest https://jsonformatter.org/json-parser

(OPTIONAL)
You can put in a credits.txt file for all of your skin creators, fisk, anyone who helped you, etc.
### File Structure
This is the basic structure for a hero pack. You don't need the models for trails if you're not customizing anything like that.
```markdown
heropack.json
credits.txt
/assets/"YourPackName"/data/heroes/YOURHEROES.js
/assets/"YourPackName"/textures/heroes/your_hero_model_textures.png
/assets/"YourPackName"/textures/items/your_hero_item_textures.png
/assets/"YourPackName"/models/heroes/your_hero_models.json
/assets/"YourPackName"/models/trails/your_trail_models.json
```
Or, if you'd rather download a template like this one...

### Adding a Hero
Before creating a hero ask yourself this...

Is it new? Is it unique to other suits. Should it be an alt? 
If you answered no, no, and yes make it a suit alt.

Anyway, making a hero can be quite simple or quite complex depending on what you'd like the hero to be able to do.

Basic Hero
basic.js
```markdown
function init(hero) {
    # The name of the hero, for models spaces are read with a _
    hero.setName("Basic Hero");
    # The version of the suit, usually the universe it's from. Not needed for suits, and it can whatever you'd like.
    hero.setVersion("Yert");
    # The suit tier, this defines it's base price and protection levels.
    # The general way to decide a tier:
    * Tier One - Street Clothes
    # Tier Two - Leather Jacket, Motorcycle Gear, Leather like
    # Tier Three - Plastic/Resin/Kevlar based armor
    # Tier Four - Full metal armor, strong skin
    # Tier Five - Godlike, extremely protective armor.
    hero.setTier(5);
    # You can hide the hero from NEI, Creative Mode, and Suit Fabricators. Don't put this line if you don't need it.
    hero.hide();
    # Setting the item pieces, if you don't want a suit to have say a chestplate, just remove the chestplate
    # There's a bunch of options, goggles, mask, helmet, head, etc. If it's not localized with item.superhero_armor.piece.BLANK then you can unlocalize it just by setting a name.
    hero.setHelmet("Glasses");
    hero.setChestplate("item.superhero_armor.piece.chestpiece");
    hero.setLeggings("Shorts");
    hero.setBoots("Sandals");
}
```

That'll add a hero named "Basic Hero" with no abilities, skills, attributes, etc.

Now, that's boring... let's add a complex superhero.


stan_lee.js
```markdown
function init(hero) {
    hero.setName("Stan Lee");
    # I'd say Stan Lee is godlike. 
    hero.setTier(5);
    # Stan Lee is too godlike for anyone to  receive him.
    hero.hide();
    # Setting the item pieces, if you don't want a suit to have say a chestplate, just remove the chestplate
    # There's a bunch of options, goggles, mask, helmet, head, etc. If it's not localized with item.superhero_armor.piece.BLANK then you can unlocalize it just by setting a name.
    hero.setHelmet("Hair");
    hero.setChestplate("Sweater");
    hero.setLeggings("Khakis");
    hero.setBoots("item.superhero_armor.piece.shoes");
    # Sets the equipment for the suit, equipment is essentially for showing in the hero book and /suit will also give that item
    hero.addEquipment("minecraft:book", 1);
    # Stan Lee has every ability right? This method is used to add abilities, it's plural, but you can add one ability like hero.addAbilities("canary_cry");
    hero.addAbilities("fiskheroes:accelerated_perception", "fiskheroes:archery", "fiskheroes:cactus_physiology", "fiskheroes:canary_cry", "fiskheroes:cellular_regeneration","fiskheroes:cold_resistance", "fiskheroes:cryokinesis", "fiskheroes:electricity_manipulation", "fiskheroes:electrokinesis", "fiskheroes:enhanced_reflexes", "fiskheroes:fire_immunity", "fiskheroes:flight", "fiskheroes:geokinesis", "fiskheroes:gliding", "fiskheroes:gliding_flight", "fiskheroes:healing_factor", "fiskheroes:heat_resistance", "fiskheroes:heat_vision", "fiskheroes:hover", "fiskheroes:intangibility", "fiskheroes:invisibility", "fiskheroes:leaping", "fiskheroes:propelled_flight", "fiskheroes:pyrokinesis", "fiskheroes:repulsor_blast", "fiskheroes:sentry_mode", "fiskheroes:shape_shifting", "fiskheroes:size_manipulation", "fiskheroes:super_speed", "fiskheroes:superhuman_durability", "fiskheroes:throwing_stars", "fiskheroes:utility_belt"
    # After abilities, weaknesses are needed. We're just going to add them all for example purposes. Pretty much the same as abilities.
    hero.addWeaknesses("fiskheroes:cold", "fiskheroes:fire", "fiskheroes:heat", "fiskheroes:metal_skin");
    # Hero attributes, when adding attributes make sure you pay attention to the second value as well. This operator determines between percentage (1) and whole values (0)
    # For tutorial purposes, we'll add a field for every attribute, you don't need this though.
    # Adds 4.0 arrow damage while wearing the suit.
    hero.addAttribute("ARROW_DAMAGE", 4.0, 0);
    # Adds 40% attack damage while wearing the suit.
    hero.addAttribute("ATTACK_DAMAGE", 0.8, 1);
    hero.addAttribute("BASE_SPEED_LEVELS", 2.0, 0);
    hero.addAttribute("BOW_DRAWBACK", 0.9, 1);
    hero.addAttribute("FALL_RESISTANCE", 1.0, 1);
    hero.addAttribute("JUMP_HEIGHT", 2.0, 1);
    hero.addAttribute("PUNCH_DAMAGE", 12.0, 0);
    hero.addAttribute("SPRINT_SPEED", 2.0, 1);
    hero.addAttribute("STEP_HEIGHT", 1.0, 1);
    hero.addAttribute("SWORD_DAMAGE", 24.0, 1);
}
```
### Creating Hero Textures

### Creating Models

### Creating Suit Alts
