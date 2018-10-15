import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {StorageService} from "./storage.service";
import {GenericService} from "./generic.service";
import {Config} from "../config";
import {Product} from "../models/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService extends GenericService {

  constructor(private http: HttpClient, private storageService: StorageService) {
    super();
  }

  /* POST Dans l'ajout d'un objet */
  addProduct(product: Product) {
    return this.http.post(Config.baseUrl + "/product/add", product);
  }


}
