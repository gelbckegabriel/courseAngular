import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";

@Component ({
    selector: 'app-star', // selector torna possível de fazer uma tag - <app-star</app-star>
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})

export class StarComponent implements OnChanges {

    @Input() // "@Input" torna possível receber informação.
    rating: number = 0;

    starWidth!: number;

    ngOnChanges(): void {
        this.starWidth = this.rating * 74 / 5; 
    }

}