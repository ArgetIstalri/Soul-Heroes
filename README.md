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
  // You can leave comments in these files if you'd like. Just use a // so it's ignored during runtime.
  "name": "My First Hero Pack",
  // You can leave this blank or remove it entirely if you don't plan on adding in any suit alts.
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
    // The name of the hero, for models spaces are read with a _
    hero.setName("Basic Hero");
    // The version of the suit, usually the universe it's from. Not needed for suits, and it can whatever you'd like.
    hero.setVersion("Yert");
    // The suit tier, this defines it's base price and protection levels.
    // The general way to decide a tier:
    // Tier One - Street Clothes
    // Tier Two - Leather Jacket, Motorcycle Gear, Leather like
    // Tier Three - Plastic/Resin/Kevlar based armor
    // Tier Four - Full metal armor, strong skin
    // Tier Five - Godlike, extremely protective armor.
    hero.setTier(5);
    // You can hide the hero from NEI, Creative Mode, and Suit Fabricators. Don't put this line if you don't need it.
    hero.hide();
    // Setting the item pieces, if you don't want a suit to have say a chestplate, just remove the chestplate
    // There's a bunch of options, goggles, mask, helmet, head, etc. If it's not localized with item.superhero_armor.piece.BLANK then you can unlocalize it just by setting a name.
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
    // I'd say Stan Lee is godlike. 
    hero.setTier(5);
    // Stan Lee is too godlike for anyone to make him.
    hero.hide();
    // Setting the item pieces, if you don't want a suit to have say a chestplate, just remove the chestplate
    // There's a bunch of options, goggles, mask, helmet, head, etc. If it's not localized with item.superhero_armor.piece.BLANK then you can unlocalize it just by setting a name.
    hero.setHelmet("Hair");
    hero.setChestplate("Sweater");
    hero.setLeggings("Khakis");
    hero.setBoots("item.superhero_armor.piece.shoes");
    // Sets the equipment for the suit, equipment is essentially for showing in the hero book and /suit will also give that item
    hero.addEquipment("minecraft:book", 1);
    // Stan Lee has every ability right? This method is used to add abilities, it's plural, but you can add one ability like hero.addAbilities("canary_cry");
    hero.addAbilities("fiskheroes:accelerated_perception", "fiskheroes:archery", "fiskheroes:cactus_physiology", "fiskheroes:canary_cry", "fiskheroes:cellular_regeneration","fiskheroes:cold_resistance", "fiskheroes:cryokinesis", "fiskheroes:electricity_manipulation", "fiskheroes:electrokinesis", "fiskheroes:enhanced_reflexes", "fiskheroes:fire_immunity", "fiskheroes:flight", "fiskheroes:geokinesis", "fiskheroes:gliding", "fiskheroes:gliding_flight", "fiskheroes:healing_factor", "fiskheroes:heat_resistance", "fiskheroes:heat_vision", "fiskheroes:hover", "fiskheroes:intangibility", "fiskheroes:invisibility", "fiskheroes:leaping", "fiskheroes:propelled_flight", "fiskheroes:pyrokinesis", "fiskheroes:repulsor_blast", "fiskheroes:sentry_mode", "fiskheroes:shape_shifting", "fiskheroes:size_manipulation", "fiskheroes:super_speed", "fiskheroes:superhuman_durability", "fiskheroes:throwing_stars", "fiskheroes:utility_belt"
    // After abilities, weaknesses are needed. We're just going to add them all for example purposes. Pretty much the same as abilities.
    hero.addWeaknesses("fiskheroes:cold", "fiskheroes:fire", "fiskheroes:heat", "fiskheroes:metal_skin");
    // Hero attributes, when adding attributes make sure you pay attention to the second value as well. This operator determines between percentage (1) and whole values (0)
    // For tutorial purposes, we'll add a field for every attribute, you don't need this though.
    // Adds 4.0 arrow damage while wearing the suit.
    hero.addAttribute("ARROW_DAMAGE", 4.0, 0);
    // Adds 80% attack damage while wearing the suit.
    hero.addAttribute("ATTACK_DAMAGE", 0.8, 1);
    hero.addAttribute("BASE_SPEED_LEVELS", 2.0, 0);
    hero.addAttribute("BOW_DRAWBACK", 0.9, 1);
    hero.addAttribute("FALL_RESISTANCE", 1.0, 1);
    hero.addAttribute("JUMP_HEIGHT", 2.0, 1);
    hero.addAttribute("PUNCH_DAMAGE", 12.0, 0);
    hero.addAttribute("SPRINT_SPEED", 2.0, 1);
    hero.addAttribute("STEP_HEIGHT", 1.0, 1);
    hero.addAttribute("SWORD_DAMAGE", 24.0, 1);
    // Remember, whenever you add an abiity with a keybind you need to assign it to a key for it to take action. The only  issue with keybinds is that you're limited to 5 keys, and if say you do assign every ability in the game not all of them will actually be usable.
    // A general tip is to review what the default keybinds use for abilities. This is good for playability as if you set your heat vision to key 2, but Martian Manhunter has key 5 assigned to it, it'll end up playing weird in-game. You can review the data pack for the default heroes by downloading the source code here. https://download.fiskmods.com/?path=Mods/Fisk--s%20Superheroes/1.3.05 after you download the DEOBF you can go through the assets directory and review the data pack from base game.
    // Aiming allows the player to fire the ability out of their hand. Like pyrokinesis.
    hero.addKeyBind("AIM", "key.aim", 1);
    hero.addKeyBind("SHAPE_SHIFT_RESET", "key.shapeShiftReset", 2);
    hero.addKeyBind("INTANGIBILITY", "key.intangibility", 3);
    hero.addKeyBind("INVISIBILITY", "key.invisibility", 4);
    hero.addKeyBind("HEAT_VISION", "key.heatVision", 5);
    // While these keybinds aren't practical, it's just an example of using keybinds from other heroes. Batman and MM Comics were used to get the order of these keybinds.
    // Now when it comes to fiskheroes, there's a bunch of customization available. These come in functions, permissions, scale, masks, etc.
    // Stan Lee doesn't have a mask, but we're going to allow the player to take off his hair. For...
    hero.setOnToggleMask(toggleHair);
    // We're going to create a function called "toggleHair" this can have essentially anyname as long as it's JS valid.
    // We can also allow for properties of Stan Lee, this allows the user to not drown, breath in space (QR), and toggle mask.
    hero.setHasProperty(godTier);
    // This function is also nameable however you'd like. Since he's god tier, we're going to name it god tier. :P
    // Heroes also have supplied functions available, these functions allow you to set the max sizes your suit can grow, how fast, and other values. We'll use the supplied functions for Fisk's Atom here.
    // There's technically no limit on these sizes, however, it'll become quite unplayable lower than 0.0625.
    hero.supplyFunction("getMinSize", 0.0500);
    hero.supplyFunction("getMaxSize", 5.0);
    // If you'd like the holding down growth/shrink like atomsmasher set this to false.
    hero.supplyFunction("isInstant", true);
    // This function will allow the player to use the aim keybind under your conditions.
    hero.supplyFunction("canAim", canAim);
    // You can also set the scale of Stan Lee, he's 5 foot 11, so we'll set his height a little taller than steve. Usually you wouldn't use height for something this small, but for tutorial purposes we're going to set it just a smidge higher.
    hero.setDefaultScale(1.025);
    // Lastly, you'll want to set the permissions for the suit. This is really for suits that have equipment you want to allow the usage of like Batman. Again, this function can be named what you'd like.
    hero.setHasPermission(hasPermission);
}

// Due to him being amazing, we're going to give Stan Lee all the permissions we can. Our pack has two custom permissions "USE_GUNS" and "USE_MAGIC" which allow the user to use those respective items with their suits.

function hasPermission(entity, permission) {
    return permission == "USE_GRAPPLING_GUN" || permission == "USE_GUNS" || permission == "USE_MAGIC" || permission == "THROW_SHIELD" || permission == "USE_SHIELD" || permission == "USE_COLD_GUN" || permission == "USE_HEAT_GUN" || permission == "USE_RIPS_GUN" || permission == "USE_CHRONOS_RIFLE";
}

// This is a more complex example of a function, however, you could essentially return the values you want true.
function godTier(entity, property) {
    switch (property) {
    // This will allow the user to toggle their mask, or in our case "hair"
    case "MASK_TOGGLE":
        return true;
    // This is a simple boolean checking if the user's mask is open, if not it'll allow them to breath underwater.
    case "BREATHE_UNDERWATER":
        return entity.getData("fiskheroes:mask_open");
    // Same thing as breathing underwater, but it'll check for space (QR)
    case "BREATHE_SPACE":
        return entity.getData("fiskheroes:mask_open");
    default:
        return false;
    }
}

// This is a simple function called when the player switches their mask on and off using the keybind. You can change the sounds, what it does during states, essentially anything you'd like.
function toggleHair(entity, state) {
    if (state) {
        entity.playSound("fiskheroes:random.fire.off", 1.0, 1.0);
    }
    else {
        entity.playSound("fiskheroes:random.fire.on", 1.0, 1.0);
    }
}

// Player can aim if their hand is empty
function canAim(entity) {
    return entity.getHeldItem().isEmpty();
}
```
For more documentation on this, and useful methods you can refer to the methods Fisk created here https://docs.google.com/document/d/1SV4r6HRG3iRClVJbk88_LmoTwWsM11yu-0BJHChkCzI/edit#

Now, if you use that exact class you'll have one untextured masterpiece of Stan Lee, continue through the tutorial to figure out how to texture and apply the models to him.
### Creating Hero Textures
Hero textures come in a few forms. First, you need to find a proper skin to use. The general requirements is that it supports 1.8.9+ Layer models. (64x64 file) For our model textures we're going to use the skin made by Jaxman on PMC. https://www.planetminecraft.com/skin/stan-lee-4297176/ He makes most of our skins and is very talented.

Whenever you're adding a skin to your pack. Make sure you have permission! If you don't you're essentially stealing and reuploading work by someone else.

You're going to want to save this file to /assets/"YourPackName"/textures/heroes/stan_lee_layer1.png
Every skin has two parts to it, when you download it you'll get it one. However, you need to open it up into paint.net and separate it. First, you're going to assign the Chestplate and Helmet model textures, so open the file you just downloaded and create a new png that's also the size of 64x64, this will serve as your leggings and boots. Now, you're going to want to extract the 48x16 on the left side 16 pixels down, and then paste that onto your second image file. Next, you're going to extract 16x16 on the bottom of the file 16 pixels right of where you just copied.

Here's an image to help you. https://i.imgur.com/zTmmv04.png

https://i.imgur.com/wUs0Hvd.png - Starting image

Now that you have two images they should look like this:

https://i.imgur.com/CDF3QQF.png - stan_lee_layer1.png

https://i.imgur.com/frqx29u.png - stan_lee_layer2.png

Save the first one as stan_lee_layer1.png and the second to stan_lee_layer2.png
(Or your hero name_layer1&2)

Now you're going to create the item textures. These are important as they're the actual items the player holds in-game. They don't need a ton of texture, but they have to have some complexity to them.

All of these textures will be saved to /assets/"YourPackName"/textures/items/your_hero_item_textures.png

Helmet Texturing

For helmets, you can usually just take the head texture from the skin directory. Or, you could make your own like this one.

https://i.imgur.com/9oZFcb9.png - stan_lee_0.png

Chestplate Texturing

For chestplates, you can follow the base images made by Fisk for chestplates.

https://i.imgur.com/UEFS0CA.png - Template Normal

https://i.imgur.com/ewPYWZs.png - Template Bulky

https://i.imgur.com/WqbAtXK.png - Template Female

https://i.imgur.com/yM1shmg.png - stan_lee_1.png

Usually, it's best to have the skin on on standby for using it for texturing. Also, before saving add some noise for extra texturing.

Leggings Texturing

https://i.imgur.com/FMUGHsj.png - Template Normal

https://i.imgur.com/mtMZInd.png - stan_lee_2.png

Boots Texturing

https://i.imgur.com/Ow5tHtO.png - stan_lee_3.png
### Creating Models
Hero models are very important, but they can be very simple to add, and they can be one of the most annoying things to add. Some suits need extra things like capes, masks, and more which can clutter up your model class. An example of a basic hero model with no special features is here:

basic.json
```markdown
{
  "parent": "fiskheroes:hero_basic",
  "resources": {
    "layer1": "pack:basic_layer1",
    "layer2": "pack:basic_layer"
  }
}
```
### Creating Suit Alts
Suit alts are easy to add, but they take time due to having to make all the separate textures for them. However, they're rewarding in the end.

Declaring the altid and name in your heropack.json
```markdown
{
  "name": "Stan Lee Adventure Pack",
  "alts": {
    // I usually use "pack" as my pack id as it's easy to remember and simple.
    "pack:stan_lee": {
      "classic": {
        "name": "Classic"
      }
    }
  }
}
```
For this tutorial section we're going to use another Stan Lee skin made by Kill3rCreeper this time. https://www.planetminecraft.com/skin/stan-lee-3154027/

We'll call this version "classic" this id will be used for our textures and models.
