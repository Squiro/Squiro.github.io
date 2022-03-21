import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { BaseComponent } from 'src/app/shared/components/base-component/base.component';


@Component({
    selector: 'app-games',
    templateUrl: './games.component.html',
    styleUrls: ['./games.component.scss']
})
export class GamesComponent extends BaseComponent {
    hide: boolean;
    constructor(store: Store) { 
        super(store);         
        this.hide = true;
        this.addComponentString(
            [ 
                `I've made some games! They aren't the greatest things on Earth, but I'm proud of them anyways.`,
                `=== Duel of Wands ===`,
                'Do you like Harry Potter? Do you like First Person Shooters like Counter-Strike? Ever wonder how a combination of these two ideas would be?',
                `Wonder no more. Duel of Wands it's exactly that.`,
                `Duel of Wands is a 3D FPS game made in Unity, with online multiplayer support! Instead of shooting bullets, you shoot... spells! And the spells have on-hit effects`,
                `such as paralysis, fire damage, and so on.`,
                `It was a fun project to make. The most challenging part was implementing the online multiplayer functionality, specially key things such as client side prediction and interpolation.`,
                `I won't show you the repo (because there isn't one and I don't want to share it), but here's a cool image from an unfinished version of the game!`,
                ':)',
                `=== Guerras de Nieve ===`,
                `Guerras de Nieve is a 2D arcade game with """local multiplayer""" (as in, two players playing on the same computer with shared input).`,
                `Two players fight eachother by throwing snowballs. The game features Power Ups, life items, and different maps with unique characteristics.`,
                `It was made with Javascript and the Phaser framework.`,
                `=== Bomberman ===`,
                `A recreation of the classic Bomberman with online multiplayer support up to four players.`,
                `The game was made in Java from scratch.`,
                `Check the repo here: `,
                `https://github.com/emmettbrown-unlam/Bomberman`
            ])
    }    

    checkLength(): boolean
    {
        if (this.componentStrings[9].display.length == this.componentStrings[9].content.length)
        {
            this.hide = false;
            return true;
        }
        return false;
    }
}
