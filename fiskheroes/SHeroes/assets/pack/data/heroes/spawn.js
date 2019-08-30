function init(hero) {
    hero.setName("Spawn");
	  hero.setVersion("Image");
    hero.setTier(5);
    hero.setHelmet("item.superhero_armor.piece.head");
    hero.setChestplate("item.superhero_armor.piece.chestpiece");
    hero.setLeggings("item.superhero_armor.piece.leggings");
    hero.setBoots("item.superhero_armor.piece.boots");
    hero.addAbilities("fiskheroes:pyrokinesis", "fiskheroes:accelerated_perception", "fiskheroes:intangibility", "fiskheroes:healing_factor", "fiskheroes:enhanced_reflexes", "fiskheroes:flight", "fiskheroes:superhuman_durability", "fiskheroes:fire_immunity");
    hero.addAttribute("ATTACK_DAMAGE", 0.65, 1);
    hero.addAttribute("FALL_RESISTANCE", 8.0, 0);
    hero.addAttribute("JUMP_HEIGHT", 1.5, 0);
    hero.addAttribute("PUNCH_DAMAGE", 6.0, 0);
    hero.addAttribute("SPRINT_SPEED", 0.75, 1);
    hero.addAttribute("SWORD_DAMAGE", -2.5, 1);
    hero.setHasProperty(hasProperty);
    hero.setDefaultScale(1.15);
    hero.addKeyBind("AIM", "key.shoot", 1);
    hero.addKeyBind("SLOW_MOTION", "key.slowMotion", 2);
    hero.addKeyBind("INTANGIBILITY", "key.intangibility", 3);
    hero.supplyFunction("canAim", canAim);
    hero.setHasPermission(hasPermission);
}

function hasProperty(entity, property) {
    switch (property) {
    case "MASK_TOGGLE":
        return false;
    case "BREATHE_UNDERWATER":
        return false;
    case "BREATHE_SPACE":
        return true;
    default:
        return false;
    }
}

function hasPermission(entity, permission) {
    return permission == "USE_GUNS" || permission == "USE_MAGIC";
}

function canAim(entity) {
    return entity.getHeldItem().isEmpty();
}
