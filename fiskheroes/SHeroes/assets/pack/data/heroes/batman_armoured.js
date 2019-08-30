function init(hero) {
    hero.setName("Batman");
    hero.setVersion("Armoured");
    hero.setTier(5);
    hero.setHelmet("item.superhero_armor.piece.cowl");
    hero.setChestplate("item.superhero_armor.piece.chestpiece");
    hero.setLeggings("item.superhero_armor.piece.leggings");
    hero.setBoots("item.superhero_armor.piece.boots");
    hero.addEquipment("fiskheroes:grappling_gun");
    hero.addAbilities("fiskheroes:utility_belt", "fiskheroes:enhanced_reflexes");
    hero.addAttribute("ATTACK_DAMAGE", 0.85, 1);
    hero.addAttribute("FALL_RESISTANCE", 4.5, 0);
    hero.addAttribute("JUMP_HEIGHT", 1.25, 0);
    hero.addAttribute("PUNCH_DAMAGE", 6.5, 0);
    hero.addAttribute("SPRINT_SPEED", 0.1, 1);
    hero.addKeyBind("UTILITY_SWITCH", "key.utilitySwitch", 1);
    hero.addKeyBind("UTILITY_RESET", "key.utilityReset", 2);
    hero.setHasProperty(hasProperty);
    hero.setDefaultScale(1.45);
    hero.setHasPermission(hasPermission);
}

function hasPermission(entity, permission) {
    return permission == "USE_GRAPPLING_GUN";
}
