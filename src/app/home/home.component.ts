import { Component } from '@angular/core';
import { CarouselComponent } from "../carousel/carousel.component";
import { FaqComponent } from "../faq/faq.component";
import { AboutUsComponent } from "../about-us/about-us.component";

@Component({
  selector: 'app-home',
  imports: [CarouselComponent, FaqComponent, AboutUsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
