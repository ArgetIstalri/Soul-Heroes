function init(hero) {
    hero.setName("Red Hood");
    hero.setTier(4);
    hero.setHelmet("item.superhero_armor.piece.head");
    hero.setChestplate("item.superhero_armor.piece.chestpiece");
    hero.setLeggings("item.superhero_armor.piece.leggings");
    hero.setBoots("item.superhero_armor.piece.boots");
    hero.addAbilities("fiskheroes:healing_factor", "fiskheroes:enhanced_reflexes", "fiskheroes:superhuman_durability");
    hero.addAttribute("ATTACK_DAMAGE", 0.45, 1);
    hero.addAttribute("FALL_RESISTANCE", 6.0, 0);
    hero.addAttribute("JUMP_HEIGHT", 0.75, 0);
    hero.addAttribute("PUNCH_DAMAGE", 2.0, 0);
    hero.addAttribute("SPRINT_SPEED", 0.5, 1);
    hero.addAttribute("SWORD_DAMAGE", 2.5, 1);
    hero.setDefaultScale(1.0);
    hero.setHasPermission(hasPermission);
}
function hasPermission(entity, permission) {
    return permission == "USE_GUNS";
}