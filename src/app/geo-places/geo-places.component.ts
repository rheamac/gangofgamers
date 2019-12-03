import { Component, OnInit, Input, Output, ViewChild, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-geo-places',
  template: `
  <input class="input"
    type="text"
    [(ngModel)]="autocompleteInput"
    #addresstext style="padding: 12px 20px; border: 1px solid #ccc; width: 400px"
    >
`,
  styleUrls: ['./geo-places.component.css']
})
export class GeoPlacesComponent implements OnInit {

  @Input() adressType: string;
    @Output() setAddress: EventEmitter<any> = new EventEmitter();
    @ViewChild('addresstext', {static: false}) addresstext: any;

    autocompleteInput: string;
    queryWait: boolean;

    constructor() {
    }

    ngOnInit() {
    }

    ngAfterViewInit() {
        this.getPlaceAutocomplete();
    }

    private getPlaceAutocomplete() {
        const autocomplete = new google.maps.places.Autocomplete(this.addresstext.nativeElement,
            {
                componentRestrictions: { country: 'US' },
                types: [this.adressType]  // 'establishment' / 'address' / 'geocode'
            });
        google.maps.event.addListener(autocomplete, 'place_changed', () => {
            const place = autocomplete.getPlace();
            this.invokeEvent(place);
        });
    }

    invokeEvent(place: Object) {
        this.setAddress.emit(place);
    }

}
