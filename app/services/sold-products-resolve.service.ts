import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve } from "@angular/router";
import { Observable } from "rxjs/Observable"

import { Product } from "../models/product";
import { ProductService } from "../services/product.service";
import { ProductFilter } from "../models/product-filter";

@Injectable()
export class SoldProductsResolve implements Resolve<Product[]>{

    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|
    | Yellow Path                                                      |
    |~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|
    | Aquí toca hacer varias cosas:                                    |
    |                                                                  |
    | 1. Debemos hacer que SoldProductsResolve resuelva datos durante  |
    |    la naveación de la ruta '/reset', por tanto, haz lo que creas |
    |    oportuno para ello. Como pista te diré: Resolve<T>.           |
    |                                                                  |
    | 2. Debemos resolver la colección de productos vendidos. Toca ir  |
    |    a servidor a través de ProductService, que tendrás que        |
    |    inyectar como dependencia. Además, debes crear un nuevo       |
    |    ProductFilter que contemple el filtro a aplicar en servidor.  |
    |    Fíjate en qué se diferencia un producto a la venta de uno     |
    |    ya vendido; quizá te ayude con este punto.                    |
    |~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

    constructor(private _productService: ProductService) { }

    private _productFilter: ProductFilter = { state: "sold"};


    resolve(ruta: ActivatedRouteSnapshot ): Observable<Product[]>{
        return this._productService.getProducts(this._productFilter);
    }

}
