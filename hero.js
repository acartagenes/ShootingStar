class StarSHip {
    constructor(){
        this.name = 'ShootingStar';
        this.ship = 'Spaceship';
        this.goal = 'Protect the Galaxy from Evil Aliens';
        this.friends = [FlyingStars, CommandShip, BlueSpaceShips ];
        this.seeking = 'Space Treasure and Other Planets';
        this.fuel = 'Starpower';
        this.weapon = 'LaserCanons';
        this.specialWeapon = 'StarBlaster'
        this.enemy = 'Alien Space Ships';
        this.x = 'move spaceship Left or Right'
        this.y = 'move spaceship Up or Down'
    }

    move() {
        this.x += random(-this.speed, this.speed);
        this.y += random(-this.speed, this.speed);
        }
        
    Spin(){
        if(gainstarpower) {
            say (Recharge);
        } else {
            say (loseHealth);
        }
        //feel sad when not gain Heart --> face turns blue
    }

    Heal(){
        //Heals when spaceship flyes through Star power
    }

    attack(enemy){
        if (enemy)
        Fire Weapon = weapon; 
        if (enemy to strong)
        Fire Special Weapon 
    }

    Fireboost(){
        //Has a boost of Nitrious when needing to speed up
    }
    Move(){
        //Can move spaceship around
    }
    seekHeart(){
        //she needs to seek enough heart to find her dream boy
    }
}

