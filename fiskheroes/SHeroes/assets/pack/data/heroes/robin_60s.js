function init(hero) {
    hero.setName("Robin");
    hero.setVersion("60's Series");
    hero.setTier(3);
    hero.setHelmet("item.superhero_armor.piece.mask");
    hero.setChestplate("item.superhero_armor.piece.chestpiece");
    hero.setLeggings("item.superhero_armor.piece.leggings");
    hero.setBoots("item.superhero_armor.piece.boots");
    hero.addEquipment("fiskheroes:grappling_gun");
    hero.addAbilities("fiskheroes:utility_belt");
    hero.addAttribute("ATTACK_DAMAGE", 0.50, 1);
    hero.addAttribute("FALL_RESISTANCE", 3.0, 0);
    hero.addAttribute("JUMP_HEIGHT", 1.55, 0);
    hero.addAttribute("PUNCH_DAMAGE", 3.0, 0);
    hero.addAttribute("SPRINT_SPEED", 0.35, 1);
    hero.addKeyBind("UTILITY_SWITCH", "key.utilitySwitch", 1);
    hero.addKeyBind("UTILITY_RESET", "key.utilityReset", 2);
    hero.setHasProperty(hasProperty);
    hero.setDefaultScale(1.0);
    hero.setHasPermission(hasPermission);
}

function hasPermission(entity, permission) {
    return permission == "USE_GRAPPLING_GUN";
}
