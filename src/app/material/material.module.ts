import { NgModule } from "@angular/core";
import {
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatDividerModule,
    MatExpansionModule
} from "@angular/material";


@NgModule({
  declarations: [],
  imports: [
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatDividerModule,
    MatExpansionModule
  ],
  exports: [
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatDividerModule,
    MatExpansionModule
  ]
})
export class MaterialModule {}
