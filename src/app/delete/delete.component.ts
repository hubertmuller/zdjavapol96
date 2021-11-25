import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { ListaService } from '../lista.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {
  public deleted = false;
  public deletedId = 0;

  constructor(
    private listaService: ListaService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe(
      (params) => {
        this.deletedId = params['id'];
        this.listaService.deleteCzlowiek(this.deletedId).subscribe( (_) => {
            this.deleted = true;
        });
      }
    )
    
  }

  ngOnInit(): void {
  }

}
