import { NgModule } from '@angular/core';
import { PlaceholderPipe } from './placeholder/placeholder';
import { ListaPipe } from './lista/lista';
@NgModule({
	declarations: [PlaceholderPipe,
    ListaPipe],
	imports: [],
	exports: [PlaceholderPipe,
    ListaPipe]
})
export class PipesModule {}
