import { Inject, Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
})

export class Hero {
    renderHero(heroHealth: number, heroAttackDamage: number, resourceDistance: number) {
        return [heroHealth, heroAttackDamage, resourceDistance];
    }
    
}