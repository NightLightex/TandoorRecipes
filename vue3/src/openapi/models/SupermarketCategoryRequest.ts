/* tslint:disable */
/* eslint-disable */
/**
 * Tandoor
 * Tandoor API Docs
 *
 * The version of the OpenAPI document: 0.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * Moves `UniqueValidator`'s from the validation stage to the save stage.
 * It solves the problem with nested validation for unique fields on update.
 * 
 * If you want more details, you can read related issues and articles:
 * https://github.com/beda-software/drf-writable-nested/issues/1
 * http://www.django-rest-framework.org/api-guide/validators/#updating-nested-serializers
 * 
 * Example of usage:
 * ```
 *     class Child(models.Model):
 *     field = models.CharField(unique=True)
 * 
 * 
 * class Parent(models.Model):
 *     child = models.ForeignKey('Child')
 * 
 * 
 * class ChildSerializer(UniqueFieldsMixin, serializers.ModelSerializer):
 *     class Meta:
 *         model = Child
 * 
 * 
 * class ParentSerializer(NestedUpdateMixin, serializers.ModelSerializer):
 *     child = ChildSerializer()
 * 
 *     class Meta:
 *         model = Parent
 * ```
 * 
 * Note: `UniqueFieldsMixin` must be applied only on the serializer
 * which has unique fields.
 * 
 * Note: When you are using both mixins
 * (`UniqueFieldsMixin` and `NestedCreateMixin` or `NestedUpdateMixin`)
 * you should put `UniqueFieldsMixin` ahead.
 * @export
 * @interface SupermarketCategoryRequest
 */
export interface SupermarketCategoryRequest {
    /**
     * 
     * @type {string}
     * @memberof SupermarketCategoryRequest
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof SupermarketCategoryRequest
     */
    description?: string;
    /**
     * 
     * @type {number}
     * @memberof SupermarketCategoryRequest
     */
    id?: number;
}

/**
 * Check if a given object implements the SupermarketCategoryRequest interface.
 */
export function instanceOfSupermarketCategoryRequest(value: object): boolean {
    if (!('name' in value)) return false;
    return true;
}

export function SupermarketCategoryRequestFromJSON(json: any): SupermarketCategoryRequest {
    return SupermarketCategoryRequestFromJSONTyped(json, false);
}

export function SupermarketCategoryRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): SupermarketCategoryRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'],
        'description': json['description'] == null ? undefined : json['description'],
        'id': json['id'] == null ? undefined : json['id'],
    };
}

export function SupermarketCategoryRequestToJSON(value?: SupermarketCategoryRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'name': value['name'],
        'description': value['description'],
        'id': value['id'],
    };
}

