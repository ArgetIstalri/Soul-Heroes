function init(hero) {
    hero.setName("hero.fiskheroes.ant_man.name");
    hero.setVersion("Scott Lang");
    hero.setTier(2);
    hero.setHelmet("item.superhero_armor.piece.helmet");
    hero.setChestplate("item.superhero_armor.piece.chestpiece");
    hero.setLeggings("item.superhero_armor.piece.pants");
    hero.setBoots("item.superhero_armor.piece.boots");
    hero.addAbilities("fiskheroes:size_manipulation");
    hero.addAttribute("JUMP_HEIGHT", 0.75, 0);
    hero.addAttribute("FALL_RESISTANCE", 4.0, 0);
    hero.addAttribute("PUNCH_DAMAGE", 3.5, 0);
    hero.addKeyBind("SHRINK", "key.shrink", 1);
    hero.addKeyBind("GROW", "key.grow", 2);
    hero.setHasProperty(hasProperty);
    hero.supplyFunction("getMinSize", 0.0325);
    hero.supplyFunction("getMaxSize", 1.0);
    hero.supplyFunction("isInstant", true);
}

function hasProperty(entity, property) {
    return property == "BREATHE_SPACE";
}
