/* tslint:disable */
/* eslint-disable */
/**
 * Django Recipes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface RecipeKeywordsInner
 */
export interface RecipeKeywordsInner {
    /**
     * 
     * @type {number}
     * @memberof RecipeKeywordsInner
     */
    readonly id?: number;
    /**
     * 
     * @type {string}
     * @memberof RecipeKeywordsInner
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof RecipeKeywordsInner
     */
    readonly label?: string;
    /**
     * 
     * @type {string}
     * @memberof RecipeKeywordsInner
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof RecipeKeywordsInner
     */
    readonly parent?: string;
    /**
     * 
     * @type {number}
     * @memberof RecipeKeywordsInner
     */
    readonly numchild?: number;
    /**
     * 
     * @type {Date}
     * @memberof RecipeKeywordsInner
     */
    readonly createdAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof RecipeKeywordsInner
     */
    readonly updatedAt?: Date;
    /**
     * 
     * @type {string}
     * @memberof RecipeKeywordsInner
     */
    readonly fullName?: string;
}

/**
 * Check if a given object implements the RecipeKeywordsInner interface.
 */
export function instanceOfRecipeKeywordsInner(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;

    return isInstance;
}

export function RecipeKeywordsInnerFromJSON(json: any): RecipeKeywordsInner {
    return RecipeKeywordsInnerFromJSONTyped(json, false);
}

export function RecipeKeywordsInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): RecipeKeywordsInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': json['name'],
        'label': !exists(json, 'label') ? undefined : json['label'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'parent': !exists(json, 'parent') ? undefined : json['parent'],
        'numchild': !exists(json, 'numchild') ? undefined : json['numchild'],
        'createdAt': !exists(json, 'created_at') ? undefined : (new Date(json['created_at'])),
        'updatedAt': !exists(json, 'updated_at') ? undefined : (new Date(json['updated_at'])),
        'fullName': !exists(json, 'full_name') ? undefined : json['full_name'],
    };
}

export function RecipeKeywordsInnerToJSON(value?: RecipeKeywordsInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'description': value.description,
    };
}

