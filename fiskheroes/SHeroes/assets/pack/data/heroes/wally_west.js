function init(hero) {
    hero.setName("Wally West");
	hero.setVersion("The Flash");
    hero.setTier(4);

    hero.setHelmet("Mask");
    hero.setChestplate("Chestpiece");
    hero.setLeggings("Pants");
    hero.setBoots("Boots");
    hero.addEquipment("fiskheroes:flash_ring");

    hero.addAbilities("fiskheroes:super_speed", "fiskheroes:electrokinesis", "fiskheroes:enhanced_reflexes", "fiskheroes:cellular_regeneration", "fiskheroes:accelerated_perception");
    hero.addAttribute("ATTACK_DAMAGE", 0.15, 1);
    hero.addAttribute("BASE_SPEED_LEVELS", 6.0, 0);
    hero.addAttribute("FALL_RESISTANCE", 6.0, 0);
    hero.addAttribute("JUMP_HEIGHT", 1.0, 0);
    hero.addAttribute("PUNCH_DAMAGE", 2.5, 0);

    hero.addKeyBind("SUPER_SPEED", "key.superSpeed", 1);
    hero.addKeyBind("SLOW_MOTION", "key.slowMotion", 2);
    hero.addKeyBind("DECELERATE", "key.decelerate", 3);
    hero.addKeyBind("ACCELERATE", "key.accelerate", 4);
}
