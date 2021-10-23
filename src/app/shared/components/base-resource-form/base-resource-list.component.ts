import { BaseResourceModel } from 'src/app/shared/models/base-resource.model';
import { BaseResourceService } from 'src/app/shared/services/base-resource.service';
import { Component, Injector, OnInit } from '@angular/core';

export abstract class BaseResourceListComponent<T extends BaseResourceModel> implements OnInit {
  constructor(injector: Injector, protected resourceService: BaseResourceService<T>) {}
  resources: T[];

  ngOnInit() {
    this.resourceService.getAll().subscribe(
      resources => (this.resources = resources),
      () => alert('Erro ao carregar recurso'),
    );
  }

  deleteResource(resource) {
    const mustDelete = confirm('Deseja realmente excluir esse item:');

    if (mustDelete) {
      this.resourceService.delete(resource.id).subscribe(
        () => (this.resources = this.resources.filter(element => element != resource)),
        () => alert('Erro ao tentar excluir'),
      );
    }
  }
}
